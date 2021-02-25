import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    this.eventResize(this);

    // ajoute un événement qui permet de modifier la couleur de la barre
    window.addEventListener('scroll', this.eventScroll);
    const that = this;
    window.addEventListener('resize', () => {
      that.eventResize(that);
    });
  }

  eventScroll(): void {
    const nav = document.getElementsByTagName('nav');
    if (window.scrollY) {
      nav[0].setAttribute('class', 'black');
    } else {
      nav[0].removeAttribute('class');
    }
  }

  eventResize(that: any): void {
    const ul = document.getElementsByTagName('ul');
    const logo = document.getElementsByClassName('logo');
    if (that.widthTel()) {
      if (ul[0].childElementCount === 3) {
        for (let i = 0; i < 3; i++) {
          ul[0].removeChild(ul[0].lastChild);
        }
      }
      logo[0].setAttribute('style', 'text-align: center');
      logo[0].setAttribute('class', 'logo');
    } else {
      if (ul[0].childElementCount === 0) {
        let div;
        let li;
        let a;
        for (let i = 0; i < 3; i++) {
          div = document.createElement('div');
          div.setAttribute('class', 'col-md-4 col-lg-4 col-xl-4');
          ul[0].appendChild(div);

          li = document.createElement('li');
          div.appendChild(li);

          a = document.createElement('a');
          a.setAttribute('href', ['#', '#lien', '#footer'][i]);
          a.setAttribute('class', 'boutons');
          a.innerHTML = ['Accueil', 'Liens / Infos', 'À Propos'][i];
          li.appendChild(a);
        }
        logo[0].setAttribute('style', 'text-align: left');
        logo[0].setAttribute('class', 'logo col-6 mr-auto');
      }
    }
  }

  widthTel(): boolean {
    return window.innerWidth <= 800;
  }
}


