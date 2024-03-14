
function SendPost(url, body) {
    console.log("Body: " + body )
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText

}

function SendPublication() {
    
    event.preventDefault()

    let url = ""

    var username = document.getElementById("input-username").value

    var description = document.getElementById("input-description").value

    var imagelink = document.getElementById("input-imagelink").value

    console.log("Username: " + document.getElementById("input-username").value)

    console.log("Description: " + document.getElementById("input-description").value)

    console.log("Image Link: " + document.getElementById("input-imagelink").value)

    body = {
        "username": username,
        "description": description,
        "imagelink": imagelink
    }

    SendPost(url, body)
}