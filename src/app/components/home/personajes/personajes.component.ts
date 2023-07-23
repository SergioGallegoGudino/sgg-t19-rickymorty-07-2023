import { Component } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  database:any = null;
  // Llamamos al constructor el servicio de personajes que contiene la API de personajes para utilizarla
  constructor(private personajesService: PersonajesService){}
  // Creamos un método OnInit para asignar el resultado de la peticion http a la base de datos de nuestra API
  ngOnInit(){
    this.personajesService.getAll()
      .subscribe(result => this.database = result);
  }

}
