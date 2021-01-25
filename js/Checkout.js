const checkout = document.getElementById("infoPrice");

const ticket = document.createElement('section');
ticket.className = 'price';

const ticketInfo = document.createElement('article');
ticketInfo.className = 'text';

const subtotal = document.createElement('p');
subtotal.innerHTML = "Subtotal";
ticketInfo.appendChild(subtotal);

const tasas = document.createElement('p');
tasas.innerHTML = "Tasas";
ticketInfo.appendChild(tasas);

const delivery = document.createElement('p');
delivery.innerHTML = "Delivery";
ticketInfo.appendChild(delivery);

const total = document.createElement('p');
total.innerHTML = "Total";
ticketInfo.appendChild(total);

const pricesInfo = document.createElement('article');
pricesInfo.className = 'pricesInfo';

const valueSubTotal = document.createElement('p');
valueSubTotal.innerHTML = "0 €";
pricesInfo.appendChild(valueSubTotal);

const valueTasas = document.createElement('p');
valueTasas.innerHTML = "0.0 €";
pricesInfo.appendChild(valueTasas);

const valueDelivery = document.createElement('p');
valueDelivery.innerHTML = "FREE";
pricesInfo.appendChild(valueDelivery);

const valueTotal = document.createElement('p');
valueTotal.innerHTML = "0 €";
pricesInfo.appendChild(valueTotal);

const checkoutBtn = document.createElement('button');
checkoutBtn.className = "checkoutBtn";
checkoutBtn.innerHTML = "Enviar mi Pedido";

ticket.appendChild(ticketInfo);
ticket.appendChild(pricesInfo);

checkout.appendChild(ticket);
checkout.appendChild(checkoutBtn);

export function updateTotals(subtotal, taxes, delivery, total){
    valueSubTotal.innerHTML = subtotal.toFixed(2) + ' €' ;
    valueTasas.innerHTML = taxes.toFixed(2) + '€';
    if (delivery == 0){
        valueDelivery.innerHTML = "FREE";
    } else {
        valueDelivery.innerHTML = delivery.toFixed(2) + '€';
    }
    valueTotal.innerHTML = total.toFixed(2) + '€';
}
