import { Component, OnInit } from '@angular/core';
import {UsuarioModel} from "../../shared/models/usuario.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usuario: UsuarioModel;
  constructor() { }

  ngOnInit(): void {
    this.usuario= new UsuarioModel();
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

}
