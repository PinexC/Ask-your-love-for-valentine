import React, { useState } from "react";
import "./App.css";

export default App;

function App() {
	const [isClicked, setIsClicked] = useState(false);
	const [yesPhrasesIndex, setYesPhrasesIndex] = useState(-1);
	const [buttonSize, setButtonSize] = useState(24);
	const [gifIndex, setGifIndex] = useState(-1);
	const [isYesClicked, setIsYesClicked] = useState(false);

	const yesPhrases = [
		"Positive, love?",
		"Sure about this, babe?",
		"Babeee, pretty please?",
		"Babe, just one click?",
		"babeeee just click this",
		"mi amor, por favorrrr!",
		"babe please I beg you",
	];
	const gifLinks = [
		"https://media.tenor.com/wsVaAXbCmWUAAAAi/mochi-mochi-peach-cute-cat.gif",
		"https://media.tenor.com/uavHHmtokM8AAAAi/what-gojill.gif",
		"https://media.tenor.com/z-IlEGAS8mgAAAAi/cute-sad.gif",
		"https://media.tenor.com/0cBAGwmlwDoAAAAi/%E6%B3%A3%E3%81%8F-%E3%81%AD%E3%81%93%E3%81%8E%E3%82%85%E3%83%BC%E3%82%93.gif",
		"https://media.tenor.com/r7PKNiF--nUAAAAi/mochi-cry.gif",
		"https://media.tenor.com/BhQtysGX9fkAAAAi/cat-cats.gif",
		"https://media.tenor.com/IxZpDCuRsPcAAAAi/amy-cat-cute-cat.gif",
	];
	const handleNoClick = () => {
		setIsClicked(true);
		setYesPhrasesIndex((prevIndex) => (prevIndex + 1) % yesPhrases.length);
		setGifIndex((prevIndex) => (prevIndex + 1) % gifLinks.length);
		setButtonSize((prevSize) => prevSize + 60);
	};

	const handleYesClick = () => {
		setIsYesClicked(true);
	};

	const renderButtonText = () => {
		return isClicked ? yesPhrases[yesPhrasesIndex] : "Would you be my Valentine?";
	};

	const buttonStyle = {
		fontSize: `${buttonSize}px`,
		padding: "10px 20px",
		margin: "10px",
		cursor: "pointer",
	};

	return (
		<div className="App">
			<header className="App-header">
				{isYesClicked ? (
					<>
						<div class="firework"></div>
						<div class="firework"></div>
						<div class="firework"></div>
						<img src={"https://media.tenor.com/fFCljjEa_iQAAAAi/cat-kiss.gif"} alt="kiss" style={{ width: "200px", height: "200px" }} />
						<h1>Happy Valentine's Day, my love!</h1>
						<img src={"https://media.tenor.com/-FI5WRxJ23kAAAAi/peach-goma-love.gif"} alt="kiss" style={{ width: "200px", height: "200px" }} />
					</>
				) : (
					<>
						<img
							src={gifIndex === -1 ? "https://media.tenor.com/7Wp2LrOPE8cAAAAi/kawai-dance.gif" : gifLinks[gifIndex]}
							alt="Your gif"
							style={{ width: "200px", height: "200px" }}
						/>
						<h1>{renderButtonText()}</h1>
						<div>
							<button className={isClicked ? "NoButton" : "Button"} onClick={handleNoClick}>
								No
							</button>

							<button className="YesButton" style={buttonStyle} onClick={handleYesClick}>
								Yes
							</button>
						</div>
					</>
				)}
			</header>
		</div>
	);
}
