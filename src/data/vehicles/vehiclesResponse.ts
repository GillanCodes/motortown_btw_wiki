import Vehicle from "../../models/Vehicle";

import cora from "./cora.json";

export function getAllVehicles(): void | Vehicle[]
{
  var response: Vehicle[] = [];

  response.push(new Vehicle(cora));


  return response;
}


