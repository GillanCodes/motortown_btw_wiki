import Vehicle from "../../models/Vehicle";

import cora from "./cora.json";
import mitage from "./mitage.json";
import jemusiSemi from "./jemusi-semi.json";
import jemusiTank from "./jemusi-tanker.json";

export function getAllVehicles(): Vehicle[]
{
  var response: Vehicle[] = [];

  response.push(new Vehicle(cora));
  response.push(new Vehicle(mitage));
  response.push(new Vehicle(jemusiSemi));
  response.push(new Vehicle(jemusiTank));


  return response;
}


