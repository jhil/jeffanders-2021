document.addEventListener("DOMContentLoaded", function () {
	const button = document.getElementById("button-more");
	button.addEventListener("click", function () {
		const initiallyHidden = document.querySelectorAll(".initially-hidden");
		for (i = 0; i < initiallyHidden.length; ++i) {
			initiallyHidden[i].classList.toggle("hidden");
		}
	});
});
