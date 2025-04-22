fetch('../HTML/editcandidate.html')
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML('beforeend', html);

    const openBtn = document.getElementById('openEditModalLink');
    const modal = document.getElementById('editModal');
    const closeBtn = document.querySelector('.editclosebtn');

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
});

function toggleOtherInput() {
  const select = document.getElementById("source");
  const otherField = document.getElementById("referal_field");
  if (select.value === "referal") {
      otherField.style.display = "block";
  } else {
      otherField.style.display = "none";
  }
}
