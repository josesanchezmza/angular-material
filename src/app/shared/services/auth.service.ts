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
    console.log(this.userToken);
    return this.userToken.length > 2;
  }

  //Se implementó un EventEmitter para emitir en el header true o false cuando esté autenticado o no el usuario (ver metodo login y logout)
  estaAutenticado$ = new EventEmitter<boolean>();

}
