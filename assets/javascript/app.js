const apiKeys = [
  skyscanner = "",
  yelp = "ETyIXGHKE8nskR_WJUaEvwJeXNjFJ5Cq_a_HdZNZmsTkzTut_-Y68XQPpCej1uyiIcmuW2PhP2j2rlSZMKmeecYZK8lOYImJNV9s00Su6K_Peuojo9vcupVUc5n-XHYx",
  //google = "AIzaSyAMWOCBFoVqJB5KTEuPEBjW_02OBE2C6qk",
  ticketmaster = "BcoRupkLYUA1zod2EnO8sFIzAvgAGXvq",
];

// Yelp Client ID
// 7vmrY-xkHwlI8QAWACW6dg

const pageDisplay = [".openingPage", ".secondPage", ".eventPage", ".foodPage", ".scheduler"];
let pageDisplayBool = [true, false, false, false, false];

const displayer = () => {
  $(".openingPage").hide();
  $(".secondPage").hide();
  $(".eventPage").hide();
  $(".foodPage").hide();
  $(".scheduler").hide();
  $(".map").hide();
  
  
  if (pageDisplayBool[0]) {
    $(".openingPage").show();
  } if (pageDisplayBool[1]) {
    $(".secondPage").show();
    $(".map").show();
  } if (pageDisplayBool[2]) {
    $(".eventPage").show();
  } if (pageDisplayBool[3]) {
    $(".foodPage").show();
  } if (pageDisplayBool[4]) {
    $(".scheduler").show();
  };
};

displayer();
var map, infoWindow;
     function initMap() {
       map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: -34.397, lng: 150.644},
         zoom: 6
       });
       infoWindow = new google.maps.InfoWindow;
       // Try HTML5 geolocation.
       if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function(position) {
           var pos = {
             lat: position.coords.latitude,
             lng: position.coords.longitude
           };
           infoWindow.setPosition(pos);
           infoWindow.setContent('Location found.');
           infoWindow.open(map);
           map.setCenter(pos);
         }, function() {
           handleLocationError(true, infoWindow, map.getCenter());
         });
       } else {
         // Browser doesn't support Geolocation
         handleLocationError(false, infoWindow, map.getCenter());
       }
     }
     function handleLocationError(browserHasGeolocation, infoWindow, pos) {
       infoWindow.setPosition(pos);
       infoWindow.setContent(browserHasGeolocation ?
                             'Error: The Geolocation service failed.' :
                             'Error: Your browser doesn\'t support geolocation.');
       infoWindow.open(map);
     }

//Functions for scheduler
const scheduleFood = [];

//SLIDERS input functions to display a string at each range
$('#safetyLvl').on("input", function() {
  if (this.value === "1") {
    $("#safetyMsg").text("Know safety, no accidents");
  }else if (this.value === "2") {
    $("#safetyMsg").text("I'm down for an adventure");
  }else if (this.value === "3") {
    $("#safetyMsg").text("My middle name is danger");
  }
});

$('#moneyLvl').on("input", function() {
  if (this.value === "1") {
    $("#moneyMsg").text("I can live off scraps");
  }else if (this.value === "2") {
    $("#moneyMsg").text("Balling on a budget");
  }else if (this.value === "3") {
    $("#moneyMsg").text("I must dine like a king");
  }
});

$('#socialLvl').on("input", function() {
  if (this.value === "1") {
    $("#socialMsg").text("All I need is me, myself, and I");
  }else if (this.value === "2") {
    $("#socialMsg").text("Over-planning kills magic");
  }else if (this.value === "3") {
    $("#socialMsg").text("No road is long with good company");
  }
});//end SLIDERS section

