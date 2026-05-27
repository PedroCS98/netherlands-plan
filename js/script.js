//faq logic
const questions = document.querySelectorAll('.faq dt');

for (let i = 0; i<questions.length; i++) {
    questions[i].addEventListener('click', () => {
        const answer = questions[i].nextElementSibling.classList.toggle('open');
        });
};


//table logic
const rows = document.querySelectorAll('.budget-counter tr');

function updateTable() {

    let columnTotals = [0, 0, 0, 0];

    for (let i = 0; i < rows.length - 1; i++) {

        const inputs = rows[i].querySelectorAll('input');

        let rowTotal = 0;

        for (let j = 0; j < inputs.length; j++) {

            let value = Number(inputs[j].value);

            rowTotal += value;

            columnTotals[j] += value;
        }

        rows[i].querySelector('.row-total').textContent = rowTotal;
    }

    const totalRow = rows[rows.length - 1].children;//

    let grandTotal = 0;

    for (let i = 0; i < columnTotals.length; i++) {

        totalRow[i + 1].textContent = columnTotals[i];

        grandTotal += columnTotals[i];
    }

    totalRow[totalRow.length - 1].textContent = grandTotal;
}

updateTable();

const tableInputs = document.querySelectorAll('.budget-counter input');

tableInputs.forEach(input => {
    input.addEventListener('input', updateTable);
});
