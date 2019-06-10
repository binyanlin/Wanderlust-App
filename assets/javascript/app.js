
const apiKeys = [
  skyscanner = "",
  yelp = "ETyIXGHKE8nskR_WJUaEvwJeXNjFJ5Cq_a_HdZNZmsTkzTut_-Y68XQPpCej1uyiIcmuW2PhP2j2rlSZMKmeecYZK8lOYImJNV9s00Su6K_Peuojo9vcupVUc5n-XHYx",
  google = "",
  ticketmaster = "",
];

// Yelp Client ID
// 7vmrY-xkHwlI8QAWACW6dg



const pageDisplay = [".openingPage", ".secondPage", ".eventPage", ".foodPage", ".scheduler"];
let pageDisplayBool = [false, false, false, true, false];

const displayer = () => {
  $(".openingPage").hide();
  $(".secondPage").hide();
  $(".eventPage").hide();
  $(".foodPage").hide();
  $(".scheduler").hide();
  
  if (pageDisplayBool[0]) {
    $(".openingPage").show();
  } if (pageDisplayBool[1]) {
    $(".secondPage").show();
  } if (pageDisplayBool[2]) {
    $(".eventPage").show();
  } if (pageDisplayBool[3]) {
    $(".foodPage").show();
  } if (pageDisplayBool[4]) {
    $(".scheduler").show();
  };
};


displayer();


$(document).on("click", ".buttonStart", function(){
  pageDisplayBool[0] = false;
  pageDisplayBool[1] = true;
  console.log(pageDisplayBool);
  displayer();

});

//yelp API section -------------------------------------------

// test destination: 39.7392° N, 104.9903° W
destinationLatitude = "39.7392";
destinationLongitude = "-104.9903";

term = "?term=breakfast";
term2 = "?term=lunch";
term3 = "?term=dinner";

// locationYelp = `&latitude=${destinationLatitude}&longitude=${destinationLongitude}`;
locationYelp = "&location=denver, CO"
limit = "&limit=10";
radius = "&radius=20000";  //in meters (max 40000 is 25 miles)
price = "&price=1,2"; //1 = $, 2 = $$ etc



// breakfast ajax
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
  let foodInfo = $(`<p class="text-center">`).text(name);
  let foodInfo2 = $(`<p class="text-center">`).text("Price " + price + "  Rating " + rating + " ★");
  $(`.breakfast${i+1}`).append(foodInfo);
  $(`.breakfast${i+1}`).append(foodInfo2);
};
});

// lunch ajax
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
  let foodInfo = $(`<p class="text-center">`).text(name);
  let foodInfo2 = $(`<p class="text-center">`).text("Price " + price + "  Rating " + rating + " ★");
  $(`.lunch${i+1}`).append(foodInfo);
  $(`.lunch${i+1}`).append(foodInfo2);
};
});

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
  let foodInfo = $(`<p class="text-center">`).text(name);
  let foodInfo2 = $(`<p class="text-center">`).text("Price " + price + "  Rating " + rating + " ★");
  $(`.dinner${i+1}`).append(foodInfo);
  $(`.dinner${i+1}`).append(foodInfo2);
};
});

