const buttons = document.querySelectorAll(".ripple");

buttons.forEach((el) => {
	el.addEventListener("click", function (e) {
		const x = e.clientX;
		const y = e.clientY;
		// console.log(x, y);

		const buttonTop = e.target.offsetTop;
		const buttonLeft = e.target.offsetLeft;

		// console.log(x - buttonLeft, y - buttonTop);

		const xInside = x - buttonLeft;
		const yInside = y - buttonTop;

		const circle = document.createElement("span");
		circle.classList.add("circle");

		circle.style.top = yInside + "px";
		circle.style.left = xInside + "px";

		el.appendChild(circle);

		setTimeout(() => {
			el.removeChild(circle);
		}, 500);
	});
});
