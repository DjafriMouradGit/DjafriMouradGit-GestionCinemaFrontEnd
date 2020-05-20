import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output()
  toggleSideBarForMe: EventEmitter<any> = new EventEmitter<any>();

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }
}