//ARRAY OF OBJECTS for preset destinations 
const genDestinations = [
  {
    name: "kyoto",
    place_id: "",
    safety: 1,
    money: 2,
    social: 2 
  }, 
  {
    name: "istanbul",
    place_id: "",
    safety: 2,
    money: 2,
    social: 2 
  },
  {
    name: "new york city",
    place_id: "",
    safety: 3,
    money: 2,
    social: 2 
  }, 
  {
    name: "bali",
    place_id: "",
    safety: 2,
    money: 2,
    social: 3 
  }, 
  {
    name: "florence",
    place_id: "",
    safety: 1,
    money: 2,
    social: 3 
  },
  {
    name: "amsterdam",
    place_id: "",
    safety: 2,
    money: 3,
    social: 3 
  },
  {
    name: "venice",
    place_id: "",
    safety: 1,
    money: 3,
    social: 1 
  },
  {
    name: "melbourne",
    place_id: "",
    safety: 3,
    money: 3,
    social: 3 
  },
  {
    name: "porto",
    place_id: "",
    safety: 2,
    money: 1,
    social: 3 
  },
  {
    name: "honolulu",
    place_id: "",
    safety: 3,
    money: 2,
    social: 3
  },
  {
    name: "salzburg",
    place_id: "",
    safety: 1,
    money: 3,
    social: 2 
  },
  {
    name: "paris",
    place_id: "",
    safety: 2,
    money: 3,
    social: 1
  },
  {
    name: "puerto vallarta",
    place_id: "",
    safety: 2,
    money: 1,
    social: 2 
  },
  {
    name: "las vegas",
    place_id: "",
    safety: 2,
    money: 3,
    social: 3 
  },
  {
    name: "taipei",
    place_id: "",
    safety: 1,
    money: 1,
    social: 3 
  },
  {
    name: "portland",
    place_id: "",
    safety: 1,
    money: 1,
    social: 2 
  },
  {
    name: "los angeles",
    place_id: "",
    safety: 2,
    money: 2,
    social: 3 
  },
  {
    name: "madrid",
    place_id: "",
    safety: 1,
    money: 2,
    social: 3 
  },
  {
    name: "lisbon",
    place_id: "",
    safety: 1,
    money: 1,
    social: 3 
  },
  {
    name: "sao paulo",
    place_id: "",
    safety: 3,
    money: 3,
    social: 2 
  }, 
  {
    name: "singapore",
    place_id: "",
    safety: 1,
    money: 3,
    social: 2 
  },
  {
    name: "vienna",
    place_id: "",
    safety: 1,
    money: 2,
    social: 1 
  },
  {
    name: "rio de janeiro",
    place_id: "",
    safety: 3,
    money: 1,
    social: 3 
  },
  {
    name: "osaka",
    place_id: "",
    safety: 1,
    money: 2,
    social: 3 
  },
  {
    name: "vancouver",
    place_id: "",
    safety: 2,
    money: 2,
    social: 1 
  }, 
  {
    name: "queenstown",
    place_id: "",
    safety: 2,
    money: 2,
    social: 1
  }, 
  {
    name: "el chalten",
    place_id: "",
    safety: 3,
    money: 1,
    social: 1 
  },
  {
    name: "coron",
    place_id: "",
    safety: 3,
    money: 3,
    social: 1 
  },
  {
    name: "moab",
    place_id: "",
    safety: 3,
    money: 1,
    social: 3 
  },
  {
    name: "puerto escondido",
    place_id: "",
    safety: 3,
    money: 2,
    social: 1 
  },
  {
    name: "nara",
    place_id: "",
    safety: 1,
    money: 1,
    social: 1 
  },
  {
    name: "victoria falls",
    place_id: "",
    safety: 3,
    money: 1,
    social: 2 
  },
  {
    name: "corsica",
    place_id: "",
    safety: 2,
    money: 1,
    social: 1 
  },
  {
    name: "tokyo",
    place_id: "",
    safety: 1,
    money: 3,
    social: 3
  }
];//end ARRAY OF OBJECTS section

$(document).on("click", ".buttonStart", function(){
  pageDisplayBool[0] = false;
  pageDisplayBool[1] = true;
  console.log(pageDisplayBool);
  displayer();
  decideSort();
  YelpAPISearch();
});

//using momondo to search flights, taking the location and prefilling as search condition, and opening in a new tab
//certain flights don't have a prefill option but in that scenario the user can just click on flights and enter it themselves
$('.flightsB').click(function() {
  let flightSearch = selectedLocation;
  flightSearch = flightSearch.replace(/\s+/g, '-');//replacing spaces with dashes as that's how the search goes
  window.open('https://www.momondo.com/flights/' + flightSearch, '_blank');
});

$(document).on("click", ".eventsB", function() {
  pageDisplayBool[1] = false;
  pageDisplayBool[2] = true;
  displayer();
});

$(document).on("click", ".foodPlacesB", function() {
  pageDisplayBool[1] = false;
  pageDisplayBool[3] = true;
  displayer();
});

