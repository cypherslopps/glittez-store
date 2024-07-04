import { Icons } from "../components/Icons";

export const navigationLinks = [
    {
        title: "Home",
        route: "/",
        hasDropdown: false
    },
    {
        title: "Shop",
        route: "/shop",
        hasDropdown: false
    },
    {
        title: "Product Categories",
        route: "",
        hasDropdown: true
    }
];

export const footerLinks = [
    {
        title: "Company",
        links: [
            {
                title: "About Us",
                route: "/about"
            },
            {
                title: "Contact",
                route: "/contact"
            }
        ]
    },
    {
        title: "Shop",
        links: [
            {
                title: "All Categories",
                route: "/shop"
            }
        ]
    },
    {
        title: "Support",
        links: [
            {
                title: "FAQs",
                route: "/faqs"
            },
            {
                title: "Cookie Policy",
                route: "/cookie-policy"
            },
            {
                title: "Terms of Use",
                route: "/terms-of-use"
            }
        ]
    }
];

export const dashboardNavigationLinks = [
    {
        Icon: Icons.home,
        title: "Home",
        route: "/dashboard"
    },
    {
        Icon: Icons.handBag,
        title: "Products",
        route: "/dashboard/products"
    },
    {
        Icon: Icons.category,
        title: "Categories",
        route: "/dashboard/categories"
    },
    {
        Icon: Icons.subcategory,
        title: "SubCategories",
        route: "/dashboard/subcategories"
    },
    {
        Icon: Icons.userFill,
        title: "Users",
        route: "/dashboard/users"
    },
    {
        Icon: Icons.ticket,
        title: "Orders",
        route: "/dashboard/orders"
    }
];


export const allProducts = [
    {
        id: 0,
        title: "Nike Shoe",
        category: "Shoes",
        subCategory: null,
        slug: "nike-shoe",
        price: 32.42,
        color: "red"
    },
    {
        id: 1,
        title: "Jordan Shoe",
        category: "Shoes",
        subCategory: null,
        slug: "jordan-shoe",
        price: 132.42,
        color: "milk"
    },
    {
        id: 2,
        title: "Caron Shoe",
        category: "Shoes",
        subCategory: null,
        slug: "caron-shoe",
        price: 62.42,
        color: "black"
    },
    {
        id: 3,
        title: "Migan Shoe",
        category: "Shoes",
        subCategory: null,
        slug: "migan-shoe",
        price: 82,
        color: "white"
    },
    {
        id: 4,
        title: "Colly Shoe",
        category: "Shoes",
        subCategory: null,
        slug: "colly-shoe",
        price: 82,
        color: "white"
    },
    {
        id: 5,
        title: "BMW",
        category: "Cars",
        subCategory: null,
        slug: "bmw",
        price: 3942.43,
        color: "cyan"
    },
    {
        id: 6,
        title: "Macbook Air",
        category: "Laptops",
        subCategory: null,
        slug: "macbook-air",
        price: 1032.22,
        color: "milk"
    },
    {
        id: 7,
        title: "IPhone 11",
        category: "Phones",
        subCategory: null,
        slug: "iphone-11",
        price: 612.42,
        color: "black"
    },
    {
        id: 8,
        title: "Toyoto Corolla",
        category: "Cars",
        subCategory: null,
        slug: "toyota-corolla",
        price: 8132,
        color: "white"
    },
    {
        id: 9,
        title: "Frank's Bottle",
        category: "Kitchen",
        subCategory: null,
        slug: "franks-bottle",
        price: 12,
        color: "white"
    }
];