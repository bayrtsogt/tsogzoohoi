// Get references to the buttons
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

// Function to randomly move the button
function moveButton(button) {
    button.style.position = 'absolute';
    button.style.left = `${Math.random() * 80}%`;
    button.style.top = `${Math.random() * 80}%`;
}

// Add event listener for mouseover on the "No" button
noButton.addEventListener('mouseover', () => {
    moveButton(noButton);
});

