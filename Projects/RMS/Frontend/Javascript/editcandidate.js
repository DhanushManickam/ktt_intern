fetch('../HTML/editcandidate.html')
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML('beforeend', html);

    const modal = document.getElementById('editModal');
    const closeBtn = document.querySelector('.editclosebtn');

    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    document.querySelectorAll('.openEditModalBtn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        modal.style.display = 'block';
      });
    });

    window.addEventListener('click', e => {
      if (e.target === modal) modal.style.display = 'none';
    });

  });

function toggleOtherInput() {
  const select = document.getElementById("source");
  const otherField = document.getElementById("referral_field");
  if (select.value === "referral") {
      otherField.style.display = "block";
  } else {
      otherField.style.display = "none";
  }
}
