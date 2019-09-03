function submitDate() {
    var value = document.getElementById("from").value
    let date = value.split("-");
    if (date.length >= 3)
        if (isValidDate(parseInt(date[0]), parseInt(date[1]), parseInt(date[2])))
            displyResult("Valid Date")
        else
            displyResult("Invalid Date")
    else
        displyResult("Wrong Format Ex: 01-01-2006")
    return false;
}

function displyResult(result) {
    document.getElementById("result").innerHTML = result; 
}