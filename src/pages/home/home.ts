import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetallePaquetePage } from '../detalle-paquete/detalle-paquete';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  // detalles de paquetes
  verDetalles(){
    this.navCtrl.push(DetallePaquetePage);
  }
}
