import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppAbout }  from './about/about.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
   { path: 'about', component: AppAbout },
   
];


@NgModule({
   imports: [ BrowserModule,
   RouterModule.forRoot(appRoutes)],
   declarations: [ AppComponent,AppAbout],
   bootstrap: [ AppComponent ]
   
  
})
export class AppModule { }
