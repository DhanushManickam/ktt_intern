document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const email = document.getElementById('email_id').value;
      const password = document.getElementById('password').value;
  
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email_id: email, password })
        });
  
        const data = await response.json();
  
        if (response.ok) {
          localStorage.setItem('jwtToken', data.token);  
          window.location.href = '/candidate'; 
        } else {
          alert('Invalid login credentials');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Login failed');
      }
    });
  });
  