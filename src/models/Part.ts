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
};

class Part {
  name: string;
  category: CategoryType;
  slug: string;
  description: string;
  info: InfoType;

  constructor({ name, category, slug, description, info }:
    { name: string; category: CategoryType; slug: string; description: string; info: InfoType; }) {
    this.name = name;
    this.category = category;
    this.slug = slug;
    this.description = description;
    this.info = info;
  }

}

export default Part;
