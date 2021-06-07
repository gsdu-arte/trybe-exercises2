let admTime = document.getElementById("header-container");
admTime.style.backgroundColor = 'green';

let urgImportantNoImportantBack = document.getElementsByClassName("emergency-tasks");
urgImportantNoImportantBack[0].style.backgroundColor = 'pink'

let urgImportantNoImportant = document.getElementsByTagName("h3");
urgImportantNoImportant[0].style.backgroundColor = 'purple';
urgImportantNoImportant[1].style.backgroundColor = 'purple';

let noUrgImpNoImpBack = document.querySelectorAll(".no-emergency-tasks");
noUrgImpNoImpBack[0].style.backgroundColor = 'yellow';

let noUrgImpNoImp = document.querySelectorAll("h3");
noUrgImpNoImp[2].style.backgroundColor = 'black';
noUrgImpNoImp[3].style.backgroundColor = 'black';

let footer = document.querySelector("#footer-container");
footer.style.backgroundColor = 'seagreen';
