import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from "../index.paginas";


@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

	//este objeto se usa en el .html y se envia como parametrao a la funcion
	parametroAPasar:any[]=[  
	{
		nombre:"Fernando",
		edad:59
	},
	{
		nombre:"RAUL",
		edad:34
	}

	];

	pintar: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
  }

  //se recibe el obleto y se envia al modal como oblljeto clave-valor
   presentModal(parametro){
   		 const modal = this.modalCtrl.create(ModalPage, {"envio2" : parametro});
   				 modal.present();

   				 //obtener los parametos enviados desde el modal

   				 modal.onDidDismiss(parametros => {

   				 	if(parametros){
   				 		console.log("data desde el modal");
   				 	console.log(parametros);
   				 	//this.pintar=parametros;
   				 	let nn=document.getElementById("hh");
                     nn.innerHTML=`<div><ion-list  >
		<ion-item 
		
		> ${parametros[0].ciudad} </ion-item>
	</ion-list></div>`;


   				 }else{
   				 	console.log("no hay nada")
   				 }
   				 	
   				 })
   				 
  								}

}
