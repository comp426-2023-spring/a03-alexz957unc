export function rps(move) {
	const legal_move = ["rock", "paper", "scissors"];
	const opponent_move = legal_move[Math.floor(Math.random() * 3)];

	if (move === undefined) {
		return {"player": opponent_move};
	} else if (!legal_move.includes(move.toLowerCase())) {
		throw new RangeError("Invalid move.");
	}

	move = move.toLowerCase();
	var result;
	if (move === opponent_move) {
		result = "tie";
	} else {
		if ((move === "paper" && opponent_move === "rock") ||
			(move === "rock" && opponent_move === "scissors") ||
			(move === "scissors" && opponent_move === "paper"))
			 {
			result = "win";
		} else {
			result = "lose";
		}
	}
	return {"player": move, "opponent": opponent_move, "result": result};
}

export function rpsls(move) {
	const legal_move = ["rock", "paper", "scissors", "lizard", "spock"];
	const opponent_move = legal_move[Math.floor(Math.random() * 5)];

	if (move === undefined) {
		return {"player": opponent_move};
	} else if (!legal_move.includes(move.toLowerCase())) {
		throw new RangeError("Invalid move.");
	}

	move = move.toLowerCase();
	var result;
	if (move === opponent_move) {
		result = "tie";
	} else {
		if ((move === "spock" && opponent_move === "scissors") ||
            (move === "spock" && opponent_move === "rock") ||
			(move === "scissors" && opponent_move === "paper") ||
            (move === "scissors" && opponent_move === "lizard") ||
			(move === "paper" && opponent_move === "rock") ||
            (move === "paper" && opponent_move === "spock") ||
			(move === "lizard" && opponent_move === "spock") ||
			(move === "lizard" && opponent_move === "paper") ||
            (move === "rock" && opponent_move === "lizard") ||
			(move === "rock" && opponent_move === "scissors"))
             {
			result = "win";
		} else {
			result = "lose";
		}
	}
	return {"player": move, "opponent": opponent, "result": result};
}