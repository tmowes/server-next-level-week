/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express'
import knex from '../database/connection'

export default class PointsController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*')
    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.2.103:3333/uploads/${item.image}`,
      }
    })
    return response.json(serializedItems)
  }
}
