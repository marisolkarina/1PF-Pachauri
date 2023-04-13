import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  myForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['',[Validators.required, Validators.maxLength(15)]],
      lastname: ['',[Validators.required, Validators.maxLength(20)]],
      instruction: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]]
    });
    console.log(this.myForm);
  }

  onSubmit(): void {
    if(this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      alert('Formulario inválido');
    }
    
  }
}
