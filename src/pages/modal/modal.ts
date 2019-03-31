import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  nombre:any=[];
  
  tata:any[]=[  
	{
		ciudad:"guadalajara",
		edad:590
	},
	{
		ciudad:"paris",
		edad:349
	}

	];

	

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtr: ViewController) {
                
                 this.nombre=this.navParams.get("envio2");
                 

  }


  cerarConParametros(tata){
    this.viewCtr.dismiss(tata);
    


  }

  cerarSinParametor(){
    this.viewCtr.dismiss();
    console.log("se cerro sin datos")

  }



}
