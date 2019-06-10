
const pageDisplay = [".openingPage", ".secondPage", ".eventPage", ".foodPage", ".scheduler"];
let pageDisplayBool = [true, false, false, false, false];

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
    $(".foodPage").show();
  } if (pageDisplayBool[3]) {
    $(".mainPage").show();
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

