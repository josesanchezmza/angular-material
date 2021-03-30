import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'angular-material';
  estaAutenticado: boolean=false;

  constructor(private authService: AuthService,
              private router: Router) {

  }

  ngOnInit(): void {
      //Si se refresca el header en el navegafor, el indicador estaAutenticado toma el valor del siguiente metodo cuando el componente se inicializa
      this.estaAutenticado = this.authService.estaAutenticado();

      //Si el usuario se logea, este componente no se inicializa, por eso en esta parte esta suscripto a la emision de un indicador en authService
      this.authService.estaAutenticado$.subscribe( res =>{
      this.estaAutenticado = res;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
