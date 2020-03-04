function clearVariable(variable, value) {
    local_variables = {}
    localStorage.setItem('local_variables', JSON.stringify(local_variables))
    console.log("Emptied Local Variable")
    local_variables[variable] = value
    localStorage.setItem('local_variables', JSON.stringify(local_variables))
    console.log("Local Variable Set")
}

function SetVariable(variable, value) {
    console.log(variable + ' : ' + value)
    var local_variables = JSON.parse(localStorage.getItem('local_variables'))
    local_variables[variable] = value
    localStorage.setItem('local_variables', JSON.stringify(local_variables))
}

function GenerateNotes() {
    var local_variables = JSON.parse(localStorage.getItem('local_variables'))
    var notes = "NOTES:\n\n"
    for (const [key, value] of Object.entries(local_variables)) {
        console.log(key, value);
        notes = notes + key + ' : ' + value + '\n'
    }
    document.getElementById("generated_codes").innerHTML = notes;

    var x = document.getElementById("codes");
    x.style.display = "block";

    notes.text().select();
    document.execCommand("copy");

}
// var generated_codes_exist = document.getElementById("generated_codes_exist");
// if (typeof(generated_codes_exist) != 'undefined' && generated_codes_exist != null) {
//     GenerateNotes()
// }