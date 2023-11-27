import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { debounceTime } from 'rxjs';
import { Customer } from 'src/app/models/customer';
@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  private validationMessages:any = {
    required: 'this field is required',
    email: 'please enter valid email adress',
    minlength:'please type more than 3 charters'
  };

  emailMessage: any;

  customerForm!: FormGroup;
  customer = new Customer();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.minLength(3), Validators.required]],
      lastName: [''],
      middleName: [''],
      calledName: [''],
      email: ['', [Validators.email, Validators.required]],
      phoneNumber: [''],
      notifications: [false],
      addressType:'home',
      catalog:true,
      streetAddress1:''

    })
    this.customerForm.get('notifications')?.valueChanges.subscribe(
      value => this.updateValidation(value)
    );
    const emailControl=this.customerForm.get('email');
    emailControl?.valueChanges.pipe(debounceTime(1000)).subscribe(
      ()=> this.setMessages(emailControl)
    )
  }
  save() {
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }
  updateValidation(event: boolean) {
    const phoneNumberFC = this.customerForm.get('phoneNumber');
    if (event) {
      phoneNumberFC?.setValidators(Validators.required);
    }
    else {

      phoneNumberFC?.clearValidators();
    }
    phoneNumberFC?.updateValueAndValidity();
  }
  checkFormValidations() {
    if (this.customerForm.valid) {
      alert("invalid form");
    }
  }
 
  setMessages(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(
        key => this.validationMessages[key]).join(' and ');
    }
  }


}