$(document).on("click", ".backButton", function() {
  pageDisplayBool[2] = false;
  pageDisplayBool[3] = false;
  pageDisplayBool[4] = false;
  pageDisplayBool[1] = true;
  displayer();
});

$(document).on("click", ".restartButton", function() {
  pageDisplayBool[1] = false;
  pageDisplayBool[0] = true;
  displayer();
  empty();
  selectedLocation = "";
  scheduleFood.length = 0;
});

//make a new array of objects to hold the arrays that match  
let usersPool = [];
let selectedLocation = "" //a string to hold final location
let pickedPool = []; //using this so user can select a new location

//function to empty usersPool
function empty() {
  //empty your array
  usersPool.length = 0;
  $(".activitiesR").text("");
  $(".food").text("");
}

//function to decide to pick from our full list or not based on if user leaves at least two values at 0
function decideSort() {
  if ($("#safetyLvl").val() === "0" && $("#moneyLvl").val() === "0" && $("#socialLvl").val() == "0"){
    defaultDestination();
  }else if($("#safetyLvl").val() === "0" && $("#moneyLvl").val() === "0"){
    defaultDestination();
  }else if($("#safetyLvl").val() === "0" && $("#socialLvl").val() === "0"){
    defaultDestination();
  }else if($("#mafetyLvl").val() === "0" && $("#socialLvl").val() === "0"){
    defaultDestination();
  }else{
    generateDestination();
  }
}

//start FUNCTION GENERATEDESTINATION section
function generateDestination() {

  //console.log(userInput); test worked

  //have a for loop sift through the array of objects
  //have conditional statements to find destinations that match the user's inputs
  for (let i=0; i<genDestinations.length; i++) {
    if ($("#safetyLvl").val() === genDestinations[i].safety){
      if ($("#moneyLvl").val() == genDestinations[i].money){
        if ($("#socialLvl").val() == genDestinations[i].social){
          usersPool.push(genDestinations[i].name);
          //console.log("uno")
        };
      };
    };
    if ($("#safetyLvl").val() === genDestinations[i].safety){
      if ($("#moneyLvl").val() == genDestinations[i].money){
          usersPool.push(genDestinations[i].name);
          //console.log("dos")
      };
    };
    if ($("#safetyLvl").val() === genDestinations[i].safety){
      if ($("#socialLvl").val() == genDestinations[i].social){
        usersPool.push(genDestinations[i].name);
        //console.log("tres")
      };
    };
    if ($("#moneyLvl").val() == genDestinations[i].money){
      if ($("#socialLvl").val() == genDestinations[i].social){
        usersPool.push(genDestinations[i].name);
        //console.log("quatro")
      };
    };
  };
  console.log(usersPool);

  let filteredPool = usersPool.filter(function(x) { 
    return pickedPool.indexOf(x) < 0;
  });

  if(filteredPool.length > 0) {
    //randomly pick from filteredPool array and display the new location
  selectedLocation = filteredPool[Math.floor(Math.random() * filteredPool.length)];
  pickedPool.push(selectedLocation);
  $(".genDes").text(selectedLocation);
  console.log(selectedLocation);
  }else {
    alert ("You've exhausted cities with your slide options, adjust the slider!");
  };
};//end FUNCTION GENERATEDESTINATION section

//start FUNCTION DEFAULTDESTINATION section
function defaultDestination() { 

  //have a for loop sift through the array of objects
  for (let i=0; i<genDestinations.length; i++) {
          usersPool.push(genDestinations[i].name);
  };
  console.log(usersPool);

  let filteredPool = usersPool.filter(function(x) { 
    return pickedPool.indexOf(x) < 0;
  });

  if(filteredPool.length > 0) {
    //randomly pick from filteredPool array and display the new location
  selectedLocation = filteredPool[Math.floor(Math.random() * filteredPool.length)];
  pickedPool.push(selectedLocation);
  $(".genDes").text(selectedLocation);
  console.log(selectedLocation);
  }else {
    alert ("You've exhausted cities with your slide options, adjust the slider!");
  };
};//end FUNCTION DEFAULTDESTINATION section
  
//--------------------------------------- start yelp food API section -------------------------------------------

