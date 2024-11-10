// import type { NextApiRequest, NextApiResponse } from "next";
// import type { UnitData } from "../../../interfaces";

// export default function userHandler(
//   req: NextApiRequest,
//   res: NextApiResponse<UnitData>
// ) {
//   const { query, method } = req;
//   const code_unit = parseInt(query.code_unit as string, 10);
//   const name = query.name as string;

//   switch (method) {
//     case "GET":
//       // Get data from your database
//       res.status(200).json({ code_unit, name: `User ${code_unit}` });
//       break;
//     case "PUT":
//       // Update or create data in your database
//       res.status(200).json({ code_unit, name: name || `User ${code_unit}` });
//       break;
//     default:
//       res.setHeader("Allow", ["GET", "PUT"]);
//       res.status(405).end(`Method ${method} Not Allowed`);
//   }
// }
