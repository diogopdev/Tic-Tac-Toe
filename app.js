let restartBtn = document.querySelector('.restart')
let boxes = Array.from(document.getElementsByClassName('playbtn')) //Fills an array for each play button (x9)
let spaces = Array(9).fill(null) //Creates an empty array (x9)
const winnerIndicator = getComputedStyle(document.body).getPropertyValue('--background-won')
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
    [2,4,6]
]
 
boxes.forEach(box => box.addEventListener('click', boxClicked))
function boxClicked (e) {
	const id = e.target.id

	if(!spaces[id]){ //If this box hasn't been played yet 
		
		spaces[id] = currentPlayer
		e.target.innerText = currentPlayer

		if(playerHasWon() !== false){
            gridTop.innerText = `${currentPlayer} has won!`
			let winning_blocks = playerHasWon()

            winning_blocks.map( box => boxes[box].style.backgroundColor=winnerIndicator)
			boxes.forEach(box => {box.disabled=true})
            return
        } else {
			currentPlayer = currentPlayer == player1 ? player2 : player1
			gridTop.innerText = (currentPlayer + "'s turn")
		}
	}
}

function playerHasWon(){
    for(const condition of possibleWinning){
        let [a, b, c] = condition
		console.log(spaces[a], spaces[b], spaces[c])
        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a,b,c]
        } 
    }
    return false
}

restartBtn.addEventListener('click', restart)
function restart(){
	spaces = Array(9).fill(null)
	boxes.forEach(box => {
		box.innerText = ""
		box.style.backgroundColor = ''
		box.disabled = false
	})
	currentPlayer = player1
	gridTop.innerText = (currentPlayer + "'s turn")
}
