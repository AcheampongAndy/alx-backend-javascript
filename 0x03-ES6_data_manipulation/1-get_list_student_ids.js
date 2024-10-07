export default function getListStudentIds(array) {
	let array2 = [];

	if (!Array.isArray(array)){
		return [];
	}

	array2 = array.map((elementofarray) => elementofarray.id);
	return array2;
}
