import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {
  constructor(private route: ActivatedRoute) {}
  objeto:any;
  // Creamos el método OnInit donde mostraremos los detalles del personaje que hayamos seleccionado
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.objeto = JSON.parse(params['personaje']);
    });
  }

}
