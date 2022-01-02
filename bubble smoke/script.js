// you can change the hue and amount lit-ness via data attributes on html

// clips the value to given range
const clip = (v, min, max = Infinity) => {
	if (v < min) return min;
	else if (v > max) return max;
	else return v;
};

// generated random value from given range
const randRange = (min, max) => Math.random() * max + min;

// create bubble on x and y position inside target with given hue theme
function bubble(x, y, rect, hue, target) {
	// variables
	const size = randRange(20, rect.width / 5);
	const circleHue = hue + randRange(-20, 20);
	const animDuration = randRange(clip(size ** 2/1000, 1), 6) 
	const zIndex = Math.random() < 0.1 ? 2 : -1;
	// apply to DOM
	const circle = document.createElement("span");
	circle.className = "lit";
	circle.style.left = x + "px";
	circle.style.top = y + "px";
	circle.style.width = size + "px";
	circle.style.height = size + "px";
	circle.style.background = `hsl(${circleHue}deg, 100%, 60%)`;
	circle.style.zIndex = zIndex
	circle.style.animationDuration = animDuration + "s";
	target.appendChild(circle);
}

document.querySelectorAll("[data-lit-hue]").forEach((target) => {
	const rect = target.getBoundingClientRect();
	const hue = Number(target.getAttribute("data-lit-hue"));
	const count = Number(target.getAttribute("data-lit-count") || 50);

	for (let i = 0; i < count; i++) {
		const x = randRange(0, rect.width);
		const y = randRange(0, rect.height);
		bubble(x, y, rect, hue, target);
	}
});