import Part from "../../models/Part";

import e1 from './engine_v8_440.json';
import e2 from './engine_v8_240.json';
import b1 from './brake_pad1.json';
import b2 from './brake_power1.json';
import trubo from './turbo.json';
import rad from './radiator.json';

export function getAllParts(): Part[]
{
  var response:Part[] = [];
  
  response.push(new Part(e1));
  response.push(new Part(e2));
  response.push(new Part(b1));
  response.push(new Part(b2));
  response.push(new Part(trubo));
  response.push(new Part(rad));
  
  return response;
}
