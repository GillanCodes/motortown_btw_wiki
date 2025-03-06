import { Request, Response } from "express";
import vehicleModel from "./vehicle.model";
import { Info } from "../../../../shared/models/Vehicle";

export const getAllVehicles = async (req: Request, res: Response): Promise<any> => {
  const parts = await vehicleModel.find();
  return res.status(201).json(parts);
}

export const createVehicle = (req: Request, res: Response): any => {

  const { name, slug, info, parts, location }: {
    name: string,
    slug?: string,
    info?: Info,
    parts?: string[],
    location?: {
      x: number,
      y: number
    }
  } = req.body;

  if (!name) return res.json({ error: "empty_name_field" });
  if (!req.file) return res.json({ error: "empty_file" });

  const filename = req.file.filename;
  const formatedSlug = slug ? slug.toLocaleLowerCase().split(' ').join('_') : name.toLocaleLowerCase().split(' ').join('_');
  
  vehicleModel.create({
    name,
    slug:formatedSlug,
    info,
    parts,
    location,
    picture: "/cdn/" + filename
  }).then((data) => {
    return res.json(data);
  }).catch(err => console.log(err))

}
