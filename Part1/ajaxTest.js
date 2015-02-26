function changeAjaxContent() {
    var request;

    if (window.XMLHttpRequest) {
        // create the XMLHttpRequest
        // code for IE7+, Firefox, Chrome, Opera, Safari
        // this should be the standard nowadays.
        request = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    request.onreadystatechange = function() {
        if (request.readyState == XMLHttpRequest.DONE ) {
            if(request.status == 200){
                document.getElementById("ajaxContent").innerHTML = request.responseText;
            }
            else if(request.status == 400) {
                alert('There was an error 400')
            }
            else {
                alert('something else other than 200 was returned')
            }
        }
    }

    request.open("GET", "ajaxDiv.html", true);
    request.send();
}
