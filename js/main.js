$(document).ready(function(){
//Menu open and close handlers
	$("#menudiv").click(function(){
		showMenu();
	});
	$("#closeback").click(function(){
		hideMenu();
	});
	//handles the event when a menu item is clicked
	$(".stacker").click(function(){
		hideMenu();
		$("#tutvid").css("display","block");
		vidname = $(this).html();
		document.getElementById("tutvid").src = "videos/"+vidname+".mp4";
		document.getElementById("tutvid").play();
		shouldpause = true;
		$("#play").css("display","none");
	});
	$("#play").click(function(){
		$("#play").fadeOut(600);
		document.getElementById("tutvid").play();
		shouldpause = true;
	});
	//pauses or starts the video when clicked on
	$("#tutvid").click(function(){
	console.log("hey!");
	if (shouldpause == true){
	console.log("true!");
		$("#play").fadeIn(600);
		document.getElementById("tutvid").pause();
		shouldpause = false;
	}
	else{
		$("#play").fadeOut(600);
		document.getElementById("tutvid").play();
		shouldpause = true;
	}
	
	});
	function showMenu(){
		$("#menu").animate(
		{left: "0%"}, 700)
		.css("display","block");
		$("#closeback").css("display","block");
	}
	
	function hideMenu(){
		$("#menu").animate(
			{left: "-100%"},
			1000,
			function(){
				$("#menu").css("display","none");
				$("#closeback").css("display","none");
				}
		);
		
	}
	//shows the company background when a video ends
	document.getElementById('tutvid').addEventListener('ended',myHandler,false);
    function myHandler(e) {
		$("#play").css("display", "none");
        $("#tutvid").fadeOut(700);
    }
});