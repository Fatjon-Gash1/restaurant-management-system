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
import * as GameIcons from "react-icons/gi";



export const SidebarData = [
    {
      title: 'Admin',
      path: '/overview',
      icon: <FaIcons.FaUser/>,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
    },
    {
      title: 'Restaurantet',
      path: '/restaurant',
      icon: <FaIcons.FaRegBuilding />,
    },
    {
      title: 'Tavolinat',
      path: '/kodi',
      icon: <FaIcons.FaTable />,
    },
    {
      title: 'Ushqimet',
      path: 'foods/foods',
      icon: <IoIcons.IoMdRestaurant/>,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
  
      subNav: [
        {
          title: 'Ushqimet Tradicionale',
          path: '/foods/tradicional',
          icon: <AiIcons.AiTwotonePieChart/>,
          cName: 'sub-nav'
        },
        {
          title: 'Ushqimet Kineze',
          path: '/foods/chinesefoods',
          icon: <GameIcons.GiWaterDivinerStick/>,
          cName: 'sub-nav'
        },
        {
          title: 'Ushqimet Italiane',
          path: '/foods/italianfoods',
          icon: <FaIcons.FaPizzaSlice/>,
          cName: 'sub-nav'
        },
        {
          title: 'Ushqimet e Detit',
          path: '/foods/seafoods',
          icon: <GameIcons.GiSadCrab/>,
          cName: 'sub-nav'
        },
        {
          title: 'Sallatat',
          path: '/foods/salads',
          icon: <CgIcons.CgBowl/>,
          cName: 'sub-nav'
        },
        {
          title: 'Ëmbëlsirat',
          path: '/foods/desserts',
          icon: <GameIcons.GiCakeSlice/>,
          cName: 'sub-nav'
        },
        {
          title: 'FastFoods',
          path: '/foods/fastfood',
          icon: <GameIcons.GiHamburger/>,
          cName: 'sub-nav'
        },
        {
          title: 'Ushqimet e Tjera',
          path: '/foods/other',
          icon: <MdIcons.MdPlaylistAdd />,
          cName: 'sub-nav'
        },
        {
          title: 'Historiku i Ushqimeve',
          path: '/foods/hof',
          icon: <FaIcons.FaHistory/>,
          cName: 'sub-nav'
        }
      ]
    },
    {
      title: 'Pijet',
      path: '/drinks/drinks',
      icon: <BiIcons.BiDrink/>,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
  
      subNav: [
        {
          title: 'Pijet Jo-Alkoolike',
          path: '/drinks/nonalcoholic',
          icon: <BiIcons.BiDrink />,
          cName: 'sub-nav'
        },
        {
          title: 'Pijet Alkoolike',
          path: '/drinks/alcoholic',
          icon: <GiIcons.GiGlassCelebration/>,
          cName: 'sub-nav'
        },
        {
          title: 'Kafet',
          path: '/drinks/coffee',
          icon: <CgIcons.CgCoffee />,
          cName: 'sub-nav'
        },
        {
          title: 'Qajrat',
          path: '/drinks/tea',
          icon: <SiIcons.SiGitea />,
          cName: 'sub-nav'
        },
        {
          title: 'Pijet e Tjera',
          path: '/drinks/otherd',
          icon: <MdIcons.MdPlaylistAdd />,
          cName: 'sub-nav'
        },
        {
          title: 'Historiku i Pijeve',
          path: '/drinks/hod',
          icon: <FaIcons.FaHistory/>,
          cName: 'sub-nav'
        },
      ]
    },
    {
      title: 'Porositë',
      path: '/porosia/porosia',
      icon: <MdIcons.MdBorderColor />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      
      subNav: [
      {
        title: 'Ushqimet',
        path: '/porosia/food',
        icon: <IoIcons.IoMdRestaurant />,
        cName: 'sub-nav'
      },
      {
        title: 'Pijet',
        path: '/porosia/drink',
        icon: <BiIcons.BiDrink />,
        cName: 'sub-nav'
      },
    ]
    },

    
    {
      title: 'Stafi',
      path: '/team',
      icon: <FaIcons.FaUsers />
    },
    {
      title: 'Mesazhet',
      path: '/msg',
      icon: <FaIcons.FaRegComment />,
  
    },
    
  ];