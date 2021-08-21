const visible = document.querySelector(".profile__tooltip");
const visibleadd = document.querySelector(".profile__tooltiptext");
const tooltipActive = document.querySelector(".fa-share");
visible.addEventListener("click", () => {
	if (visibleadd.classList.contains("visible")) {
		visibleadd.classList.remove("visible");
	} else {
		visibleadd.classList.add("visible");
	}
	if (tooltipActive.classList.contains("profile__tooltip--active")) {
		tooltipActive.classList.remove("profile__tooltip--active");
	} else {
		tooltipActive.classList.add("profile__tooltip--active");
	}
});
