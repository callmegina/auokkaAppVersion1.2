import Product from './models/product';

const PRODUCTS = [

    new Product(
        'P1',
        '营养鸡蛋',
        'https://pngriver.com/wp-content/uploads/2018/04/Download-Bread-PNG-Image.png',
        '蛋类',
        '有机营养的鸡蛋',
        '100g',
        5
    ),

    new Product(
        'P2',
        '超大颗甜草莓',
        'https://www.prestonmarket.com.au/wp-content/uploads/2020/02/strawberry-clip-art-strawberry-png-images.jpg',
        '水果',
        '澳大利亚果园无农药大草莓',
        '350g',
        7
    ),
    new Product(
        'P3',
        '墨鱼仔',
        'https://favpng.com/png_view/lobster-fish-prawn-icon-png/FUCYZt9c',
        '干货',
        '中国特色腌制墨鱼',
        '200g',
        400
    )
];

export default PRODUCTS;

