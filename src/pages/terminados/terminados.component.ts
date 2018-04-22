import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

import { NavController } from 'ionic-angular';
import { detalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html',
})
export class terminadosComponent implements OnInit {
  constructor( private _listaDeseos: ListaDeseosService,
               private navCtrl: NavController ){
                 
               }

  ngOnInit() {}

  verDetalle(lista, i){

      this.navCtrl.push( detalleComponent, { lista, i } );
  }
}
