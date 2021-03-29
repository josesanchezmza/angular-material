import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'angular-material';
  isAuthenticated: boolean=false;

  constructor(private authService: AuthService,
              private router: Router) {
    this.isAuthenticated = this.authService.estaAutenticado();
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.isAuthenticated = this.authService.estaAutenticado();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
