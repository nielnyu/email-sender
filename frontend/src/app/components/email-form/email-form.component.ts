import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent {

  // create a form control for email address
  sendEmail = new FormGroup({
    emailAddress: new FormControl("")
  })
  
  //handle submit event to console log what user input
  submitEmail() {
    console.log("This works!")
    console.log(this.sendEmail.value.emailAddress ?? "")

  }

}
