export const filterObject = (obj, filterFn) => {
	return Object.fromEntries(Object.entries(obj).filter(filterFn));
};
