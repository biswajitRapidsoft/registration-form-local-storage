let fname, gender, dob, ageValue, address;
let count = 0;

function addtotable(e) {
    e.preventDefault();
    fname = document.getElementById("fname").value;
    if (document.getElementById("male").checked) {
        gender = document.getElementById("male").value;
    }
    if (document.getElementById("female").checked) {
        gender = document.getElementById("female").value;
    }
    dob = document.getElementById("dob").value;
    ageValue = document.getElementById("age").value;
    address = document.getElementById("address").value;
    const dataform = document.getElementById("dataform");
    dataform.reset();
    const obj = {
        fname: fname,
        gender: gender,
        dob: dob,
        ageValue: ageValue,
        address: address
    }
    
    addchild(obj);
    count++;

    localStorage.setItem(count, JSON.stringify(obj));

}
function addchild(obj) {
    let newelement = document.createElement("tr");
    let newname = document.createElement("td");
    let newgender = document.createElement("td");
    let newdob = document.createElement("td");
    let newage = document.createElement("td");
    let newaddress = document.createElement("td");
    newname.innerHTML = obj.fname;
    newgender.innerHTML = obj.gender;
    newdob.innerHTML = obj.dob;
    newage.innerHTML = obj.ageValue;
    newaddress.innerHTML = obj.address;
    newelement.appendChild(newname);
    newelement.appendChild(newgender);
    newelement.appendChild(newdob);
    newelement.appendChild(newage);
    newelement.appendChild(newaddress);
    const table = document.getElementById("table");
    table.appendChild(newelement);
}

window.onload = function () {


    var values = [];
    keys = Object.keys(localStorage);
    i = keys.length;
    count = i;

    while (i--) {
        values.push(localStorage.getItem(keys[i]));
    }

    values.forEach((element) => addchild(JSON.parse(element)));

}