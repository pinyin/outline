/**
 * Calculate a rotation matrix
 * @param angle Angle in radians
 * @param cx If (cx,cy) are supplied the rotate is about this point
 * @param cy If (cx,cy) are supplied the rotate is about this point
 */
import {Matrix} from './index'

export function rotate(angle: number, cx?: number, cy?: number): Matrix;
/** Calculate a rotation matrix with a DEG angle
 * @param angle Angle in degree
 * @param cx If (cx,cy) are supplied the rotate is about this point
 * @param cy If (cx,cy) are supplied the rotate is about this point*/
export function rotateDEG(angle: number, cx?: number, cy?: number): Matrix;
