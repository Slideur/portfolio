const slideImages = document.querySelectorAll(".slide-image");
const controlBtn = document.querySelectorAll(".control-btn");

controlBtn.forEach((btn) => btn.addEventListener("click", handleSlider));

let index = 0;
function handleSlider(e) {
	slideImages[index].classList.remove("active");

	index = index + Number(e.target.getAttribute("data-action"));

	if (index < 0) {
		index = slideImages.length - 1;
	} else if (index > slideImages.length - 1) {
		index = 0;
	}
	slideImages[index].classList.add("active");
}
