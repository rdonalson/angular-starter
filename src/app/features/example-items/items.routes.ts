import { Routes } from '@angular/router';
import { Items } from './items';
import { NotFound } from '../not-found/not-found';

export const routes: Routes = [
  {
    path: '', component: Items, children: [
      { path: 'httpclient', loadComponent: () => import('./http-client/http-client').then(mod => mod.HttpClient) }
    ],
  },
  { path: '**', component: NotFound },
];
