document.addEventListener('DOMContentLoaded', function() {
  // get a reference to the template script tag
  var templateSource = document.querySelector(".userTemplate").innerHTML;
  // compile the template
  var userTemplate = Handlebars.compile(templateSource);

  var userDataElem = document.querySelector('.userData');

  userDataElem.innerHTML = userTemplate({
    username: "MrBooi",
    firstName: "Ayabonga",
    lastName: "Booi",
    email: "ayabongabooi2@gmail.com"
  });



});
