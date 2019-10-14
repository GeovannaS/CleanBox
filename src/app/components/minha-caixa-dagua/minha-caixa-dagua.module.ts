import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MinhaCaixaDaguaComponent } from './minha-caixa-dagua.component';
import { MinhaCaixaDaguaService } from './minha-caixa-dagua.service';
import { NgChartjsModule } from 'ng-chartjs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgChartjsModule
  ],
  declarations: [
    MinhaCaixaDaguaComponent
  ],
  providers: [
    MinhaCaixaDaguaService
  ],
  exports: [
    MinhaCaixaDaguaComponent
  ]
})

export class MinhaCaixaDaguaModule { }

