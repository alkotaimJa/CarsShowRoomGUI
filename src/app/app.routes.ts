import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './module/home/home.component';
import { ShowroomComponent } from './module/showroom/showroom.component';
import { ShowroomManagementComponent } from './module/showroom-management/showroom-management.component';
import { NotFoundComponent } from './module/not-found/not-found.component';
import { CarManagmentComponent } from './module/car-managment/car-managment.component';

export const routes: Routes = [  // Add 'export' here
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'showroom', component: ShowroomComponent },
    { path: 'showroom/:id', component: ShowroomComponent },
    { path: 'showroom-management', component: ShowroomManagementComponent },
    { path: 'cars/:showroomId/:showroomNumber', component: CarManagmentComponent },
    { path: '**', component: NotFoundComponent },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 export class AppRoutingModule {}


