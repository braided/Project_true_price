const products = [
    {
        name: "iPhone 15",
        shop: "Elmir",
        price: 39999
    },
    {
        name: "iPhone 15",
        shop: "Comfy",
        price: 40500
    },
    {
        name: "Samsung S24",
        shop: "Foxtrot",
        price: 32000
    },
    {
        name: "Samsung S24",
        shop: "Rozetka",
        price: 31500
    }
];

function searchProduct(){

    const searchText =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const table =
        document.getElementById("resultTable");

    table.innerHTML = "";

    products.forEach(product => {

        if(product.name.toLowerCase().includes(searchText)){

            table.innerHTML += `
                <tr>
                    <td>${product.name}</td>
                    <td>${product.shop}</td>
                    <td>${product.price} грн</td>
                </tr>
            `;
        }

    });

}