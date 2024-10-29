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