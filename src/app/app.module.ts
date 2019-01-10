import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';
import { ChartComponent } from './chart/chart.component';

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { HttpHandlerComponent } from './http-handler/http-handler.component';

@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
        ChartComponent,
        HttpHandlerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ChartModule,
        HttpClientModule
    ],
    providers: [
        { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting ] },
        DataService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}