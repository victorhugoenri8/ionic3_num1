import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage, Ajustes2Page,  } from "../pages/index.paginas";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabs:any=TabsPage;
  ajustes2:any=Ajustes2Page;
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menu: MenuController)
   {
    platform.ready().then(() => {
      menu.enable(true);
       menu.close();
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(pagina:any){
    this.rootPage=pagina;
   this.menu.close();

  }
}

