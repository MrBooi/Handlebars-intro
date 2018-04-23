document.addEventListener('DOMContentLoaded', function() {
  // get a reference to the template script tag
  var templateSource = document.querySelector(".userTemplate").innerHTML;
  // compile the template
  var userTemplate = Handlebars.compile(templateSource);

  var userDataElem = document.querySelector('.userData');

  var userData = { users: [
         {username: "MrBooi", firstName: "Ayabonga", lastName: "Booi", email: "ayabongabooi2@gmail.com" },
         {username: "Nong", firstName: "Matome", lastName: "Nong", email: "matomenong@gmail.com" },
         {username: "ryan", firstName: "Ryan", lastName: "Carson", email: "ryan@test.com" }
       ]};

       var userDataHTML = userTemplate(userData);
    userDataElem.innerHTML = userDataHTML;

});
