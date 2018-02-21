/**
 * This file is part of pigalle.routes.http
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

const {RouteBase} = require('@pigalle/routes.base');


/**
 * An HTTP route.
 *
 * @class
 * @public
 */
class HttpRoute extends RouteBase {

  /**
   * Create a new instance of {HttpRoute}.
   *
   * @constructor
   * @public
   */
  constructor(path, method, func) {
    super();
    this.path = path;
    this.method = method;
    this.func = func;
  }

  toJSON() {
    return {
      type: this.getType(),
      value: {
        path: this.path,
        method: this.method,
        func: this.func,
      }
    }
  }

  toString() {
    return JSON.stringify(this.toJSON())
  }

}

module.exports = {};
module.exports.HttpRoute = HttpRoute;
