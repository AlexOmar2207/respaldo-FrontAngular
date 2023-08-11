import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  templateUrl: './accoun-settings.component.html',
  styles: [
  ]
})
export class AccounSettingsComponent implements OnInit {

  constructor(
    private sS: SettingsService
  ) {
  }

  ngOnInit(): void {
    this.sS.checkCurrentTheme();
  }

  changeTheme( value: string ){
    this.sS.changeTheme(value)
  }





}
