export const filterObject = (obj, filterFn) => {
	return Object.fromEntries(Object.entries(obj).filter(filterFn));
};

export const getDynamicObjProp = (obj, path = '') =>
	path.split('.').reduce((prev, curr) => (prev ? prev[curr] : null), obj);
