import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './components/login/login.module';
import { registerLocaleData, LocationStrategy, HashLocationStrategy } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { SharedModule } from './components/shared/shared.module';
import { HomeModule } from './components/home/home.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MinhaCaixaDaguaModule } from './components/minha-caixa-dagua/minha-caixa-dagua.module';
import { QuemSomosModule } from './components/quem-somos/quem-somos.module';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { NgChartjsModule } from 'ng-chartjs';
registerLocaleData(localePt, 'pt-BR');

export function horizonalLine(chartInstance) {
  const yScale = chartInstance.scales['y-axis-0'];
  const canvas = chartInstance.chart;
  const ctx = canvas.ctx;
  let index;
  let line;
  let style;
  let yValue;

  if (chartInstance.options.horizontalLine) {
    for (index = 0; index < chartInstance.options.horizontalLine.length; index++) {
      line = chartInstance.options.horizontalLine[index];

      if (!line.style) {
        style = 'rgba(169,169,169, .6)';
      } else {
        style = line.style;
      }

      if (line.y) {
        yValue = yScale.getPixelForValue(line.y);
      } else {
        yValue = 0;
      }

      ctx.lineWidth = 3;

      if (yValue) {
        ctx.beginPath();
        ctx.moveTo(0, yValue);
        ctx.lineTo(canvas.width, yValue);
        ctx.strokeStyle = style;
        ctx.stroke();
      }

      if (line.text) {
        ctx.fillStyle = style;
        ctx.fillText(line.text, 0, yValue + ctx.lineWidth);
      }
    }
    return;
  }
}
const horizonalLinePlugin = {
  beforeDraw: horizonalLine
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    HomeModule,
    QuemSomosModule,
    MinhaCaixaDaguaModule,
    SharedModule,
    ToastrModule.forRoot(),
    NgChartjsModule.registerPlugin([horizonalLinePlugin])
  ],
  providers: [
    {
      provide: LocationStrategy, 
      useClass: HashLocationStrategy
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
