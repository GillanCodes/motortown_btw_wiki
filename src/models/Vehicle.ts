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

interface Info {
  categories: string[];
  purpose: string;
  confort: number;
  seat: number;
  wheels: number;
  powertrain: string;
  prices: Prices;
  cargo: Cargo;
  unlock: UnlockRequirement[];
}

interface Engine {
  name: string;
  default: boolean;
}

interface Customization {
  engine: Engine[];
}

interface Location {
  x: number;
  y: number;
}

class Vehicle {
  name: string;
  slug: string;
  picture: string;
  info: Info;
  customization: Customization;
  location: Location[];

  constructor({
    name = "Unknown Vehicle",
    slug = "unknown-vehicle",
    picture = "/images/default.png",
    info = {
      categories: [],
      purpose: "General Use",
      confort: 0,
      seat: 1,
      wheels: 4,
      powertrain: "AWD",
      prices: { buy: 0, rent: 0 },
      cargo: { type: "none", unit: "", size: 0 },
      unlock: []
    },
    customization = { engine: [] },
    location = [{ x: 0, y: 0 }]
  }: {
    name?: string;
    slug?: string;
    picture?: string;
    info?: Info;
    customization?: Customization;
    location?: Location[];
  }) {
    this.name = name;
    this.slug = slug;
    this.picture = picture;
    this.info = info;
    this.customization = customization;
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
