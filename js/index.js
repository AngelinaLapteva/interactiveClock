const secondHand=document.querySelector('.sec');
const hand=document.querySelector('.min');
console.log(secondHand);
function setDate(){
	const date = new Date();
	const seconds= date.getSeconds();
	const minutes=date.getMinutes();

	const secondsDegrees=((seconds/60)*360);
	const minutesDegrees=((minutes/60)*360);

	secondHand.style.transform=`rotate(${secondsDegrees}deg)`;
	hand.style.transform=`rotate(${minutesDegrees}deg)`;
	console.log(seconds);

}

setInterval(setDate,1000);