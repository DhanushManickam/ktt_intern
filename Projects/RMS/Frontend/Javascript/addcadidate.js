fetch('../HTML/addcandidate.html')
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML('beforeend', html);

    const openBtn = document.getElementById('openAddModalLink');
    const modal = document.getElementById('addModal');
    const closeBtn = document.querySelector('.addclosebtn');

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

    const skillInput = document.querySelector("input[name='basic']");
    new Tagify(skillInput);
    let skills = tagify.value.map(tag => tag.value).join(',');
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

