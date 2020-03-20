const orders = [
  {
    id: 1,
    date: "2020-03-18",
    user: 1,
    totalPrice: 47,
    pyment_method: "Knet",
    order_items: [
      {
        quantity: 1,
        coral: 5,
        coralName: "Bam Bam Zoanthids",
        coralPrice: 15.0,
        totalPrice: 15.0
      },
      {
        quantity: 2,
        coral: 7,
        coralName: "Oxide Zoanthids",
        coralPrice: 16.0,
        totalPrice: 32.0
      }
    ]
  },
  {
    id: 2,
    date: "2020-03-18",
    user: 1,
    totalPrice: 24,
    pyment_method: "Cash",
    order_items: [
      {
        quantity: 1,
        coral: 6,
        coralName: "Green Star Polyp",
        coralPrice: 7.0,
        totalPrice: 7.0
      },
      {
        quantity: 1,
        coral: 8,
        coralName: "Cyclops Galaxea",
        coralPrice: 17.0,
        totalPrice: 17.0
      }
    ]
  },
  {
    id: 300,
    date: "2020-03-18",
    user: 1,
    totalPrice: 64,
    pyment_method: "Knet",
    order_items: [
      {
        quantity: 2,
        coral: 4,
        coralName: "AOI Zoanthids",
        coralPrice: 20.0,
        totalPrice: 40.0
      },
      {
        quantity: 1,
        coral: 6,
        coralName: "Green Star Polyp",
        coralPrice: 7.0,
        totalPrice: 7.0
      },
      {
        quantity: 1,
        coral: 8,
        coralName: "Cyclops Galaxea",
        coralPrice: 17.0,
        totalPrice: 17.0
      }
    ]
  }
];

export default orders;
