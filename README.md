# Wanderlust

! https://binyanlin.github.io/wanderlust-app/

## What is it?
Wanderlust is an app that was created by a group of 3. We desired to create an application with all of our aligned interests.
<br>This resulted in an app that was curated for the spontaneous traveler. One who is directionless yet adventurous. 

## How does it work?
The app begins with a page that displays 3 sliders:
1. "How wild do you want to be?"
2. "How lavish do you want to be?"
3. "How social do you want to be?"

These 3 sliders take in the user's levels of safety, cost, and socialness and generates a location based on those preferences.
<br>The first page is hidden, and the second page reveals the location and a UI which features many click events.
<br>Aside from all these click events there is also some information on the destination and a map appended to the page.
<br>You can click buttons which: book your flight, reroll destination, go to scheduler, 
<br>see what there is to do, see what there is to eat, and also if you click on destination info, 
<br>all buttons are hidden so you may see the background image (picture that has been photographed at user's destination).

![demo image here](https://i.ibb.co/8dCq4Kz/wanderlust-Hub-Demo.jpg)

<br>This second page is basically a hub that leads you to other corresponding pages. 
<br>All pages have their different gateways as well, one of which leading it back to this hub.
## How was it created?
### The Process
- Divided the work amongst ourselves to create the wireframe for our idea
- Created a array of objects for our preset destinations 
- Studied APIs which we thought would be viable to the project
  - The APIs that grabbed the bulk of what we needed were *Google Maps API*,
    - used to load a functional map centered at the generated destination
    - collect some data on the location which was then used for our other APIs
  - *Ticketmaster API*, which was used to pull up upcoming events for the destination
  - *Yelp API*, which was used to find restaurant options for breakfast, lunch, and dinner
    - and also activities for that destination 
- Made the proper calls to append the information we got from these APIs onto our app
- Added a scheduler and some final touches to make the app aethetically appealing 

### The Challenges
- It was difficult to find an easily accesible API for booking cheap flights
- This was our first time collaborating with people on github so there were many conflicts
- Communication wasn't always at it's prime. We were unable to reach people sometimes
- Unable to load information on cities through APIs so created a scraper instead for the Tripadvisor website

### Technologies Used
- HTML, CSS, Bootstrap, Javascript, jQuery
- Google Maps API w/ Place's library
- Ticketmaster API
- Yelp API
- HTML Drag and Drop API
- CORS anywhere
