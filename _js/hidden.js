document.addEventListener("DOMContentLoaded", function () {
	const buttons = document.getElementsByClassName("button-more");
	for (b = 0; b < buttons.length; ++b) {
		const button = buttons[b];
		const group = button.dataset.group;
		button.addEventListener("click", function () {
			const initiallyHidden = document.querySelectorAll(".initially-hidden-"+group);
			console.log(group);
			for (i = 0; i < initiallyHidden.length; ++i) {
				initiallyHidden[i].classList.toggle("hidden");
			}
		});
	}
});
