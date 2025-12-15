document.addEventListener("DOMContentLoaded", function () {

  fetch("./data/data.json")
    .then(response => response.json())
    .then(data => {

      // Usamos el template correcto
      const template = Templates["main"];

      // Enviamos TODO el JSON al template
      const html = template(data);

      // Inyectamos el resultado en el #app
      document.getElementById("app").innerHTML = html;
    });

});