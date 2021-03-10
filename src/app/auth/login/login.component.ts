import { Component, OnInit } from '@angular/core';
import {UsuarioModel} from "../../shared/models/usuario.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginInvalid: boolean;
  usuario: UsuarioModel;


  constructor(

  ) { }

  ngOnInit() {
    this.usuario=new UsuarioModel();
    this.usuario.email = 'jose@gmail.com';
    this.usuario.password = '123456';
  }

  async onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(this.usuario);
    // this.loginInvalid = false;
    // this.formSubmitAttempt = false;
    // if (this.form.valid) {
    //   try {
    //     const username = this.form.get('username').value;
    //     const password = this.form.get('password').value;
    //     await this.authService.login(username, password);
    //   } catch (err) {
    //     this.loginInvalid = true;
    //   }
    // } else {
    //   this.formSubmitAttempt = true;
    // }
  }

}
