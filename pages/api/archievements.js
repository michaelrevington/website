import { getConnection } from "../../src/mongo";
import { getArchievements } from "../../src/repos/archievement_repository";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await getConnection();

    res.status(200).json({ archievements: await getArchievements() });
    return;
  }

  res.status(200).json({});
}
