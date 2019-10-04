import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public IsShowMenuMobile: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  public ToggleMenu() {
    this.IsShowMenuMobile = !this.IsShowMenuMobile;
  }

}
