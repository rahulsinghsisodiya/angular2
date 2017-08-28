import { Component } from '@angular/core';
import { Router }  from '@angular/router';
@Component({
  selector: 'my-app',
   templateUrl: '.app-add.html' 
})

export class AboutComponent  { 

constructor(private _router: Router){} 

   onBack(): void { 
      this._router.navigate(['']); 
   } 
 }
