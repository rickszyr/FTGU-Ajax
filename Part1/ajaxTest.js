function changeAjaxContent() {
    var request;

    if (window.XMLHttpRequest) {
        // create the XMLHttpRequest
        // code for IE7+, Firefox, Chrome, Opera, Safari
        // this should be the standard nowadays, actually they comprise ~80%+ of all used browsers.
        request = new XMLHttpRequest();
    } else {
        // code for IE6, IE5 - this should be no longer necessary. IE6 users are approximately 2% of all browser users.
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //callback function for when response is received from the server.
    request.onreadystatechange = function () {
        if (request.readyState == XMLHttpRequest.DONE) {
            if (request.status == 200) {
                document.getElementById("ajaxContent").innerHTML = request.responseText;
            }
            else if (request.status == 400) {
                alert('There was an error 400')
            }
            else {
                alert('something else other than 200 was returned')
            }
        }
    }
    request.open("GET", "ajaxDiv.html");
    request.send();
}