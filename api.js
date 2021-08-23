async function postData(data = {}) {
    // Default options are marked with *
    let url = 'https://api.sendgrid.com/v3/mail/send';
    const response = await fetch(url, {
        method: 'POST',
        mode: 'no-cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer $KEY"
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    console.log(response);
    return response.json(); // parses JSON response into native JavaScript objects
}
var dataemail = { "personalizations": [{ "to": [{ "email": "srujan.deshpande@pesu.pes.edu" }] }], "from": { "email": "test@example.com" }, "subject": "Sending with SendGrid is Fun", "content": [{ "type": "text/plain", "value": "and easy to do anywhere, even with cURL" }] }

postData(dataemail)
    .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
    });
