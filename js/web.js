$(document).ready(function(){
	//Gets page title
	var pageTitle = document.title;

	//If logic to set the appropriate gradient for the header and footer
	if(pageTitle.includes("CYSC")){
		$("header").addClass("index-gradient");
		$("footer").addClass("index-gradient");
	} else if(pageTitle.includes("About")){
		$("header").addClass("about-gradient");
		$("footer").addClass("about-gradient");
	} else if(pageTitle.includes("Events")){
		$("header").addClass("event-gradient");
		$("footer").addClass("event-gradient");
		$(".events").flickity({
			wrapAround: true,
			draggable: false,
			contain: false
		});
	} else if(pageTitle.includes("Contact")){
		$("header").addClass("contact-us-gradient");
		$("footer").addClass("contact-us-gradient");

		//Setting Captcha Numbers
		randomNumbers();
	} else if(pageTitle.includes("Media")){
		$("header").addClass("media-gradient");
		$("footer").addClass("media-gradient");
		$(".ttiv").featherlightGallery();
	} else{
		$("header").addClass("default-gradient");
		$("footer").addClass("default-gradient");
	}

	$("nav a").smoothScroll();
	$(".mini-nav a").smoothScroll();
	$("span a").smoothScroll();
});

function randomNumbers(){
	console.log("setting numbers");
	var randNumber1 = Math.floor(Math.random() * 20) + 1;
	var randNumber2 = Math.floor(Math.random() * 20) + 1;

	console.log(randNumber1 + " " + randNumber2);
	$("#firstNum").html(randNumber1);
	$("#secondNum").html(randNumber2);
}

function checkNumbers(){
	var number1 = parseInt($("#firstNum").text());
	var number2 = parseInt($("#secondNum").text());
	var answer = $("#answer").val();
	var isCorrect = false;

	var correctAnswer = number1 + number2;

	if(answer.length <= 0 || answer != correctAnswer){
		isCorrect = false;
	}  else if(answer == correctAnswer){
		isCorrect = true;
	}

	return isCorrect;
}

function reset(formName){
	$(formName)[0].reset();
}

$("#contact-form").submit(function(e) {
    e.preventDefault();
});

function submitForm(){
	var isInformationCorrect = true;
	var alertString = "";

	if($.trim($("#name").val()).length == 0){
		alertString += "\nPlease fill out the name textbox"
		isInformationCorrect = false;
	}
	if($.trim($("#email").val()).length == 0){
		alertString += "\nPlease fill out the email textbox"
		isInformationCorrect = false;
	}
	if($.trim($("#subject").val()).length == 0){
		alertString += "\nPlease fill out the subject textbox"
		isInformationCorrect = false;
	}
	if($.trim($("#message").val()).length == 0){
		alertString += "\nPlease fill out the message textbox"
		isInformationCorrect = false;
	}
	if(checkNumbers() == false){
		alertString += "\nPlease check your math";
		isInformationCorrect = false;
	}
	if(isInformationCorrect != true){
		alert(alertString);
	} else {
		$(location).attr('href', './contact-form-submitted.html#submit-success');

	}
	
}