import { NgModule } from '@angular/core';
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
import { CreditsComponent } from './credits/credits.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RoomComponent,
    PageNotFoundComponent,
    UserFormComponent,
    ConfirmDialogComponent,
    ReplacePipe,
    CreditsComponent,
    EmployeeInfoComponent,
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
    MatIconModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UserIdInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule {}
