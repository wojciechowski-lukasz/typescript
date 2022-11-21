import { connectionData } from "./data";

export const duplicateServiceValidation = (
  serviceToCheck: ServiceType,
  currentServices: ServiceType[]
): boolean => {
  return !currentServices.includes(serviceToCheck);
};

export const mainServiceValidation = (
  serviceToCheck: ServiceType,
  currentServices: ServiceType[]
): boolean => {
  const connectedServicesFound = connectionData.find(
    (service) => service.service === serviceToCheck
  );
  if (connectedServicesFound !== undefined) {
    return currentServices.some((s) =>
      connectedServicesFound.parentServices.includes(s)
    );
  }
  return true;
};

export const deselectConnectedServiceValidation = (
  serviceToCheck: ServiceType,
  currentServices: ServiceType[]
): ServiceType[] => {
  const connectedServicesFound = connectionData.find((service) =>
    service.parentServices.includes(serviceToCheck)
  );

  if (!connectedServicesFound) {
    return currentServices.filter((service) => service !== serviceToCheck);
  }

  if (
    connectedServicesFound &&
    connectedServicesFound.parentServices.length === 1
  ) {
    return currentServices.filter(
      (service) =>
        service !== serviceToCheck || service !== connectedServicesFound.service
    );
  }

  const resultServices = currentServices.filter(
    (service) => service !== serviceToCheck
  );
  if (
    resultServices.some((s) =>
      connectedServicesFound.parentServices.includes(s)
    )
  ) {
    return resultServices;
  } else {
    return resultServices.filter((s) => s !== connectedServicesFound.service);
  }
};
