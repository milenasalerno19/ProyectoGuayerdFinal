$("#fadePersonalizado").hide();
$("#pinepark-logotipo").hide();
$("#site-title").hide();
$("#nav-button").hide();
$("#find-your-home").hide();
$("#logo-line-pine").hide();
$("#ig-container").hide();

$(document).ready(function(){
  $("#fadePersonalizado").fadeIn(500);
  $("#pinepark-logotipo").fadeIn(2000);
  $("#site-title").fadeIn(4000);
  $("#nav-button").fadeIn(4000);
  $("#find-your-home").fadeIn(4000);
  $("#logo-line-pine").fadeIn(500);
  $("#ig-container").fadeIn(4000);


  $("#find-your-home").click(function(){
    $("#form-container").fadeIn();
  });

});

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});
