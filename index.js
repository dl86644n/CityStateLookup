"use strict";
let cityStates = [{
    state: "California",
    stateAbbr: "CA",
    cities: ["Los Angeles", "San Francisco", "San Diego"]
 },
 {
    state: "Colorado",
    stateAbbr: "CO",
    cities: ["Aspen", "Boulder", "Denver", "Pagosa Springs"]
 },
 {
    state: "Texas",
    stateAbbr: "TX",
    cities: ["Austin", "Dallas", "Houston", "San Antonio"]
 },
 {
    state: "New York",
    stateAbbr: "NY",
    cities: ["Staten Island", "Brooklyn", "Bronx", "Manhattan"]
 },
 {
    state: "Florida",
    stateAbbr: "FL",
    cities: ["Miami", "Destin", "Key West", "Boca Raton"]
 },
];

window.onload = function() {
    //when the page loads, load the state dropdown
    loadStateDropdown();

    // connect onchange event handler for the state dropdown (hook up a function to it)
    // find the state dropdown
    const stateDropdown = document.getElementById("stateDropdown");
    stateDropdown.onchange = onStateDropdownChanged;

    // connect onchange event handler for the city dropdown (hook up a function to it)
    // find the team dropdown
    const citiesDropdown = document.getElementById("citiesDropdown");
    citiesDropdown.onchange = onCitiesDropdownChanged;
}

function loadStateDropdown() {
    //find the states dropdown
    const stateDropdown = document.getElementById("stateDropdown");

    //add "Select One..." <option>
    let selectOneOption = document.createElement("option"); // creates 'Select One ... ' as an option
    selectOneOption.textContent = "Select One ...";
    selectOneOption.value = ""; // sets value to blank
    stateDropdown.appendChild(selectOneOption); //makes it last

    //loop through the cityStates array to create an <option> for each state
    for (let i = 0; i < cityStates.length; i++) {
        let theOption = document.createElement("option");
        theOption.textContent = cityStates[i].state;
        theOption.value = cityStates[i].stateAbbr;
        stateDropdown.appendChild(theOption);

    }

    //add a "select state first ..." <option>
    addSelectStateFirstOptionToStateDropdown()
}

function onStateDropdownChanged(){
    //find the state and city dropdowns
    const stateDropdown = document.getElementById("stateDropdown");
    const citiesDropdown = document.getElementById("citiesDropdown");

    //remove the previous cities from the city dropdown because the state has changed
    citiesDropdown.options.length = 0;

    //find the state dropdown selection
    let selectedState = stateDropdown.value;

    //if they picked the "Select One ..." option
    if (selectedState == "") {
        // alert("Please Choose a State");
        //if they dont pick a state, cities cannot be loaded
        return;
    }
    //go use the selected state abbr to find the matching state from the array
    let matchingState = cityStates.find(arrayElement => arrayElement.stateAbbr == selectedState);

    // add a "Select One..." <option>
    let selectOneOption = document.createElement("option"); // creates 'Select One ... ' as an option
    selectOneOption.textContent = "Select One ...";
    selectOneOption.value = ""; // sets value to blank
    citiesDropdown.appendChild(selectOneOption); //makes it last
    // loop through the cities in matching state and  creat <option> element for each
    for (let i = 0; i < matchingState.cities.length; i++) {
        let theOption = document.createElement("option");
        theOption.textContent = matchingState.cities[i];
        citiesDropdown.appendChild(theOption);
    }
}

function onCitiesDropdownChanged(){
    //find the state and city dropdowns
    const stateDropdown = document.getElementById("stateDropdown");
    const citiesDropdown = document.getElementById("citiesDropdown");

    //erase previous state message ??
    const messagePara = document.getElementById("messagePara");
    messagePara.innerHTML = "";
    //get the selected team
    let selectedCity = citiesDropdown.value;

    //if "Select One..." is picked, just exit the function
    if (selectedCity == ""){
    return;
    }

    //get selected state 
    let selectedStateIndex = stateDropdown.selectedIndex;
    let selectedState = stateDropdown.options[selectedStateIndex].text;

    //message with the city and state info to display ina <p>

    let message = "City: " + selectedCity + "<br>" +
    "State: " + selectedState;
    messagePara.innerHTML = message;

}

function addSelectStateFirstOptionToStateDropdown(){
    const citiesDropdown = document.getElementById("citiesDropdown");

    // Add a "Select state first..." <option>
    let selectOneOption = document.createElement("option"); // creates <option> element
    selectOneOption.textContent = "Select State first...";
    selectOneOption.value = "";
   citiesDropdown.appendChild(selectOneOption);
}