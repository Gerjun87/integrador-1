function calculateTotalPrice() {
    console.log("Calculando precio...");

    // Almacena la cantidad de entradas ingresadas por el usuario
    let numTickets = document.getElementById("num-tickets").value;
    console.log("numTickets: " + numTickets);

    // Almacena el porcentaje de descuento seleccionado por el usuario
    let discountPercentage = document.getElementById("discount-percentage").value;
    console.log("discountPercentage: " + discountPercentage);

    // Calcula el monto total de descuento en moneda
    let discount = (numTickets * 1000) * discountPercentage / 100;
    console.log("discount: " + discount);

    // Calcula el precio total restando el descuento al valor de la entrada
    let totalPrice = (numTickets * 1000) - discount;
    console.log("totalPrice: " + totalPrice);

    // Actualiza el HTML para mostrar el precio total en la pantalla
    document.getElementById("total-price").value = totalPrice;
}

// Botón flotante
(function() {
    // Posición de desplazamiento en la que se mostrará el botón
    const scrollPositionToShow = 115;
    const divTop = document.getElementById("div-totop");
    window.addEventListener("scroll", function() {
        if (document.documentElement.scrollTop > scrollPositionToShow) {
            divTop.style.display = "inherit";
        } else {
            divTop.style.display = "none";
        }
    });
})();

// Envío del formulario
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Muestra un mensaje de éxito personalizado
    let successMessage = "¡Compra exitosa! Se ha emitido una alerta.";
    alert(successMessage);

});
