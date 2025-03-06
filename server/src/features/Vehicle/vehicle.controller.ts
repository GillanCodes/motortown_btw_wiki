import { Request, Response } from "express";
import vehicleModel from "./vehicle.model";
import { Info } from "../../../../shared/models/Vehicle";
import partModel from "../Part/part.model";
import { isValidObjectId } from "mongoose";

export const getAllVehicles = async (req: Request, res: Response): Promise<any> => {
  const parts = await vehicleModel.find();
  return res.status(201).json(parts);
}

export const getVehicle = async (req: Request, res: Response): Promise<any> => {

  const { id } = req.params;
  if (!isValidObjectId(id)) return res.json({ error: "invalid_id" });

  const vehicle = await vehicleModel.findById(id).populate({path: "parts"});
  if (!vehicle) return res.json({error: "vehicle_not_found"});
  return res.json(vehicle);

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
    slug: formatedSlug,
    info,
    parts,
    location,
    picture: "/cdn/" + filename
  }).then((data) => {
    return res.json(data);
  }).catch(err => console.log(err))
}

export const addPartToVehicle = async (req: Request, res: Response): Promise<any> => {

  const { vehicleId, partId } = req.params;

  if (!isValidObjectId(partId) || !isValidObjectId(vehicleId)) return res.json({ error: "not_valid_ids" })

  const vehicle = await vehicleModel.findById(vehicleId);
  if (!vehicle) return res.json({ error: "vehicle_not_found" });

  const part = await partModel.findById(partId);
  if (!part) return res.json({ error: "part_not_found" });

  const partToAdd = String(part._id);

  if (!part.vehicles.includes(String(vehicle._id))) {
    part.vehicles.push(String(vehicle._id));
    await part.save();
  }

  if (!vehicle.parts.includes(partToAdd)) {
    vehicle.parts.push(partToAdd);
    await vehicle.save();
  }

  return res.json(vehicle);
}
