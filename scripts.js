			var doorIsOpen = false;
			function activateDoor(){
				if(doorIsOpen){
					document.getElementById('door').setAttribute("class", "closedDoor");
					doorIsOpen=false;
				} else{
					document.getElementById('door').setAttribute("class", "openedDoor");
					doorIsOpen=true;
				}
			}
			
			var plateIsShown = false;
			function activatePlate(){
				if(plateIsShown){
					document.getElementById('plate').setAttribute("class", "plate");
					plateIsShown=false;
				} else{
					document.getElementById('plate').setAttribute("class", "showPlate");
					plateIsShown=true;
				}
			}
			
			var cookieUnknownOne = true;
			var cookieUnknownTwo = true;
			var cookieUnknownThree = true;
			var cookieUnknownFour = true;
			
			var cookieOneEl = document.getElementById("one");
			cookieOneEl.onclick = cookieOne;
			
			var cookieTwoEl = document.getElementById("two");
			cookieTwoEl.onclick = cookieTwo;
			
			var cookieThreeEl = document.getElementById("three");
			cookieThreeEl.onclick = cookieThree;
			
			var cookieFourEl = document.getElementById("four");
			cookieFourEl.onclick = cookieFour;
			
			function cookieOne(e) {
				if(cookieUnknownOne) {
					e.currentTarget.src="images/cookiepresent.png";
					cookieUnknownOne=false;
				} else {
					e.currentTarget.src="images/cookie.png";
					cookieUnknownOne=true;
				}
				e.stopPropagation();
				
			}
			
			function cookieTwo(e) {
				if(cookieUnknownTwo) {
					e.currentTarget.src="images/cookiecane.png";
					cookieUnknownTwo=false;
				} else {
					e.currentTarget.src="images/cookie.png";
					cookieUnknownTwo=true;
				}
				e.stopPropagation();
			}
			
			function cookieThree(e) {
				if(cookieUnknownThree) {
					e.currentTarget.src="images/cookieginger.png";
					cookieUnknownThree=false;
				} else {
					e.currentTarget.src="images/cookie.png";
					cookieUnknownThree=true;
				}
				e.stopPropagation();
			}
			
			function cookieFour(e) {
				if(cookieUnknownFour) {
					e.currentTarget.src="images/cookiemistle.png";
					cookieUnknownFour=false;
				} else {
					e.currentTarget.src="images/cookie.png";
					cookieUnknownFour=true;
				}
				e.stopPropagation();
			}
			
			var hintShown = false;
			function activateHint(){
				if(hintShown){
					document.getElementById('flap').setAttribute("class", "openFlap");
					hintShown=false;
				} else{
					document.getElementById('flap').setAttribute("class", "flap");
					hintShown=true;
				}
			}