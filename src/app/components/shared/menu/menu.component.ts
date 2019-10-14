import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public IsShowMenuMobile: boolean = false;
  public IsLogado: boolean;
  public IsMenuVisible = false;

  constructor(private _loginService: LoginService) { }

  ngOnInit() {
    this._loginService.loginEmit.subscribe(isLogado => {
      this.IsLogado = isLogado;
    });
  }

  public ToggleMenu() {
    this.IsShowMenuMobile = !this.IsShowMenuMobile;
  }

  public Toggle(visible: boolean): void {
    this.IsMenuVisible = visible;
  }

  OnClick_Logout() {
    return this._loginService.Logout();
  }

}
