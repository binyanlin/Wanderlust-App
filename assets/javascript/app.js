let firstPage = true;
let secondPage = false;

const displayer = () => {
  if (firstPage) {
    $(".openingPage").show();
  } else if (!firstPage) {
    $(".openingPage").hide();
  };

  if (secondPage) {
    $(".secondPage").show();
  } else if (!secondPage) {
    $(".secondPage").hide();
  };
};

displayer();

$(document).on("click", ".buttonStart", function(){
  firstPage = false;
  secondPage = true;
  displayer();
});

