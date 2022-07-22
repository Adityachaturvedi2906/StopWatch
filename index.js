const clock = document.querySelector(".clock");

let sec = 0,
	min = 0,
	hr = 0,
	intervalId;

	const startStopWatch = () => {

		intervalId = setInterval(() => {

			if(sec<59){
				sec++;
			}else if(min>=59){
				hr++;
				min = 0;
				sec = 0;
			}else {
				sec = 0;
				min++;
			}

			const hour = hr.toString().padStart(2, "0");
			const minute = min.toString().padStart(2, "0");
			const second = sec.toString().padStart(2, "0");

			clock.innerHTML = `${hour}:${minute}:${second}`;

		}, 1000)

	};

	const stopStopWatch = () => {
		clearInterval(intervalId);
	};