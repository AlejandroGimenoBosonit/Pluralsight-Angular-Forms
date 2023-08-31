import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../../types/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit{

  constructor(private ds: DataService){}

  // form data model
  originalSettings: UserSettings = {
    name: '',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'here are some notes...',
  };

  // copy form data as backup
  userSettings: UserSettings = {...this.originalSettings};

  postError: boolean = false;
  postErrorMessage: string = "";
  subscriptionTypes!: Observable<string[]>;
  singleModel: string = "On";
  startDate!: Date;
  startTime!: Date;

  userRating=0;
  max = 10;
  rate = 7;
  isReadonly = false;
  overStar: number | undefined;
  percent = 0;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.subscriptionTypes = this.ds.getSubscriptionTypes();
  }


  // When field is touched blur property calls this function and update to valid the field property 'valid'
  onBlur(field: NgModel): void {
    console.log(field.valid);
    
  }

  onHttpError(err: any): void{
    console.log("error: ", err);
    this.postError = true;
    this.postErrorMessage = err.error.errorMessage
  }

  submitFunction(form: NgForm): void {
    console.log(form.value);

    if(form.valid){
      this.ds
      .postUsersSettingsForm(this.userSettings)
      .subscribe({
        next: result => console.log(result),
        error: err => this.onHttpError(err)
      })
    }else{
      this.postError = true;
      this.postErrorMessage = "There are some bugs errors to deal with...";
    }    
  }

  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }
 
  resetStar(): void {
    this.overStar = void 0;
  }

}
