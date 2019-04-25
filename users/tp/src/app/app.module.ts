import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlUsersTableComponent } from './al-users-table/al-users-table.component';
import { AlUsersFormComponent } from './al-users-form/al-users-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserCommunication } from './UserCommunication';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AlUsersTableComponent,
    AlUsersFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserCommunication],
  bootstrap: [AppComponent]
})
export class AppModule { }
