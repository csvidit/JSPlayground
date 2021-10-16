function diceGame()
{
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
	
}