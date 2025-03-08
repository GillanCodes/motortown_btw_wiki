import { ObjectId } from "mongoose";
import Part from "./Part";

interface UnlockRequirement {
  job: string;
  level: number;
}

interface Cargo {
  type: string;
  unit: string;
  size: number;
}

interface Prices {
  buy: number;
  rent: number;
}

export interface Info {
  categories: string[];
  purpose: string;
  confort: number;
  seats: number;
  wheels: number;
  powertrain: string;
  prices: Prices;
  cargo: Cargo;
  unlock: UnlockRequirement[];
}

interface Location {
  x: number;
  y: number;
}

export class Vehicle {
  _id?: string | ObjectId;
  name: string;
  slug: string;
  picture: string;
  info: Info;
  parts: string[] | Part[]
  location: Location[];
  createdAt?: string | Date;
  updatedAt?: string | Date;

  constructor({
    name = "Unknown Vehicle",
    slug = "unknown-vehicle",
    picture = "/images/default.png",
    info = {
      categories: [],
      purpose: "General Use",
      confort: 0,
      seats: 1,
      wheels: 4,
      powertrain: "AWD",
      prices: { buy: 0, rent: 0 },
      cargo: { type: "none", unit: "", size: 0 },
      unlock: []
    },
    parts = [],
    location = [{ x: 0, y: 0 }]
  }: {
    name?: string;
    slug?: string;
    picture?: string;
    info?: Info;
    parts?: string[]
    location?: Location[];
  }) {
    this.name = name;
    this.slug = slug;
    this.picture = picture;
    this.info = info;
    this.parts = parts;
    this.location = location;
  }

  getSlug() {
    return this.slug;
  }

  getInfo() {
    return this.info;
  }

}

export default Vehicle;
