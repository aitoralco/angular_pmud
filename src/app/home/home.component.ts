import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseingLocationComponent } from '../houseing-location/houseing-location.component';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HouseingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',]
})
export class HomeComponent {
  housingLocationList: Housinglocation[] = [];

  housingService: HousingService = inject(HousingService);

  filteredLocationList: Housinglocation[] = [];

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  filteredResults(text: string) {
    if (!text) {
      this.filteredLocationList = 
        this.housingLocationList;
    return;
    }
    
    this.filteredLocationList = 
      this.housingLocationList
        .filter((housingLocation) => 
      housingLocation?.city
        .toLowerCase()
        .includes(text.toLowerCase()),
  );
  }
  
}
