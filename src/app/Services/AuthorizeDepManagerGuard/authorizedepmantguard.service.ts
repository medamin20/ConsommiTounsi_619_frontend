import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../Authenticate/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedepmantguardService implements CanActivate {

  constructor(private authservice: AuthenticationService,
    private router: Router) { }
  canActivate() {
    if (localStorage.getItem("AuthAuthorities").includes(null) || localStorage.getItem("AuthAuthorities").includes("ADMINISTRATOR")
      || localStorage.getItem("AuthAuthorities").includes("DELIVERYPERSON") || localStorage.getItem("AuthAuthorities").includes("CLIENT")) {
      this.router.navigate(['/home/authentificate']);
      return false;
    }
    return true;
  }
}
