import { applyDiscount, getPrice, getServiceData } from "./serviceLogic";
import {
  deselectConnectedServiceValidation,
  duplicateServiceValidation,
  mainServiceValidation,
} from "./serviceValidators";

export const updateSelectedServices = (
  previouslySelectedServices: ServiceType[],
  action: { type: "Select" | "Deselect"; service: ServiceType }
) => {
  switch (action.type) {
    case "Select":
      return duplicateServiceValidation(
        action.service,
        previouslySelectedServices
      ) && mainServiceValidation(action.service, previouslySelectedServices)
        ? previouslySelectedServices.concat(action.service)
        : previouslySelectedServices;
    case "Deselect":
      return  deselectConnectedServiceValidation(action.service,previouslySelectedServices)
    default:
      return previouslySelectedServices;
  }
};

export const calculatePrice = (
  selectedServices: ServiceType[],
  selectedYear: ServiceYear
) => {
  const serviceList = selectedServices.map((s) =>
    getServiceData(s, selectedYear)
  );

  const basePrice = getPrice(serviceList);

  const finalPrice = getPrice(
    serviceList.map((s) => {
      return applyDiscount(s.type, selectedServices, selectedYear);
    })
  );

  return { basePrice: basePrice, finalPrice: finalPrice };
};
