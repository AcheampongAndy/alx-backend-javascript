export default function getStudentIdsSum(array) {
	let sum = 0;

	sum = array.reduce((total, currentValue) => total + currentValue.id, 0);

	return sum;
}
