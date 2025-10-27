const about = document.querySelector("#about");
const resume = document.querySelector("#resume");
const gallery = document.querySelector("#gallery");
const certificats = document.querySelector("#certificats");
const contact = document.querySelector("#contact");
const aboutDiv = document.querySelector(".js-home-card-about");
const resumeDiv = document.querySelector(".js-home-card-resume");
const galleryDiv = document.querySelector(".js-home-card-gallery");
const certificatsDiv = document.querySelector(".js-home-card-certificats");
const contactDiv = document.querySelector(".js-home-card-contact");

about.addEventListener("click", getSlidePage);
function getSlidePage(e) {
	aboutDiv.style.transform = "translateX(-110%)";
	resumeDiv.style.transform = "translateX(0)";
	galleryDiv.style.transform = "translateX(0)";
	certificatsDiv.style.transform = "translateX(0)";
	contactDiv.style.transform = "translateX(0)";
}
resume.addEventListener("click", getSlidePage2);
function getSlidePage2(e) {
	resumeDiv.style.transform = "translateX(-110%)";
	galleryDiv.style.transform = "translateX(0)";
	aboutDiv.style.transform = "translateX(0)";
	certificatsDiv.style.transform = "translateX(0)";
	contactDiv.style.transform = "translateX(0)";
}
gallery.addEventListener("click", getSlidePage3);
function getSlidePage3(e) {
	galleryDiv.style.transform = "translateX(-110%)";
	certificatsDiv.style.transform = "translateX(0)";
	aboutDiv.style.transform = "translateX(0)";
	resumeDiv.style.transform = "translateX(0)";
	contactDiv.style.transform = "translateX(0)";
}
certificats.addEventListener("click", getSlidePage4);
function getSlidePage4(e) {
	certificatsDiv.style.transform = "translateX(-110%)";
	aboutDiv.style.transform = "translateX(0)";
	resumeDiv.style.transform = "translateX(0)";
	galleryDiv.style.transform = "translateX(0)";
	contactDiv.style.transform = "translateX(0)";
}
contact.addEventListener("click", getSlidePage5);
function getSlidePage5(e) {
	contactDiv.style.transform = "translateX(-110%)";
	aboutDiv.style.transform = "translateX(0)";
	resumeDiv.style.transform = "translateX(0)";
	galleryDiv.style.transform = "translateX(0)";
	certificatsDiv.style.transform = "translateX(0)";
}

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
