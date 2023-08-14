window.onload = function() {
  // Retrieving the start time and end ime cos they dont come other wise :|
  let startHour = JSON.parse(localStorage.getItem('startHour'));
  let endHour = JSON.parse(localStorage.getItem('endHour'));
  
  //first table(unedited)
  const retrievedSummaryTable = JSON.parse(localStorage.getItem('summaryTable'));
  
  if (retrievedSummaryTable) {
      // Display the data in your HTML
      document.getElementById('selectedDate').innerHTML = retrievedSummaryTable.selectedDate;
      document.getElementById('timehrs').innerHTML = startHour + " to " + endHour ;
      document.getElementById('durationnn').innerHTML = retrievedSummaryTable.timehrs+" ("+retrievedSummaryTable.durationnn+")";
  
      document.getElementById('slAdultSummary').innerHTML = retrievedSummaryTable.slAdultSummary;
      document.getElementById('slChildSummary').innerHTML = retrievedSummaryTable.slChildSummary;
      document.getElementById('fAdultSummary').innerHTML = retrievedSummaryTable.fAdultSummary;
      document.getElementById('fChildSummary').innerHTML = retrievedSummaryTable.fChildSummary;
      document.getElementById('infantSummary').innerHTML = retrievedSummaryTable.infantSummary;
  
      document.getElementById('slAdultSummaryPrice').innerHTML = retrievedSummaryTable.slAdultSummaryPrice;
      document.getElementById('slChildSummaryPrice').innerHTML = retrievedSummaryTable.slChildSummaryPrice;
      document.getElementById('fAdultSummaryPrice').innerHTML = retrievedSummaryTable.fAdultSummaryPrice;
      document.getElementById('fChildSummaryPrice').innerHTML = retrievedSummaryTable.fChildSummaryPrice;
      document.getElementById('infantSummaryPrice').innerHTML = retrievedSummaryTable.infantSummaryPrice;
  
      document.getElementById("totPaysummary").textContent = retrievedSummaryTable.totPaysummary;
    } else {
      // Handle the case where there is no summaryTable data in localStorage
      console.log("No summaryTable data in localStorage.");
    }
  
      //this is for the updated table 
      // Retrieve the existing summary table from localStorage
      const storedSummaryTable = JSON.parse(localStorage.getItem('summaryTable'));
  
  
      let selectedDate2;
      let selectedTimeSlot2;
      let timehrs2;
      let durationnn2;
      let slAdultSummary2;
      let slChildSummary2;
      let fAdultSummary2;
      let fChildSummary2;
      let infantSummary2;
      let slAdultSummaryPrice2;
      let slChildSummaryPrice2;
      let fAdultSummaryPrice2;
      let fChildSummaryPrice2;
      let infantSummaryPrice2;
      let totPaysummary2;
    
      // Check if there is a stored summary table and assign them to new variables
      if (storedSummaryTable) {
        selectedDate2 = storedSummaryTable.selectedDate;
        selectedTimeSlot2 = startHour + " to " + endHour;
        timehrs2 = storedSummaryTable.timehrs;
        durationnn2 = storedSummaryTable.durationnn;
        slAdultSummary2 = storedSummaryTable.slAdultSummary;
        slChildSummary2 = storedSummaryTable.slChildSummary;
        fAdultSummary2 = storedSummaryTable.fAdultSummary;
        fChildSummary2 = storedSummaryTable.fChildSummary;
        infantSummary2 = storedSummaryTable.infantSummary;
        slAdultSummaryPrice2 = storedSummaryTable.slAdultSummaryPrice;
        slChildSummaryPrice2 = storedSummaryTable.slChildSummaryPrice;
        fAdultSummaryPrice2 = storedSummaryTable.fAdultSummaryPrice;
        fChildSummaryPrice2 = storedSummaryTable.fChildSummaryPrice;
        infantSummaryPrice2 = storedSummaryTable.infantSummaryPrice;
        totPaysummary2 = storedSummaryTable.totPaysummary;
      }
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
  
  
  
  
  
  
      // Form validation and submission handling
      const emailInput = document.getElementById('email');
      const confirmEmailInput = document.getElementById('confirmEmail');
      const phoneInput = document.getElementById('phone');
      const nameInput = document.getElementById('fname');
  
  
      emailInput.addEventListener('input', function() {
          if (emailInput.checkValidity()) {
              emailInput.style.borderColor = 'green';
          } else {
              emailInput.style.borderColor = 'red';
          }
      });
  
      confirmEmailInput.addEventListener('input', function() {
          if (confirmEmailInput.value !== emailInput.value) {
              confirmEmailInput.setCustomValidity('Email addresses do not match');
              confirmEmailInput.style.borderColor = 'red';
          } else {
              confirmEmailInput.setCustomValidity('');
              confirmEmailInput.style.borderColor = 'green';
          }
      });
  
  
      phoneInput.addEventListener('input', function() {
          if (phoneInput.checkValidity()) {
              phoneInput.style.borderColor = 'green';
          } else {
              phoneInput.style.borderColor = 'red';
          }
      });
  
      nameInput.addEventListener('input', function() {
          if (nameInput.checkValidity()) {
              nameInput.style.borderColor = 'green';
          } else {
              nameInput.style.borderColor = 'red';
          }
      });
  
      
  
      document.getElementById('myForm').addEventListener('submit', function(event) {
          event.preventDefault();
      
          document.getElementById('fnameSummary').innerHTML = nameInput.value; // this is so that it inputs the value given in
          document.getElementById('selectedDateU').innerHTML = selectedDate2; 
          document.getElementById('timehrsU').innerHTML = selectedTimeSlot2 ;
          document.getElementById('durationnnU').innerHTML = timehrs2+durationnn2 ;
          document.getElementById('phoneSummary').innerHTML = phoneInput.value; 
          document.getElementById('emailSummary').innerHTML = emailInput.value; 
          document.getElementById('genderSummary').innerHTML = document.getElementById('gender').value; 
          document.getElementById('slAdultSummaryU').innerHTML = slAdultSummary2;
          document.getElementById('slChildSummaryU').innerHTML = slChildSummary2;
          document.getElementById('fAdultSummaryU').innerHTML = fAdultSummary2;
          document.getElementById('fChildSummaryU').innerHTML = fChildSummary2;
          document.getElementById('infantSummaryU').innerHTML = infantSummary2;
  
          document.getElementById('slAdultSummaryPriceU').innerHTML = slAdultSummaryPrice2;
          document.getElementById('slChildSummaryPriceU').innerHTML =  slChildSummaryPrice2;
          document.getElementById('fAdultSummaryPriceU').innerHTML = fAdultSummaryPrice2;
          document.getElementById('fChildSummaryPriceU').innerHTML =  fChildSummaryPrice2;
          document.getElementById('infantSummaryPriceU').innerHTML = infantSummaryPrice2;
  
          document.getElementById('totPaysummaryU').innerHTML = totPaysummary2;
  
          let newSummaryTable = { 
              fnameSummary: nameInput.value,
              selectedDateU: selectedDate2,
              selectedTimeSlotU: selectedTimeSlot2,
              timehrsU: timehrs2,
              durationnnU: durationnn2,
              phoneSummary: phoneInput.value,
              emailSummary: emailInput.value,
              genderSummary: document.getElementById('gender').value,
              slAdultSummaryU: slAdultSummary2,
              slChildSummaryU: slChildSummary2,
              fAdultSummaryU: fAdultSummary2,
              fChildSummaryU: fChildSummary2,
              infantSummaryU: infantSummary2,
              slAdultSummaryPriceU: slAdultSummaryPrice2,
              slChildSummaryPriceU: slChildSummaryPrice2,
              fAdultSummaryPriceU: fAdultSummaryPrice2,
              fChildSummaryPriceU: fChildSummaryPrice2,
              infantSummaryPriceU: infantSummaryPrice2,
              totPaysummaryU: totPaysummary2
          };
      
          // Store the new summary table in localStorage
          localStorage.setItem('newSummaryTable', JSON.stringify(newSummaryTable));
  
          // Show the "Continue with the purchase" button
          document.querySelector('.nextbutton').style.display = 'block';
      });
  
      
  };