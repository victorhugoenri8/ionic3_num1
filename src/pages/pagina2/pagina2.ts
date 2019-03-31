import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pagina3Page} from "../index.paginas"




@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

	pagina3:any= Pagina3Page;

	mutantes:any[]=[  
		{
			nombre : "magneto",
			poder : "cotrolar metal"
		},
		{
			nombre : "batman",
			poder : "volar"
		},
		{
			nombre : "robin",
			poder : "estorbar"
		},
		{
			nombre : "superman",
			poder : "todos"
		}
	]

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  
  }

     	irpagina3( mutante:any ){

  		this.navCtrl.push( Pagina3Page, { "envio": mutante })
  	}

}
