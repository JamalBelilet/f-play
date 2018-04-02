import { Component, OnInit } from '@angular/core';
import { DbMetaDataService } from '../db-meta-data.service';

@Component({
  selector: 'app-at-formini',
  templateUrl: './at-formini.component.html',
  styleUrls: ['./at-formini.component.css']
})
export class AtForminiComponent implements OnInit {
  items = [
    {name: 'jamal', description: 'bob !'}
    {name: 'jamal', description: 'bob !'}
    {name: 'jamal', description: 'bob !'}
  ];

  var1 = "hello";

  constructor(private dbMetaDataService: DbMetaDataService) {
   }

  ngOnInit() {
    console.log("hello from at fromini component !")
    this.dbMetaDataService.goAh();
  }

  test() {
console.log(this.var1);
  }
}
