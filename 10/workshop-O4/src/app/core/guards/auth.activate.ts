import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';

@Injectable()
export class AuthActivate implements CanActivate {

  constructor(private router: Router, private userService: UserService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const { authenticationRequired, authenticationFailureRedirectUrl } = route.data;
    if (
      typeof authenticationRequired === 'boolean' &&
      authenticationRequired === this.userService.isLogged
    ) { return true; }

    let authRedirectUrl = authenticationFailureRedirectUrl
    if (authenticationRequired) {
      const loginRedirectUrl = route.url.reduce((acc, s) => `${acc}/${s.path}`, '');
      authRedirectUrl += `?redirectUrl=${loginRedirectUrl}`;
    }

    return this.router.parseUrl(authRedirectUrl || '/');
  }

}