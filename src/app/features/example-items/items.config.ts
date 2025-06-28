import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './items.routes';

export const itemsConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
