import { Component } from '@angular/core';
import { Personaje } from 'src/app/models/personaje.Model';
import { PersonajesService } from 'src/app/services/personajes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-personajes',
  templateUrl: './add-personajes.component.html',
  styleUrls: ['./add-personajes.component.css']
})
export class AddPersonajesComponent {

  // Creamos un objeto de tipo Personaje con todos sus atributos. Tendrá una imagen por defecto en caso de que no pasemos ninguna.

  personaje: Personaje = {
    id: "",
    name: "",
    status: "",
    species: "",
    // Exceptuando image donde añadiremos una por defecto, los demás campos no son relevantes y no se tendrán en cuenta a la hora de añadir un personaje
    type: "",
    gender: "",
    origin: {name: "", url: ""},
    location: {name: "", url: ""},
    image: "https://files.cults3d.com/uploaders/14307074/illustration-file/3c12b15c-003f-409f-a9b6-b0dcde4495d8/render0001.png",
    episode: [""],
    url: "",
    created: ""
  };

  // Pasamos por el constructor personajeService

  constructor(private personajesService: PersonajesService, private router: Router){}

  // Creamos un método que añada un personaje a partir de los atributos id, name, status y species

  addPersonaje(): void{
    // Creamos una variable con los datos del formulario asignados a cada atributo
    const data = {
      id: this.personaje.id,
      name: this.personaje.name,
      status: this.personaje.status,
      species: this.personaje.species,
      image: this.personaje.image
    };
    // Llamamos a la función create del service y esperamos una respuesta
    this.personajesService.create(data)
      .subscribe(
        response =>{
          // Avisamos de que el personaje se ha creado completamente y redirigimos al usuario a la vista home
          alert("Personaje añadido");
          this.router.navigate(['/home']);
        },
        // En caso de error, el programa nos avisará
        error => {
          alert("Ha ocurrido un error al añadir un personaje. Intentélo de nuevo.");
        }
    );

  }
}
