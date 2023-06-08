let restartBtn = document.querySelector('.restart')
let boxes = Array.from(document.getElementsByClassName('playbtn')) //Fills an array for each play button (x9)
let spaces = Array(9).fill(null) //Creates an empty array (x9)
const gridTop = document.querySelector('.gridTop')

const player1 = 'X'
const player2 = 'O'
let currentPlayer = player1
gridTop.innerText = (currentPlayer + "'s turn")
const possibleWinning = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,5]
]

boxes.forEach(box => box.addEventListener('click', boxClicked))
function boxClicked (e) {
	const id = e.target.id

	if(!spaces[id]){ //If this box hasn't been played yet 
		
		spaces[id] = currentPlayer
		console.log(spaces[id])
		e.target.innerText = currentPlayer

		currentPlayer = currentPlayer == player1 ? player2 : player1
		gridTop.innerText = (currentPlayer + "'s turn")
	}
}

restartBtn.addEventListener('click', restart)
function restart(){
	spaces = Array(9).fill(null)
	boxes.forEach(box => {box.innerText = ""})
	currentPlayer = player1
	gridTop.innerText = (currentPlayer + "'s turn")
}
