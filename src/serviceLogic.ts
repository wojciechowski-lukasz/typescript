import { discountData, serviceData } from "./data";

export const getServiceData = (
  service: ServiceType,
  year: ServiceYear
): IService => {
  const serviceObject = serviceData.find((s) => s.type === service);
  return {
    type: service,
    price:
      typeof serviceObject.price === "number"
        ? serviceObject.price
        : serviceObject.price.find((y) => y.year === year).price,
  };
};

export const applyDiscount = (
  service: ServiceType,
  currentServices: ServiceType[],
  year: ServiceYear
): IService => {
  const discounts = discountData
    .filter(
      (d) =>
        d.discountedService === service &&
        currentServices.includes(d.mainService)
    )
    .map((s) => ({
      type: s.discountedService,
      price:
        typeof s.discountedPrice === "number"
          ? s.discountedPrice
          : s.discountedPrice.find((y) => y.year === year).price,
    }));

  return discounts.length > 0
    ? discounts.reduce((r, e) => (r.price < e.price ? r : e))
    : getServiceData(service, year);
};

export const getPrice = (services: IService[]) : number => {
    return services.reduce((price, current) => {
        return (price += current.price as number);
      }, 0);
}
