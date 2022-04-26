import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(private LoginService: LoginService) {
    this.formulario = new FormGroup({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    }, [])
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const response = await this.LoginService.loginUser(this.formulario.value)
    console.log(response);
  }
}
