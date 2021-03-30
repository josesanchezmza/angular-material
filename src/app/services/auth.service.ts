import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsuarioModel} from "../models/usuario.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://identitytoolkit.googleapis.com/v1';
  private apikey = 'AIzaSyCKbv51KPjbxBAdzcZWWXtKbDaSDLO1uc4';

  userToken: any = '';

  constructor( private http: HttpClient ) {
    this.leerToken();
  }

  login(usuario: UsuarioModel){
    const authData = {
      ...usuario,
      returnSecureToken: true
    }

    return this.http.post(`${this.url}/accounts:signInWithPassword?key=${this.apikey}`, authData)
      .pipe(
        map( (res: any) => {
          this.guardarToken(res.idToken);
          this.estaAutenticado$.emit(true);
          return res;
        })
      );
  }

  logout(){
      localStorage.removeItem('token');
      this.estaAutenticado$.emit(false);
      this.userToken = '';
  }

  nuevoUsuario(usuario: UsuarioModel){
    const authData = {
      ...usuario,
      returnSecureToken: true
    }

    return this.http.post(`${this.url}/accounts:signUp?key=${this.apikey}`, authData)
      .pipe(
        map( (res: any) => {
          this.guardarToken(res.idToken);
          return res;
        })
      );
  }

  private guardarToken(idToken: string) {
    this.userToken=idToken;
    localStorage.setItem('token', idToken);

    //tomamos el momento cuando ingreso el usuario y le sumamos 3600seg para que obtengamos
    //el momento cuando el token expira, este dato se almacena en formato de string en el localStorage
    let hoy = new Date();
    hoy.setSeconds(3600);

    localStorage.setItem('expita', hoy.getTime().toString());
  }

  leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  estaAutenticado(): boolean {
    if (this.userToken.length < 2) {
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));

    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if (expiraDate > new Date()){
      return true;
    } else {
      return false;
    }

  }

  //Se implementó un EventEmitter para emitir en el header true o false cuando esté autenticado o no el usuario (ver metodo login y logout)
  estaAutenticado$ = new EventEmitter<boolean>();

}
