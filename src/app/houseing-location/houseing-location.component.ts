import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [CommonModule, RouterModule],
  templateUrl: './houseing-location.component.html',
  styleUrl: './houseing-location.component.css'
})
  export class HouseingLocationComponent {
    @Input() housingLocation!: Housinglocation;
  }
