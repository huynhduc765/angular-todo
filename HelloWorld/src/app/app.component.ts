import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';
  constructor(private router: Router) { }

  onSelect(_body){
    this.router.navigate(['body'])
  }
  onSelectpagenotfound(_pagenotfound){
    this.router.navigate(['pagenotfound'])
  }
}
