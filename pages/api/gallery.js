import { getConnection } from "../../src/mongo";
import { getMedia } from "../../src/repos/gallery_repository";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await getConnection();

    res.status(200).json({ gallery: await getMedia() });
    return;
  }

  res.status(200).json({});
}
