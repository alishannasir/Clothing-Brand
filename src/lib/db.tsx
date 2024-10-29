export const notifications = [
    {
        id: 1,
        message: "Winter Collection: Winter Collection will be available from 1st November"
    },
    {
        id: 2,
        message: "New Arrivals: New Arrivals are now available"
    },
    {
        id: 3,
        message: "Sale on Selected Items: Enjoy great discounts on selected items"
    },
    {
        id: 4,
        message: "Flash Sale: Limited time offer on selected products"
    },
    {
        id: 5,
        message: "Free Shipping: Get free shipping on orders over $50"
    }
]

export const videos = [
    {
        id: 1,
        url: "https://videos.pexels.com/video-files/5821490/5821490-hd_1920_1080_25fps.mp4"
    },
    {
        id: 2,
        url: "https://videos.pexels.com/video-files/5822804/5822804-hd_1920_1080_25fps.mp4"
    }, 
    {
        id: 3,
        url: "https://videos.pexels.com/video-files/4997226/4997226-hd_1920_1080_24fps.mp4"
    }
]

export const photosWinter = [
    {
        id: 1,
        url: "https://images.pexels.com/photos/27430539/pexels-photo-27430539/free-photo-of-blue-eyes-with-horse.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Blue Eyes with Horse",
        description: "A horse with blue eyes"
    },
    {
        id: 2,
        url: "https://images.pexels.com/photos/10679219/pexels-photo-10679219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Penguin",
        description: "A penguin"
    },
    {
        id: 3,
        url: "https://images.pexels.com/photos/28354682/pexels-photo-28354682/free-photo-of-a-man-in-a-hat-and-jacket-is-waving.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Man in a Hat and Jacket",
        description: "A man in a hat and jacket is waving"
    }
]

export const photosSpring = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/8358793/pexels-photo-8358793.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "A man with a veil over his head",
    description: "A man with a veil over his head"
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/2224700/pexels-photo-2224700.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "A woman in a brown dress stands in a field",
    description: "A woman in a brown dress stands in a field"
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/15606962/pexels-photo-15606962/free-photo-of-a-man-with-a-veil-over-his-head.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Man with a veil over his head",
    description: "A man with a veil over his head"
  }
]

export const components: { id: number; navTitle: string; items: { id: number; title: string; href: string; description: string }[] }[] = [
    {
      id: 1,
      navTitle: "Shop by brand",
      items:[
        {
          id: 1,
          title: "Nike",
          href: "/docs/primitives/alert-dialog",
          description:
              "imported from Italy",
        },
        {
          id: 2,
          title: "Adidas",
          href: "/docs/primitives/hover-card",
          description:
            "imported from Germany",
        },
        {
          id: 3,
          title: "Puma",
          href: "/docs/primitives/progress",
          description:
            "imported from France",
        },
        {
          id: 4,
          title: "Reebok",
          href: "/docs/primitives/scroll-area",
          description: "imported from Spain",
        },
        {
          id: 5,
          title: "Fila",
          href: "/docs/primitives/tabs",
          description:
            "imported from Belgium",
        },
        {
          id: 6,
          title: "New Balance",
          href: "/docs/primitives/tooltip",
          description:
            "imported from Netherlands",
        },
      ]
    },
    {
      id: 2,
      navTitle: "Shop by category",
      items:[
        {
          id: 1,
          title: "Jackets",
          href: "/docs/primitives/alert-dialog",
          description:
              "imported from Italy",
        },
        {
          id: 2,
          title: "T-shirts",
          href: "/docs/primitives/hover-card",
          description:
            "imported from Germany",
        },
        {
          id: 3,
          title: "Trousers",
          href: "/docs/primitives/progress",
          description:
            "imported from France",
        },
        {
          id: 4,
          title: "Shirts",
          href: "/docs/primitives/scroll-area",
          description: "imported from Spain",
        },
        {
          id: 5,
          title: "Sweaters",
          href: "/docs/primitives/tabs",
          description:
            "imported from Belgium",
        },
        {
          id: 6,
          title: "Hoodies",
          href: "/docs/primitives/tooltip",
          description:
            "imported from Netherlands",
        },
      ]
    }
   
  ]


