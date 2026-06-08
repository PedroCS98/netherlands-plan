//FAQ logic
const questions = document.querySelectorAll('.faq dt');
if (questions.length > 0){
    for (let i = 0; i<questions.length; i++) {
        questions[i].addEventListener('click', () => {
            questions[i].classList.toggle('open');
            questions[i].nextElementSibling.classList.toggle('open');
        });
    }
}

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

if (rows.length > 0){
    updateTable();
}

const tableInputs = document.querySelectorAll('.budget-counter input');

if (tableInputs.length > 0){
    tableInputs.forEach(input => {
        input.addEventListener('input', updateTable);
    });
}
