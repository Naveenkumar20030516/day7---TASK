// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

        var request = new XMLHttpRequest();
        request.open('GET','https://restcountries.com/v3.1/all');
        request.send();
        request.onload = function(){
        var data = JSON.parse(request.response)
        
        console.log("Get all the countries from Asia continent /region using Filter function");
        let a = data.filter((element)=> element.population < 200000).map(element=>console.log(element.name.common));
        console.log("------------------------------------------------------");

        console.log("Get all the countries with a population of less than 2 lakhs using Filter function");
        let c = data.filter((element)=> element.continents == 'Asia').map(element=>console.log(element.name.common));
        console.log("------------------------------------------------------");

        console.log("Print the following details name, capital, flag using forEach function");
        data.forEach((element) => {
          console.log(element.name.common);
          console.log(element.flag);
          console.log(element.capital);
        });
        console.log("------------------------------------------------------");

        console.log("Print the total population of countries using reduce function");
                let totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
                console.log("Total Population of Countries:", totalPopulation);            
        console.log("------------------------------------------------------");
        
        console.log("Print the country which uses US Dollars as currency");
        data.filter((element)=>{
          for (const item in element.currencies) {
            if (element.currencies[item].name == "United States dollar") {
              return true
            }
          }
        }).map(element=>console.log(element.name.common))
        }

   