export async function sendMail(contactObject) {

    console.log(contactObject);
    
    try {
        var result = await fetch('http://192.168.1.5:53509/contactus', {
            method: "POST", 
            cache: "no-cache", 
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactObject)
        });

        var res = await result.text();
        console.log(`Result: ${res}`);
    }
    catch (err) {
        console.log(err);
    }
    /*fetch('http://api.liverpoolfchub.com/hello', {headers: {"Accept" : "application/json"} })
    .then(function(response) {
    return response.json();
    })
    .then(function(myJson) {
    console.log(JSON.stringify(myJson));
    }).catch((err) => console.log(err));
    */
    console.log('After send mail');
}