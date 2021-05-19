import { Component, OnInit } from '@angular/core';
import { FakeService } from '../fake.service';
import { Fake } from '../fake.model';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.css']
})
export class FakeComponent implements OnInit {

  fakeArray?:Array<Fake>;
  constructor(public fake: FakeService) { }

//angular life cycle : method function get called after constructor
//ngOnInit is hook method
  ngOnInit(): void {      //life cycle : method function get call after constructor
    this.fake.getFakeData().subscribe(data=>this.fakeArray=data);
  }

  loadData(){
    this.fake.loadFakeData();
  }

}
