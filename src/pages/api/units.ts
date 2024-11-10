import type { NextApiRequest, NextApiResponse } from "next";
import { UnitData, Apiresponse } from "../../interfaces/index";

const Units: UnitData[] = [
  { code_unit: 1, name_unit: "Truck Houl", source: "./unit/TH.png" },
  { code_unit: 2, name_unit: "Buldozer", source: "./unit/BL.png" },
  { code_unit: 3, name_unit: "Drilling Rig", source: "./unit/DR.png" },
  { code_unit: 4, name_unit: "Exavator", source: "./unit/EX.png" },
  { code_unit: 5, name_unit: "Grader", source: "./unit/GR.png" },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Apiresponse>
) {
  if (req.method === "GET") {
    res.status(200).json(Units);
  } else {
    res.status(404).json({ message: "Method not allowed" });
  }
}
