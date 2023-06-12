import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/model/booking';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) {
  }

  ngOnInit(): void {
    this.bookings = this.bookingService.bookings;
  }
}
