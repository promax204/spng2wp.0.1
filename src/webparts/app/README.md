#Add this to your main.ts

##Dependencies
import 'reflect-metadata';
require('zone.js');

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/AppModule';


##Render
public render(): void {
  this.domElement.innerHTML = `<my-app></my-app>`;
  platformBrowserDynamic().bootstrapModule(AppModule);
}


