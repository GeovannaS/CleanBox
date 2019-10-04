import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { BRComponent } from './br/br.component';
import { ContentComponent } from './content/content.component';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),    
  ],
  declarations: [
      MenuComponent, 
      FooterComponent,
      BRComponent,
      ContentComponent,
      AlertComponent
    ],
  providers:[
    AlertService
  ],
  exports:[
      MenuComponent,
      FooterComponent,
      BRComponent,
      ContentComponent,
      AlertComponent
    ]
})

export class SharedModule {}
