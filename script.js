let submitBtn = document.querySelector("form");

submitBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let name = document.getElementById("exampleInputName").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let dob = document.getElementById("exampleInputDOB").value;
    let age = document.querySelector('select.form-select').value;
    let address = document.getElementById("textarea").value;

    let formData = {
        name: name,
        gender: gender,
        dob: dob,
        age: age,
        address: address
    };

    let storedData = JSON.parse(localStorage.getItem("formData")) || [];
    storedData.push(formData);
    localStorage.setItem("formData", JSON.stringify(storedData));

    displayFormData(storedData);

    document.getElementById("exampleInputName").value = "";
    document.getElementById("inlineRadio1").checked = false;
    document.getElementById("inlineRadio2").checked = false;
    document.getElementById("exampleInputDOB").value = "";
    document.querySelector('select.form-select').selectedIndex = 0;
    document.getElementById("textarea").value = "";
    document.getElementById("exampleCheck1").checked = false;
});

function displayFormData(formDataArray) {
    let tableBody = document.querySelector("tbody");
    tableBody.innerHTML = "";

    formDataArray.forEach((formData) => {
        let newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${formData.name}</td>
            <td>${formData.gender}</td>
            <td>${formData.dob}</td>
            <td>${formData.age}</td>
            <td>${formData.address}</td>
        `;
        tableBody.appendChild(newRow);
    });
}

window.onload = function() {
    let storedData = JSON.parse(localStorage.getItem("formData")) || [];
    displayFormData(storedData);
};