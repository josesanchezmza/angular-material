import { Component, OnInit } from '@angular/core';
import {UsuarioModel} from "../../models/usuario.model";
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  recordar= false;


  constructor( private authService: AuthService,
               private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.invalid) { return; }

    Swal.fire({
      allowOutsideClick: false,
      text: 'espere for favor...',
      icon: "info"
    });
    Swal.showLoading();

    this.authService.login(this.usuario).subscribe( res => {
          Swal.close();
          this.router.navigateByUrl('/home');
    },
      err => {
          Swal.fire({
          allowOutsideClick: false,
          icon: 'error',
          title: 'Error al autenticar',
          text: err.error.error.message
        });
      });

  }
}
