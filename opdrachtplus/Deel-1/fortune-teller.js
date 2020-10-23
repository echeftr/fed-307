const tellFortune = function(numKids, partnerName, geoLocation, jobTitle) {
    let future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' + partnerName + ' with ' + numKids + ' kids.';
    console.log(future);
};
tellFortune(3, 'Maria', 'Aruba', 'CEO');
tellFortune(2, 'Anna', 'Aruba', 'CEO');
tellFortune(10, 'Cary', 'Aruba', 'CEO');