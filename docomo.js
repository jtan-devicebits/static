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

function GenerateNotes(value) {

    var local_variables = JSON.parse(localStorage.getItem('local_variables'))
    var notes = "NOTES:\n\n"
    for (const [key, value] of Object.entries(local_variables)) {
        console.log(key, value);
        notes = notes + key + ' : ' + value + '\n'
    }
    notes = notes + value;
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

    document.getElementById("generate").innerHTML = "Copied to clipboard";
    
    document.getElementsByClassName("sc-gzOgki PkwIt btn btn-default")[0].click();
}
