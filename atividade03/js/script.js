selectedRow = null;

function onFormSubmit() {
    var formData = readFormData();
    insertNewRecord(formData);
    resetForm();
}
function readFormData() {
    var formData ={};
    formData["matricula"] = document.getElementById("matricula").value;
    formData["nome"] = document.getElementById("nome").value;
    formData["dataNascimento"] = document.getElementById("dataNascimento").value;
    formData["email"] = document.getElementById("email").value;
    formData["ddd"] = document.getElementById("ddd").value;
    formData["telefone"] = document.getElementById("telefone").value;
    formData["operadora"] = document.getElementById("operadora").value;
    formData["campus"] = document.getElementById("campus").value;
    formData["curso"] = document.getElementById("curso").value;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("listaAlunos").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.matricula;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.nome;
    cell3 = newRow.insertCell(2)
    cell3.innerHTML = '<button id="btnRemove" type="button" onclick="onRemove(this)" class="btn bg-danger text-light ">remover</button>'

}
function resetForm() {
    document.getElementById("matricula").value ="";
    document.getElementById("nome").value ="";
    document.getElementById("btnRemove").value ="";
    selectedRow = null;
}
function onRemove(td) {
    if(confirm("Confirma exclusão?")) {
        row = td.parentElement.parentElement;
        document.getElementById("listaAlunos").deleteRow(row.rowIndex);
        resetForm();
    }
}