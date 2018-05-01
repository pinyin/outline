/** Calculate a point transformed with an affine matrix */
import {Matrix, Point} from './index'

export function applyToPoint(matrix: Matrix, point: Point): Point;
/** Calculate an array of points transformed with an affine matrix */
export function applyToPoints(matrix: Matrix, points: Point[]): Point[];
