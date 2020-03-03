variables = {}
function SetVariable(variable, value) {
    console.log(variable + ' : ' + value)
    variables[variable] = value
}

function GenerateNotes() {
    var notes = "NOTES:\n\n"
    for (const [key, value] of Object.entries(variables)) {
        console.log(key, value);
        notes = notes + key + ' : ' + value + '\n'
    }
    document.getElementById("generated_codes").innerHTML = notes;
}

var generated_codes_exist = document.getElementById("generated_codes_exist");
if (typeof(generated_codes_exist) != 'undefined' && elementExists != null) {
    GenerateNotes()
}