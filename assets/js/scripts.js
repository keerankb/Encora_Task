// function onFormSubmit() {
// 	var formData = readFormData();
// 	insertNewData(formData);
// }


// function readFormData() {
// 	var formData ={};
// 	formData["titleContent"] = document.getElementById("titleContent").value;
// 	formData["bodyContent"] = document.getElementById("bodyContent").value;
// 	return formData;
// }

// function insertNewData(data) {
// 	var table = document.getElementById("recordList").getElementByTagName('tbody')[0];
// 	var newRow = table.insertRow(table.length);
// 	cell1 = newRow.insertCell(0);
// 	cell1.innerHTML = data.titleContent;
// 	cell2 = newRow.insertCell(1);
// 	cell2.innerHTML = data.bodyContent;
// 	// cell3 = newRow.insertCell(0);
// 	// cell3.innerHTML = `<a>Edit</a><a>Delete</a>`;


// }


var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["empCode"] = document.getElementById("empCode").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = `<a onClick="onEdit(this)" class="edit-incard"><i class="fa fa-edit"></i></a>
                        <a onClick="onDelete(this)" class="close-incard"><i class="fa fa-times"></i></a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empCode;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
