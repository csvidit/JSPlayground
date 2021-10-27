var siteStatus;

function initialCheck()
{
	if(Cookies.get("siteStatus") === "undefined")
	{
		siteStatus = "dark";
		Cookies.set("siteStatus", "dark");
		return;
	}
	else if(Cookies.get("siteStatus") === "dark" && body.id === "light")
	{
		darkMode("update");
	}
	else if(Cookies.get("siteStatus") === "light" && body.id === "dark")
	{
		darkMode("update");
	}
	else
	{
		return;
	}
}

function darkMode(reason)
{
	var buttons = document.querySelectorAll("button");
	/*if(siteStatus === undefined)
	{
		siteStatus = "dark";
		return;
	}*/
	/*if(Cookies.get("siteStatus") === "undefined")
	{
		Cookies.set("siteStatus", "dark");
		return;
	}*/
	if(document.getElementById("dark")!=null)
	{
		document.getElementById("dark").id="light";
		document.querySelector("body").classList.replace("bg-dark", "bg-light");
		document.querySelector("body").classList.replace("text-white", "text-dark");
		for(i=0; i<buttons.length; i++)
		{
			buttons[i].classList.replace("btn-outline-light", "btn-outline-dark");
		}
		siteStatus="light";
		if(reason != "update")
		{
			Cookies.set("siteStatus", "light");
		}
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
		if(reason != "update")
		{
			Cookies.set("siteStatus", "dark");
		}
		document.getElementById("darkModeToggle").innerHTML="Change to Light Mode";
	}
	
}