import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


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

 // Data
  usersData = [
    {
      id: 1,
      Name: 'Phemelo',
      Surname: 'Motsamai',
      Email: 'Phemelo@digilink.africa',
      Mobile: '+27 73 098 7499',
      City: 'Johannesburg'
    },

    {
    id: 2,
    Name: 'John',
    Surname: 'Doe',
    Email: 'jondoe@digilink.africa',
    Mobile: '+254712345678',
    City: 'Cape Town'},

    {
      id: 3,
      Name: 'Sylvester',
      Surname: 'Stallone',
      Email:  'Sylvester@digilink.africa',
      Mobile: '+74712345678',
      City: 'Johannesburg'}



  ]

  constructor(private formbuilder: FormBuilder, private route:ActivatedRoute) { }
  ngOnInit(): void {

    //
    this.route.snapshot.params['name'];
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




