export function CleanForm(): void {
  // remet la barre sélectionné en inactive
  const focus = document.getElementsByClassName('btn btn-secondary active');
  if (focus[0] !== undefined) {
    focus[0].setAttribute('class', 'btn btn-secondary');
  }

  let currentDiv = document.getElementById('liens');
  let div = document.getElementById('div_liens');
  currentDiv.removeChild(div);

  currentDiv = document.getElementById('infos');
  div = document.getElementById('div_infos');
  currentDiv.removeChild(div);

  DebutForm();
}

// permet de créer la div parent
export function DebutForm(): void {
  let currentDiv = document.getElementById('liens');

  let div = document.createElement('div');
  currentDiv.appendChild(div);
  div.setAttribute('id', 'div_liens');


  currentDiv = document.getElementById('infos');

  div = document.createElement('div');
  currentDiv.appendChild(div);
  div.setAttribute('id', 'div_infos');
}

// permet d'ajouter du texte au formulaire
export function AjoutTexte(valueString, idString, idDiv): void {
  const div = document.getElementById(idDiv);

  const p = document.createElement('p');
  div.appendChild(p);
  p.setAttribute('id', idString);
  p.innerHTML = '&nbsp; ' + valueString;
}
