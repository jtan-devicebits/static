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

    var copyText = notes;
    var el = document.createElement('textarea');
    el.value = copyText;
    el.setAttribute('readonly', '');
    el.style = {
        position: 'absolute',
        left: '-9999px'
    };
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

}

// var generated_codes_exist = document.getElementById("generated_codes_exist");
// if (typeof(generated_codes_exist) != 'undefined' && generated_codes_exist != null) {
//     GenerateNotes()
// }