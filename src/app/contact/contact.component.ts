import { Component } from '@angular/core';
import { Router }  from '@angular/router';
@Component({
  selector: 'my-app',
    templateUrl: './contact.html' 
})

export class ContactComponent  { 

constructor(private _router: Router){} 

   onBack(): void { 
      this._router.navigate(['']); 
   } 
 }
