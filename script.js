document.getElementById('donorForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    let name = document.getElementById('name').value;
    let bloodGroup = document.getElementById('bloodGroup').value;
    let contact = document.getElementById('contact').value;
    let address = document.getElementById('address').value;
    let lastDonationDate = document.getElementById('lastDonationDate').value;

    // Create a new list item
    let donorList = document.getElementById('donorList');
    let listItem = document.createElement('li');
    
    // Create a div to hold donor info and update button
    let donorInfoDiv = document.createElement('div');
    donorInfoDiv.className = "donor-info";
    
    // Donor info text
    let donorInfoText = document.createElement('span');
    donorInfoText.textContent = `${name} - ${bloodGroup} - ${contact} - ${address} - Last Donation: ${lastDonationDate}`;

    // Update button
    let updateButton = document.createElement('button');
    updateButton.textContent = 'Update Last Donation Date';
    updateButton.className = 'update-btn';
    updateButton.addEventListener('click', function() {
        let newDate = prompt('Enter new donation date (YYYY-MM-DD):', lastDonationDate);
        if (newDate) {
            donorInfoText.textContent = `${name} - ${bloodGroup} - ${contact} - ${address} - Last Donation: ${newDate}`;
        }
    });

    // Append the info and button to the div
    donorInfoDiv.appendChild(donorInfoText);
    donorInfoDiv.appendChild(updateButton);
    
    // Append the div to the list item
    listItem.appendChild(donorInfoDiv);
    
    // Add the list item to the donor list
    donorList.appendChild(listItem);

    // Clear form inputs
    document.getElementById('name').value = '';
    document.getElementById('bloodGroup').value = '';
    document.getElementById('contact').value = '';
    document.getElementById('address').value = '';
    document.getElementById('lastDonationDate').value = '';
});
