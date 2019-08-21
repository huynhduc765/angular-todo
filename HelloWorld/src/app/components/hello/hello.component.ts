import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  hoten:string = 'TranhuynhDuc';
  namsinh:number = 1996;
  forgot=false;
  Btn ='An';
  toggleForgot(){
    this.forgot=!this.forgot;
    if(this.forgot == false){
      this.Btn = this.Btn='An' ;
      console.log(this.Btn);
    } else{
      this.Btn = this.Btn='Hien' ;
      console.log(this.Btn);
    }
  }
  
  myArray =['Angul','React','Node'];
 
  
  constructor() { }

  ngOnInit() {
  }

}
