import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RoomComponent } from './room/room.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreditsComponent } from './credits/credits.component';

const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'room/:roomId',component:RoomComponent},
  {path:"about", component:CreditsComponent},
  {path:'**',pathMatch:'full',component:PageNotFoundComponent},
  {path:"oops",pathMatch:'full',component:PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
