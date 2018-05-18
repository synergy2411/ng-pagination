import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  someModel = "<script>alert('Hello')</script>";

  dangerUrl : any;
  trustedUrl : any;

  constructor(private domSanitizer : DomSanitizer,
          private cd : ChangeDetectorRef){
            cd.
    this.dangerUrl = "javascript:alert('Hello There!!!')";
    this.trustedUrl = this.domSanitizer.bypassSecurityTrustUrl(this.dangerUrl);
  }

  myError(){
    throw new Error("New Error");
  }
  ngOnInit(){

  }
  title = 'app';
  p : number =1;
  myCollection : Collection[]= [{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  },{
    name: "ABC",
    email : "test@test.com",
    contact : 1234
  }]
}

export interface Collection{
  name : string;
  email : string;
  contact : number;
}