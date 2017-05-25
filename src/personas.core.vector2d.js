/*
 * Copyright 2017 Uncharted Software Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* enable strict mode */
'use strict';

/* imports */
var Point2D = require('./personas.core.point2d');

/**
 * Utility class that represents a 2D vector.
 *
 * @param {Number} x - The X coordinate of this point.
 * @param {Number} y - The Y coordinate of this point.
 * @constructor
 */
function Vector2D (x, y) {
    /* inheritance */
    Point2D.call(this, x, y);
}

/* inheritance */
Vector2D.prototype = Object.create(Point2D.prototype);
Vector2D.prototype.constructor = Vector2D;

/**
 * Creates the vector described between the two passed points.
 *
 * @static
 * @method fromPoints
 * @param {Point2D} from - The point representing the origin of the new vector.
 * @param {Point2D} to - The point representing the destination of the new vector.
 * @returns {Vector2D}
 */
Vector2D.fromPoints = function (from, to) {
    return new Vector2D(to.x - from.x, to.y - from.y);
};

/**
 * Returns the length squared (to the power of 2) of this vector.
 *
 * @property lengthSQ
 * @type {Number}
 * @readonly
 */
Object.defineProperty(Vector2D.prototype, 'lengthSQ', {
    get: function () {
        return ((this.mX * this.mX) + (this.mY * this.mY));
    },
});

/**
 * Returns the length of this vector.
 *
 * @property length
 * @type {Number}
 * @readonly
 */
Object.defineProperty(Vector2D.prototype, 'length', {
    get: function () {
        return Math.sqrt(this.lengthSQ);
    },
});

/**
 * Returns a new vector with length of 1 unit pointing in the same direction as this vector.
 *
 * @property unit
 * @type {Vector2D}
 * @readonly
 */
Object.defineProperty(Vector2D.prototype, 'unit', {
    get: function () {
        var length = this.length;
        return new Vector2D(this.mX / length, this.mY / length);
    },
});

/**
 * Returns the dot product between this vector and the passed vector.
 *
 * @param {Vector2D} vector - The vector to use to compute the dot product.
 * @returns {number}
 */
Vector2D.prototype.dot = function (vector) {
    return (this.mX * vector.mX) + (this.mY * vector.mY);
};

/**
 * Returns the cross product between this vector and the passed vector.
 *
 * @param {Vector2D} vector - The vector to use to compute the dot product.
 * @returns {number}
 */
Vector2D.prototype.cross = function (vector) {
    return (this.mX * vector.mY) - (this.mY * vector.mX);
};

/**
 * @export
 * @type {Vector2D}
 */
module.exports = Vector2D;
