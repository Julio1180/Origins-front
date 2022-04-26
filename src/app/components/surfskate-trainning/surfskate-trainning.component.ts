import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormularioService } from 'src/app/services/formulario.service';

@Component({
  selector: 'app-surfskate-trainning',
  templateUrl: './surfskate-trainning.component.html',
  styleUrls: ['./surfskate-trainning.component.css']
})
export class SurfskateTrainningComponent implements OnInit {

  surfskateTrainning: FormGroup;
  constructor(private formularioService: FormularioService) {
    this.surfskateTrainning = new FormGroup({
      nombre: new FormControl("", [Validators.required]),
      apellidos: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      direccion: new FormControl("", [Validators.required]),
      edad: new FormControl("", [Validators.required]),
      genero: new FormControl("", [Validators.required]),
      cuota: new FormControl("", [Validators.required]),
      fecha_nacimiento: new FormControl("", [Validators.required]),
      dni: new FormControl("", [Validators.required]),
      codigo_postal: new FormControl("", [Validators.required]),
      movil: new FormControl("", [Validators.required]),
      nivel_experiencia: new FormControl("", [Validators.required]),
      experiencia: new FormControl("", [Validators.required]),
      ciudad: new FormControl("", [Validators.required]),
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      hora_entrada: new FormControl("", [Validators.required]),
      hora_salida: new FormControl("", [Validators.required]),
      modalidad: new FormControl("", [Validators.required]),
    }, [])
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const response = await this.formularioService.createUser(this.surfskateTrainning.value)
    } catch (error) {
      console.log(error);
    }
    console.log(this.surfskateTrainning.value);
    //pasar los datos del form.value al servicio para conectarlo con el back
  }

}
