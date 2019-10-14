import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { BRComponent } from './br/br.component';
import { ContentComponent } from './content/content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    RouterModule  
  ],
  declarations: [
      MenuComponent, 
      FooterComponent,
      BRComponent,
      ContentComponent,
      HeaderComponent
    ],
  providers:[],
  exports:[
      MenuComponent,
      FooterComponent,
      BRComponent,
      ContentComponent,
      HeaderComponent
    ]
})

export class SharedModule {}
