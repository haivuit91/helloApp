import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  address: Address;
  hobbies:string[];
  datas:Datas[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.name = 'Hải Vũ';
    this.age = 27;
    this.address = {
      street: 'Duy Tân',
      city: 'Hà Nội',
      state: 'VN'
    };
    this.hobbies = ['Xem phim', 'Nghe nhac', 'Du lich'];

    this.dataService.getPost().subscribe((results) => {
      this.datas = results;
    });
  }

  delHobby(hobby) {
    for(let i = 0; i < this.hobbies.length; i++) {
      if(this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

}

export interface Address {
  street:string,
  city:string,
  state:string
}

export interface Datas {
  id:number,
  title:string,
  body:string,
  userId:number
}