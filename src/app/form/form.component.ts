import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  reactiveForm: any;

  model: any;

  constructor(){}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstname:new FormControl(null,[Validators.required,Validators.minLength(3)]),
      lastname:new FormControl(null,[Validators.required,Validators.minLength(3)]),
      email:new FormControl("diveshvjadhav@gmail.com",[Validators.required,Validators.email]),
      dob:new FormControl(Date,[Validators.required]),
      gender:new FormControl('male',[Validators.required]),
      address: new FormGroup({
        country:new FormControl('india',[Validators.required]),
        street:new FormControl('Township street 2',[Validators.required]),
        city:new FormControl('New City',[Validators.required]),
        region:new FormControl('Niphad'),
        postalCode:new FormControl(422207)
      })
    });
  }

  getValue(){
    console.log("Value of reactive form : ",this.reactiveForm.value)
  }

}
