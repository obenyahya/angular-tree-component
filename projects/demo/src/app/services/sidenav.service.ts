import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private collapsed = true;
  private sidenavCol = new BehaviorSubject<boolean>(this.collapsed);

  constructor() {}

  get sidenavCollapsed$() {
    return this.sidenavCol;
  }

  set sidenavCollapsed(collapsed: boolean) {
    this.collapsed = collapsed;
    this.sidenavCol.next(collapsed);
  }

  toggleSidenav() {
    this.collapsed = !this.collapsed;
    this.sidenavCollapsed = this.collapsed;
  }
}
