document.addEventListener('DOMContentLoaded', function () {
  fetch('/api/candidates')
    .then(response => response.json())
    .then(candidates => {
      candidates.forEach((candidate, index) => {
        let follow_up_date = candidate.followUp ? candidate.followUp : new Date(candidate.createdAt).toISOString().split('T')[0];
        let status = candidate.status ? candidate.status : 'Waiting for Task';

        $('#candidateTable tbody').append(`
          <tr>
            <td>${index + 1}</td>
            <td>${candidate.first_name} ${candidate.last_name}</td>
            <td>${candidate.role}</td>
            <td>${candidate.experience}</td>
            <td>${follow_up_date}</td>
            <td>${status}</td>
            <td><a href="#" class="editbtn" data-id="${candidate.candidate_id}"><i class="fa fa-edit"></i> Edit</a></td>
            <td><a href="#" class="btn updatebtn"><i class="fa fa-tasks"></i> Update</a></td>
          </tr>
        `);
      });

      $('#candidateTable').DataTable({
        paging: true,
        searching: true,
        ordering: true,
        info: true,
      });

      $(document).on('click', '.editbtn', function (e) {
        e.preventDefault();

        const candidateId = $(this).data('id'); 
        console.log('Edit candidate ID:', candidateId);

        fetch(`/api/candidates/${candidateId}`)
          .then(response => response.json())
          .then(candidate => {
            const modal = document.getElementById('editModal');

            document.getElementById('fname').value = candidate.first_name || '';
            document.getElementById('lname').value = candidate.last_name || '';
            document.getElementById('email').value = candidate.email_id || '';
            document.getElementById('phone_no').value = candidate.contact_no || '';
            document.getElementById('qualification').value = candidate.qualification || '';
            document.getElementById('location').value = candidate.location || '';
            document.getElementById('resume').value = candidate.resume || 'none';
            document.getElementById('gitlink').value = candidate.gitlink|| '';
            document.getElementById('source').value = candidate.source || 'none';
            document.getElementById('Role').value = candidate.role || 'none';
            document.getElementById('company').value = candidate.company || '';
            document.getElementById('designation').value = candidate.designation || '';
            document.getElementById('experience').value = candidate.experience || '';
            document.getElementById('current_salary').value = candidate.current_salary || '';
            document.getElementById('expected_salary').value = candidate.expected_salary || '';
            document.getElementById('notice_period').value = candidate.notice_period || '';
            document.getElementById('skills').value = (candidate.skill_set || []).join(', ');

            modal.style.display = 'block';
          })
          .catch(error => console.error("Error fetching candidate details:", error));
      });
    })
    .catch(error => console.error('Error fetching candidates:', error));
});

function oncardview() {
    document.getElementById('tableview').style.display = 'none';
    document.getElementById('cardview').style.display = 'block';
}

function ontableview() {
    document.getElementById('cardview').style.display = 'none';
    document.getElementById('tableview').style.display = 'block';
}
