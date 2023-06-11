const loremForm = document.getElementById('loremForm');
const amountInput = document.getElementById('amount');
const resultContainer = document.getElementById('resultContainer');

loremForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const amount = amountInput.value;

  if (amount === '') {
    return;
  }

  resultContainer.innerHTML = '';

  history.pushState({}, 'Lorem Ipsum', `?amount=${amount}`);

  fetch(`/lorem?amount=${amount}`)
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    const paragraphs = data.paragraphs;

    for (const paragraph of paragraphs) {
      const element = document.createElement('p');

      const textNode = document.createTextNode(paragraph);
      
      element.appendChild(textNode);

      resultContainer.appendChild(element);
    }
  })
  .catch((error) => {
    console.log(error);
  });
});
