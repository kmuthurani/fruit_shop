let fruit_details = [];

function displaylist(e) {
    e.preventDefault();

    const details =
    {
        fruitname: document.getElementById('frname').value,
        price: document.getElementById('price').value,
    };
    
    fruit_details = JSON.parse(localStorage.getItem("fruit")) || [];

    localStorage.setItem("fruit", JSON.stringify([...fruit_details, details]));
    window.alert("Fruits added successfully")
    e.target.reset();
}

function billing(e) {
    e.preventDefault();
    window.location.href = './bill.html';
}
function frlist(e) {
    e.preventDefault();
    window.location.href = './fruit_list.html'
}
