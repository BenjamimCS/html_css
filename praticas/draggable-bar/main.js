// [x] Calcular posição atual e a partir dela compor o deslocamento
// 		R= MouseElement.movementX e MouseElement.movementY

dragElement(document.querySelector(".inform-bar"))

function dragElement(element) {
	let handle = document.querySelector(".handle");
	let initialPosition = -180
	
	let modifyPosition = 0
	let dragElement = false

	handle.addEventListener('mousedown', () => {
		dragElement = true

		console.log(dragElement)
	})

	window.addEventListener('mousemove', (mouse) => {
		if(dragElement) dragElementOnDown(mouse,element)
	})

	window.addEventListener('mouseup', () => {
		dragElement = false
		console.log(dragElement)
	})


	function dragElementOnDown(mouse,box) {
		// variavel com <valor-inicial>
			// se for maior que 0 para
			// se for igual a <valor-inicial> para
			// sen a execucao continua

		console.log("initialPosition: ", initialPosition, "\n",
					"modifyPosition: ",  modifyPosition,  "\n",
					"mouseMovement: ",   mouse.movementY, "\n",
					"offset: ",			 modifyPosition === 0 ? initialPosition + mouse.movementY : modifyPosition + mouse.movementY
		)

		modifyPosition = modifyPosition === 0 ? initialPosition + mouse.movementY : modifyPosition + mouse.movementY


		console.log("\n","finalResult1", modifyPosition)

		if(modifyPosition > 0) modifyPosition = 0
		if(modifyPosition >= -180) element.style.transform = `translateY(${modifyPosition}px)`
		else {
			modifyPosition = -180
		}

		console.log("\n","finalResult2", modifyPosition)

	}
}


// function catchValues(element) {
// 	// const element = document.querySelector(`${elment}`);
// 	const styles = window.getComputedStyle(element, null);
// 	const matrixPattern = /^\w*\((((\d+)|(\d*\.\d+)),\s*)*((\d+)|(\d*\.\d+))\)/i;
// 	console.log(matrixPattern)
// 	const vals = [styles.transform.match(matrixPattern)].slice(1).filter(Boolean).map(v => +v.replace(/\D+/, ''))

// 	console.log(vals)
// }
