import { Component } from '@angular/core';
import { Color } from './enums/color.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'enum-unittest';
  colors = Color;
}
