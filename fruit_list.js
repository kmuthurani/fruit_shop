function billing(e) {
    e.preventDefault();
    window.location.href = './bill.html';
}
function home(e) {
    e.preventDefault();
    window.location.href = './fruits_shop.html'
}
window.onload = function () {
    let fruit_details = localStorage.getItem("fruit") !== undefined && JSON.parse(localStorage.getItem("fruit"))

    console.log("listcheck", localStorage.getItem("fruit"))

    let tablelist = document.getElementById("frtabledata");

    let tableBody = [];

    for (let index = 0; index < fruit_details.length; index++) {
        tableBody += `<tr>
    <td>${index + 1}</td>
    <td>${fruit_details[index]?.fruitname}</td>
    <td>${fruit_details[index]?.price}</td>
    </tr>`
    }

    tablelist.innerHTML = tableBody;
};

