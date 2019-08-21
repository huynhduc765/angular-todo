import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-object',
  templateUrl: './ng-for-object.component.html',
  styleUrls: ['./ng-for-object.component.css']
})
export class NgForObjectComponent implements OnInit {
  filterStatus ='XemTatCa';
  isshowForm = false;
  
  addarren : string ='';
  addarrvn : string ='';
  abc = 'tao';
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];
  constructor() { }

  ngOnInit() {
  }
  addWord(){
    this.arrWords.unshift({
    id : this.arrWords.length +1,
    en : this.addarren,
    vn : this.addarrvn,
    memorized : false
    });
    this.addarren = '';
    this.addarrvn = '';
    this.isshowForm = false;
  }
  removeWord(id :number){
    const index =this.arrWords.findIndex(word => word.id ===id)
    this.arrWords.splice(index,1);
  }
  showFilterStatus(memorized:boolean){
    const dkXemTatCa = this.filterStatus ==='XemTatCa';
    const dkXemDaNho = this.filterStatus ==='XemDaNho' && memorized;
    const dkXemChuaNho = this.filterStatus ==='XemChuaNho' && !memorized;
    return dkXemTatCa || dkXemDaNho || dkXemChuaNho;
  }
}
