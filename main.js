console.log("start");

let limitsByYear = {
    2009: 5000,
    2010: 5000,
    2011: 5000,
    2012: 5000,
    2013: 5500,
    2014: 5500,
    2015: 10000,
    2016: 5500,
    2017: 5500,
    2018: 5500,
    2019: 6000,
    2020: 6000,
    2021: 6000,
    2022: 6000
  };
  
function calculateResults() {
  let birthYear = parseInt(document.getElementById('birthYear-input').value);
  let contributed = parseInt(document.getElementById('contributed-input').value);
  
  let eligibleYear = moment(birthYear, 'YYYY').add(18, 'years').year();
  let currentYear = moment().year();
  
  let totalLimit = 0;
  for (let i = eligibleYear; i <= currentYear; i++) {
    totalLimit += limitsByYear[i];
  }
  let totalLimitFormatted = '$' + Number(totalLimit).toLocaleString();
  
  if (!contributed || contributed.length === 0) contributed = 0;
  let remainingRoom = totalLimit - contributed;
  let remainingRoomFormatted = '$' + Number(remainingRoom).toLocaleString();
  
  document.getElementById('year-of-eligibility').textContent = eligibleYear;
  document.getElementById('total-limit').textContent = totalLimitFormatted;
  document.getElementById('remaining-room').textContent = remainingRoomFormatted;
  //document.getElementById('warning').textContent = "Always double check the values you entered are correct.";
}

function reset() {
  document.getElementById('birthYear-input').value = "";
  document.getElementById('contributed-input').value = "";
  document.getElementById('year-of-eligibility').textContent = "";
  document.getElementById('total-limit').textContent = "";
  document.getElementById('remaining-room').textContent = "";
  //document.getElementById('warning').textContent = ""
}















