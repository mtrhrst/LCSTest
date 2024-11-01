import * as Diff from 'diff';

const one = `neuer langer text 
über mehrere Zeilen mit einer Änderung

Alter Text

Tschüss`;

const other = `neuer langer text 33

über mehrere Zeilen mit einer Änderung

neuer Absatz
Tschüss`;

const color = '';
    
let span = null;

const diff = Diff.diffChars(one, other),
    display = document.getElementById('display'),
    fragment = document.createDocumentFragment();

diff.forEach((part) => {
  // green for additions, red for deletions
  // grey for common parts
  const color = part.added ? 'green' :
    part.removed ? 'red' : 'grey';
  span = document.createElement('span');
  span.style.color = color;
  span.appendChild(document
    .createTextNode(part.value));
  fragment.appendChild(span);
});

display?.appendChild(fragment);


console.log(diff);