import { Component,OnInit,ApplicationRef } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = 'scrumPoker';

  constructor(private swUpdate:SwUpdate, private appRef :ApplicationRef){
    // this.checkUpdate();
    this.swUpdate.available.subscribe((event)=>{
      this.swUpdate.activateUpdate().then(()=>document.location.reload());
    });
  }

  
ngOnInit(): void {
  // if (!this.swUpdate.isEnabled){
  //   console.log("Not enabled");     
  //   return; 
  // }
  // this.swUpdate.available.subscribe((event)=>{
  //   console.log("current",event.current,"Avail:",event.available);
  //   if (confirm("There are updates!")){
  //     this.swUpdate.activateUpdate().then(()=>location.reload());
  //   }
  // });
  // this.swUpdate.activated.subscribe((event)=>{
  //   console.log("current:",event.previous,"Avail:",event.current);
  // })
}

// checkUpdate(){
//   this.appRef.isStable.subscribe((isStable)=>{
//     if (isStable){
//       const timeInterval = interval(8*60*1000);

//       timeInterval.subscribe(()=>{
//         // this.swUpdate.checkForUpdate().then(()=>console.log("Checked"))
//       })
//     }
//   })
// }

}
