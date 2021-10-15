function charCount()
{
	var str = prompt("Enter the string.");
	if(str != null)
	{
		alert("This string has "+str.length+" characters");
	}
	
}

function changeCase()
{
	var str = prompt("Enter your name");
	if(str !=null)
	{
		alert("Hello, "+str.slice(0,1).toUpperCase()+str.slice(1,str.length).toLowerCase());
	}
}

function dogAgeToHumanAge()
{
	var dogAge = prompt("Enter dog age.");
	if(dogAge != null)
	{
		var humanAge = ((dogAge-2)*4)+21;
		alert("The equivalent human age for dog age "+dogAge+" is "+humanAge);
	}
}

function ageLeft(age)
{
	var ageLeft = 90-age;
	var monthsLeft = ageLeft*12;
	var weeksLeft = ageLeft*52;
	var daysLeft = ageLeft*365;
	console.log("You have "+daysLeft+" days, "+weeksLeft+" weeks, and "+monthsLeft+" months left.");
}

function bmiCalculator()
{
	var weight = prompt("Enter your weight");
	var height = prompt("Enter your height");
	if(weight !=null && height !=null)
	{
		alert("Your BMI is "+bmi(weight, height));
	}
}

function bmi(weight, height)
{
	return weight/(Math.pow(height,2));
}

function loveCalculator()
{
	var yourName = prompt("Enter your name");
	var crushName = prompt("Enter the name of your crush");
	if(yourName != null && crushName != null)
	{
		alert("The chances of a relationship between you and "+crushName+" is "+Math.round(Math.random()*100+1)+" %");
	}
}

function isLeapYear()
{
	var year = prompt("Enter the year.");
	if(year != null)
	{
		if(year % 4 === 0)
		{
			if(year % 100 === 0)
			{	
				if(year % 400 === 0)
				{
					alert("Leap year.");
				}
				else
				{
					alert("Not a leap year.");
				}
			}
			else
			{
				alert("Leap year.");
			}
		}
		else
		{
			alert("Not leap year.");
		}
	}
}

var arr = [];
var acc = 1;

function fizzBuzz()
{
	if(acc % 3 === 0 && acc % 5 === 0)
	{
		arr.push("FizzBuzz");
	}
	else if(acc % 3 === 0)
	{
		arr.push("Fizz");
	}
	else if(acc % 5 === 0)
	{
		arr.push("Buzz");
	}
	else
	{
		arr.push(acc);
	}
	acc++;
	console.log(arr);
}

function whosPaying()
{
	var arr = [];
	var numPeeps = prompt("How many people are in the group?");
	var i = 0;
	for(var i = 0; i<numPeeps; i++)
	{
		arr[0] = prompt("Enter the name.");
	}
	alert("Looks like "+whosPayingCalc(arr)+" is paying today!");
}

function whosPayingCalc(listNames)
{
	return listNames[Math.floor(Math.random()*listNames.length)];
}

