
document.addEventListener("DOMContentLoaded", function () {
    fetch('/api/vehicle')
    .then((response) => response.json())
    .then((histories)=>{
        let total = 0;
        histories.forEach((history)=>{
            total = total + history.amount_paid;
            let formatted = moment(history.paid_date, "D/M/YYYY h:mm a").format("DD/MM/YYYY hh:mm:ss a");
            $('#tabledata tbody').append(`
            <tr>
                <td>${formatted}</td>
                <td>${history.vehicle}</td>
                <td>${history.name}</td>
                <td>${history.due_date}</td>
                <td>${history.company}</td>
                <td>${history.amount_paid}</td>
            </tr>
            `)
        });
        $('#tabledata tfoot').append(`
        <tr>
            <th colspan = "5" style="text-align:right"> Total</th>
            <th>${total}</th>
        </tr>
        `)

    $('#tabledata').DataTable({
            paging: true,
            searching: true,
            ordering: true,
            info: true,
            layout : {
                topStart :{
                    buttons:['copy', 'excel', 'pdf']
                }
            }
    });
    
    })
});