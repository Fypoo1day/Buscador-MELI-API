function mostrarResultados(results) {
  //console.log(results);
  const contenedor = document.querySelector(".results");
  const template = document.querySelector("#result-item-template");

  for (const r of results) {
    const titleEl = template.content.querySelector(".result-item-title");
    titleEl.textContent = r.title;

    const conditionEl = template.content.querySelector(
      ".result-item-condition"
    );
    conditionEl.textContent = r.condition;

    const precioEl = template.content.querySelector(".result-item-price");
    precioEl.textContent = r.price;

    const cantidadVendidaEl = template.content.querySelector(
      ".result-item-sell-count-num"
    );
    cantidadVendidaEl.textContent = r.sold_quantity;

    const imgEl = template.content.querySelector(".result-item-img");
    imgEl.src = r.thumbnail;

    const clone = document.importNode(template.content, true);
    contenedor.appendChild(clone);
  }
}

function main() {
  const formEl = document.querySelector(".search-form");
  formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    const palabraABuscar = e.target.buscar.value;
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + palabraABuscar)
      .then((response) => response.json())
      .then((data) => mostrarResultados(data.results));
  });
}

main();
