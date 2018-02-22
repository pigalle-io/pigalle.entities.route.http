/**
 * This file is part of pigalle.routes.http
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/* eslint-env mocha */

require('should')

const {HttpRouteEntity} = require('../lib/http-route-entity')

describe('Class {HttpRouteEntity}', () => {
  it('should be a function', () => {
    (HttpRouteEntity).should.be.a.Function()
  })
})

describe('Create a instance of {HttpRouteEntity} using <new> keyword', () => {
  it('should be an object', () => {
    (new HttpRouteEntity()).should.be.an.Object()
  })

  it('should be an instance of {HttpRouteEntity}', () => {
    (new HttpRouteEntity()).should.be.an.instanceOf(HttpRouteEntity)
  })
})

describe('Create a instance of {HttpRouteEntity} using <factory> method', () => {
  it('should be an object', () => {
    (HttpRouteEntity.factory()).should.be.an.Object()
  })

  it('should be an instance of {HttpRouteEntity}', () => {
    (HttpRouteEntity.factory()).should.be.an.instanceOf(HttpRouteEntity)
  })
})
