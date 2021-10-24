$("#header-border").before("<h1 class='display-1'>JSPlayground</h1><p class='text-muted'>This is an experimental subdomain of Vidit Khandelwal. Website made using Bootstrap5.</p><a href='/index.html'><button class='btn btn-outline-light btn-sm' type='button'>Home</button></a><a href='/jq-index.html'><button class='btn btn-outline-light btn-sm' type='button'>JQueryPlayground</button></a>");

$("#js-cb-disclaimer").html("");

$("#footer-text").html("<p>&copy; 2021 Vidit Khandelwal.<br>This is an experimental website, made using Bootstrap, connected to a licensed Vidit Khandelwal subdomain.<br>Site Version not recorded.<br>This website uses HTTPS and at this point does not collect any user data.<br>For more information regarding websites owned and operated by Vidit Khandelwal, go to <a href='https://domains.viditkhandelwal.com'target='_blank' type=''>domains.viditkhandelwal.com</a></p>");

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

function diceGame()
{
	// --- JavaScript Code ---
	/*
	var randomNum1 = Math.floor(Math.random()*6+1);
	document.getElementsByClassName("img1")[0].setAttribute("src", "/dicegame-static/dice"+randomNum1+".png");
	var randomNum2 = Math.floor(Math.random()*6+1);
	document.getElementsByClassName("img2")[0].setAttribute("src", "/dicegame-static/dice"+randomNum2+".png");
	if(randomNum1 > randomNum2)
	{
		document.getElementById("dicegame-header").innerHTML="Player 1 wins!";
	}
	else if(randomNum1 < randomNum2)
	{
		document.getElementById("dicegame-header").innerHTML="Player 2 wins!";
	}
	else
	{
		document.getElementById("dicegame-header").innerHTML="It's a Draw!";
	}
	*/
	// --- JQuery Code ---
	var randomNum1 = Math.floor(Math.random()*6+1);
	$(".img1").attr("src", "/dicegame-static/dice"+randomNum1+".png");
	var randomNum2 = Math.floor(Math.random()*6+1);
	$(".img2").attr("src", "/dicegame-static/dice"+randomNum2+".png");
	if(randomNum1 > randomNum2)
	{
		$("#dicegame-header").html("Player 1 wins!");
	}
	else if(randomNum1 < randomNum2)
	{
		$("#dicegame-header").html("Player 2 wins!");
	}
	else
	{
		$("#dicegame-header").html("It's a Draw!");
	}
	
}

// --- vanilla JavaScript code ---
/*
var numDrums = document.getElementsByClassName("drum").length;

for(var i = 0; i<numDrums; i++)
{
	document.querySelectorAll(".drum")[i].addEventListener("click", function() {

		makeSound(this.innerHTML);
		buttonAnimation(this.innerHTML);
	}
		);
}

document.addEventListener("keydown", function(event) {

	makeSound(event.key);
	buttonAnimation(event.key);

});

function makeSound(key)
{
	switch(key)
		{
			case "w":
				var tom1 = new Audio("/sounds/tom-1.mp3");
				tom1.play();
				break;
			case "a":
				var tom2 = new Audio("/sounds/tom-2.mp3");
				tom2.play();
				break;
			case "s":
				var tom3 = new Audio("/sounds/tom-3.mp3");
				tom3.play();
				break;
			case "d":
				var tom4 = new Audio("/sounds/tom-4.mp3");
				tom4.play();
				break;
			case "j":
				var snare = new Audio("/sounds/snare.mp3");
				snare.play();
				break;
			case "k":
				var crash = new Audio("/sounds/crash.mp3");
				crash.play();
				break;
			case "l":
				var kickBass = new Audio("/sounds/kick-bass.mp3");
				kickBass.play();
				break;
			default:
			console.log(this.innerHTML);
		}
}

function buttonAnimation(currKey)
{
	var activeButton = document.querySelector("."+currKey);
	activeButton.classList.add("btn-danger");
	setTimeout( function() {

		activeButton.classList.remove("btn-danger");

	}, 100);

}

*/

// --- JQuery Code ---

var numDrums = $("drum").length;

for(var i = 0; i<numDrums; i++)
{
	$(".drum").click(function() {

		makeSound(this.innerHTML);
		buttonAnimation(this.innerHTML);
	}
		);
}

$(document).keypress(function(event) {

	makeSound(event.key);
	buttonAnimation(event.key);

});

function makeSound(key)
{
	switch(key)
		{
			case "w":
				var tom1 = new Audio("/sounds/tom-1.mp3");
				tom1.play();
				break;
			case "a":
				var tom2 = new Audio("/sounds/tom-2.mp3");
				tom2.play();
				break;
			case "s":
				var tom3 = new Audio("/sounds/tom-3.mp3");
				tom3.play();
				break;
			case "d":
				var tom4 = new Audio("/sounds/tom-4.mp3");
				tom4.play();
				break;
			case "j":
				var snare = new Audio("/sounds/snare.mp3");
				snare.play();
				break;
			case "k":
				var crash = new Audio("/sounds/crash.mp3");
				crash.play();
				break;
			case "l":
				var kickBass = new Audio("/sounds/kick-bass.mp3");
				kickBass.play();
				break;
			default:
			console.log(this.innerHTML);
		}
}

function buttonAnimation(currKey)
{
	var activeButton =$("."+currKey);
	$(activeButton).addClass("btn-danger");
	setTimeout( function() {

		$(activeButton).addClass("btn-danger");

	}, 100);

}