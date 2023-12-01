let loader = document.getElementById("loader");


const addLoader = () => loader.classList.add("loader_active");
const removeLoader = () => loader.classList.remove("loader_active");

let itemsCurrency = document.getElementById('items');

function renderCurrency (currency, itemsElement) {

	let valutes = currency["response"]["Valute"];
	
		itemsElement.innerHTML = "";
		for (let valute in valutes) {
			let newItem = document.createElement("div");
			newItem.classList.add("item");
	
			let valuteCode = document.createElement("div");
			valuteCode.classList.add("item__code");
			valuteCode.append(valutes[valute]["CharCode"]);
			newItem.append(valuteCode);
	
			let valuteValue = document.createElement("div");
			valuteValue.classList.add("item__value");
			valuteValue.append(valutes[valute]["Value"]);
			newItem.append(valuteValue);
	
			let valuteCurrency = document.createElement("div");
			valuteCurrency.classList.add("item__currency");
			valuteCurrency.append("руб.");
			newItem.append(valuteCurrency);
	
			itemsElement.append(newItem);
		}
}


function requestOnLoadStart() {
	let previousCurrency = JSON.parse(window.localStorage.getItem("currency"));
	if (previousCurrency) renderCurrency(previousCurrency, itemsCurrency);
	addLoader();
}

function requestOnLoadEnd() {
	removeLoader();
	let response = this.response;
	renderCurrency(response, itemsCurrency);
	window.localStorage.setItem("currency", JSON.stringify(response));
}

function loadCurrency() {
	let currencyRequest = new XMLHttpRequest();
	currencyRequest.responseType = "json";
	currencyRequest.addEventListener("loadstart", requestOnLoadStart, false);
	currencyRequest.addEventListener("loadend", requestOnLoadEnd, false);
	currencyRequest.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
	currencyRequest.send();
}

loadCurrency();


