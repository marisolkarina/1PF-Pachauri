import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  // myForm: FormGroup;

  // constructor(public fb: FormBuilder) {
  //   this.myForm = this.fb.group({
  //     name: ['',[Validators.required]],
  //     lastname: ['', [Validators.required]],
  //     grado: ['', [Validators.required]],
  //     email: ['', [Validators.required, Validators.email]]
  //   });
  // }

  controlName = new FormControl('',[Validators.required]);
  controlLastname = new FormControl('', [Validators.required]);
  controlGrado = new FormControl('', [Validators.required]);
  controlEmail = new FormControl('', [Validators.required, Validators.email]);
  controlPassword = new FormControl('', [Validators.required]);

  myForm = new FormGroup({
    name: this.controlName,
    lastname: this.controlLastname,
    grado: this.controlGrado,
    email: this.controlEmail,
    password: this.controlPassword
  });

  matcher = new MyErrorStateMatcher();

  hide = true;
}
