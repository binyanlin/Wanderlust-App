
const apiKeys = [
  skyscanner = "",
  yelp = "ETyIXGHKE8nskR_WJUaEvwJeXNjFJ5Cq_a_HdZNZmsTkzTut_-Y68XQPpCej1uyiIcmuW2PhP2j2rlSZMKmeecYZK8lOYImJNV9s00Su6K_Peuojo9vcupVUc5n-XHYx",
  google = "",
  ticketmaster = "",
];

// Yelp Client ID
// 7vmrY-xkHwlI8QAWACW6dg



const pageDisplay = [".openingPage", ".secondPage", ".eventPage", ".foodPage", ".scheduler"];
let pageDisplayBool = [false, false, true, false, false];

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

$(document).on("click", "")

//--------------------------------------- start yelp food API section -------------------------------------------

// // Next to implement: button for "see more food" that switches out the 5 restaurants for the next 5 on the list, up to 25
// // test destination: 39.7392° N, 104.9903° W
// destinationLatitude = "39.7392";
// destinationLongitude = "-104.9903";

// term = "?term=breakfast";
// term2 = "?term=lunch";
// term3 = "?term=dinner";

// // locationYelp = `&latitude=${destinationLatitude}&longitude=${destinationLongitude}`;
// locationYelp = "&location=denver, CO"
// limit = "&limit=10";
// radius = "&radius=20000";  //in meters (max 40000 is 25 miles)
// price = "&price=1,2"; //1 = $, 2 = $$ etc

// // breakfast ajax
// query = term + locationYelp + limit + radius + price;
// queryURLyelp = "https://cors-anywhere.herokuapp.com/" + `https://api.yelp.com/v3/businesses/search${query}`;
// $.ajax({
//   url: queryURLyelp,
//   method: "GET",
//   headers: {
//     "Authorization": "Bearer ETyIXGHKE8nskR_WJUaEvwJeXNjFJ5Cq_a_HdZNZmsTkzTut_-Y68XQPpCej1uyiIcmuW2PhP2j2rlSZMKmeecYZK8lOYImJNV9s00Su6K_Peuojo9vcupVUc5n-XHYx"
//   }
// }).then(function(response){
// console.log(response);
// for(let i=0; i<5; i++) {
//   let name = response.businesses[i].name;
//   let price = response.businesses[i].price;
//   let rating = response.businesses[i].rating;
//   let imageURL = response.businesses[i].image_url;
//   let yelpURL = response.businesses[i].url;
//   // let foodLatitude = reponse.businesses[i].coordinates.latitude;
//   // let foodLongitude = reponse.businesses[i].coordinates.longitude;

//   $(`.breakfastImage${[i+1]}`).attr("src", imageURL);
//   $(`.breakfastLink${[i+1]}`).attr("href", yelpURL);
//   let foodInfo = $(`<p class="text-center">`).text(name);
//   let foodInfo2 = $(`<p class="text-center">`).text("Price " + price + "  Rating " + rating + " ★");
//   $(`.breakfast${i+1}`).append(foodInfo);
//   $(`.breakfast${i+1}`).append(foodInfo2);
// };
// });

// // lunch ajax
// query2 = term2 + locationYelp + limit + radius + price;
// queryURLyelp2 = "https://cors-anywhere.herokuapp.com/" + `https://api.yelp.com/v3/businesses/search${query2}`;

// $.ajax({
//   url: queryURLyelp2,
//   method: "GET",
//   headers: {
//     "Authorization": "Bearer ETyIXGHKE8nskR_WJUaEvwJeXNjFJ5Cq_a_HdZNZmsTkzTut_-Y68XQPpCej1uyiIcmuW2PhP2j2rlSZMKmeecYZK8lOYImJNV9s00Su6K_Peuojo9vcupVUc5n-XHYx"
//   }
// }).then(function(response){
// console.log(response);
// for(let i=0; i<5; i++) {
//   let name = response.businesses[i].name;
//   let price = response.businesses[i].price;
//   let rating = response.businesses[i].rating;
//   let imageURL = response.businesses[i].image_url;
//   let yelpURL = response.businesses[i].url;
//   // let foodLatitude = reponse.businesses[i].coordinates.latitude;
//   // let foodLongitude = reponse.businesses[i].coordinates.longitude;

//   $(`.lunchImage${[i+1]}`).attr("src", imageURL);
//   $(`.lunchLink${[i+1]}`).attr("href", yelpURL);
//   let foodInfo = $(`<p class="text-center">`).text(name);
//   let foodInfo2 = $(`<p class="text-center">`).text("Price " + price + "  Rating " + rating + " ★");
//   $(`.lunch${i+1}`).append(foodInfo);
//   $(`.lunch${i+1}`).append(foodInfo2);
// };
// });

// // dinner ajax
// query3 = term3 + locationYelp + limit + radius + price;
// queryURLyelp3 = "https://cors-anywhere.herokuapp.com/" + `https://api.yelp.com/v3/businesses/search${query3}`;
// $.ajax({
//   url: queryURLyelp3,
//   method: "GET",
//   headers: {
//     "Authorization": "Bearer ETyIXGHKE8nskR_WJUaEvwJeXNjFJ5Cq_a_HdZNZmsTkzTut_-Y68XQPpCej1uyiIcmuW2PhP2j2rlSZMKmeecYZK8lOYImJNV9s00Su6K_Peuojo9vcupVUc5n-XHYx"
//   }
// }).then(function(response){
// console.log(response);
// for(let i=0; i<5; i++) {
//   let name = response.businesses[i].name;
//   let price = response.businesses[i].price;
//   let rating = response.businesses[i].rating;
//   let imageURL = response.businesses[i].image_url;
//   let yelpURL = response.businesses[i].url;
//   // let foodLatitude = reponse.businesses[i].coordinates.latitude;
//   // let foodLongitude = reponse.businesses[i].coordinates.longitude;

