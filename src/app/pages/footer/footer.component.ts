import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: '#app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'date',
      type: 'datepicker',
      templateOptions: {
        label: 'Select Date',
      },
    },
  ];

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted with model:', this.model);
    }
  }
  
}
