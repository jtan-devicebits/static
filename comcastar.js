variables = {}
function SetVariable(variable, value) {
    console.log(variable + ' : ' + value)
    variables[variable] = value
}

function GenerateNotes() {
    var notes = "NOTES:\n"
    for (const [key, value] of Object.entries(variables)) {
        console.log(key, value);
        notes = notes + key + ' : ' + value + '\n'
    }
    document.getElementById("generated_codes").innerHTML = notes;
}