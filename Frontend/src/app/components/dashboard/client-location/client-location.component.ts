import { Component } from '@angular/core';

@Component({
  selector: 'app-client-location',
  templateUrl: './client-location.component.html',
  styleUrls: ['./client-location.component.scss'],
})
export class ClientLocationComponent {
  newClass: boolean = false;

  alterClass() {
    this.newClass = !this.newClass;
  }

  newClassTell: boolean = false;

  alterClassTell() {
    this.newClassTell = !this.newClassTell;
  }
}
