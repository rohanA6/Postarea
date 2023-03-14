// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../../prisma/client";
import { authOptions } from "../auth/[...nextauth]";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      return res.status(401).json({ message: "Please signin...." });
    }

    //Get Auth User Post
    try {
      const data = await prisma.user.findUnique({
        where: {
          email: session?.user?.email,
        },
        include: {
          post: {
            orderBy: {
              createdAt: "desc",
            },
            include: {
              comment: true,
            },
          },
        },
      });
      res.status(200).json(data);
    } catch (err) {
      res.status(403).json({ err: "Error has occured while making a post..." });
    }
  }
}
