import {Component, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }

  parentCall() {
  	console.log("message from parent compoment");
  }


}
