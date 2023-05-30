import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';
import * as CgIcons from 'react-icons/cg';
import * as SiIcons from 'react-icons/si';
import * as GiIcons from 'react-icons/gi';
import * as FcIcons from 'react-icons/fc';



export const SidebarData = [
    {
      title: 'Home',
      path: '/overview',
      icon: <AiIcons.AiFillHome />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
    },
    {
      title: 'Restaurant Admini',
      path: '/restaurant',
      icon: <IoIcons.IoIosRestaurant />,
    },
    {
      title: 'Tavolina',
      path: '/kodi',
      icon: <IoIcons.IoIosRestaurant />,
    },
    {
      title: 'Foods',
      path: 'foods/foods',
      icon: <IoIcons.IoMdRestaurant/>,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
  
      subNav: [
        {
          title: 'Tradicional',
          path: '/foods/tradicional',
          icon: <IoIcons.IoMdRestaurant/>,
          cName: 'sub-nav'
        },
        {
          title: 'ChineseFoods',
          path: '/foods/chinesefoods',
          icon: <IoIcons.IoMdRestaurant/>,
          cName: 'sub-nav'
        },
        {
          title: 'ItalianFoods',
          path: '/foods/italianfoods',
          icon: <IoIcons.IoMdRestaurant/>,
          cName: 'sub-nav'
        },
        {
          title: 'SeaFoods',
          path: '/foods/seafoods',
          icon: <IoIcons.IoMdRestaurant/>,
          cName: 'sub-nav'
        },
        {
          title: 'Salads',
          path: '/foods/salads',
          icon: <IoIcons.IoMdRestaurant/>,
          cName: 'sub-nav'
        },
        {
          title: 'Desserts',
          path: '/foods/desserts',
          icon: <IoIcons.IoMdRestaurant/>,
          cName: 'sub-nav'
        },
        {
          title: 'FastFood',
          path: '/foods/fastfood',
          icon: <IoIcons.IoMdRestaurant/>,
          cName: 'sub-nav'
        },
        {
          title: 'OtherFood',
          path: '/foods/other',
          icon: <MdIcons.MdPlaylistAdd />,
          cName: 'sub-nav'
        },
        {
          title: 'HistoryOFoods',
          path: '/foods/hof',
          icon: <FaIcons.FaHistory/>,
          cName: 'sub-nav'
        }
      ]
    },
    {
      title: 'Drinks',
      path: '/drinks/drinks',
      icon: <BiIcons.BiDrink/>,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
  
      subNav: [
        {
          title: 'NonAlcoholicDrinks',
          path: '/drinks/nonalcoholic',
          icon: <BiIcons.BiDrink />,
          cName: 'sub-nav'
        },
        {
          title: 'Alcoholic',
          path: '/drinks/alcoholic',
          icon: <GiIcons.GiGlassCelebration/>,
          cName: 'sub-nav'
        },
        {
          title: 'Coffe',
          path: '/drinks/coffee',
          icon: <CgIcons.CgCoffee />,
          cName: 'sub-nav'
        },
        {
          title: 'Tea',
          path: '/drinks/tea',
          icon: <SiIcons.SiGitea />,
          cName: 'sub-nav'
        },
        {
          title: 'OtherD',
          path: '/drinks/otherd',
          icon: <MdIcons.MdPlaylistAdd />,
          cName: 'sub-nav'
        },
        {
          title: 'HistoryOfDrinks',
          path: '/drinks/hod',
          icon: <FaIcons.FaHistory/>,
          cName: 'sub-nav'
        },
      ]
    },
    {
      title: 'Porosit',
      path: '/porosia/porosia',
      icon: <MdIcons.MdBorderColor />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      
      subNav: [
      {
        title: 'Food',
        path: '/porosia/food',
        icon: <IoIcons.IoMdRestaurant />,
        cName: 'sub-nav'
      },
      {
        title: 'Drink',
        path: '/porosia/drink',
        icon: <BiIcons.BiDrink />,
        cName: 'sub-nav'
      },
    ]
    },

    
    {
      title: 'Team',
      path: '/team',
      icon: <FcIcons.FcCustomerSupport />
    },
    {
      title: 'Messages',
      path: '/msg',
      icon: <FaIcons.FaEnvelopeOpenText />,
  
    },
    
  ];