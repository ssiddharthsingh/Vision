import { Component } from '@angular/core';

import { VapiService } from "./vapi.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'VISION';
  profile:any[];
 
  constructor(private vapiService:VapiService){
    this.profile=[],
    this.vapiService.getData().subscribe(data =>{
    console.log(data)
    this.profile=data
  })
 }
ngOnInit(){
  
}

}
