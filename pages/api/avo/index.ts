import { NextApiRequest, NextApiResponse } from 'next'
import database from '@database'

async function getAllAvos(req: NextApiRequest, res: NextApiResponse) {
  const avos = await database.getAll()
  res.status(200).json({ length: avos.length, data: avos })
}

export default getAllAvos
