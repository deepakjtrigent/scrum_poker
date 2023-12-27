import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RoomComponent } from './room/room.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'room/:roomId',
    component: RoomComponent,
    data: {
      title: 'Room',
      description: 'Description for URL 1',
      image:
        'https://www.atlassian.com/blog/wp-content/uploads/2021/09/migpod-443_agile-poker_blog-hero_email_540x256@2x.jpg',
      url: 'https://angularscrumpoker.web.app/room/',
    },
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent,
    data: {
      title: 'Oops',
      description: 'Description for URL 2',
      image:
        'https://www.shutterstock.com/shutterstock/photos/2232864661/display_1500/stock-vector-oops-speech-bubble-ops-text-hand-drawn-quote-oops-icon-lettering-doodle-phrase-vector-2232864661.jpg',
      url: 'https://angularscrumpoker.web.app/oops',
    },
  },
  {
    path: 'oops',
    pathMatch: 'full',
    component: PageNotFoundComponent,
    data: {
      title: 'Oops',
      description: 'Description for URL 2',
      image:
        'https://www.shutterstock.com/shutterstock/photos/2232864661/display_1500/stock-vector-oops-speech-bubble-ops-text-hand-drawn-quote-oops-icon-lettering-doodle-phrase-vector-2232864661.jpg',
      url: 'https://angularscrumpoker.web.app/oops',
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
