import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) { }
  // Creamos un método para registrar a un usuario con el email y la contraseña introducidos
  register({email, password}: any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  // Creamos un metodo para iniciar sesion con el email y la contraseña introducidos
  login({email, password}: any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  // Creamos un método que cierre la sesión del usuario
  logout(){
    return signOut(this.auth);
  }

}
