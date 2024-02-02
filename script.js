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
  // Menampilkan pesan "Loading..." selama pengambilan data
  document.getElementById('name').textContent = 'Loading...';

  // Melakukan fetch ke API GitHub
  fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      // Memeriksa apakah respons dari API berhasil (status code 200)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Menampilkan informasi pengguna pada halaman web
      displayUserData(data);
    })
    .catch(error => {
      // Menangani kesalahan selama pengambilan data
      document.getElementById('name').textContent = 'User tidak ditemukan';
      console.error('Error fetching data:', error);
    });
}
