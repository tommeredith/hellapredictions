
export const formatDate = (date: any) => {
	var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) 
		month = '0' + month;
	if (day.length < 2) 
		day = '0' + day;

	return [year, month, day].join('');
}

export const unformatDate = (date: string) => {
	const year = date.slice(0,4)
	const month = date.slice(4, 6)
	const day = date.slice(6, 8)

	return new Date(`${month}/${day}/${year}`)
}