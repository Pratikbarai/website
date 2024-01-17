const acceptButton = document.getElementById('accept-button');
const declineButton = document.getElementById('decline-button');

acceptButton.addEventListener('click', () => {
    // Handle acceptance here
    document.getElementById('response').innerText = 'She said yes!';
});

declineButton.addEventListener('click', () => {
    // Handle decline here
    document.getElementById('response').innerText = 'She said no...';
});