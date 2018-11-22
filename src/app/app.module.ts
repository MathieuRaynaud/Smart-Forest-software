import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { MapComponent } from './map/map.component';

@NgModule({
    declarations: [
        AppComponent,
        AppareilComponent,
        MapComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [
        AppareilService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }