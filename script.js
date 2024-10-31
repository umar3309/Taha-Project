document.getElementById('rentalForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    // Gather input values
    const date = document.getElementById('date').value;
    const name = document.getElementById('name').value;
    const numbers = document.getElementById('numbers').value;
    const rentPaid = document.getElementById('rentPaid').value;
    const amountPaid = document.getElementById('amountPaid').value;
    const amountRemaining = document.getElementById('amountRemaining').value;

    // Create a new entry
    const entry = `
        <div class="entry">
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Contact:</strong> ${numbers}</p>
            <p><strong>Rent Paid:</strong> ${rentPaid}</p>
            <p><strong>Amount Paid:</strong> ${amountPaid}</p>
            <p><strong>Amount Remaining:</strong> ${amountRemaining}</p>
        </div>
    `;

    // Append the entry to the entries div
    document.getElementById('entries').innerHTML += entry;

    // Clear the form
    document.getElementById('rentalForm').reset();
});
