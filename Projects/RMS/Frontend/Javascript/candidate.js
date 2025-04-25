function oncardview() {
    document.getElementById('tableview').style.display = 'none';
    document.getElementById('cardview').style.display = 'block';
}
function ontableview() {
    document.getElementById('cardview').style.display = 'none';
    document.getElementById('tableview').style.display = 'block';
}
document.getElementById("openProfile").addEventListener("click", function () {
    fetch("../HTML/Profile.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
            var modal = new bootstrap.Modal(document.getElementById('dynamicUpdateModal'));
            modal.show();
        })
        .catch(error => console.error("Error loading modal:", error));
});
document.addEventListener('DOMContentLoaded', function () {
    const candidates = [
        { id: 1, name: 'Dhanush M', role: 'Full Stack Developer', experience: '1.5 yrs', followUp: '12-05-2025', status: 'Interviewed' },
        { id: 2, name: 'Obuli', role: 'Full Stack Developer', experience: '1.5 yrs', followUp: '12-05-2025', status: 'Task Assigned' },
        { id: 3, name: 'Panner Selvam', role: 'Full Stack Developer', experience: '1.5 yrs', followUp: '12-05-2025', status: 'Rework Completed' }
    ];

    candidates.forEach((candidate, index) => {
        $('#candidateTable tbody').append(`
            <tr>
                <td>${index + 1}</td>
                <td>${candidate.name}</td>
                <td>${candidate.role}</td>
                <td>${candidate.experience}</td>
                <td>${candidate.followUp}</td>
                <td>${candidate.status}</td>
                <td><a href="/edit_candidate" class="editbtn"><i class="fa fa-edit"></i> Edit</a></td>
                <td><a href="#" class="btn updatebtn" data-bs-toggle="modal" data-bs-target="#updateModal"><i class="fa fa-tasks"></i> Update</a></td>
            </tr>
        `);
    });

    $('#candidateTable').DataTable({
        paging: true,
        searching: true,
        ordering: true,
        info: true
    });
});

document.getElementById("openProfile").addEventListener("click", function () {
    fetch("../HTML/Profile.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
            var modal = new bootstrap.Modal(document.getElementById('dynamicUpdateModal'));
            modal.show();
        })
        .catch(error => console.error("Error loading modal:", error));
});
