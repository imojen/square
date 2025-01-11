import { Component } from '@angular/core';
import { PlayAreaComponent } from './components/play-area.component';
import { SideMenuComponent } from './components/side-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayAreaComponent, SideMenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
