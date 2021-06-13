import { NextApiRequest, NextApiResponse } from 'next'

import database from '@database'

async function getAvoById(req: NextApiRequest, res: NextApiResponse) {
  const { avoId } = req.query

  const avo = await database.getById(avoId as string)

  res.status(200).json(avo)
}

export default getAvoById
