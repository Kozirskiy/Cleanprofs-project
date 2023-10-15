// We get references to form elements

const form = document.getElementById('subscriptionForm');
const postcodeInput = document.getElementById('postcode');
const houseNumberInput  = document.getElementById('houseNumber');
const extensionInput = document.getElementById('extension');
const checkButton  = document.getElementById('checkButton');

// Add an event handler for the "Check" button

checkButton.addEventListener('click', ()=> {
    // We get data from the input fields
    const postcode = postcodeInput.value;
    const houseNumber = houseNumberInput.value;
    const extension = extensionInput.value;


    // Send a request to the API using Fetch
    fetch(`https://example.com/api/endpoint?postcode=${postcode}&houseNumber=${houseNumber}&extension=${extension}`)
    .then(response => response.json())
    .then(data => {

        // Process the result from the API

        console.log(data); // Output the result to the console
    })
    .catch(error => {
        console.error("Error getting data from API:", error);
    });




});