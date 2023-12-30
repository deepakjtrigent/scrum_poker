import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { filter } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[{provide: APP_BASE_HREF, useValue: ''}]
})
export class AppComponent implements OnInit {
  title: string = 'scrumPoker';
  public currentRoute : string = ''

  constructor(@Inject(APP_BASE_HREF)public baseHref: string, private router: Router, private route: ActivatedRoute){
  }

  public ngOnInit(): void {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: any) => {
      this.currentRoute = event.url
    });
   }

  public navigateToAbout() : void{
    const route = `${this.baseHref}/about`;
    window.open(route, '_blank');

  }
}
