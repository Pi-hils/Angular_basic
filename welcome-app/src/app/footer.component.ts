import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  // template because we want it to be local
  template: `<div>
              {{info}}          
  </div>`,
  styles:["div{color: black; font-size: 93px}"]
})

export class FooterComponent{
  info:string ="This is footer component"
}