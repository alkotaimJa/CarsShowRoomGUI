import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component'; // Main app component
import { HomeComponent } from './module/home/home.component'; // Adjust if necessary
import { ShowroomComponent } from './module/showroom/showroom.component'; // Adjust if necessary
import { ShowroomManagementComponent } from './module/showroom-management/showroom-management.component'; // Adjust if necessary

@NgModule({
  declarations: [
    // AppComponent, 
    // HomeComponent,
    // ShowroomComponent,
    // ShowroomManagementComponent
  ],
  imports: [
    // BrowserModule,
    // HttpClientModule, 
    // AppRoutingModule,
    // RouterModule
  ],
  providers: [],
  bootstrap: [
    //  AppComponent
  ] 
})
export class AppModule { }
