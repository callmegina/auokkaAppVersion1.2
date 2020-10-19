class Product {
    constructor(id, title, imageUrl, type, description, netWeight, productOriPrice, productSalePrice) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.type = type;
        this.description = description;
        this.netWeight = netWeight;
        this.productOriPrice = productOriPrice;
        this.productSalePrice = productSalePrice;
    }
}

export default Product;