/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express'
import knex from '../database/connection'

export default class PointsController {
  async create(request: Request, response: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    } = await request.body
    const trx = await knex.transaction()
    const point = {
      image: 'image-fake',
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    }
    const insertedIds = await trx('points').insert(point)
    const point_id = insertedIds[0]
    const pointsItems = items.map((item_id: number) => {
      return {
        item_id,
        point_id,
      }
    })
    await trx('points_items').insert(pointsItems)
    return response.json({ id: point_id, ...point })
  }
}
