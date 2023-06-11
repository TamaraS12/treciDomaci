import { Injectable } from '@angular/core';
import { Accommodation } from '../model/accommodation';

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  accommodations: Accommodation[] = [
    {
      id: 1,
      name: 'Stankovic',
      capacity: 7,
      type: 'Vila',
      location: 'Zajecar',
      pricePerPerson: 50.00
    },
    {
      id: 2,
      name: 'Sunce',
      capacity: 20,
      type: 'Apartman',
      location: 'Sokobanja',
      pricePerPerson: 270.00
    },
    {
      id: 3,
      name: 'Biser Jadrana',
      capacity: 15,
      type: 'Apartman',
      location: 'Kotor',
      pricePerPerson: 120.00
    },
    {
      id: 4,
      name: 'Rezidencija Peric',
      capacity: 5,
      type: 'Kuca',
      location: 'Novi Sad',
      pricePerPerson: 30.00
    }
  ];

  constructor() { }
}
