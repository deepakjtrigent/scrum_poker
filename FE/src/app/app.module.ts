import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { RoomComponent } from './room/room.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserIdInterceptor } from './user-id.interceptor';
import { UserFormComponent } from './user-form/user-form.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ReplacePipe } from './shared/replace.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RoomComponent,
    PageNotFoundComponent,
    UserFormComponent,
    ConfirmDialogComponent,
    ReplacePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UserIdInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule {}
