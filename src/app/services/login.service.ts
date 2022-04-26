import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';






@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseurl: string;

  constructor(private httpClient: HttpClient) {
    this.baseurl = 'http://localhost:3000/api/usuarios/login'
  }

  loginUser(FormGroup: any) {
    console.log(FormGroup)
    return firstValueFrom(
      this.httpClient.post<any>(this.baseurl, FormGroup)
    )

  }


}