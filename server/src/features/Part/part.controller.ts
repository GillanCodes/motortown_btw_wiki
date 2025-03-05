import { Request, Response } from "express"; 
import partModel from "./part.model";

type BettermentType = {
  size:number,
  unit:string
}

type CategoryType = {
  main:string,
  sub:string
}

export const getAllParts = async (req:Request, res:Response):Promise<any> => {
  const parts = await partModel.find();
  return res.status(201).json(parts);
}

export const createPart = (req: Request, res: Response): any => {

  const { name, slug, category, betterment, price, mass, description }: { name: string, slug?: string, category:CategoryType, betterment?: BettermentType, price?:number, mass?:number, description?:string } = req.body;

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
    info: {
      mass,
      price,
      betterment
    }
  }).then((data: unknown) => {
    return res.json(data);
  }).catch((err: string) => {
    console.log(err);
    return res.send(err)
  })
}
