import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  message: string;
  items = ["Angular", "React", "Vue", "Bootstrap", "Node.js"];
  loggedIn = true;
  isCollapsed : boolean = true;

  text : string = "Hello world!";

  visibility : boolean = true;
  toggle(){
  this.visibility = !this.visibility;
  }
  constructor() { 
   setInterval(()=>{
   this.message = new Date().toLocaleTimeString();
   },1000);
  }
  toggleCollapse() {
  this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {
  }

}
