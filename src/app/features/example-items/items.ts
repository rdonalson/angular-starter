import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-items',
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './items.html',
  styleUrl: './items.css'
})
export class Items {

}
