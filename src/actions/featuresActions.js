export const buyItem = (newItem) => {
	return {
		type: 'BUY_ITEM',
		payload: newItem,
	};
};

export const removeFeature = (item) => {
	return {
		type: 'REMOVE_FEATURE',
		payload: item,
	};
};
