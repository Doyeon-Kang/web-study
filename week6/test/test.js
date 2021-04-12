
let han, eng;
let child = document.createElement('tr');

let dictionary = document.getElementsByName('dict');

function create() {
  han = document.getElementById('han').value;
  eng = document.getElementById('eng').value;
  console.log(han);
  console.log(eng);
  
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  const textNode_han = document.createTextNode(han);
  const textNode_eng = document.createTextNode(eng);
  let td2 = tr.appendChild(td);
  td2 = td2.appendChild(td);
  td2.appendChild(textNode_han);
  td2.appendChild(textNode_eng);

  document.getElementById('dict').append(tr);
}