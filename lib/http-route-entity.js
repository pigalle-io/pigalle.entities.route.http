/**
 * This file is part of pigalle.entities.route.http
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/**
 * @module http-route-entity
 * @description An entity to define HTTP route.
 * @example
 *
 * const {HttpRouteEntity} = require('@pigalle/entities.route.http')
 *
 * const httpRoute = HttpRouteEntity.factory('/api/', 'GET', () => { return {rs: 1}; })
 *
 */

const {RouteEntity} = require('@pigalle/entities.route')

const PIGALLE_TYPE = 'http-route'

/**
 * An HTTP route.
 *
 * @class
 * @public
 */
class HttpRouteEntity extends RouteEntity {
  /**
   * Create a new instance of {HttpRoute}.
   *
   * @constructor
   * @public
   */
  constructor (path, method, func) {
    super()
    this.setType(PIGALLE_TYPE)
    this.path = path
    this.method = method
    this.func = func
    this.name = `${this.method}.${this.path}`
  }

  toJSON () {
    return {
      type: this.getType(),
      value: {
        path: this.path,
        method: this.method,
        func: this.func
      }
    }
  }

  toString () {
    return JSON.stringify(this.toJSON())
  }
}

module.exports = {}
module.exports.HttpRouteEntity = HttpRouteEntity
