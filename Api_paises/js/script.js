//chamando a função doFetchAsync

window.addEventListener("load", doFetchAsync)

// Declaração das variaveis globais

var countCountries = document.querySelector("#countCountries");
var countCountriesFavorite = document.querySelector("#countCountriesFavorite");
var table = document.querySelector("#tabCountries");
var tableFavorito = document.querySelector("#tabFavorites");
var totalPopulationList = document.querySelector("#totalPopulationList");
var totalPopulationFavorites = document.querySelector("#totalPopulationFavorites");
var total = 0;
var atualizado_maior = 0;
var NumberFormat = new Intl.NumberFormat({ style: 'currency', currency: 'INR', minimumFractionDigits: 2 })
var search = document.querySelector("#pesquisa_coutries")
var search_favorito = document.querySelector("#pesquisa_coutries_favorito")

async function doFetchAsync() {

  const res = await fetch('https://restcountries.com/v2/all');
  const paises = await res.json();

  //funções primarias 
  constuir_filtro(paises);
  constuir_filtro_favorito(paises)
  mostraPaises(paises);
  totalPopulation(paises);
  totalPaises(paises);


  function mostraPaises(Paises) {
    Paises.sort(function (x, y) {
      return x.name > y.name
    })
    Paises.forEach((coutry, indice) => {

      const { numericCode, translation, flag, name, population, region } = coutry;

      var tr = document.createElement("tr");
      tr.id = indice;
      tr.classList.add(region.replace(" ", ""));

      var td_id = document.createElement("td");
      td_id.textContent = numericCode;

      var td_name = document.createElement("td");
      td_name.id = "nome";
      td_name.textContent = name;

      var td_button = document.createElement("td");
      td_button.id = indice;
      var button_favorite = create_button(indice, "add");
      button_favorite.addEventListener("click", favorito);
      td_button.appendChild(button_favorite);

      var td_pais = document.createElement("td");
      var img = document.createElement("img");
      img.src = flag;
      td_pais.appendChild(img);

      var td_poplation = document.createElement("td");
      td_poplation.textContent = NumberFormat.format(population);



      tr.appendChild(td_button);
      tr.appendChild(td_id);
      tr.appendChild(td_pais);
      tr.appendChild(td_name);
      td_name.style.display = "none"
      tr.appendChild(td_poplation);
      table.appendChild(tr);


      search.addEventListener("keydown", filter_region)
      search_favorito.addEventListener("keydown", pesquisar)
    });
  };

  function create_button(i, clas) {

    var button = document.createElement("button");
    if (clas == "add") {
      button.classList.add("add");
      button.textContent = "+";
    } else if (clas == "remove") {
      button.classList.add("remove");
      button.textContent = "-";

    };

    button.id = i;
    return button;

  };

  function totalPaises(Paises) {
    countCountries.innerHTML = Paises.length;
  }
  function totalPopulation(Paises) {

    total = 0;
    Paises.forEach(coutry => {

      const { population } = coutry;
      total = population + total;

      totalPopulationList.innerHTML = NumberFormat.format(total);
    });
  }

  function naofavoritado(E) {

    var paisfavorito = document.getElementById(E.target.id);
    var button = paisfavorito.querySelector("button");
    var td_button_delete = paisfavorito.querySelectorAll("td");
    button.remove();
    var add_button = create_button(E.target.id, "add");
    add_button.addEventListener("click", favorito);
    td_button_delete[0].appendChild(add_button);

    var positon_before = table.children[E.target.id];
    table.insertBefore(paisfavorito, positon_before);
    atualizar_paises("naofavorito");
    atualizar_population("naofavorito", E);

  }

  function favorito(E) {

    var paisfavorito = document.getElementById(E.target.id);
    var button = paisfavorito.querySelector("button");
    var td_button_delete = paisfavorito.querySelectorAll("td");
    button.remove();
    var delete_button = create_button(E.target.id, "remove");
    delete_button.addEventListener("click", naofavoritado);
    td_button_delete[0].appendChild(delete_button);
    tableFavorito.appendChild(paisfavorito);
    atualizar_paises("favorito");
    atualizar_population("favorito", E);

  }


  function atualizar_paises(clas) {

    if (clas == "naofavorito") {
      countCountries.innerHTML++;
      countCountriesFavorite.innerHTML--;

    } else if (clas == "favorito") {

      countCountries.innerHTML--;
      countCountriesFavorite.innerHTML++;

    }

  }
  function atualizar_population(clas, E) {

    if (clas == "naofavorito") {

      atualizado_maior = total + parseInt(paises[E.target.id].population);
      total = atualizado_maior;
      totalPopulationList.innerHTML = NumberFormat.format(total);

    } else if (clas == "favorito") {

      atualizado = total - parseInt(paises[E.target.id].population);
      total = atualizado
      totalPopulationList.innerHTML = NumberFormat.format(total);

    }

  }
  function pesquisar(E) {
    filter = E.target.value.toUpperCase();
    var tr = null
    var tr = null
    if (E.target.id == "pesquisa_coutries") {

      tr = table.querySelectorAll("tr");
      td_names = table.querySelectorAll("#nome")

    } else if (E.target.id == "pesquisa_coutries_favorito") {
      tr = tableFavorito.querySelectorAll("tr");
      td_names = tableFavorito.querySelectorAll("#nome")

    }

    for (i = 0; i < td_names.length; i++) {
      a = td_names[i];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue.toUpperCase().indexOf(filter) == "") {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }

  function constuir_filtro(paises) {
    var divRegioes = document.querySelector("#regioes")

    var newArray = []
    paises.forEach(coutry => {
      const { region } = coutry;
      newArray.push(region);
    })

    var regioes = newArray.filter(function (este, i) {
      return newArray.indexOf(este) === i;
    });
    console.log()
    regioes.forEach(element => {

      var btnRegioes = document.createElement("button")
      btnRegioes.value = element;
      btnRegioes.textContent = element
      btnRegioes.id = "naofavorito"
      btnRegioes.addEventListener("click", filter_region)
      divRegioes.appendChild(btnRegioes)
    })
  }
  function constuir_filtro_favorito(paises) {
    var divRegioesFavoritas = document.querySelector("#regioes_favoritas")

    var newArray = []
    paises.forEach(coutry => {
      const { region } = coutry;
      newArray.push(region);
    })

    var regioes = newArray.filter(function (este, i) {
      return newArray.indexOf(este) === i;
    });
    console.log()
    regioes.forEach(element => {

      var btnRegioes = document.createElement("button")
      btnRegioes.value = element;
      btnRegioes.textContent = element
      btnRegioes.id = "favorito"
      btnRegioes.addEventListener("click", filter_region)
      divRegioesFavoritas.appendChild(btnRegioes)
    })
  }
  function filter_region(E) {

    filter = E.target.value.toUpperCase();
    if (E.target.id == "favorito") {
      tr = tableFavorito.querySelectorAll("tr");
    } else if (E.target.id == "naofavorito") {
      tr = table.querySelectorAll("tr");
    }
    for (i = 0; i < tr.length; i++) {
      a = tr[i];
      txtValue = a.classList.value || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue.toUpperCase().indexOf(filter) == "") {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }

    }
  }
}
