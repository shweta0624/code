import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { Component, NgModule } from '@angular/core';

platformBrowserDynamic().bootstrapModule(AppModule);
