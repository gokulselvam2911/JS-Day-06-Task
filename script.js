//XML_HTTP request(XHR)
//They are used to intract with the server via API
//step 01:
//create a XHR object
var request= new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload= function(){
    var res = JSON.parse(request.response);
    console.log(res);


//Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

// TO Get all the countries from Asia continent /region using Filter method
var regionData = res.filter((ele)=>ele.region == "Asia");
console.log("Asian Countries:",regionData);

// Get all the countries with a population of less than 2 lakhs using Filter method.
var population = res.filter((ele)=>ele.population < "200000")
console.log("Countries with population less than 2 lakhs:",population)

//Print the following details name, capital, flag, using forEach method.
res.forEach((country) => {
    console.log("Name:", country.name.common);
    console.log("Capital:", country.capital);
    console.log("Flag:", country.flags.svg);
});

//Print the total population of countries using reduce method.
var totalPopulation = res.reduce((acc,cv)=>acc+cv.population,0);
console.log("Total Population:",totalPopulation)

// Print the country that uses US dollars as currency
const countryWithUSD = res.find((country) =>country.currencies.hasOwnProperty("USD"));
console.log("Country that uses US Dollars:", countryWithUSD);

}

