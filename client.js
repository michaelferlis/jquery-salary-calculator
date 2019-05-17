$(document).ready(onReady)

function onReady(){
    

    $("#addAgentButton").on('click', addAgent)
    
}

function addAgent(){
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let identification = $("#identification").val();
    let title = $("#title").val();
    let salary = $("#annualSalary").val();
    
}