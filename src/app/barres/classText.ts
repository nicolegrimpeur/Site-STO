import { CleanForm, AjoutTexte } from './formulaire';
import json from '../../assets/textes.json';

export class ClassText {
  private readonly idBarre: string;
  private readonly idTexte: string;
  private readonly idDiv: string;
  constructor(idBarre: string, idTexte: string, idDiv: string) {
    this.idBarre = idBarre;
    this.idTexte = idTexte;
    this.idDiv = idDiv;
    this.Event_click();
  }

  Event_click(): void {
    const click = document.getElementById(this.idBarre);
    const that = this;
    click.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      that.Texte();
    });
  }

  Texte(): void {
    if (document.getElementById(this.idTexte) == null) {
      // réinitialise la div_liens et la div_infos a des barres vides, prêtes à accueillir le texte
      CleanForm();

      // affiche le formulaire dans la div_infos
      for (const value of json[this.idBarre]) {
        AjoutTexte(value, this.idTexte, this.idDiv);
      }

      // passe la barre sélectionné en barre active
      const focus = document.getElementById(this.idBarre);
      focus.setAttribute('class', 'btn btn-secondary active');
    } else {
      CleanForm();
    }
  }
}
