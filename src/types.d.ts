type ServiceYear = 2020 | 2021 | 2022;

type ServiceType =
  | "Photography"
  | "VideoRecording"
  | "BlurayPackage"
  | "TwoDayEvent"
  | "WeddingSession";

interface IService {
    type: ServiceType,
    price: number | PricePerYear[]
}

interface ConnectedService {
  service: ServiceType,
  parentServices: ServiceType[]
}

interface PricePerYear {
  price: number,
  year: ServiceYear
}

interface DiscountedPrices {
  mainService: ServiceType
  discountedService: ServiceType
  discountedPrice: number | PricePerYear[]
}