window.onload = LoadLocalData;

function LoadLocalData() {
  if (localStorage.getItem("CalcFlex_Gas_Con") == null) {
    localStorage.setItem("CalcFlex_Gas_Con", "1.3");
  }

  if (localStorage.getItem("CalcFlex_Eta_Con") == null) {
    localStorage.setItem("CalcFlex_Eta_Con", "1");
  }

  document.querySelector("#Gas_Cons").value = localStorage.getItem("CalcFlex_Gas_Con");
  document.querySelector("#Eta_Cons").value = localStorage.getItem("CalcFlex_Eta_Con");
}

function CalcFlex() {
  var gas_con = document.querySelector("#Gas_Cons").value;
  var eta_con = document.querySelector("#Eta_Cons").value;
  var gas_price = document.querySelector("#Gas_Price").value;
  var eta_price = document.querySelector("#Eta_Price").value;

  var effic_dif = gas_con / eta_con;
  var price_dif = gas_price / eta_price;

  if (effic_dif > price_dif) {
    alert("Abasteça com gasolina");
  } else {
    alert("Abasteça com etanol");
  }
}

document.querySelector("#Gas_Cons").addEventListener("keyup", function() {
      localStorage.setItem("CalcFlex_Gas_Con", this.value);
    }, false);

document.querySelector("#Eta_Cons").addEventListener("keyup", function() {
      localStorage.setItem("CalcFlex_Eta_Con", this.value);
    }, false);
