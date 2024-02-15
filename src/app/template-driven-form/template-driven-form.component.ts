import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css',
})
export class TemplateDrivenFormComponent {
  @ViewChild('registration') form: any;

  firstName: string = '';
  lastName: string = '';
  emailAddress: string = '';
  birthDate: string = '';
  commonName:string = '';
  country: string = '';
  city: string = '';
  postalCode: string = '';
  region: string = '';
  IsAgreed:boolean = false;

  genders = [
    { id: 'check-male', name: 'male', display: 'Male' },
    { id: 'check-female', name: 'female', display: 'Female' },
    { id: 'check-other', name: 'other', display: 'Prefer not to say' },
  ];

  onFormSubmitted() {
    // Accessing Form
    console.log('Template Driven Form : ', this.form);

    // Accessing Form Values using values
    console.log(this.form.value.firstname);
    console.log(this.form.value.lastname);
    console.log(this.form.value.email);
    console.log(this.form.value.address.country);
    console.log(this.form.value.gender);

    // Accessing Form Values using Controls
    console.log(this.form.controls.firstname.value);
    console.log(this.form.controls.lastname.value);
    console.log(this.form.controls.email.value);
    console.log(this.form.controls.address.controls.country.value);
    console.log(this.form.controls.gender.value);

    this.firstName = this.form.value.firstname;
    this.lastName = this.form.value.lastname;
    this.emailAddress = this.form.value.email;
    this.birthDate = this.form.value.dob;
    this.commonName = this.form.value.username;
    this.country = this.form.value.address.country;
    this.city = this.form.value.address.city;
    this.region = this.form.value.address.region;
    this.postalCode = this.form.value.address.postalCode;

    this.IsAgreed = this.form.value.agreement;

    // this.form.reset();

    // this.form.form.patchValue({
    //   gender: 'male',
    //   address: {
    //     country: 'India',
    //   },
    // });
  }

  generateUserName() {
    let username = '';

    // Make FIrst name initial to add in username
    if (this.form.value.firstname.length >= 3) {
      username += this.form.value.firstname.slice(0, 3);
    } else {
      username += this.form.value.firstname;
    }

    console.log("username first : ",username)

    // Make last name initial to add in username
    if (this.form.value.firstname.length >= 3) {
      username += this.form.value.lastname.slice(0, 3);
    } else {
      username += this.form.value.lastname;
    }

    console.log("username last : ",username)


    // make year
    let date = new Date(this.form.value.dob);
    username += date.getFullYear();

    username = username.toLowerCase();

    console.log('Username : ', username);

    this.commonName = username;

    //   this.form.setValue({
    //     firstname: this.form.value.firstname,
    //     lastname: this.form.value.lastname,
    //     email: this.form.value.email,
    //     number: this.form.value.number,
    //     dob: this.form.value.dob,
    //     username: username,
    //     address: {
    //         street1: this.form.value.address.street1,
    //         street2: this.form.value.address.street2,
    //         country: this.form.value.address.country,
    //         city: this.form.value.address.city,
    //         region: this.form.value.address.region,
    //         postalCode: this.form.value.address.postalCode
    //     },
    //     gender: this.form.value.gender
    // })

    this.form.form.patchValue({
      username: username,
      // address: {
      //   country: 'India',
      // },
    });
  }
}
