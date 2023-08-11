import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private theme = document.querySelector('#theme');

  constructor() {
    const url = localStorage.getItem('theme') || './assets/css/colors/default.css'
    this.theme?.setAttribute('href', url)
  }

  changeTheme( value: string ){
    const url = `./assets/css/colors/${value}.css`
    this.theme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(){
    const links: NodeListOf<Element> = document.querySelectorAll('.selector');

      links.forEach( (element) => {

      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnUrlTheme = `./assets/css/colors/${btnTheme}.css`;
      const currenTheme = this.theme?.getAttribute('href');

      if( btnUrlTheme === currenTheme){
        element.classList.add('working')
      }

    })

  }

}
