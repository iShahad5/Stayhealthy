function editProfile() {
    document.getElementById('editForm').style.display = 'block';
    document.getElementById('editEmail').value = document.getElementById('email').textContent;
    document.getElementById('editPhone').value = document.getElementById('phone').textContent;
}

function saveProfile() {
    const newEmail = document.getElementById('editEmail').value;
    const newPhone = document.getElementById('editPhone').value;

    document.getElementById('email').textContent = newEmail;
    document.getElementById('phone').textContent = newPhone;

    document.getElementById('editForm').style.display = 'none';
}

function cancelEdit() {
    document.getElementById('editForm').style.display = 'none';
}