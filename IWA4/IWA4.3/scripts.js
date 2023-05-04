let date = 2050 //semi colon changed to an equal sign
let status = 'student' //const changed to let, semi colon changed to an equal sign
let count = 0 //const changed to let, semi colon changed to an equal sign

if (date === 2050) { //added equal signs
	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')
	date = 'April'
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
	count = count + 4 //removed let from count

	if (status === "student") { //added equal signs
	  console.log('June', 'Youth Day')
	  count = count + 1 //removed let from count
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	date = 'December'
	console.log(date, 'Day of Reconciliation')
	count = count + 3 //removed let from count

	if (status === "parent") {
	  console.log(date, 'Christmas Day')
	  count = count + 1 //removed let from count
  }

	console.log(date, 'Day of Goodwill')
	count = count + 1 //removed let from count
	date = '2050' //added date 2050
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)