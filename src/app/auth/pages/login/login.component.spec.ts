import { TestBed } from "@angular/core/testing";
import { LoginComponent } from "./login.component";
import { HttpClientModule } from "@angular/common/http";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthService } from "src/app/services/auth.service";

describe('Pruebas del LoginComponent', () => {
    let component: LoginComponent;

    beforeEach( async ()=> {
        await TestBed.configureTestingModule({
            declarations: [
                LoginComponent
            ],
            imports: [
                HttpClientModule,
                MatFormFieldModule,
                MatIconModule,
                ReactiveFormsModule,
                MatInputModule,
                BrowserAnimationsModule,
            ]
        }).compileComponents();
        const fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    it('Si el campo email está vacío el FormControl del email debe ser inválido.', () => {
        component.myForm.setValue({ email: null, password: null });
        expect(component.controlEmail.invalid).toBeTrue();
    });

    it('Si el campo password está vacío el FormControl del password debe ser inválido.', () => {
        component.myForm.setValue({ email: null, password: null })
        expect(component.controlPassword.invalid).toBeTrue();
    });

    it('Si el formulario myForm es inválido, se deben marcar todos los controles como touched.', () => {
        component.myForm.setValue({ email: null, password: null })
        const spyOnMarkAllAsTouched = spyOn(component.myForm, 'markAllAsTouched');
        component.login();
        expect(spyOnMarkAllAsTouched).toHaveBeenCalled();
    });

    it('Si el formulario myForm es válido, se debe llamar al método login del AuthService.', () => {
        component.myForm.setValue({ email: 'marisol.kari.20@mail.com', password: '123456' });
        const spyOnAuthServiceLogin = spyOn(TestBed.inject(AuthService), 'login');
        component.login();
        expect(component.myForm.valid).toBeTrue();
        expect(spyOnAuthServiceLogin).toHaveBeenCalled();
    });
});