import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-about-us-modal',
  templateUrl: './about-us-modal.component.html',
  styleUrls: ['./about-us-modal.component.scss'],
})
export class AboutUsModalComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter<void>();

  ngOnInit(): void {
    document.body.style.overflow = 'hidden'; // disable scroll
  }

  ngOnDestroy(): void {
    document.body.style.overflow = ''; // restore scroll
  }

  onClose() {
    this.close.emit();
  }
}
