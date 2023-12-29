import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    return this.checkLogin();
  }

  checkLogin(): boolean {

    const token = sessionStorage.getItem('access_token');

    if (token) { return true; }

    this.router.navigate(['/login']);
    return false;
  }
}