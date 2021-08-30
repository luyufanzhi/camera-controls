const EPSILON = 1e-5;

export function approxZero( number: number ): boolean {

	return Math.abs( number ) < EPSILON;

}

export function lessThanEpsilon( number: number, EPS: number ): boolean {

	return Math.abs( number ) < EPS;

}

export function approxEquals( a: number, b: number ): boolean {

	return approxZero( a - b );

}

export function roundToStep( value: number, step: number ): number {

	return Math.round( value / step ) * step;

}

export function infinityToMaxNumber( value: number ): number {

	if ( isFinite( value ) ) return value;

	if ( value < 0 ) return - Number.MAX_VALUE;

	return Number.MAX_VALUE;

}

export function maxNumberToInfinity( value: number ): number {

	if ( Math.abs( value ) < Number.MAX_VALUE ) return value;

	return value * Infinity;

}
