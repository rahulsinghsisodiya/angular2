import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ContactComponent }  from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
   { path: 'contact', component: ContactComponent },
   
];


@NgModule({
   imports: [ BrowserModule,
   RouterModule.forRoot(appRoutes)],
   declarations: [ AppComponent,ContactComponent],
   bootstrap: [ AppComponent ]
   
  
})
export class AppModule { }