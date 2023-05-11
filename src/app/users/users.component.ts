import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  showadd!: boolean;
  showupdate!: boolean;

  //
  formValue!: FormGroup;



  constructor(private formbuilder: FormBuilder) { }
ngOnInit(): void {
  }

//
  add(){
    this.showadd = true;
    this.showupdate = false;

  }
//
  update(){
    this.showupdate = true;
    this.showadd = false;


  }
}
