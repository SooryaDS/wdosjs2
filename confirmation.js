window.onload = function() {
    const turtle = document.getElementById('turtle');
    let pos = 0;
    const frameRate = 1000 / 60; 
    const speed = 0.5; // Pixels per frame
  
    setInterval(() => {
        if (pos > window.innerWidth) {
            pos = -100;
        }
        turtle.style.left = pos + 'px';
        pos += speed;
    }, frameRate);

    let retrievedSummaryTable = JSON.parse(localStorage.getItem('newSummaryTable'));
  
    // Check if there is a retrieved summary table and assign them to the table in HTML
    if (retrievedSummaryTable) {
        document.getElementById('fnameSummary').innerHTML = retrievedSummaryTable.fnameSummary;
        document.getElementById('selectedDateU').innerHTML = retrievedSummaryTable.selectedDateU;
        document.getElementById('timehrsU').innerHTML = retrievedSummaryTable.selectedTimeSlotU;
        document.getElementById('durationnnU').innerHTML = retrievedSummaryTable.timehrsU+" ("+retrievedSummaryTable.durationnnU+")";
        document.getElementById('phoneSummary').innerHTML = retrievedSummaryTable.phoneSummary;
        document.getElementById('emailSummary').innerHTML = retrievedSummaryTable.emailSummary;
        document.getElementById('genderSummary').innerHTML = retrievedSummaryTable.genderSummary;
        document.getElementById('slAdultSummaryU').innerHTML = retrievedSummaryTable.slAdultSummaryU;
        document.getElementById('slChildSummaryU').innerHTML = retrievedSummaryTable.slChildSummaryU;
        document.getElementById('fAdultSummaryU').innerHTML = retrievedSummaryTable.fAdultSummaryU;
        document.getElementById('fChildSummaryU').innerHTML = retrievedSummaryTable.fChildSummaryU;
        document.getElementById('infantSummaryU').innerHTML = retrievedSummaryTable.infantSummaryU;
        document.getElementById('slAdultSummaryPriceU').innerHTML = retrievedSummaryTable.slAdultSummaryPriceU;
        document.getElementById('slChildSummaryPriceU').innerHTML = retrievedSummaryTable.slChildSummaryPriceU;
        document.getElementById('fAdultSummaryPriceU').innerHTML = retrievedSummaryTable.fAdultSummaryPriceU;
        document.getElementById('fChildSummaryPriceU').innerHTML = retrievedSummaryTable.fChildSummaryPriceU;
        document.getElementById('infantSummaryPriceU').innerHTML = retrievedSummaryTable.infantSummaryPriceU;
        document.getElementById('totPaysummaryU').innerHTML = retrievedSummaryTable.totPaysummaryU;
    }


  };