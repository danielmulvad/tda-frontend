export const bool = <const T>(value: T): boolean => {
	switch (typeof value) {
		case 'bigint':
			return value !== BigInt(0);
		case 'boolean':
			return value;
		case 'function':
			return true;
		case 'number':
			return value !== 0;
		case 'object':
			return value !== null;
		case 'string':
			return value !== 'false' && value !== '0' && value !== 'null' && value !== 'undefined' && value !== '' && value !== 'NaN';
		case 'symbol':
			return true;
		case 'undefined':
			return false;
		default:
			return false;
	}
};
