// shopping ecommerce web UI kit
import { MdPayments } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa6";
import { HiCurrencyDollar } from "react-icons/hi2";
import { FaShippingFast } from "react-icons/fa";
import {women,kid,men,deal1,deal2,deal3,deal4,deal5,deal6,pep1,pep2,pep3} from '../assets';
export const CategoryImage = [
  {category:women,
   title: "Women's Category",
  },
  {category:men,
   title:"Mens Category",
  },
  {category:kid,
  title: "kids Category"
},

]
export const features = [
    {   
        icon:MdPayments,
        Header:"Free Shipping",
        description : "Free shipping for orders above $150",
    },
    {   
        icon : FaHeadphones,
        Header : "Money Guarantee",
        description : "Within 30 day for an exchange",
    },
    {
        icon : HiCurrencyDollar,
        Header: "Online Support",
        description : "24 hours a day, 7 days a week",
    },
    {
        icon : FaShippingFast,
        Header : "Flexible Payment",
        description : "Pay with multiple credit cards", 
    } 
];

export const users = [
   {
    name : "Darshil",
    id: "darshil@2001.com",
    password : "darshil@2001",
   },
   {
    name: "Hemangi",
    id : "hemangi@2001",
    password : "hemangi@2001"
   },
   {
    name: "Hardik",
    id:"hardik@2001",
    password : "hardik@2001"
   }  
];
export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "features",
      title: "Features",
    },
    {
      id: "shop",
      title: "Shop",
    },
    {
      id: "deal",
      title: "Deals",
    },
    {
        id: "contactus",
        title: "ContactUs",
      },
  ];

  export const feedback = [
    {
      id: "feedback-1",
      content:
        "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
      name: "Herman Jensen",
      title: "Founder & Leader",
      img: pep1,
    },
    {
      id: "feedback-2",
      content:
        "Money makes your life easier. If you're lucky to have it, you're lucky.",
      name: "Steve Mark",
      title: "Founder & Leader",
      img: pep2,
    },
    {
      id: "feedback-3",
      content:
        "It is usually people in the money business, finance, and international trade that are really rich.",
      name: "Kenn Gallagher",
      title: "Founder & Leader",
      img: pep3,
    },
  ];

  export const footerLinks = [
    {
      title: "Information",
      links: [
        {
          name: "MyAccount",
          link: "#",
        },
        {
          name: "Login",
          link: "#",
        },
        {
          name: "My Cart",
          link: "#",
        },
        {
          name: "My WishList",
          link: "#",
        },
        {
          name: "CheckOut",
          link: "#",
        },
      ],
    },
    {
      title: "Services",
      links: [
        {
          name: "About Us",
          link: "#",
        },
        {
          name: "Careers",
          link: "#",
        },
        {
          name: "Delivery Imformation",
          link: "#",
        },
        {
          name: "Privacy Policy",
          link: "#",
        },
        {
          name: "Newsletters",
          link: "#",
        },
      ],
    },
  ]

  // export const socialMedia = [
  //   {
  //     id: "social-media-1",
  //     icon: instagram,
  //     link: "https://www.instagram.com/",
  //   },
  //   {
  //     id: "social-media-2",
  //     icon: facebook,
  //     link: "https://www.facebook.com/",
  //   },
  //   {
  //     id: "social-media-3",
  //     icon: twitter,
  //     link: "https://www.twitter.com/",
  //   },
  //   {
  //     id: "social-media-4",
  //     icon: linkedin,
  //     link: "https://www.linkedin.com/",
  //   },
  // ];
// yeh baki hai 
export const ContactUsList= [
   {
     contact : "Contact No : (+91)8998829947"
   },
   {
    contact : "Email us here : Zaraa@example.com"
   },
   {
    contact : "Address : 3891 Ranchview Dr. Hemant, California 234876"
   },

];

export const BestDealsImages= [
  {
    image:deal1,
  },
  {
    image:deal2,
  },
  {
    image:deal3,
  },
  {
    image:deal4,
  },
  {
    image:deal5,
  },
  {
    image:deal6,
  }
]