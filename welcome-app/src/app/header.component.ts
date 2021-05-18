import {Component} from '@angular/core';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})

export class HeaderComponent {
  msg:string = "Learning all about components- parent, child, decorators(selctor, templateUrl and the optional styleUrl.";

}
