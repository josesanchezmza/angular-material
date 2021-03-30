import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { ExtendedModule } from "@angular/flex-layout";
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule  } from '@angular/forms';
import { RegisterComponent } from './auth/register/register.component';

import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './shared/header/header.component';
import { ReconstruccionesCriminalesComponent } from './pages/reconstrucciones-criminales/reconstrucciones-criminales.component';
import { ReconstruccionCriminalComponent } from './pages/reconstruccion-criminal/reconstruccion-criminal.component';
import { SiniestrosVialesComponent } from './pages/siniestros-viales/siniestros-viales.component';
import { SiniestroVialComponent } from './pages/siniestro-vial/siniestro-vial.component';
import { NecrosComponent } from './pages/necros/necros.component';
import { NecroComponent } from './pages/necro/necro.component';
import { TrasladosComponent } from './pages/traslados/traslados.component';
import { TrasladoComponent } from './pages/traslado/traslado.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { DelegacionesComponent } from './pages/delegaciones/delegaciones.component';
import { DelegacionComponent } from './pages/delegacion/delegacion.component';
import { IntervinientesComponent } from './pages/intervinientes/intervinientes.component';
import { IntervinienteComponent } from './pages/interviniente/interviniente.component';
import { DelitosComponent } from './pages/delitos/delitos.component';
import { DelitoComponent } from './pages/delito/delito.component';
import { TiposColisionesComponent } from './pages/tipos-colisiones/tipos-colisiones.component';
import { TipoColisionComponent } from './pages/tipo-colision/tipo-colision.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    ReconstruccionesCriminalesComponent,
    ReconstruccionCriminalComponent,
    SiniestrosVialesComponent,
    SiniestroVialComponent,
    NecrosComponent,
    NecroComponent,
    TrasladosComponent,
    TrasladoComponent,
    UsuariosComponent,
    UsuarioComponent,
    DelegacionesComponent,
    DelegacionComponent,
    IntervinientesComponent,
    IntervinienteComponent,
    DelitosComponent,
    DelitoComponent,
    TiposColisionesComponent,
    TipoColisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    ExtendedModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
