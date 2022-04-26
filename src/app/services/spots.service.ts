import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotsService {

  baseurl: string;

  constructor(private httpClient: HttpClient) {
    this.baseurl = 'http://localhost:3000/api/spots'
  }

  getAll() {
    return firstValueFrom(
      this.httpClient.get<any[]>(this.baseurl)
    )

  }

}
