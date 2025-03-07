import { Request, Response } from "express";
import { Category, SubCategory } from "../../../../shared/models/Category";
import categoryModel from "./category.model";
import { isValidObjectId } from "mongoose";

export const getAllCategories = async (_req: Request, res: Response): Promise<any> => {
  const categories = await categoryModel.find();
  return res.status(201).json(categories);
}

export const getCategory = async (req: Request, res: Response): Promise<any> => {
  
  const { id } = req.params;

  if (!id || !isValidObjectId(id)) return res.json({error: "not_a_valid_id"})

  const category = await categoryModel.findById(id);
  if (!category) return res.json({error: "no_category_found"})

  return res.status(201).json(category);
}

export const createCategory = (req: Request, res: Response): any => {

  const { name, slug, sub }: { name: string, slug?: string, sub?: SubCategory[] } = req.body;

  if (!name)
    return res.json({ error: "empty_name" }); // TODO Handle Error

  var formatedSlug = slug ? slug.toLocaleLowerCase().split(' ').join('_') : name.toLocaleLowerCase().split(' ').join('_');

  categoryModel.create({
    name,
    slug: formatedSlug,
    sub
  }).then((data: unknown) => {
    return res.json(data);
  }).catch((err: string) => {
    console.log(err);
    return res.send(err)
  })
}

export const createSubCategory = async (req: Request, res: Response): Promise<any> => {

  const { subs }: { subs: [{ name: string, slug?: string }] } = req.body;
  const { id } = req.params;

  if (!id || !isValidObjectId(id))
    return res.json({ error: "not_valid_id" }); // TODO Handle Error

  if (!subs)
    return res.json({ error: "empty_sub_categories_array" }); // TODO Handle Error

  let category = await categoryModel.findById(id);
  if (!category)
    return res.json({ error: "missing_category" }); // TODO Handle Error

  try {
    subs.forEach(sub => { //Push each item of my array into the parent (Category) model
      if (!sub.name)
        return;

      var formatedSlug = sub.slug ? sub.slug.toLocaleLowerCase().split(' ').join() : sub.name.toLocaleLowerCase().split(' ').join('_');

      //Create the item
      const item: SubCategory = {
        name: sub.name,
        slug: formatedSlug
      };
      category.sub.push(item);
    });
    const result = await category.save();
    return res.json(result);

  } catch (err) {
    return res.json(err);
  } 
}
