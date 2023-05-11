import { TestBed } from "@angular/core/testing";
import { LoginComponent } from "./login.component";
import { HttpClientModule } from "@angular/common/http";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

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
});