function submitVote() {
    const name = document.getElementById('name').value;
    const uid = document.getElementById('uid').value;
    const vote = document.getElementById('vote').value;

    fetch('https://<your-function-app-name>.azurewebsites.net/api/VoteFunction', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, uid, vote })
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
