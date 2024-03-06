import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Define an array of navigation links
  navLinks: { label: string, url: string }[] = [
    { label: 'Field List', url: '/fields' },
    { label: 'Dynamic Form', url: '/form' },
    { label: 'Report', url: '/report' }
  ];
}
