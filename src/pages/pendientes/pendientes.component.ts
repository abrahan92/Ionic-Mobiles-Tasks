import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

import { NavController } from 'ionic-angular';
import { agregarComponent } from '../agregar/agregar.component';
import { detalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class pendientesComponent implements OnInit {

  constructor( private _listaDeseos: ListaDeseosService,
               private navCtrl: NavController ) {



   }

  ngOnInit() {}

  irAgregar(){
    this.navCtrl.push( agregarComponent );
  }

  verDetalle(lista, i){

      this.navCtrl.push( detalleComponent, { lista, i } );
  }
}
