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