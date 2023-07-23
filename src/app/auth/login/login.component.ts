import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Creamos una variable que almacene el correo y la contraseña de los campos recibidos
  formLogin: FormGroup;
  
  // Introducimos los campos validados del correo y la contraseña
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }
  // Creamos un método que inicie sesion al usuario en firebase utilizando el email y la contraseña 
  onSubmit() {
    this.userService.login(this.formLogin.value)
    // Si se ha iniciado sesión correctamente nos llevarán a la página principal de la API
      .then(response => {
        console.log(response);
        this.router.navigate(['/']);
      })
      // Si no se ha podido iniciar sesion nos devolverá un mensaje de error por consola
      .catch(error => console.log(error));
  }
}
