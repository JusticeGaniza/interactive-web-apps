let date = 2050  //change semi colon to equals sign, changed const to let
let status = 'student' //change semi colon to equals sign, changed const to let
let count = 0 //changed const to let

if (date = 2050) {
	console.log("January", 'New Year’s Day')      // closing bracket missing.
	console.log("March", 'Human Rights Day')
	// removed April date declaration added it to bottom line instead
	console.log('April', 'Family Day')
	console.log('April', 'Freedom Day')
	count = count + 4 //removed let from count

	if (status = 'student') {
	  console.log('June', 'Youth Day')
	  count = count + 1  //removed let from count
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	// removed December date declaration added it to bottom line instead
	console.log('December', 'Day of Reconciliation')
	count = count + 3 //removed let from count

	if (status = 'parent') {
	  console.log('December', 'Christmas Day') // replaced date with december string instead
	  count = count + 1  //removed let from count
  }

	console.log('December', 'Day of Goodwill') // replaced date with december string instead
	count = count + 1  //removed let from count
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)