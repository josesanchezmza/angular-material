import { Injectable } from '@angular/core';
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
          return res;
        })
      );
  }

  logout(){

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



}
