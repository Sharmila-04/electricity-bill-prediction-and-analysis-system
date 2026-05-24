function predictBill() {

    let name = document.getElementById("name").value;
    let previous = parseFloat(document.getElementById("previous").value);
    let current = parseFloat(document.getElementById("current").value);

    if(name === "" || isNaN(previous) || isNaN(current)){
        alert("Please fill all fields");
        return;
    }

    let predictedUnits = Math.round((previous + current) / 2);

    let rate;

    if(predictedUnits <= 100){
        rate = 2;
    }
    else if(predictedUnits <= 300){
        rate = 4;
    }
    else if(predictedUnits <= 500){
        rate = 6;
    }
    else{
        rate = 8;
    }

    let billAmount = predictedUnits * rate;

    let category;
    let suggestion;
    let cssClass;

    if(predictedUnits <= 100){
        category = "Low Consumption";
        cssClass = "low";
        suggestion = "Excellent energy usage. Keep it up.";
    }
    else if(predictedUnits <= 300){
        category = "Moderate Consumption";
        cssClass = "medium";
        suggestion = "Try switching off appliances when not in use.";
    }
    else{
        category = "High Consumption";
        cssClass = "high";
        suggestion = "Use LED bulbs, reduce AC usage and monitor consumption.";
    }

    document.getElementById("result").innerHTML = `
    <div class="report">
        <p><strong>Consumer Name:</strong> ${name}</p>
        <p><strong>Previous Month Units:</strong> ${previous}</p>
        <p><strong>Current Month Units:</strong> ${current}</p>
        <p><strong>Predicted Units:</strong> ${predictedUnits} kWh</p>
        <p><strong>Rate Per Unit:</strong> ₹${rate}</p>
        <p><strong>Estimated Bill:</strong> ₹${billAmount}</p>
        <p><strong>Consumption Level:</strong>
        <span class="${cssClass}">${category}</span></p>
        <p><strong>Recommendation:</strong> ${suggestion}</p>
    </div>
    `;
}
