import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router'
@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      department detail you select {{departmentID}}
    </p>   
    <button (click)="goPrevious()">Previous</button>
    <button (click)="goNext()">Next</button>



  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public departmentID;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentID = id;
    });
  }

  goPrevious(){
    let previousID = this.departmentID -1;
    this.router.navigate(['/departments', previousID]);
  }
  
  goNext(){
    let nextID = this.departmentID +1;
    this.router.navigate(['/departments', nextID]);
  }
}
