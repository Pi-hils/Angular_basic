// // 1. import
import { Observable} from 'rxjs';

// won't need this code when using this.http.get(URL)... but for learning sake...
let sub = Observable.create((sub)=> {
  
  sub.next("Hi");
  sub.error("Errorrrr");
  sub.next("Hello");
  sub.next("How are you?");
  sub.complete()
});

//now load data
sub.subscribe(data=>console.log(data),
    err=>console.log(err),
    ()=>console.log("completed"))

    // To run code in terminal, ran node -r esm MyObservable.js