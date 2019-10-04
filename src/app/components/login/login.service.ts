import { Injectable, HostListener } from '@angular/core';
import { AlertService } from '../shared/alert/alert.service';
import { Router } from '@angular/router';
import { MessagesEnum } from '../shared/core/helpers/MessagesEnum';
import { TypeMessageEnum } from '../shared/core/helpers/TypeMessageEnum';

@Injectable()
export class LoginService {
  constructor(
    private _router: Router,
    private _alertService: AlertService) {

  }

  public FazerLogin(usuario: string, senha: string) {
    if (usuario == "admin" && senha == "admin") {
      return this.RedirectToURL();
    } else {
      this._alertService.NewMessage(MessagesEnum._001, TypeMessageEnum.Error);
    }
  }

  private RedirectToURL(url: string = 'home'): void {
    this._router.navigate([`/${url}`]);
  }
  
}