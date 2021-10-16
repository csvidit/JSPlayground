var siteStatus;

function darkMode()
{
	var buttons = document.querySelectorAll("button");
	if(siteStatus === undefined)
	{
		siteStatus = "dark";
		return;
	}
	else if(document.getElementById("dark")!=null)
	{
		document.getElementById("dark").id="light";
		document.querySelector("body").classList.replace("bg-dark", "bg-light");
		document.querySelector("body").classList.replace("text-white", "text-dark");
		for(i=0; i<buttons.length; i++)
		{
			buttons[i].classList.replace("btn-outline-light", "btn-outline-dark");
		}
		siteStatus="light";
		document.getElementById("darkModeToggle").innerHTML="Revert to Dark Mode";
	}
	else
	{
		document.getElementById("light").id="dark";
		document.querySelector("body").classList.replace("bg-light", "bg-dark");
		document.querySelector("body").classList.replace("text-dark", "text-white");
		for(i=0; i<buttons.length; i++)
		{
			buttons[i].classList.replace("btn-outline-dark", "btn-outline-light");
		}
		siteStatus="dark";
		document.getElementById("darkModeToggle").innerHTML="Change to Light Mode";
	}
	
}