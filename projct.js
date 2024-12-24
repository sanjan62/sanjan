document.getElementById('submitBtn').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;

    if (name && email && phone && dob) {
        const output = `
            <h3>Form Submission Successful!</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
        `;
        document.getElementById('output').innerHTML = output;
        document.getElementById('output').style.display = 'block';
    } else {
        alert('Please fill out all fields.');
    }
});
