function toggleOtherField() {
    const select = document.getElementById('status');
    const otherFields = document.getElementsByClassName('otherField');
  
    for (let i = 0; i < otherFields.length; i++) {
      otherFields[i].style.display = (select.value === 'redo') ? 'block' : 'none';
    }
  }
  