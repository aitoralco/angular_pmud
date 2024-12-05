import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseingLocationComponent } from '../houseing-location/houseing-location.component';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HouseingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',]
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocation: Housinglocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
