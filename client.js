$(document).ready(onReady)
let totalMonthly = 10750
function onReady(){
    

    $("#addAgentButton").on('click', addAgent)
    $("#agentTableBody").on('click',".disavowAgentButton", disavowAgent)
    
}// end onReady

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
        <td>£${salary}</td>
        <td><button class="disavowAgentButton">Disavow Agent</button></td>
        
        </tr>`
        
        
        ) // end agent table body append
        $('#firstName').val('');
        $('#lastName').val('');
        $('#identification').val('');
        $('#title').val('');
        $('#annualSalary').val('');
        
        let formatMonthly = totalMonthly+Number(salary)/12;
        let newFormat = formatMonthly.toFixed(2)
        

       $("#monthlySpan").text(newFormat);
       //$("#monthlyDiv").append(monthlyCost)



if(newFormat > 20000){
$("#monthlyDiv").css('color', 'red')
}

} // end add agent


function disavowAgent(){

$(this).closest('tr').remove();

return console.log('disavow agent working');
} // end disavowAgent

//let formatMonthlyCost = totalMonthly.toFixed(2);



