import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export function mainApp(): any {
  return platformBrowserDynamic().bootstrapModule(AppModule).then((ref) => {
  }).catch(err => console.log(err));
}

if (document.readyState === 'complete') {
  mainApp();
} else {
  document.addEventListener('DOMContentLoaded', mainApp);
}
