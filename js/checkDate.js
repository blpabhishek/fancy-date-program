function submitDate() {
    var value = document.getElementById("from").value
    let date = value.split("-");
    if (date.length >= 3)
        if (isValidDate(date[0], date[1], date[2]))
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