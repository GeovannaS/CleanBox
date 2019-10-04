import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { AlertService } from '../shared/alert/alert.service';
import { MessagesEnum } from '../shared/core/helpers/MessagesEnum';
import { TypeMessageEnum } from '../shared/core/helpers/TypeMessageEnum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup

  msgLoginInvalido: string = "Preencha o campo usuário!";

  constructor(
    private _formBuilder: FormBuilder,
    private _loginService: LoginService,
    private _alertService: AlertService) { }

  ngOnInit() {
    this.CreateValidationForm();
  }

  private CreateValidationForm() {
    this.form = this._formBuilder.group({
      login: ["", Validators.compose([Validators.required])],
      senha: ["", Validators.compose([Validators.required])]
    });
  }

  public OnClick_Logar() {
    if (this.form.valid) {
      this._loginService.FazerLogin(this.form.value.login, this.form.value.senha)
    } else {
      this._alertService.NewMessage(MessagesEnum._001, TypeMessageEnum.Warning);
    }
  }
}
