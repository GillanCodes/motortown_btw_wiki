type CategoryType = {
  main: string;
  sub: string;
};

type InfoType = {
  betterment: {
    size: number;
    unit: string;
  };
  mass: number;
  price: number;
};

class Part {
  name: string;
  category: CategoryType;
  slug: string;
  description: string;
  info: InfoType;
  vehicles: string[];

  constructor({ name, category, slug, description, info, vehicles }:
    { name: string; category: CategoryType; slug: string; description: string; info: InfoType; vehicles: string[] }) {
    this.name = name;
    this.category = category;
    this.slug = slug;
    this.description = description;
    this.info = info;
    this.vehicles = vehicles;
  }

}

export default Part;
