import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  contactForm=new FormGroup({
    name:new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    body: new FormControl('',Validators.required)
  })

  sendEmail(){
    let name=this.contactForm.get('name')?.value!;
    let phone=this.contactForm.get('phone')?.value!;
    let email=this.contactForm.get('email')?.value!;
    let body=this.contactForm.get('body')?.value!;

    window.location.href=`mailto:nicolasramirez.96.constru@gmail.com?subject=ConsultaDesdeFormulario&body=nombre%3A%20${name}%0Atelefono%3A%20${phone}%0Aemail%3A%20${email}%0Amensaje%3A%20${body}`
  }
}