//   $(`.dinnerImage${[i+1]}`).attr("src", imageURL);
//   $(`.dinnerLink${[i+1]}`).attr("href", yelpURL);
//   let foodInfo = $(`<p class="text-center">`).text(name);
//   let foodInfo2 = $(`<p class="text-center">`).text("Price " + price + "  Rating " + rating + " ★");
//   $(`.dinner${i+1}`).append(foodInfo);
//   $(`.dinner${i+1}`).append(foodInfo2);
// };
// });
//--------------------------------------- end yelp food API section -------------------------------------------

//--------------------------------------- start event API section ---------------------------------------------


// unirest.post("https://Ticketmasterstefan-skliarovV1.p.rapidapi.com/addDeliveriesToCart")
// .header("X-RapidAPI-Host", "Ticketmasterstefan-skliarovV1.p.rapidapi.com")
// .header("X-RapidAPI-Key", "8330ea6096msha4fd84b5e8f593bp161f8ejsn6c508a8ee435")
// .header("Content-Type", "application/x-www-form-urlencoded")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });

term5 ="?limit=10";
// date = tripdate
date = "2019-06-10"  //sampledate
// time = `&time_start=${date}` time takes UNIX code 
time = "&time_start=1560124800";
radius2 = "&radius=40000"
locationYelp = "&location=denver,CO";
query5 = locationYelp

console.log(query5);

queryURLyelpEvents = "https://cors-anywhere.herokuapp.com/" + `https://api.yelp.com/v3/events/${query5}`;
$.ajax({
  url: queryURLyelpEvents,
  method: "GET",
  headers: {
    "Authorization": "Bearer ETyIXGHKE8nskR_WJUaEvwJeXNjFJ5Cq_a_HdZNZmsTkzTut_-Y68XQPpCej1uyiIcmuW2PhP2j2rlSZMKmeecYZK8lOYImJNV9s00Su6K_Peuojo9vcupVUc5n-XHYx"
  }
}).then(function(response){
console.log(response);
// for(let i=0; i<5; i++) {
//   // let name = response.businesses[i].name;
//   // let imageURL = response.businesses[i].image_url;
//   // let yelpURL = response.businesses[i].url;
//   // let activityLatitude = reponse.businesses[i].coordinates.latitude;
//   // let activityLongitude = reponse.businesses[i].coordinates.longitude;
//   // $(`.activitiesImage${[i+1]}`).attr("src", imageURL);
//   // $(`.activitiesLink${[i+1]}`).attr("href", yelpURL);
//   // let activityInfo = $(`<p class="text-center">`).text(name);
//   // $(`.activities${i+1}`).append(activityInfo);
// };
});
//-----------------
term5 ="?term=activities";
locationYelp = "&location=denver, CO";
query5 = term5 + locationYelp;

queryURLyelp = "https://cors-anywhere.herokuapp.com/" + `https://api.yelp.com/v3/businesses/search${query5}`;
$.ajax({
  url: queryURLyelp,
  method: "GET",
  headers: {
    "Authorization": "Bearer ETyIXGHKE8nskR_WJUaEvwJeXNjFJ5Cq_a_HdZNZmsTkzTut_-Y68XQPpCej1uyiIcmuW2PhP2j2rlSZMKmeecYZK8lOYImJNV9s00Su6K_Peuojo9vcupVUc5n-XHYx"
  }
}).then(function(response){
console.log(response);
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

term6 ="?term=nightlife";
locationYelp = "&location=denver, CO";
query6 = term6 + locationYelp;

queryURLyelp = "https://cors-anywhere.herokuapp.com/" + `https://api.yelp.com/v3/businesses/search${query6}`;
$.ajax({
  url: queryURLyelp,
  method: "GET",
  headers: {
    "Authorization": "Bearer ETyIXGHKE8nskR_WJUaEvwJeXNjFJ5Cq_a_HdZNZmsTkzTut_-Y68XQPpCej1uyiIcmuW2PhP2j2rlSZMKmeecYZK8lOYImJNV9s00Su6K_Peuojo9vcupVUc5n-XHYx"
  }
}).then(function(response){
console.log(response);
// for(let i=0; i<10; i++) {
//   let name = response.businesses[i].name;
//   let imageURL = response.businesses[i].image_url;
//   let yelpURL = response.businesses[i].url;
//   // let activityLatitude = reponse.businesses[i].coordinates.latitude;
//   // let activityLongitude = reponse.businesses[i].coordinates.longitude;
//   $(`.activitiesImage${[i+1]}`).attr("src", imageURL);
//   $(`.activitiesLink${[i+1]}`).attr("href", yelpURL);
//   let activityInfo = $(`<p class="text-center">`).text(name);
//   $(`.activities${i+1}`).append(activityInfo);
// };
});



//---------------------------------------- end event API section ---------------------------------------------