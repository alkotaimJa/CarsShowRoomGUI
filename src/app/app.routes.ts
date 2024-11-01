import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './module/home/home.component';
import { ShowroomComponent } from './module/showroom/showroom.component';
import { ShowroomManagementComponent } from './module/showroom-management/showroom-management.component';

export const routes: Routes = [  // Add 'export' here
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'showroom', component: ShowroomComponent },
    { path: 'showroom-management', component: ShowroomManagementComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


