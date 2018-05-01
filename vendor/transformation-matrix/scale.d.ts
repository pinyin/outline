/**
 * Calculate a scaling matrix
 * @param sx Scaling on axis x
 * @param sy Scaling on axis y (default `sx`)
 */
import {Matrix} from './index'

export function scale(sx: number, sy?: number): Matrix;
