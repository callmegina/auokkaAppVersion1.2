import Product from './models/product';

const PRODUCTS = [

    new Product(
        'P1',
        '营养鸡蛋',
        //'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
        '蛋类',
        '有机营养的鸡蛋',
        '100g',
        5
    ),

    new Product(
        'P2',
        '超大颗甜草莓',
        //'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
        '水果',
        '澳大利亚果园无农药大草莓',
        '350g',
        7
    ),
    new Product(
        'P3',
        '墨鱼仔',
        //'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
        '干货',
        '中国特色腌制墨鱼',
        '200g',
        400
    )
];

export default PRODUCTS;

