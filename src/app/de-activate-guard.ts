import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Page2Component } from "./page2/page2.component";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class DeActivateGuard implements CanDeactivate<Page2Component>{

    canDeactivate(component: Page2Component, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return confirm("Exit ?");
        // return false;
    }


}
