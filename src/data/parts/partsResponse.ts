import Part from "../../models/Part";

import e1 from './engine_v8_440.json';
import e2 from './engine_v8_240.json';

export function getAllParts(): Part[]
{
  var response:Part[] = [];
  
  response.push(new Part(e1));
  response.push(new Part(e2));
  
  return response;
}
