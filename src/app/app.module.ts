import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes'; // Ensure this path is correct
import { AppComponent } from './app.component'; // Main app component
import { HomeComponent } from './module/home/home.component'; // Adjust if necessary
import { ShowroomComponent } from './module/showroom/showroom.component'; // Adjust if necessary
import { ShowroomManagementComponent } from './module/showroom-management/showroom-management.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    ShowroomComponent,
    ShowroomManagementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [
     AppComponent
  ] 
})
export class AppModule { }

