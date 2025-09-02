import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-text-display',
  templateUrl: './image-text-display.component.html',
  styleUrls: ['./image-text-display.component.scss'],
})
export class ImageTextDisplayComponent {
  @Input() content: any; // receives object with image + text
}
