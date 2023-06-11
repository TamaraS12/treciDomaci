import { Component, OnInit } from '@angular/core';
import { Accommodation } from 'src/app/model/accommodation';
import { AccommodationService } from 'src/app/services/accommodation.service';

@Component({
  selector: 'app-accommodations',
  templateUrl: './accommodations.component.html',
  styleUrls: ['./accommodations.component.scss']
})
export class AccommodationsComponent implements OnInit {
  accommodations: Accommodation[] = [];

  constructor(private accommodationService: AccommodationService) {

  }

  ngOnInit(): void {
    this.accommodations = this.accommodationService.accommodations;
  }

}
