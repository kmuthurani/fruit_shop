function frlist(e) {
    e.preventDefault();
    window.location.href = './fruit_list.html';
}
function home(e) {
    e.preventDefault();
    window.location.href = './fruits_shop.html'
}

let fruit_bill = [];

let fruit_details = localStorage.getItem("fruit") !== undefined && JSON.parse(localStorage.getItem("fruit"))

function displaylist(e) {
    e.preventDefault();

    const details = {
        fruits: document.getElementById('select').value,
        quantity: document.getElementById('quantity').value,
    };

    fruit_bill = [...fruit_bill, details];

    let tablelist = document.getElementById("billdata");

    let tableBody = [];

    let total = 0;

    // Build table rows and calculate total properly
    for (let index = 0; index < fruit_bill.length; index++) {
        let currentFruit = fruit_bill[index];
        let price = fruit_details?.find((value) => value?.fruitname === currentFruit?.fruits)?.price || 0;
        let amount = Number(currentFruit?.quantity) * Number(price);
        total += amount;

        tableBody += `<tr>
            <td>${index + 1}</td>
            <td>${currentFruit.fruits}</td>
            <td>${amount}</td>
        </tr>`;
    }

    tablelist.innerHTML = tableBody;

    document.getElementById("totalamt").value = total;
}

window.onload = function () {

    let tablelist = document.getElementById("select");

    let tableBody = [];

    for (let index = 0; index < fruit_details.length; index++) {
        tableBody += `<option value=${fruit_details[index]?.fruitname}>${fruit_details[index]?.fruitname}</option>`
    }

    tablelist.innerHTML = tableBody;
};
