import MessageModel from "../../src/models/message";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;
    let doc = new MessageModel({
      _id: new Date().toLocaleString() + email,
      name,
      email,
      subject,
      message,
    });

    await doc.validate();
    await doc.save();
  }

  res.status(200).json({ code: 200 });
}