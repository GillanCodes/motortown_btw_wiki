class Part {
  name: string;
  category: string;
  slug: string;
  description: string;
  info: {
    betterment: {
      size: number;
      unit: string;
    };
    mass: string;
  };

  constructor(
    name: string,
    category: string,
    slug: string,
    description: string,
    bettermentSize: number,
    bettermentUnit: string,
    mass: string
  ) {
    this.name = name;
    this.category = category;
    this.slug = slug;
    this.description = description;
    this.info = {
      betterment: {
        size: bettermentSize,
        unit: bettermentUnit,
      },
      mass: mass,
    };
  }

  getSlug() {
    return this.slug;
  }

}

export default Part;
