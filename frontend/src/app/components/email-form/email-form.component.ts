import { Component, inject} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule , Validators} from '@angular/forms';
import { SendEmailService } from 'src/app/services/send-email.service';



@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
  providers: [SendEmailService]
})
export class EmailFormComponent {

  // create a form control for email address
  sendEmail = new FormGroup({
    emailAddress: new FormControl(null, [Validators.required, Validators.email])
  })
  



  // Service injection 
    
  emailService = inject(SendEmailService)

  
  //handle submit event to console log that server is connected to frontend
  submitEmail(email : any) {
    this.emailService.addUser(email).subscribe((data : any)=>{
      console.log(data.message)
    })
   

  }



  }







