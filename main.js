 "use strict";
    function renderCoffee(coffee) {//sets up table//
        var html = '<div class="coffee">';
        html += '<h1>' + coffee.name + '</h1>';
        html += '<p>' + coffee.roast + '</p>';
        html += '</div>';
        return html
    }

// coffees.sort(function(a, b){return a.id-b.id});

    function renderCoffees() {
        function renderCoffees(filteredList) {
            var html = '';
            for (var i = coffees.length - 1; i >= 0; i--) {
                html += renderCoffee(coffees[i]);
                for (var i = filteredList.length - 1; i >= 0; i--) {
                    html += renderCoffee(filteredList[i]);
                }
                return html;
            }
        @@ -50,13 +48,13 @@ function searchCoffees(e) {

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
            var coffees = [
                {id: 1, name: 'Light City', roast: 'light'},
                {id: 2, name: 'Half City', roast: 'light'},
                {id: 3, name: 'Cinnamon', roast: 'light'},
                {id: 4, name: 'City', roast: 'medium'},
                {id: 5, name: 'American', roast: 'medium'},
                {id: 6, name: 'Breakfast', roast: 'medium'},
                {id: 7, name: 'High', roast: 'dark'},
                {id: 1, name: 'Light City', roast: 'light'},
                {id: 8, name: 'Continental', roast: 'dark'},
                {id: 9, name: 'New Orleans', roast: 'dark'},
                {id: 10, name: 'European', roast: 'dark'},
                @@ -74,16 +72,8 @@ var userInput = document.querySelector('#search-bar');
            var searchSubmit = document.querySelector('#search-btn');


            coffeeList.innerHTML = renderCoffees(coffees);
            coffeeList.innerHTML = renderCoffees(coffees.sort(function(a, b){return a.id-b.id}));

            submitButton.addEventListener('click', updateCoffees);
            searchSubmit.addEventListener("click", searchCoffees);
            userInput.addEventListener("keyup", searchCoffees);








            userInput.addEventListener("keyup", searchCoffees)