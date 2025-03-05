import { Request, Response } from "express";
import { SubCategory } from "../../../../shared/models/Category";
import categoryModel from "./category.model";

export const getAllCategories = async (_req: Request, res:Response) => {
  const categories = await categoryModel.find();
  res.status(201).json(categories);
}

export const createCategory = (req: Request, res: Response) => {

  const { name, slug, subCategories }: { name: string, slug?: string, subCategories?: SubCategory[] } = req.body;

  if (!name) res.json({ error: "empty_name" }) // TODO Handle Error

  var formatedSlug = slug ? slug.toLocaleLowerCase().split(' ').join('_') : name.toLocaleLowerCase().split(' ').join('_');

  categoryModel.create({
    name,
    slug: formatedSlug,
    sub: subCategories
  }).then((data:unknown) => {
    res.json(data);
  }).catch((err:string) => {
    console.log(err);
    res.send(err)
  })
}

export const createSubCategory = (req: Request, res: Response):void => {

}
