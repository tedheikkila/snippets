// gets the terms from the term.json file and formats properly 
console.log('test');
const terms = document.getElementById('terms');
const termButton = document.getElementById('term-btn');

const getTerms = async () => {
  const result = await fetch('/terms', {
    method: 'GET',
  });
  const json = await result.json();
  return json;
};

const renderTerm = (term) => {
  const termLink = document.createElement('p');
  const termDefinition = document.createElement('p');

  termDefinition.classList.add('m-5');

  termLink.innerHTML = `<a href=${term.url} target="_blank">${term.term}</a>`;
  termDefinition.innerText = term.definition;
  terms.appendChild(termLink);
  terms.appendChild(termDefinition);
};

const buttonHandler = () =>
  getTerms().then((response) => response.forEach((item) => renderTerm(item)));

termButton.addEventListener('click', buttonHandler);
