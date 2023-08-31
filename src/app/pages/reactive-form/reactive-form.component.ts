import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, NonNullableFormBuilder, Validators } from "@angular/forms";
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{

  constructor(private formBuilder: NonNullableFormBuilder, private ds: DataService) {}
  
  myForm: FormGroup = this.formBuilder.group({
    name: ["", [Validators.required]],
    emailOffers: [""],
    interfaceStyle: [""],
    subscritionType: [""],
    notes: [""],
    password: ["", [Validators.required, Validators.minLength(6)]],
    date: ["", [Validators.required]]
  });
  subscriptionTypes!: Observable<string[]>;

  ngOnInit(): void {
    this.subscriptionTypes = this.ds.getSubscriptionTypes();
  }

  validField(field: string): boolean {
    return this.myForm.controls[field]?.errors! && this.myForm.controls[field].touched!
  }

  submitFunction() {
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
    }else{
      console.log(this.myForm);
      this.myForm.reset();
    } 
  }
}
