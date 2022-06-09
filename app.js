document.getElementById('loan-form').addEventListener('submit', function(e){
    // Show loader
    document.getElementById('loading').style.display = 'block';

    // Hide result
    document.getElementById('result').style.display = 'none';

    setTimeout(calculateResults, 2000);
 
    e.preventDefault();
});


function calculateResults() {

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const mothlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    // const principal = parseFloat(amount.value);
    // const calculatedInterest = parseFloat(interest.value) / 100 /12;
    // const calculatedPayment = parseFloat(years.value) * 12;

    // Monthly Payment
    // const x = Math.pow(1 + calculatedInterest , calculatedPayment);
    // const monthly = (principal*x*calculatedInterest) /(x-1);



    // Calculating Monthly Payment
    const principal = parseFloat(amount.value);
    const interestRate = parseFloat(interest.value) / 100 / 12;
    const totalPeriod = parseFloat( years.value) * 12 ;
    const x = Math.pow( 1 + interestRate, totalPeriod); 
    const monthly = (principal*x*interestRate) / (x-1);
''    
    if(isFinite(monthly)){
        mothlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly*totalPeriod).toFixed(2);
        totalInterest.value = ((monthly*totalPeriod) - principal).toFixed(2);

        document.getElementById('loading').style.display = 'none';

        document.getElementById('result').style.display = 'block';

    }else {
        showError('Please check your numbers !!!');

    }
    
}

// Show Error Function
function showError(error){

    document.getElementById('loading').style.display = 'none';

    document.getElementById('result').style.display = 'none';
    // Create a div
    const errorDiv = document.createElement('div');

    // Get element
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Add class
    errorDiv.className = 'alert alert-danger';

    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above heading
    card.insertBefore(errorDiv, heading);

    
    // clear error after 3 sec...
    setTimeout(function(){
        document.querySelector('.alert').remove();
    } , 3000)
}
            //OR
// function clearError () {
//     document.querySelector('.alert').remove();
// }
