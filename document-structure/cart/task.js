	

const setClickClass = (elClassName, func) => {
        Array.from(document.getElementsByClassName(elClassName)).forEach(el => {
			el.addEventListener('click', e => {
				func(e);
				
		    });
	      }
		)
    }

	const changeCounter = (e, value) => {
		let quantityElement = e.target.parentNode.getElementsByClassName(
			"product__quantity-value"
		)[0];
		let currentValue = Number(quantityElement.textContent);
		let newValue = currentValue + value;
		if (newValue > 0) quantityElement.textContent = newValue;
	};
	
	const incrementStep = 1;
	
	const decrement = e => {
		changeCounter(e, -incrementStep);
	};
	
	const increment = e => {
		changeCounter(e, incrementStep);
	};


	let cartProducts = document.getElementsByClassName("cart__products")[0];


	const addClickEvents = () => {
		setClickClass("product__quantity-control_dec", decrement);
		setClickClass("product__quantity-control_inc", increment);
		setClickClass("product__add", addProductToCart);
	};
	
	addClickEvents();





