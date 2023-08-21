//La clase 'productsPage' debe tener un único método que agregue los productos e indicar
// el producto a agregar como parámetro.
export class ProductPage{

    añadirProducto(producto){
        cy.xpath('//button[@class="chakra-button css-1p0xaah"]').click(producto);
    }
}