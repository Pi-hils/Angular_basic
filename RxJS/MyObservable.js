// // 1. import
import { Observable} from 'rxjs';

let sub = Observable.create((sub)=> {
  sub.next("Hi");
  sub.next("Hello");
  sub.next("How are you?");
  sub.complete()
});

//now load data
sub.subscribe(data=>console.log(data),
    err=>console.log(err),
    ()=>console.log("completed"))