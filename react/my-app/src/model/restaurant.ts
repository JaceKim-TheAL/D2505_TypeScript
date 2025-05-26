// let data = {
//   name: "John",
//   category: "western",
//   address: {
//     city: "New York",
//     detail: "123 Main St",
//     zipcode: 10001
//   },
//   menu:[
//     { name: "Burger", price: 5.99, category: "main" },
//     { name: "Salad", price: 4.99, category: "side" },
//     { name: "Pizza", price: 8.99, category: "main" },
//     { name: "Ice Cream", price: 3.99, category: "dessert" },
//     { name: "Coffee", price: 2.49, category: "beverage" }
//   ]
// }

export type Restaurant = {
    name: string;
    category: string;
    address: {
        city: string;
        detail: string;
        zipcode: number;
    };
    menu: {
        name: string;
        price: number;
        category: string;
    }[];
};

export type Address = {
    city: string;
    detail: string;
    zipcode: number;
};

export type Menu = {
    name: string;
    price: number;
    category: string;
};

export type AddressWithoutZipcode = Omit<Address, 'zipcode'>;
export type RestaurantOnlyCategory = Pick<Restaurant, 'category'>;

// export type ApiResponse<T> = {
//     data: T[];
//     totalPages: number;
//     page: number
// }

// export type RestaurantApiResponse = ApiResponse<Restaurant>;
// export type MenuApiResponse = ApiResponse<Menu>;
