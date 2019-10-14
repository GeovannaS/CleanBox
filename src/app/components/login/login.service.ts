import { Injectable, HostListener, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MessagesEnum } from '../shared/core/helpers/MessagesEnum';
import { ToastrService } from 'ngx-toastr';
import { TypeMessageEnum } from '../shared/core/helpers/TypeMessageEnum';

@Injectable()
export class LoginService {
  loginEmit = new EventEmitter<boolean>();
  
  constructor(
    private _router: Router,
    private _toastService: ToastrService) {
  }

  public FazerLogin(usuario: string, senha: string) {
    if (usuario == "admin" && senha == "admin") {
      this.loginEmit.emit(true);
      localStorage.setItem("isUserLoggedIn", "true");
      return this.RedirectToURL();
    } else {
      this.loginEmit.emit(false);
      localStorage.setItem("isUserLoggedIn", "false");
      this._toastService.error(MessagesEnum._001, TypeMessageEnum.Error, {
        timeOut: 2000,
        positionClass: 'toast-bottom-right',
        progressBar: true
      });
    }
  }

  public Logout() {
    this.loginEmit.emit(false);
    localStorage.clear();
    return this.RedirectToURL('');
  }

  private RedirectToURL(url: string = 'home'): void {
    this._router.navigate([`/${url}`], {skipLocationChange: true});
  }
  
}