//Select the Flexbox Container
var container = document.getElementsByClassName('container')[0];
//Select the select menu for the Display Property
var selectDisplay = document.getElementsByTagName('select')[0];
//Select the select menu for the Flex-Direction Property
var selectFlexDirection = document.getElementsByTagName('select')[1];
//Select the select menu for the justify-content Property
var selectJustifyContent = document.getElementsByTagName('select')[2];
//When another option from the select menu is chosen, call the function to change it's CSS property
selectDisplay.addEventListener('change', displayChanger, false);
selectFlexDirection.addEventListener('change', directionChanger, false);
selectJustifyContent.addEventListener('change', justifyContentChanger, false);



function displayChanger() {
  //Select the option's text from the select menu
  var selectedOptionText = selectDisplay.options[selectDisplay.selectedIndex].text;
  //Check the chosen select option
  if (selectedOptionText === 'inline-flex') {
    console.log(selectedOptionText);
    //Change the CSS property according to the chosen select option
    container.style.display = 'inline-flex';
  }
  else {
    console.log(selectedOptionText);
    container.style.display = 'flex';
  } 
}

function directionChanger() {
  var selectedOptionText = selectFlexDirection.options[selectFlexDirection.selectedIndex].text;
  if (selectedOptionText === 'row') {
    console.log(selectedOptionText);
    container.style.flexDirection = 'row';
  }
  else {
    console.log(selectedOptionText);
    container.style.flexDirection = 'column';
  } 
}

function justifyContentChanger() {
  var selectedOptionText = selectJustifyContent.options[selectJustifyContent.selectedIndex].text;
  if (selectedOptionText === 'flex-end') {
    console.log(selectedOptionText);
    container.style.justifyContent = 'flex-end';
  }
  else if (selectedOptionText === 'flex-start') {
    console.log(selectedOptionText);
    container.style.justifyContent = 'flex-start';
  } 
  else if (selectedOptionText === 'center') {
    console.log(selectedOptionText);
    container.style.justifyContent = 'center';
  }
  else if (selectedOptionText === 'space-between') {
    console.log(selectedOptionText);
    container.style.justifyContent = 'space-between';
  }
  else {
    console.log(selectedOptionText);
    container.style.justifyContent = 'space-around';
  }
}