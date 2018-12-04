import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import * as highmaps from 'highcharts/modules/map.src';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { MapComponent } from './map/map.component';
import { ChartComponent } from './chart/chart.component';
import { HighmapComponent } from './highmap/highmap.component';

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';

@NgModule({
    declarations: [
        AppComponent,
        AppareilComponent,
        MapComponent,
        ChartComponent,
        HighmapComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ChartModule,
        HttpClientModule
    ],
    providers: [
        AppareilService,
        { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting, highmaps ] },
        DataService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}