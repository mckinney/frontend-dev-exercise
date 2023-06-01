const capitalize = (str) => {
	if (typeof str !== 'string') return '';
	return str.charAt(0).toUpperCase() + str.slice(1);
};

const camelize = (str) => str.replace(/_([a-z])/g, (g) => g[1].toUpperCase());

const capitalCamel = (str) => capitalize(camelize(str));

const removeUnderscore = (str) => str.replace(/_/g, ' ');

export { capitalize };
export { camelize };
export { capitalCamel };
export { removeUnderscore };
