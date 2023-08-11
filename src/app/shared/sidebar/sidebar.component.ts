import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any[] = [];

  constructor(
    private router: Router,
    private sideBar: SidebarService
  ) {
    this.menuItems = this.sideBar.menu;
  }

  ngOnInit(): void {
  }

}
