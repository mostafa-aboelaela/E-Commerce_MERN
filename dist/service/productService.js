import productModel from "../models/productModel.js";
export const getAllProducts = async () => {
    return await productModel.find();
};
export const seedInitialProducts = async () => {
    const products = [{ title: "Sample Product 1", image: "img1.png", price: 9.99, stock: 100 },
        { title: "Sample Product 2", image: "img2.png", price: 19.99, stock: 50 },
        { title: "Sample Product 3", image: "img3.png", price: 29.99, stock: 25 },
        { title: "Sample Product 4", image: "img4.png", price: 39.99, stock: 10 },
        { title: "Sample Product 5", image: "img5.png", price: 49.99, stock: 5 },
        { title: "Sample Product 6", image: "img6.png", price: 59.99, stock: 0 },
        { title: "Sample Product 7", image: "img7.png", price: 69.99, stock: 20 },
        { title: "Sample Product 8", image: "img8.png", price: 79.99, stock: 15 },
        { title: "Sample Product 9", image: "img9.png", price: 89.99, stock: 30 },
        { title: "Sample Product 10", image: "img10.png", price: 99.99, stock: 8 }
    ];
    const existingProducts = await getAllProducts();
    if (existingProducts.length === 0) {
        await productModel.insertMany(products);
    }
};
//# sourceMappingURL=productService.js.map