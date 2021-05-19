import { Component, OnInit } from '@angular/core';
import { FakeService } from '../fake.service';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.css']
})
export class FakeComponent implements OnInit {

  constructor(public fake: FakeService) { }

  ngOnInit(): void {
  }
  loadData(){
    this.fake.loadFakeData();
  }

}
