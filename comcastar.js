variables = {}

function clearVariable(variable, value) {
    localStorage.clear()
    local_variables = {}
    local_variables[variable] = value
    localStorage.setItem('local_variables', JSON.stringify(local_variables))
}

function SetVariable(variable, value) {
    console.log(variable + ' : ' + value)
    var local_variables = JSON.parse(localStorage.getItem('local_variables'))
    local_variables[variable] = value
    localStorage.setItem('local_variables', JSON.stringify(local_variables))
}

// function GenerateNotes() {
//     var notes = "NOTES:\n\n"
//     for (const [key, value] of Object.entries(variables)) {
//         console.log(key, value);
//         notes = notes + key + ' : ' + value + '\n'
//     }
//     document.getElementById("generated_codes").innerHTML = notes;
// }

// var generated_codes_exist = document.getElementById("generated_codes_exist");
// if (typeof(generated_codes_exist) != 'undefined' && generated_codes_exist != null) {
//     GenerateNotes()
// }