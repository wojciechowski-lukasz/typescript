export const serviceData: Array<IService> = [
    {
      type: "Photography",
      price: [
        { price: 1700, year: 2020 },
        { price: 1800, year: 2021 },
        { price: 1900, year: 2022 },
      ],
    },
    {
      type: "VideoRecording",
      price: [
        { price: 1700, year: 2020 },
        { price: 1800, year: 2021 },
        { price: 1900, year: 2022 },
      ],
    },
    {
      type: "WeddingSession",
      price: 600
    },
    {
      type: "BlurayPackage",
      price: 300
    },
    {
      type: "TwoDayEvent",
      price: 400
    },
  ];
  
  export const discountData: Array<DiscountedPrices> = [
    {
      mainService: "Photography",
      discountedService: "VideoRecording",
      discountedPrice: [
        { price: 500, year: 2020 },
        { price: 500, year: 2021 },
        { price: 600, year: 2022 },
      ],
    },
    {
      mainService: "Photography",
      discountedService: "WeddingSession",
      discountedPrice: [
        { price: 300, year: 2020 },
        { price: 300, year: 2021 },
        { price: 0, year: 2022 },
      ],
    },
    {
      mainService: "VideoRecording",
      discountedService: "WeddingSession",
      discountedPrice: 300
    },
  ];
  
  export const connectionData: Array<ConnectedService> = [
    {
      service: "BlurayPackage",
      parentServices: ["VideoRecording"],
    },
    {
      service: "TwoDayEvent",
      parentServices: ["Photography", "VideoRecording"],
    },
  ];
  