"use strict"

console.log('d');

window.onload = function() {
	const parallax = document.querySelector('.parallax');

	if(parallax) {
		const glowPurple 	= document.querySelector('.parallax__glow-purple');
		const glowRed 		= document.querySelector('.parallax__glow-red');
		const ball1 		= document.querySelector('.parallax__ball-1');
		const ball2 		= document.querySelector('.parallax__ball-2');
		const ball3 		= document.querySelector('.parallax__ball-3');

		const forGlowPurple = 20;
		const forGlowRed 	= 20;
		const forBall1 		= 2;
		const forBall2 		= 4;
		const forBall3 		= 5;

		const speed = 0.05;

		let positionX 		= 0;
		let positionY 		= 0;
		let coordXpercent 	= 0;
		let coordYpercent 	= 0;

		function setMouseParallaxStyle() {
			const distX = coordXpercent - positionX;
			const distY = coordYpercent - positionY;

			positionX = positionX + (distX * speed);
			positionY = positionY + (distY * speed);

			glowPurple.style.cssText 	= `transform: translate(${-positionX / forGlowPurple}%, ${-positionY / forGlowPurple}%);`;
			glowRed.style.cssText 		= `transform: translate(${positionX / forGlowRed}%, ${positionY / forGlowRed}%);`;
			ball1.style.cssText 		= `transform: translate(${-positionX / forBall1}%, ${-positionY / forBall1}%);`;
			ball2.style.cssText 		= `transform: translate(${positionX / forBall2}%, ${positionY / forBall2}%);`;
			ball3.style.cssText 		= `transform: translate(${-positionX / forBall3}%, ${-positionY / forBall3}%);`;

			requestAnimationFrame(setMouseParallaxStyle);
		}
		setMouseParallaxStyle();

		window.addEventListener('mousemove', function(e) {
			const parallaxWidth 	= parallax.offsetWidth;
			const parallaxHeight	= parallax.offsetHeight;

			const coordX = e.pageX - parallaxWidth / 2;
			const coordY = e.pageY - parallaxHeight / 2;

			coordXpercent = coordX / parallaxWidth * 100;
			coordYpercent = coordY / parallaxHeight * 100;
		})
	}
}

