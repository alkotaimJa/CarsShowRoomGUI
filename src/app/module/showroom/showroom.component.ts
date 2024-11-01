import { Component } from '@angular/core';

interface Showroom {
  id: number;
  name: string;
  location: string;
  contact: string;
}

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.css']
})
export class ShowroomComponent {
  showrooms: Showroom[] = [];
  showroom: Showroom = { id: 0, name: '', location: '', contact: '' };

  onSubmit() {
    const newShowroom: Showroom = { ...this.showroom, id: Date.now() };
    this.showrooms.push(newShowroom);
    this.showroom = { id: 0, name: '', location: '', contact: '' }; // Reset the form
  }

  deleteShowroom(id: number) {
    this.showrooms = this.showrooms.filter(showroom => showroom.id !== id);
  }

  editShowroom(showroom: Showroom) {
    this.showroom = { ...showroom }; // Load the selected showroom into the form
  }
}
