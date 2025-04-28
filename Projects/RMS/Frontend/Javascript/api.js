function getProtectedData() {
  const jwtToken = localStorage.getItem('jwtToken');

  if (jwtToken) {
    fetch('/protected-data', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${jwtToken}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log('Protected data:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  } else {
    alert('You need to log in first');
    window.location.href = '/';  
  }
}
