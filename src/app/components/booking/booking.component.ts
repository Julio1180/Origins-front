import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})


export class BookingComponent implements OnInit {

  booking: FormGroup;
  constructor(private bookingService: BookingService) {
    this.booking = new FormGroup({
      nombre: new FormControl("", [Validators.required]),
      apellidos: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      fecha: new FormControl("", [Validators.required]),
      nivel: new FormControl("", [Validators.required]),
      profesor: new FormControl("", [Validators.required]),
      material: new FormControl("", [Validators.required]),
      skateparks: new FormControl("", [Validators.required]),
      surfspots: new FormControl("", [Validators.required]),

    }, [])
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const response = await this.bookingService.bookingUser(this.booking.value)
    } catch (error) {
      console.log(error);
    }
    console.log(this.booking.value);
    //pasar los datos del form.value al servicio para conectarlo con el back
  }

}