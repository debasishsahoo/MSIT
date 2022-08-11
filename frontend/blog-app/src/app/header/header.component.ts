import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  navbarcollapsed = true;
  toggleNavbarCollapesing() {
    this.navbarcollapsed = !this.navbarcollapsed;
  }

  constructor() {}

  ngOnInit(): void {}
}