export const Cards: { id: number; url: string; title: string }[] = [
    {
        id: 1,
        url: "https://images.pexels.com/photos/7327103/pexels-photo-7327103.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Photo 1"
    },
    {
        id: 2,
        url: "https://images.pexels.com/photos/15606963/pexels-photo-15606963/free-photo-of-landscape-nature-fashion-man.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Photo 2"
    },
    {
        id: 3,
        url: "https://images.pexels.com/photos/8217400/pexels-photo-8217400.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Photo 3"
    },
    {
        id: 4,
        url: "https://images.pexels.com/photos/15606897/pexels-photo-15606897/free-photo-of-a-woman-in-a-veil-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Photo 4"
    },
    {
        id: 5,
        url: "https://images.pexels.com/photos/16555690/pexels-photo-16555690/free-photo-of-stylish-man-in-sunglasses-sitting-in-chair-indoors.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Photo 5"
    },
    {
        id: 6,
        url: "https://images.pexels.com/photos/15606889/pexels-photo-15606889/free-photo-of-a-woman-in-a-brown-dress-stands-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Photo 6"
    },
    {
        id: 7,
        url: "https://images.pexels.com/photos/6963522/pexels-photo-6963522.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Photo 7"
    },
    {
        id: 8,
        url: "https://images.pexels.com/photos/6764016/pexels-photo-6764016.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Photo 8"
    }


]


