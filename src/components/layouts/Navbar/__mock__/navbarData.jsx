import { AiOutlinePlus } from 'react-icons/ai'
import { GiCakeSlice, GiCupcake } from 'react-icons/gi'
import { LuApple } from 'react-icons/lu'
import { PiCookingPot } from 'react-icons/pi'
import { SiBuymeacoffee } from 'react-icons/si'
import { TbIceCream, TbMeat, TbSalad } from 'react-icons/tb'
import { PiFishSimpleDuotone } from 'react-icons/pi'

export const navbarData = [
  {
    id: 1,
    class: 'mainMenu',
    name: 'All Categories',
    link: '',
    type: 'dropdown',
    dropdown: [
      {
        id: 1,
        image: <LuApple />,
        link: '',
        name: 'Fresh Fruit',
      },
      {
        id: 2,
        image: <TbSalad />,
        link: '',
        name: 'Vegetables',
      },
      {
        id: 3,
        image: <PiFishSimpleDuotone />,
        link: '',
        name: 'River Fish',
      },
      {
        id: 4,
        image: <TbMeat />,
        link: '',
        name: 'Chicken & Meat',
      },
      {
        id: 5,
        image: <SiBuymeacoffee />,
        link: '',
        name: 'Drink & Watert',
      },
      {
        id: 6,
        image: <TbIceCream />,
        link: '',
        name: 'Yogurt & Ice Cream',
      },
      {
        id: 7,
        link: '',
        image: <GiCakeSlice />,
        name: 'Cake & Bread',
      },
      {
        id: 8,
        image: <GiCupcake />,
        link: '',
        name: 'Butter & Cream',
      },
      {
        id: 9,
        image: <PiCookingPot />,
        link: '',
        name: 'Cooking',
      },
      {
        id: 10,
        image: <AiOutlinePlus />,
        link: '',
        name: 'View all Categor',
      },
    ],
  },
  // {
  //   id: 2,
  //   name: 'Home',
  //   link: '',
  //   type: 'dropdown',
  //   dropdown: [
  //     {
  //       name: 'Ladoo',
  //       link: '',
  //     },
  //     {
  //       name: 'Besan Ladoo',
  //       link: '',
  //     },
  //     {
  //       name: 'Ghee Besan Ladoo',
  //       link: '',
  //     },
  //     {
  //       name: 'Nariyal Ladoo',
  //       link: '',
  //     },
  //     {
  //       name: 'Kaju Katli',
  //       link: '',
  //     },
  //     {
  //       name: 'Rasgulla',
  //       link: '',
  //     },
  //   ],
  // },

  {
    id: 4,
    name: 'Pages',
    link: '',
    type: 'dropdown',
    dropdown: [
      {
        name: 'Wishlist',
        link: 'wishlist',
      },
      {
        name: 'Shopping Cart',
        link: 'shoppingCart',
      },
      {
        name: 'Checkout',
        link: 'checkout',
      },
      {
        name: 'Faqs',
        link: 'faqs',
      }
    ],
  },
  {
    id: 3,
    name: 'Shop',
    link: 'shop',
    type: 'single',
    dropdown: [
      {
        name: 'Ladoo',
        link: '',
      },
      {
        name: 'Besan Ladoo',
        link: '',
      },
      {
        name: 'Ghee Besan Ladoo',
        link: '',
      },
      {
        name: 'Nariyal Ladoo',
        link: '',
      },
      {
        name: 'Kaju Katli',
        link: '',
      },
      {
        name: 'Rasgulla',
        link: '',
      },
    ],
  },
  {
    id: 5,
    name: 'Blog',
    link: 'blog',
    type: 'single',
    dropdown: [
      {
        name: 'Ladoo',
        link: '',
      },
      {
        name: 'Besan Ladoo',
        link: '',
      },
      {
        name: 'Ghee Besan Ladoo',
        link: '',
      },
      {
        name: 'Nariyal Ladoo',
        link: '',
      },
      {
        name: 'Kaju Katli',
        link: '',
      },
      {
        name: 'Rasgulla',
        link: '',
      },
    ],
  },
  {
    id: 6,
    name: 'About Us',
    link: 'about',
    type: 'single',
  },
  // {
  //   id: 7,
  //   name: 'Contact Us',
  //   link: '',
  //   type: 'single',
  // },
]
