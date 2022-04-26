import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SuscribeService } from 'src/app/services/suscribe.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  formulario: FormGroup;

  constructor(private SuscribeService: SuscribeService) {
    this.formulario = new FormGroup({
      email: new FormControl("", [Validators.required]),

    }, [])
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const response = await this.SuscribeService.suscribeUser(this.formulario.value)
    console.log(response);
  }
}