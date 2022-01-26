export const AsideSections  = [
    "Dashboard",
    "Users", 
    "Category", 
    "Products", 
    "Inventory", 
    "Orders", 
    "Returns", 
    "Revenue", 
    "Reviews", 
    "CMS", 
    "Discount", 
    "Banners", 
    "FAQs", 
    "Notifications", 
    "Delivery Charges", 
];

export const Icons = {
    "Dashboard": <i className="bi bi-clipboard-data"></i>,
    "Users": <i className="bi bi-people"></i>, 
    "Category": <i className="bi bi-grid"></i>, 
    "Products": <i className="bi bi-archive"></i>, 
    "Inventory": <i className="bi bi-calendar2-check"></i>, 
    "Orders": <i className="bi bi-cart-check"></i>, 
    "Returns": <i className="bi bi-arrow-return-right"></i>, 
    "Revenue": <i className="bi bi-graph-up-arrow"></i>, 
    "Reviews": <i className="bi bi-person-check"></i>, 
    "CMS": <i className="bi bi-journal-text"></i>, 
    "Discount": <i className="bi bi-megaphone"></i>, 
    "Banners": <i className="bi bi-images"></i>, 
    "FAQs": <i className="bi bi-person-rolodex"></i>, 
    "Query": <i className="bi bi-patch-question"></i>, 
    "Notifications": <i className="bi bi-bell"></i>, 
    "Delivery Charges": <i className="bi bi-truck"></i>, 
};

export const ContentSection = [
    ...AsideSections,
    "Profile",
]

export const DashboardCard = [
    { text: 'Total Users', amount: '1200' },
    { text: 'New User', amount: '200' },
    { text: 'Total Orders Requests', amount: '200' },
    { text: 'New Orders Requests', amount: '10' },
    { text: 'Total Orders pending', amount: '400' },
    { text: 'Total Orders Cancelled', amount: '1500' },
    { text: 'Return Requests Accepted', amount: '200' },
    { text: 'Return Requests Rejected', amount: '10' },
]

export const RevenueCard = [
    { text: 'Total Earning', amount: '1200' },
    { text: 'Credit/Debit Card', amount: '600' },
    { text: 'Net Banking', amount: '200' },
    { text: 'UPI', amount: '100' },
    { text: 'Wallet', amount: '300' },
]

export const Categories = [
    { _id: 1, name: 'Electronics', subcategory: ['Mobile', 'TV', 'Laptop', 'Computer']},
    { _id: 2, name: 'Electronics', subcategory: ['Mobile', 'TV']},
    { _id: 3, name: 'Electronics', subcategory: ['Mobile', 'TV']},
    { _id: 4, name: 'Electronics', subcategory: ['Mobile', 'TV', 'Laptop', 'Computer']},
]

export const EarningGraphData = [
    {
      name: 'Area A',
      Earning: 2400,
    },
    {
      name: 'Area B',
      Earning: 1398,
    },
    {
      name: 'Area C',
      Earning: 2400,
    },
    {
      name: 'Area D',
      Earning: 3908,
    },
    {
      name: 'Area E',
      Earning: 4800,
    },
]

export const UserGraphData = [
    {
      name: 'Area A',
      Users: 2000,
    },
    {
      name: 'Area B',
      Users: 1300,
    },
    {
      name: 'Area C',
      Users: 4000,
    },
    {
      name: 'Area D',
      Users: 3000,
    },
    {
      name: 'Area E',
      Users: 4000,
    },
]

export const OrderGraphData = [
    {
      name: 'Area A',
      Orders: 2400,
    },
    {
      name: 'Area B',
      Orders: 1398,
    },
    {
      name: 'Area C',
      Orders: 4800,
    },
    {
      name: 'Area D',
      Orders: 3908,
    },
    {
      name: 'Area E',
      Orders: 4800,
    },
]