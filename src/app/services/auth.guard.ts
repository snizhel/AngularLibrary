import { TokenStorageService } from "src/app/services/token-storage.service";
import { AuthService } from "src/app/services/auth.service";
import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.isLoggedIn()) {
      return true;
    }
    // navigate to login page as user is not authenticated
    this.router.navigate(["/login"]);
    return false;
  }
  public isLoggedIn(): boolean {
    return this.tokenStorageService.getUser();
  }
}
