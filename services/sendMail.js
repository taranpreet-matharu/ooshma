function sendMail(emailID, sender, subject, body) {
    console.log('Inside send Mail');
    /*http://182.64.19.5:51162/contactus*/
    fetch('http://api.liverpoolfchub.com/hello', {headers: {"Accept" : "application/json"} })
    .then(function(response) {
    return response.json();
    })
    .then(function(myJson) {
    console.log(JSON.stringify(myJson));
    }).catch((err) => console.log(err));

    console.log('After send mail');
}