// Next to implement: button for "see more food" that switches out the 5 restaurants for the next 5 on the list, up to 25
// test destination: 39.7392° N, 104.9903° W
const YelpAPISearch = () => {
  term = "?term=breakfast";
  term2 = "?term=lunch";
  term3 = "?term=dinner";

  // locationYelp = `&latitude=${destinationLatitude}&longitude=${destinationLongitude}`;
  locationYelp = `&location=${selectedLocation}`
  $(".selectedLocation").text(selectedLocation);
  limit = "&limit=30";
  radius = "&radius=25000";  //in meters (max 40000 is 25 miles)
  price = "&price=1,2"; //1 = $, 2 = $$ etc

  // breakfast ajax
  let breakfastObj;

  query = term + locationYelp + limit + radius + price;
  queryURLyelp = "https://cors-anywhere.herokuapp.com/" + `https://api.yelp.com/v3/businesses/search${query}`;
  $.ajax({
    url: queryURLyelp,
    method: "GET",
    headers: {
      "Authorization": "Bearer ETyIXGHKE8nskR_WJUaEvwJeXNjFJ5Cq_a_HdZNZmsTkzTut_-Y68XQPpCej1uyiIcmuW2PhP2j2rlSZMKmeecYZK8lOYImJNV9s00Su6K_Peuojo9vcupVUc5n-XHYx"
    }
  }).then(function(response){
    console.log(response);
    breakfastObj = response;
    for(let i=0; i<5; i++) {
      let name = response.businesses[i].name;
      let price = response.businesses[i].price;
      let rating = response.businesses[i].rating;
      let imageURL = response.businesses[i].image_url;
      let yelpURL = response.businesses[i].url;
      // let foodLatitude = reponse.businesses[i].coordinates.latitude;
      // let foodLongitude = reponse.businesses[i].coordinates.longitude;

      $(`.breakfastImage${[i+1]}`).attr("src", imageURL);
      $(`.breakfastLink${[i+1]}`).attr("href", yelpURL);
      let foodInfo = $(`<p class="text-center restaurantName">`).text(name);
      let foodInfo2 = $(`<p class="text-center">`).text("Price " + price + "  Rating " + rating + " ★");
      $(`.breakfast${i+1}`).append(foodInfo);
      $(`.breakfast${i+1}`).append(foodInfo2);
    };
  });

  let breakfastIndex = 0;
  $(document).on("click", ".btnRightBlue1", function () {
    if (breakfastObj) {
      if (breakfastIndex >= 0 && breakfastIndex <= 4) {
        breakfastIndex += 1;
        for (let i=0; i < 5; i++) {
          $(`.breakfastImage${[i + 1]}`).attr("src", breakfastObj.businesses[i+breakfastIndex*5].image_url);
          $(`.breakfastLink${[i + 1]}`).attr("href", breakfastObj.businesses[i+breakfastIndex*5].url);
          let foodInfo = $(`<p class="text-center restaurantName">`).text(breakfastObj.businesses[i+breakfastIndex*5].name);
          let foodInfo2 = $(`<p class="text-center">`).text("Price " + breakfastObj.businesses[i+breakfastIndex*5].price + "  Rating " + breakfastObj.businesses[i+breakfastIndex*5].rating + " ★");
          $(`.breakfast${i + 1}`).empty();
          $(`.breakfast${i + 1}`).append(foodInfo);
          $(`.breakfast${i + 1}`).append(foodInfo2);
        };
      };
    };
  });

  $(document).on("click", ".btnLeftBlue1", function () {
    if (breakfastObj) {
      if (breakfastIndex >= 1 && breakfastIndex <= 5) {
        breakfastIndex -= 1;
        for (let i=0; i < 5; i++) {
          $(`.breakfastImage${[i + 1]}`).attr("src", breakfastObj.businesses[i+breakfastIndex*5].image_url);
          $(`.breakfastLink${[i + 1]}`).attr("href", breakfastObj.businesses[i+breakfastIndex*5].url);
          let foodInfo = $(`<p class="text-center restaurantName">`).text(breakfastObj.businesses[i+breakfastIndex*5].name);
          let foodInfo2 = $(`<p class="text-center">`).text("Price " + breakfastObj.businesses[i+breakfastIndex*5].price + "  Rating " + breakfastObj.businesses[i+breakfastIndex*5].rating + " ★");
          $(`.breakfast${i + 1}`).empty();
          $(`.breakfast${i + 1}`).append(foodInfo);
          $(`.breakfast${i + 1}`).append(foodInfo2);
        };
      };
    };
  });

  // lunch ajax
  let lunchObj;
  query2 = term2 + locationYelp + limit + radius + price;
  queryURLyelp2 = "https://cors-anywhere.herokuapp.com/" + `https://api.yelp.com/v3/businesses/search${query2}`;

  $.ajax({
    url: queryURLyelp2,
    method: "GET",
    headers: {
      "Authorization": "Bearer ETyIXGHKE8nskR_WJUaEvwJeXNjFJ5Cq_a_HdZNZmsTkzTut_-Y68XQPpCej1uyiIcmuW2PhP2j2rlSZMKmeecYZK8lOYImJNV9s00Su6K_Peuojo9vcupVUc5n-XHYx"
    }
  }).then(function(response){
    console.log(response);
    lunchObj = response;
    for(let i=0; i<5; i++) {
      let name = response.businesses[i].name;
      let price = response.businesses[i].price;
      let rating = response.businesses[i].rating;
      let imageURL = response.businesses[i].image_url;
      let yelpURL = response.businesses[i].url;
      // let foodLatitude = reponse.businesses[i].coordinates.latitude;
      // let foodLongitude = reponse.businesses[i].coordinates.longitude;

      $(`.lunchImage${[i+1]}`).attr("src", imageURL);
      $(`.lunchLink${[i+1]}`).attr("href", yelpURL);
      let foodInfo = $(`<p class="text-center restaurantName">`).text(name);
      let foodInfo2 = $(`<p class="text-center">`).text("Price " + price + "  Rating " + rating + " ★");
      $(`.lunch${i+1}`).append(foodInfo);
      $(`.lunch${i+1}`).append(foodInfo2);
    };
  });

  let lunchIndex = 0;

  $(document).on("click", ".btnRightBlue2", function () {
    if (lunchObj) {
      if (lunchIndex >= 0 && lunchIndex <= 4) {
        lunchIndex += 1;
        for (let i=0; i < 5; i++) {
          $(`.lunchImage${[i + 1]}`).attr("src", lunchObj.businesses[i+lunchIndex*5].image_url);
          $(`.lunchLink${[i + 1]}`).attr("href", lunchObj.businesses[i+lunchIndex*5].url);
          let foodInfo = $(`<p class="text-center restaurantName">`).text(lunchObj.businesses[i+lunchIndex*5].name);
          let foodInfo2 = $(`<p class="text-center">`).text("Price " + lunchObj.businesses[i+lunchIndex*5].price + "  Rating " + lunchObj.businesses[i+lunchIndex*5].rating + " ★");
          $(`.lunch${i + 1}`).empty();
          $(`.lunch${i + 1}`).append(foodInfo);
          $(`.lunch${i + 1}`).append(foodInfo2);
        };
      };
    };
  });

  $(document).on("click", ".btnLeftBlue2", function () {
    if (lunchObj) {
      if (lunchIndex >= 1 && lunchIndex <= 5) {
        lunchIndex -= 1;
        for (let i=0; i < 5; i++) {
          $(`.lunchImage${[i + 1]}`).attr("src", lunchObj.businesses[i+lunchIndex*5].image_url);
          $(`.lunchLink${[i + 1]}`).attr("href", lunchObj.businesses[i+lunchIndex*5].url);
          let foodInfo = $(`<p class="text-center restaurantName">`).text(lunchObj.businesses[i+lunchIndex*5].name);
          let foodInfo2 = $(`<p class="text-center">`).text("Price " + lunchObj.businesses[i+lunchIndex*5].price + "  Rating " + lunchObj.businesses[i+lunchIndex*5].rating + " ★");
          $(`.lunch${i + 1}`).empty();
          $(`.lunch${i + 1}`).append(foodInfo);
          $(`.lunch${i + 1}`).append(foodInfo2);
        };
      };
    };
  });

  let dinnerObj;
  // dinner ajax
  query3 = term3 + locationYelp + limit + radius + price;
  queryURLyelp3 = "https://cors-anywhere.herokuapp.com/" + `https://api.yelp.com/v3/businesses/search${query3}`;
  $.ajax({
    url: queryURLyelp3,
    method: "GET",
    headers: {
      "Authorization": "Bearer ETyIXGHKE8nskR_WJUaEvwJeXNjFJ5Cq_a_HdZNZmsTkzTut_-Y68XQPpCej1uyiIcmuW2PhP2j2rlSZMKmeecYZK8lOYImJNV9s00Su6K_Peuojo9vcupVUc5n-XHYx"
    }
  }).then(function(response){
  console.log(response);
  dinnerObj = response;
  for(let i=0; i<5; i++) {
    let name = response.businesses[i].name;
    let price = response.businesses[i].price;
    let rating = response.businesses[i].rating;
    let imageURL = response.businesses[i].image_url;
    let yelpURL = response.businesses[i].url;
    // let foodLatitude = reponse.businesses[i].coordinates.latitude;
    // let foodLongitude = reponse.businesses[i].coordinates.longitude;

    $(`.dinnerImage${[i+1]}`).attr("src", imageURL);
    $(`.dinnerLink${[i+1]}`).attr("href", yelpURL);
    let foodInfo = $(`<p class="text-center restaurantName">`).text(name);
    let foodInfo2 = $(`<p class="text-center">`).text("Price " + price + "  Rating " + rating + " ★");
    $(`.dinner${i+1}`).append(foodInfo);
    $(`.dinner${i+1}`).append(foodInfo2);
  };
  });

  let dinnerIndex = 0;

  $(document).on("click", ".btnRightBlue3", function () {
    if (dinnerObj) {
      if (dinnerIndex >= 0 && dinnerIndex <= 4) {
        dinnerIndex += 1;
        for (let i=0; i < 5; i++) {
          $(`.dinnerImage${[i + 1]}`).attr("src", dinnerObj.businesses[i+dinnerIndex*5].image_url);
          $(`.dinnerLink${[i + 1]}`).attr("href", dinnerObj.businesses[i+dinnerIndex*5].url);
          let foodInfo = $(`<p class="text-center restaurantName">`).text(dinnerObj.businesses[i+dinnerIndex*5].name);
          let foodInfo2 = $(`<p class="text-center">`).text("Price " + dinnerObj.businesses[i+dinnerIndex*5].price + "  Rating " + dinnerObj.businesses[i+dinnerIndex*5].rating + " ★");
          $(`.dinner${i + 1}`).empty();
          $(`.dinner${i + 1}`).append(foodInfo);
          $(`.dinner${i + 1}`).append(foodInfo2);
        };
      };
    };
  });

  $(document).on("click", ".btnLeftBlue3", function () {
    if (dinnerObj) {
      if (dinnerIndex >= 1 && dinnerIndex <= 5) {
        dinnerIndex -= 1;
        for (let i=0; i < 5; i++) {
          $(`.dinnerImage${[i + 1]}`).attr("src", dinnerObj.businesses[i+dinnerIndex*5].image_url);
          $(`.dinnerLink${[i + 1]}`).attr("href", dinnerObj.businesses[i+dinnerIndex*5].url);
          let foodInfo = $(`<p class="text-center restaurantName">`).text(dinnerObj.businesses[i+dinnerIndex*5].name);
          let foodInfo2 = $(`<p class="text-center">`).text("Price " + dinnerObj.businesses[i+dinnerIndex*5].price + "  Rating " + dinnerObj.businesses[i+dinnerIndex*5].rating + " ★");
          $(`.dinner${i + 1}`).empty();
          $(`.dinner${i + 1}`).append(foodInfo);
          $(`.dinner${i + 1}`).append(foodInfo2);
        };
      };
    };
  });


//--------------------------------------- end yelp food API section -------------------------------------------

//--------------------------------------- start event API section ---------------------------------------------


// unirest.post("https://Ticketmasterstefan-skliarovV1.p.rapidapi.com/addDeliveriesToCart")
// .header("X-RapidAPI-Host", "Ticketmasterstefan-skliarovV1.p.rapidapi.com")
// .header("X-RapidAPI-Key", "8330ea6096msha4fd84b5e8f593bp161f8ejsn6c508a8ee435")
// .header("Content-Type", "application/x-www-form-urlencoded")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });


term5 ="?term=activities";
limit2 = "&limit=50";
query5 = term5 + locationYelp + limit2;
let activityObj;

queryURLyelp = "https://cors-anywhere.herokuapp.com/" + `https://api.yelp.com/v3/businesses/search${query5}`;
$.ajax({
  url: queryURLyelp,
  method: "GET",
  headers: {
    "Authorization": "Bearer ETyIXGHKE8nskR_WJUaEvwJeXNjFJ5Cq_a_HdZNZmsTkzTut_-Y68XQPpCej1uyiIcmuW2PhP2j2rlSZMKmeecYZK8lOYImJNV9s00Su6K_Peuojo9vcupVUc5n-XHYx"
  }
}).then(function(response){
console.log(response);
activityObj = response;
for(let i=0; i<10; i++) {
  let name = response.businesses[i].name;
  let imageURL = response.businesses[i].image_url;
  let yelpURL = response.businesses[i].url;
  // let activityLatitude = reponse.businesses[i].coordinates.latitude;
  // let activityLongitude = reponse.businesses[i].coordinates.longitude;
  $(`.activitiesImage${[i+1]}`).attr("src", imageURL);
  $(`.activitiesLink${[i+1]}`).attr("href", yelpURL);
  let activityInfo = $(`<p class="text-center">`).text(name);
  $(`.activities${i+1}`).append(activityInfo);
};
});


let activitiesIndex = 0;

$(document).on("click", ".btnRightGreen1", function () {
  if (activityObj) {
    if (activitiesIndex >= 0 && activitiesIndex <= 3) {
      activitiesIndex += 1;
      for (let i=0; i < 10; i++) {
        $(`.activitiesImage${[i + 1]}`).attr("src", activityObj.businesses[i+activitiesIndex*10].image_url);
        $(`.activitiesLink${[i + 1]}`).attr("href", activityObj.businesses[i+activitiesIndex*10].url);
        let activityInfo = $(`<p class="text-center">`).text(activityObj.businesses[i+activitiesIndex*10].name);
        // let activityInfo2 = $(`<p class="text-center">`).text("Price " + activityObj.businesses[i+activitiesIndex*10].price + "  Rating " + activityObj.businesses[i+activitiesIndex*10].rating + " ★");
        $(`.activities${i + 1}`).empty();
        $(`.activities${i + 1}`).append(activityInfo);
        // $(`.activities${i + 1}`).append(activityInfo2);
      };
    };
  };
});


$(document).on("click", ".btnLeftGreen1", function () {
  if (activityObj) {
    if (activitiesIndex >= 1 && activitiesIndex <= 4) {
      activitiesIndex -= 1;
      for (let i=0; i < 10; i++) {
        $(`.activitiesImage${[i + 1]}`).attr("src", activityObj.businesses[i+activitiesIndex*10].image_url);
        $(`.activitiesLink${[i + 1]}`).attr("href", activityObj.businesses[i+activitiesIndex*10].url);
        let activityInfo = $(`<p class="text-center">`).text(activityObj.businesses[i+activitiesIndex*10].name);
        // let activityInfo2 = $(`<p class="text-center">`).text("Price " + activityObj.businesses[i+activitiesIndex*10].price + "  Rating " + activityObj.businesses[i+activitiesIndex*10].rating + " ★");
        $(`.activities${i + 1}`).empty();
        $(`.activities${i + 1}`).append(activityInfo);
        // $(`.activities${i + 1}`).append(activityInfo2);
      };
    };
  };
});

$(document).on("click", ".foodScheduleB", function() {
  $(this).find("img").toggleClass("foodSelected");
});

$(document).on("click", ".foodSubmitB", function() {
  let selectedFood = $(".foodSelected").parent().siblings("a").find(".restaurantName").text();
  console.log(selectedFood);
  scheduleFood.push(selectedFood);
  console.log(scheduleFood);
  $(".foodScheduleB").find("img").removeClass("foodSelected");
})


}; //end "yelpAPIsearch"
//----------------------------------------start Ticketmaster API----------------------------------------------

// https://app.ticketmaster.com/{package}/{version}/{resource}.json?apikey=**{API key}
// var request = new XMLHttpRequest();

// request.open('GET', 'https://app.ticketmaster.eu/mfxapi/v2/events?domain&lang&attraction_ids&category_ids&subcategory_ids&event_ids&event_name&venue_ids&city_ids&country_ids&postal_code&lat&long&radius&eventdate_to&eventdate_from&onsaledate_to&onsaledate_from&offsaledate_to&offsaledate_from&min_price&max_price&price_excl_fees&seats_available&cancelled&&is_not_package&sort_by&order&rows&start&excludee_external');

// request.setRequestHeader('Accept', 'application/json');

// request.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     console.log('Status:', this.status);
//     console.log('Headers:', this.getAllResponseHeaders());
//     console.log('Body:', this.responseText);
//   }
// };

// request.send();

//---------------------------------------- end event API section ---------------------------------------------