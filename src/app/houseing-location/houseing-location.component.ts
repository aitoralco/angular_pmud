import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  imports: [CommonModule],
  templateUrl: './houseing-location.component.html',
  styleUrl: './houseing-location.component.css'
})
export class HouseingLocationComponent {
  @Input() housingLocation!: Housinglocation;
}
