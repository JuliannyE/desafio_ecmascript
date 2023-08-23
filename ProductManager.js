class ProductManager {
    constructor() {
        this.products = []
        this.id = 1
    }

    addProduct(newProduct) {
        // que no exista el codigo actual en los products
        const existe = this.products.find( product => product.code === newProduct.code)
        if (existe) {
            console.log("Error: Este code ya existe")
            return "Error: Este code ya existe"
        }

        // crearse con un id autoincrementable
        newProduct.id = this.id
        this.id = this.id + 1

        this.products.push(newProduct)
    }

    getProducts() {
        return this.products
    }

    getProductById(productId) {

        const productoEncontrado = this.products.find( p => p.id === productId)

        if(!productoEncontrado) {
            return "Error: Este producto no existe"
        }

        return productoEncontrado
     }
}

/*
 * ejecucion de la clase
*/

const blusa = {
    title: "Blusa blanca",
    description: "Manga larga",
    price: 120,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 10
}
const pantalon = {
    title: "Pantalon",
    description: "Manga larga",
    price: 120,
    thumbnail: "Sin imagen",
    code: "abc1234",
    stock: 10
}

const Carrito = new ProductManager()

// llamar a getProduct
console.log(Carrito.getProducts())

Carrito.addProduct(blusa)
Carrito.addProduct(pantalon)
Carrito.addProduct(pantalon)

// segunda llamada a getProduct
console.log("------")
console.log(Carrito.getProducts())

// llamar a getProductById
console.log("------")
console.log(Carrito.getProductById(3))