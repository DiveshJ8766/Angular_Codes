import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recative-form',
  templateUrl: './recative-form.component.html',
  styleUrl: './recative-form.component.css',
})
export class RecativeFormComponent implements OnInit {
  reactiveForm: any;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null),
      dob: new FormControl(null),
      gender: new FormControl('male'),
      address: new FormGroup({
        street: new FormControl(null, Validators.required),
        country: new FormControl('india', Validators.required),
        city: new FormControl(null),
        region: new FormControl(null),
        postalCode: new FormControl(null, Validators.required),
      }),

      skills:new FormArray([
        new FormControl(null,Validators.required),
        new FormControl(null,Validators.required)
      ])
    });
  }

  onFormSubmitted() {
    console.log('Recative form : ', this.reactiveForm);
  }

  addSkill(){
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null,Validators.required));
  }

  deleteSkill(index:number){
    let control = <FormArray>this.reactiveForm.get('skills');
    control.removeAt(index);
  }
}
