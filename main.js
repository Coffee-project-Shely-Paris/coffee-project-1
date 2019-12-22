"use strict";

function renderCoffee(coffee) {//sets up table//
    var html = '<div class="coffee">';
    html += '<img src ="'+coffee.image+ '" width="200px" height="200px">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html
}

function renderCoffees(filteredList) {
    var html = '';
    for (var i = filteredList.length - 1; i >= 0; i--) {
        html += renderCoffee(filteredList[i]);
    }
    return html;
}



function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    console.log(selectedRoast);
    var filteredCoffees = [];

    if(selectedRoast === "all"){

        filteredCoffees = coffees;
    } else {
        coffees.forEach(function(coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
    }

    // tbody.innerHTML = renderCoffees(filteredCoffees);
    coffeeList.innerHTML = renderCoffees(filteredCoffees);
}

function searchCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var searchInput = userInput.value.toLowerCase();
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        var currentRoast = coffee.roast.toLowerCase();
        var currentName = coffee.name.toLowerCase();

        if (currentRoast.includes(searchInput) || currentName.includes(searchInput)) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeList.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee(e){
    e.preventDefault();
    var newCoffee = {
        id: coffees.length,
        name: newCoffeeName.value,
        roast: newCoffeeRoast.value,
        image: 'img/placeholder.png'
    }
    coffees.push(newCoffee);
    coffeeList.innerHTML = renderCoffees(coffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 2, name: 'Cafe Latte', roast: 'light', image: 'img/cafe-latte.jpg'},
    {id: 3, name: 'Ca Phe', roast: 'light', image: 'img/ca phe.jpeg'},
    {id: 4, name: 'Americano', roast: 'medium', image: 'img/cafe americano.jpeg'},
    {id: 5, name: 'Cappucino', roast: 'medium', image: 'img/cappucino.jpeg'},
    {id: 6, name: 'Cuban Espressot', roast: 'medium', image: 'img/cuban espresso.jpg'},
    {id: 7, name: 'Iced Coffee', roast: 'dark', image: "img/IcedCoffee.jpg"},
    {id: 1, name: 'LongBlack', roast: 'light',image: 'img/LongBlack.jpg'},
    {id: 8, name: 'MaheshiLama', roast: 'dark',image: "img/MaheshiLama.jpg"},
    {id: 9, name: 'Oaxacan spice latte', roast: 'dark',image: "img/Oaxacan spice latte.jpg"},
    {id: 10, name: 'Rüdesheimer', roast: 'dark',image: "img/Rüdesheimer.jpg"},
    {id: 11, name: 'irish coffee', roast: 'dark',image: "img/irish coffee.jpg"},
    {id: 12, name: 'Viennese', roast: 'dark',image: "img/IcedCoffee.jpg"},
    {id: 13, name: 'turkish', roast: 'dark',image: "img/turkish coffee.jpg"},
    {id: 14, name: 'Yuenyeung', roast: 'dark',image: "img/yuenyeung-china.jpeg"},
];


var coffeeList = document.querySelector('#coffees');
var roastSelection = document.querySelector('#roast-selection');
var userInput = document.querySelector('#search-bar');
var addCofefe = document.querySelector('#btn-addCoffee');
var newCoffeeName = document.querySelector('#addCoffeeName');
var newCoffeeRoast = document.querySelector('#addCoffeeRoast');


coffeeList.innerHTML = renderCoffees(coffees.sort(function(a, b){return a.id-b.id}));

roastSelection.addEventListener('change', updateCoffees);
addCofefe.addEventListener('click', addCoffee);
userInput.addEventListener("keyup", searchCoffees);