export const Brands = [
    {
        id: 1,
        url: "https://indieground.net/wp-content/uploads/2023/03/indieblog-nikelogohistory-14.jpg",
        title: "Photo 1"
    },
    {
        id: 2,
        url: "https://indieground.net/wp-content/uploads/2023/03/indieblog-nikelogohistory-14.jpg",
        title: "Photo 2"
    },
    {
        id: 3,
        url: "https://indieground.net/wp-content/uploads/2023/03/indieblog-nikelogohistory-14.jpg",
        title: "Photo 3"
    },
    {
        id: 4,
        url: "https://indieground.net/wp-content/uploads/2023/03/indieblog-nikelogohistory-14.jpg",
        title: "Photo 4"
    },
    {
        id: 5,
        url: "https://indieground.net/wp-content/uploads/2023/03/indieblog-nikelogohistory-14.jpg",
        title: "Photo 5"
    },
    {
        id: 6,
        url: "https://indieground.net/wp-content/uploads/2023/03/indieblog-nikelogohistory-14.jpg",
        title: "Photo 6"
    },
    {
        id: 7,
        url: "https://indieground.net/wp-content/uploads/2023/03/indieblog-nikelogohistory-14.jpg",
        title: "Photo 7"
    },
    {
        id: 8,
        url: "https://indieground.net/wp-content/uploads/2023/03/indieblog-nikelogohistory-14.jpg",
        title: "Photo 8"
    }
]
export const AllCollection = [
   {
      id: 1,
      delay: 2000,
      CollectionName: "Jackets",
      Collections: [
      {
        id: 1,
        url: "https://images.pexels.com/photos/6028279/pexels-photo-6028279.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Lather Jacket",
        description: "It is a versatile piece of clothing that can be worn in a variety of settings.",
        price: "$89"
      },
      {
        id: 2,
        url: "https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "T-shirt",
        description: " It is a versatile piece of clothing that can be worn in a variety of settings.",
        price: "$49"
      },
      {
        id: 3,
        url: "https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Trousers",
        description: " It is a versatile piece of clothing that can be worn in a variety of settings.",
        price: "$59"
      },
      {
        id: 4,
        url: "https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Shirts",
        description: " It is a versatile piece of clothing that can be worn in a variety of settings.",
        price: "$69"
      },
      {
        id: 5,
        url: "https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Sweaters",
        description: " It is a versatile piece of clothing that can be worn in a variety of settings.",
        price: "$79"
      },
      {
        id: 6,
        url: "https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Hoodies",
        description: " It is a versatile piece of clothing that can be worn in a variety of settings.",
        price: "$89"
      }
    ]
    },
    {
      id: 2,
      delay: 3000,
      CollectionName: "Sweaters",
      Collections: [
      {
        id: 1,
        url: "https://images.pexels.com/photos/2532766/pexels-photo-2532766.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Denim Sweater",
        description: "It is a versatile piece of clothing that can be worn in a variety of settings.",
        price: "$89"
      },
      {
        id: 2,
        url: "https://images.pexels.com/photos/2532766/pexels-photo-2532766.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Turtleneck Sweater",
        description: " It is a versatile piece of clothing that can be worn in a variety of settings.",
        price: "$49"
      },
      {
        id: 3,
        url: "https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Hooded Sweater",
        description: " It is a versatile piece of clothing that can be worn in a variety of settings.",
        price: "$59"
      },
      {
        id: 4,
        url: "https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Knitted Sweater",
        description: " It is a versatile piece of clothing that can be worn in a variety of settings.",
        price: "$69"
      },
      {
        id: 5,
        url: "https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Turtleneck Sweater",
        description: " It is a versatile piece of clothing that can be worn in a variety of settings.",
        price: "$79"
      },
      {
        id: 6,
        url: "https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Turtleneck Sweater",
        description: " It is a versatile piece of clothing that can be worn in a variety of settings.",
        price: "$89"
      }
    ]
    },
    {
      id: 3,
      delay: 4000,
      CollectionName: "T-shirts",
      Collections: [
        {
          id: 1,
          url: "https://images.pexels.com/photos/9902629/pexels-photo-9902629.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "T-shirt",
          description: "It is a versatile piece of clothing that can be worn in a variety of settings.",
          price: "$89"
        },
        {
          id: 2,
          url: "https://images.pexels.com/photos/9696045/pexels-photo-9696045.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "T-shirt",
          description: "It is a versatile piece of clothing that can be worn in a variety of settings.",
          price: "$89"
        },
        {
          id: 3,
          url: "https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "T-shirt",
          description: "It is a versatile piece of clothing that can be worn in a variety of settings.",
          price: "$89"
        },
        {
          id: 4,
          url: "https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "T-shirt",
          description: "It is a versatile piece of clothing that can be worn in a variety of settings.",
          price: "$89"
        },
        {
          id: 5,
          url: "https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "T-shirt",
          description: "It is a versatile piece of clothing that can be worn in a variety of settings.",
          price: "$89"
        },
        {
          id: 6,
          url: "https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "T-shirt",
          description: "It is a versatile piece of clothing that can be worn in a variety of settings.",
          price: "$89"
        }
      ]
    },
    {
      id: 4,
      delay: 2000,
      CollectionName: "Boots",
      Collections: [
        {
          id: 1,
          url: "https://images.pexels.com/photos/27875070/pexels-photo-27875070/free-photo-of-a-person-sitting-on-a-chair-wearing-black-shoes.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "Nike Boots",
          description: "It is a versatile piece of clothing that can be worn in a variety of settings.",
          price: "$89"
        },
        {
          id: 2,
          url: "https://images.pexels.com/photos/4452520/pexels-photo-4452520.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "Adidas Boots",
          description: "It is a versatile piece of clothing that can be worn in a variety of settings.",
          price: "$89"
        },
        {
          id: 3,
          url: "https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "Puma Boots",
          description: "It is a versatile piece of clothing that can be worn in a variety of settings.",
          price: "$89"
        },
        {
          id: 4,
          url: "https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "Reebok Boots",
          description: "It is a versatile piece of clothing that can be worn in a variety of settings.",
          price: "$89"
        },
        {
          id: 5,
          url: "https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "Fila Boots",
          description: "It is a versatile piece of clothing that can be worn in a variety of settings.",
          price: "$89"
        },
        {
          id: 6,
          url: "https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "New Balance Boots",
          description: "It is a versatile piece of clothing that can be worn in a variety of settings.",
          price: "$89"
        }
      ]
    }
]


export const Ads = [
  {
    id: 1,
    url: "https://videos.pexels.com/video-files/6626483/6626483-uhd_2160_4096_25fps.mp4"
  },
  {
    id: 2,
    url: "https://videos.pexels.com/video-files/9604403/9604403-uhd_2160_4096_25fps.mp4"
  },
  {
    id: 3,
    url: "https://videos.pexels.com/video-files/6626483/6626483-uhd_2160_4096_25fps.mp4"
  },
  {
    id: 4,
    url: "https://videos.pexels.com/video-files/9604403/9604403-uhd_2160_4096_25fps.mp4"
  },
  {
    id: 5,
    url: "https://videos.pexels.com/video-files/6626483/6626483-uhd_2160_4096_25fps.mp4"
  }
]
