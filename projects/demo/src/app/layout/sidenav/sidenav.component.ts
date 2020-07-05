import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav', { static: true }) private sidenav: MatSidenav;

  navCollapsed;

  constructor(private sidenavService: SidenavService) {
    this.sidenavService.sidenavCollapsed$.subscribe(col => {
      this.navCollapsed = col;
      if (this.sidenav) {
        this.sidenav.toggle(this.navCollapsed);
      }
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.sidenav.toggle(this.navCollapsed);
  }
}
