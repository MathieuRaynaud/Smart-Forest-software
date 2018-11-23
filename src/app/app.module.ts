import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { MapComponent } from './map/map.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
    declarations: [
        AppComponent,
        AppareilComponent,
        MapComponent,
        ChartComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ChartModule
    ],
    providers: [
        AppareilService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}