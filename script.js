function displayUserData(user) {
  document.getElementById('avatar').src = user.avatar_url || 'default-avatar.png';
  document.getElementById('name').textContent = user.name || 'Nama Tidak Tersedia';
  document.getElementById('registration-date').textContent = 'Didaftarkan pada: ' + new Date(user.created_at).toLocaleDateString();
  document.getElementById('last-update').textContent = 'Terakhir update: ' + new Date(user.updated_at).toLocaleString();
}

document.getElementById('search-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const username = document.getElementById('username-input').value;
  getUserData(username);
});

function getUserData(username) {
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
      displayUserData(data);
    })
    .catch(error => console.error('Error fetching data:', error));
}
