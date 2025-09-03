import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-footer-modal',
  templateUrl: './footer-modal.component.html',
  styleUrls: ['./footer-modal.component.scss'],
})
export class FooterModalComponent implements OnInit, OnDestroy {
  // @Input() isOpen: boolean = false;
  // @Input() title: string = '';
  // @Input() content: string = '';
  // @Output() close = new EventEmitter<void>();

  // ngOnInit(): void {
  //   if (this.isOpen) {
  //     document.body.style.overflow = 'hidden'; // disable background scroll
  //   }
  // }

  // ngOnDestroy(): void {
  //   document.body.style.overflow = ''; // restore scroll
  // }

  // onClose() {
  //   this.close.emit();
  // }

  @Input() isOpen: boolean = false;
  @Input() title: string = '';
  @Input() content: string = '';
  @Output() close = new EventEmitter<void>();

  private scrollY = 0;

  ngOnInit(): void {
    if (this.isOpen) {
      this.scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${this.scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
    }
  }

  ngOnDestroy(): void {
    // restore scroll
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.overflow = '';

    window.scrollTo(0, this.scrollY);
  }

  onClose() {
    this.close.emit();
  }
}
