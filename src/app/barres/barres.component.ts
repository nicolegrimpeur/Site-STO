import { Component, OnInit } from '@angular/core';
import { ClassText } from './classText';

@Component({
  selector: 'app-barres',
  templateUrl: './barres.component.html',
  styleUrls: ['./barres.component.scss']
})
export class BarresComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    this.Add_event();
  }

  // ajoute les événements aux différents labels
  Add_event(): void {
    const planning = new ClassText('laverie', 'texte_laverie', 'div_liens');
    const ucopia = new ClassText('ucopia', 'texte_ucopia', 'div_liens');

    const responsables = new ClassText('responsables', 'texte_responsables', 'div_infos');
    const evenements = new ClassText('evenements', 'texte_evenements', 'div_infos');
    const covid = new ClassText('covid', 'texte_covid', 'div_infos');
    const petitDej = new ClassText('petit_dej', 'texte_petit_dej', 'div_infos');
    const loisir = new ClassText('5eme', 'texte_5eme', 'div_infos');
    const colis = new ClassText('colis', 'texte_colis', 'div_infos');
    const ru = new ClassText('ru', 'texte_ru', 'div_infos');
  }
}
