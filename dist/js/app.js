document.addEventListener("DOMContentLoaded", function () {
  Handlebars.registerHelper('includes', function (value, search) {
    if (!value) return false;
    return value.indexOf(search) !== -1;
  });

  Handlebars.registerHelper('eq', function (a, b) {
    return a === b;
  });

  fetch("./data/data.json")
    .then(response => response.json())
    .then(data => {

      const template = Templates["main"];
      const html = template(data);

      document.getElementById("app").innerHTML = html;
    });

});
