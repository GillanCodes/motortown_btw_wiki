import Vehicle from "../../models/Vehicle";

import cora from "./cora.json";

export function getAllVehicles(): Vehicle[]
{
  var response: Vehicle[] = [];

  response.push(new Vehicle(cora));


  return response;
}


