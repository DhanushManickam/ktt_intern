fetch('../HTML/addcandidate.html')
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML('beforeend', html);

    const openBtn = document.getElementById('openModalLink');
    const modal = document.getElementById('customModal');
    const closeBtn = document.querySelector('.closebtn');

    openBtn.addEventListener('click', e => {
      e.preventDefault();
      modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', e => {
      if (e.target === modal) modal.style.display = 'none';
    });
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const tab = button.getAttribute('data-tab');

        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        tabContents.forEach(content => {
          content.classList.remove('active');
          if (content.id === tab) content.classList.add('active');
        });
      });
    });
});
