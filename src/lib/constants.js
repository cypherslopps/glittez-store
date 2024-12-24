import { Icons } from "../components/Icons";

export const INSTANT_SEARCH_INDEX_NAME = 'products';
export const INSTANT_SEARCH_QUERY_SUGGESTIONS =
  'products';
export const INSTANT_SEARCH_HIERARCHICAL_ATTRIBUTES = [
  'hierarchicalCategories.lvl0',
  'hierarchicalCategories.lvl1',
];

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
        route: "/dashboard/products",
    },
    {
        Icon: Icons.category,
        title: "Categories",
        route: "/dashboard/categories"
    },
    {
        Icon: Icons.subcategory,
        title: "SubCategories",
        route: "/dashboard/subcategory"
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

export const topCategories = [
    {
        name: "Gaming",
        Icon: Icons.game
    },
    {
        name: "Home and office",
        Icon: Icons.home
    },
    {
        name: "Fashion",
        Icon: Icons.shirt
    },
    {
        name: "Computing",
        Icon: Icons.gadget
    },
    {
        name: "Electronics",
        Icon: Icons.electronics
    },
    {
        name: "Groceries",
        Icon: Icons.grocery
    }
]