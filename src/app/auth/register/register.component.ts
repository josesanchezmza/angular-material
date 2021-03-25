import { Component, OnInit } from '@angular/core';
import {UsuarioModel} from "../../shared/models/usuario.model";
import {NgForm} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if (form.invalid) { return; }

    this.authService.nuevoUsuario(this.usuario).subscribe( res => {
      console.log(res);
    },
      err => {
      console.log(err.error.error.message);
      })
    // console.log(this.usuario);
    // console.log(form);
  }

}
