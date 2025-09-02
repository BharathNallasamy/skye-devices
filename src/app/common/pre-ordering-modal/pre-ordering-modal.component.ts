import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-pre-ordering-modal',
  templateUrl: './pre-ordering-modal.component.html',
  styleUrls: ['./pre-ordering-modal.component.scss'],
})
export class PreOrderingModalComponent implements OnInit, OnDestroy {
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
