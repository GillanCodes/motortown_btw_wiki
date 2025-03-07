import { Request, Response } from "express";
import partModel from "./part.model";
import { isValidObjectId } from "mongoose";

type BettermentType = {
  size: number,
  unit: string
}

type CategoryType = {
  main: string,
  sub: string
}

type InfoType = {
  mass: number,
  price: number,
  betterment: BettermentType
}

export const getAllParts = async (req: Request, res: Response): Promise<any> => {
  const parts = await partModel.find().select("name slug description category info.price");
  return res.status(201).json(parts);
}

export const getPart = async (req: Request, res: Response): Promise<any> => {

  const { id } = req.params;
  var part;

  try {
    if (!isValidObjectId(id))
      part = await partModel.findOne({ slug: id }).populate({ path: "vehicles" });
    else
      part = await partModel.findById(id).populate({ path: "vehicles" });

    if (!part) return res.json({ error: "vehicle_not_found" });
    return res.json(part);

  } catch (error) {
    if (!isValidObjectId(id))
      part = await partModel.findOne({ slug: id });
    else
      part = await partModel.findById(id);

    if (!part) return res.json({ error: "part_not_found" });
    return res.json(part);
  }

}

export const createPart = (req: Request, res: Response): any => {

  const { name, slug, info, category, description }: { name: string, slug?: string, info: InfoType, category: CategoryType, description?: string } = req.body;

  if (!name)
    return res.json({ error: "empty_name" }); // TODO Handle Error

  if (!category)
    return res.json({ error: "empty_category" }); // TODO Handle Error

  var formatedSlug = slug ? slug.toLocaleLowerCase().split(' ').join('_') : name.toLocaleLowerCase().split(' ').join('_');

  partModel.create({
    name,
    slug: formatedSlug,
    category,
    description,
    info
  }).then((data: unknown) => {
    return res.json(data);
  }).catch((err: string) => {
    console.log(err);
    return res.send(err)
  })
}

export const editPart = async (req: Request, res: Response): Promise<any> => {

  const { id } = req.params;
  if (!isValidObjectId(id)) return res.json({ error: "invalid_id" });

  const { name, slug, category, betterment, price, mass, description }: { name: string, slug?: string, category: CategoryType, betterment?: BettermentType, price?: number, mass?: number, description?: string } = req.body;

  if (!name) return res.json({ error: "empty_name" }); // TODO Handle Error
  if (!category) return res.json({ error: "empty_category" }); // TODO Handle Error

  let formatedSlug = slug ? slug.toLocaleLowerCase().split(' ').join('_') : name.toLocaleLowerCase().split(' ').join('_');

  partModel.findByIdAndUpdate(id, {
    $set: {
      name,
      slug: formatedSlug,
      category,
      description,
      info: {
        betterment,
        price,
        mass
      }
    }
  }, { new: true, upsert: true }).then((data) => {
    res.status(201).send(data);
  }).catch(err => console.log(err))
}
