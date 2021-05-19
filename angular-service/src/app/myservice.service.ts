import { Injectable } from "@angular/core";

@Injectable()               // angular service with DI

export class MyService {
    sayHello(name:string):string {
        return "Welcome to Angular service using DI"+name;
    }
}