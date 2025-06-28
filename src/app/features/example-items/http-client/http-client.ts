import { CommonModule, isPlatformBrowser } from '@angular/common';
import { APP_ID, Component, PLATFORM_ID, inject } from '@angular/core';
import { ItemsService } from '../services/items-service';

@Component({
  selector: 'app-http-client',
  imports: [CommonModule],
  templateUrl: './http-client.html',
  styleUrl: './http-client.css'
})
export class HttpClient {
  items: any;
  loaded: boolean;
  private platformId = inject(PLATFORM_ID);
  private appId = inject(APP_ID);
  private ItemsService = inject(ItemsService);

  constructor() {
    this.loaded = false;
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.loaded = false;
    this.ItemsService.getItems('https://jsonplaceholder.typicode.com/users')
      .subscribe(
        items => {
          this.items = items;
          this.loaded = true;
          const platform = isPlatformBrowser(this.platformId) ?
            'in the browser' : 'on the server';
          console.log(`getUsers : Running ${platform} with appId=${this.appId}`);
        });
  }

  resetUsers(): void {
    this.items = null;
    this.loaded = true;
  }

}
// Removed unused and unnecessary function stubs for Inject and isPlatformBrowser.

