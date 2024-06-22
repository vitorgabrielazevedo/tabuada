// selecionando elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicatorInput = document.querySelector("#multiplicator");
const multiplicationTitle = document.querySelector(
  "#multiplication-title span"
);
const multiplicationTable = document.querySelector(
  "#multiplication-operations"
);

// funções
const createTable = (number, multiplicatorNumber) => {
  multiplicationTable.innerHTML = "";

  for (let i = 1; i <= multiplicatorNumber; i++) {
    const result = number * i;

    const template = `
        <div class="row">
            <div class="operation">${number} x ${i} =</div>
            <div class="result">${result}</div>
        </div>`;

    const parser = new DOMParser();

    const htmlTemplate = parser.parseFromString(template, "text/html");

    const row = htmlTemplate.querySelector(".row");

    multiplicationTable.appendChild(row);
  }

  multiplicationTitle.innerText = number;
};

// eventos
multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const number = +numberInput.value;
  const multiplicator = +multiplicatorInput.value;

  if (!number || !multiplicator) {
    return;
  }

  createTable(number, multiplicator);
});
