import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookingService {


  baseurl: string;

  constructor(private httpClient: HttpClient) {
    this.baseurl = 'http://localhost:3000/api/usuarios/booking'
  }

  bookingUser(FormGroup: any) {
    return firstValueFrom(
      this.httpClient.post<any>(this.baseurl, FormGroup)
    )

  }

}
