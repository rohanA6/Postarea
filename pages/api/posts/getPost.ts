// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../../prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    //Fetch all Post
    try {
      const data = await prisma.post.findMany({
        include: {
          user:true,
          comment:true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      res.status(200).json(data);
    } catch (err) {
      res.status(403).json({ err: "Error has occured while making a post..." });
    }
  }
}
