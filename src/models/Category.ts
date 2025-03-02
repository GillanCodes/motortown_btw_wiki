export class SubCategory {
  constructor(public name: string, public slug: string){}
}

export class Category {
  name: string;
  slug: string;
  sub: SubCategory[];

  constructor(name: string, slug: string, sub: SubCategory[]) {
    this.name = name;
    this.slug = slug;
    this.sub = sub;
  }

  getSubCategories(): SubCategory[] {
    return this.sub;
  }
}

