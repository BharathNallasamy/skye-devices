import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-text-dispay2',
  templateUrl: './image-text-dispay2.component.html',
  styleUrls: ['./image-text-dispay2.component.scss'],
})
export class ImageTextDispay2Component {
  @Input() contents2: any; // receives object with image + text
}
