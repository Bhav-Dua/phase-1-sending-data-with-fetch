
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
        .then(resp => resp.json())
        .then(data => appendId(data))
        .catch(error => {
            const errormsg = document.createElement('p');
            errormsg.textContent = error.message;
            document.querySelector('body').appendChild(errormsg);
        })
}

function appendId(data) {
    const userId = document.createElement('p');
    userId.textContent = `${data.id}`;
    document.querySelector('body').appendChild(userId);
}

