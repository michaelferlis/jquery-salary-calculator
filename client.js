$(document).ready(onReady)

function onReady(){
    

    $("#addAgentButton").on('click', addAgent)
    
}

function addAgent(){
    console.log('add agent working');
    
    
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let identification = $("#identification").val();
    let title = $("#title").val();
    let salary = $("#annualSalary").val();
    

    $("#agentTableBody").append (

        `<tr>
        
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${identification}</td>
        <td>${title}</td>
        <td>${salary}</td>
        
        </tr>`
        
        
        ) // end agent table body append


} //

