/**
 * Serialize the matrix to a string that can be used with CSS or SVG
 * @returns {string} String that contains a matrix formatted as `matrix(a,b,c,d,e,f)`
 */
import {Matrix} from './index'

export function toSVG(matrix: Matrix): string;
/**
 * Serialize the matrix to a string that can be used with CSS or SVG
 * @returns {string} String that contains a matrix formatted as `matrix(a,b,c,d,e,f)`
 */
export function toCSS(matrix: Matrix): string;
/**
 * Serialize the matrix to a string that can be used with CSS or SVG
 * @returns {string} String that contains a matrix formatted as `matrix(a,b,c,d,e,f)`
 */
export function toString(matrix: Matrix): string;
