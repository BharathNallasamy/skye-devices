import { Component } from '@angular/core';
import { MainService } from '../../service/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public modalService: MainService) {}
  menuOpen = false;
  aboutModal = false;
  instagramUpdatesUrl = 'https://www.linkedin.com/company/skye-devices/';

  openLink(url: string) {
    window.open(url, '_blank');
  }

  modalOpen = false;
  modalTitle = '';
  modalContent = '';
}
