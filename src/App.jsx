import { IoNuclearOutline, IoTriangleSharp } from "react-icons/io5";
import { FaStar, FaCircle } from "react-icons/fa";
import { ImPlus } from "react-icons/im";
import { useEffect, useState } from "react";

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCard2, setSelectedCard2] = useState(null);
  const [selectedCard3, setSelectedCard3] = useState(null);
  const [selectedCard4, setSelectedCard4] = useState(null);

  const [shuffledCards, setShuffledCards] = useState([]);
  const cards = [
    {
      id: 0,
      name: "card",
      shapes: [<IoTriangleSharp color="red" />],
      color: "red",
    },
    {
      id: 1,
      name: "card",
      shapes: [<FaStar color="green" />, <FaStar color="green" />],
      color: "green",
    },
    {
      id: 2,
      name: "card",
      shapes: [
        <FaCircle color="blue" />,
        <FaCircle color="blue" />,
        <FaCircle color="blue" />,
      ],
      color: "blue",
    },
    {
      id: 3,
      name: "card",
      shapes: [
        <ImPlus color="yellow" />,
        <ImPlus color="yellow" />,
        <ImPlus color="yellow" />,
        <ImPlus color="yellow" />,
      ],
      color: "yellow",
    },
  ];

  useEffect(() => {
    function karistir(kartlar, adet) {
      let yeniKartlar = [];
      for (let i = 0; i < adet / kartlar.length; i++) {
        yeniKartlar.push(...kartlar);
      }
      return yeniKartlar;
    }

    const yeniDizi = karistir(cards, 64);
    const karisikDizi = yeniDizi.sort(() => Math.random() - 0.5);
    setShuffledCards(karisikDizi);
  }, []);

  useEffect(() => {
    const isMatch = () => {
      if (selectedCard) {
        if (cards[0].color === selectedCard?.color) {
          alert("doğru");
          setTimeout(() => {
            setSelectedCard(null);
          }, 600);
        } else {
          alert("yanlış");
          setTimeout(() => {
            setSelectedCard(null);
          }, 600);
        }
      } else if (selectedCard2) {
        if (cards[1].color === selectedCard2?.color) {
          alert("doğru");
          setTimeout(() => {
            setSelectedCard2(null);
          }, 600);
        } else {
          alert("yanlış");
          setTimeout(() => {
            setSelectedCard2(null);
          }, 600);
        }
      } else if (selectedCard3) {
        if (cards[2].color === selectedCard3?.color) {
          alert("doğru");
          setTimeout(() => {
            setSelectedCard3(null);
          }, 600);
        } else {
          alert("yanlış");
          setTimeout(() => {
            setSelectedCard3(null);
          }, 600);
        }
      } else if (selectedCard4) {
        if (cards[3].color === selectedCard4?.color) {
          alert("doğru");
          setTimeout(() => {
            setSelectedCard4(null);
          }, 600);
        } else {
          alert("yanlış");
          setTimeout(() => {
            setSelectedCard4(null);
          }, 600);
        }
      } else {
        console.log("seçim yapılmadı");
      }
    };
    isMatch();
  }, [selectedCard, selectedCard2, selectedCard3, selectedCard4]);

  return (
    <div className="w-screen h-screen flex">
      <div className="w-2/3 h-full bg-gray-400 opacity-60 flex flex-col justify-center items-center gap-4 ">
        <div className="w-full flex h-1/2 justify-center items-center gap-5 ">
          {cards.map((card) => {
            return (
              <div className="w-1/6 border border-blue-600 h-60 bg-white flex rounded-md shadow-2xl items-center justify-center gap-3">
                {card.shapes}
              </div>
            );
          })}
        </div>
        <div className="w-full h-1/2 flex justify-center items-center gap-5">
          <button
            onClick={() => setSelectedCard(shuffledCards.splice(-1)[0])}
            className="w-1/6 border border-blue-600 h-60 bg-white text-red-500 flex rounded-md shadow-2xl items-center justify-center gap-3"
            id="1"
          >
            {selectedCard &&
              selectedCard.shapes?.map((shape) => {
                return shape;
              })}
          </button>
          <button
            onClick={() => setSelectedCard2(shuffledCards.splice(-1)[0])}
            className="w-1/6 border border-blue-600 h-60 bg-white flex rounded-md shadow-2xl items-center justify-center gap-3"
            id="2"
          >
            {selectedCard2 &&
              selectedCard2.shapes?.map((shape) => {
                return shape;
              })}
          </button>
          <button
            onClick={() => setSelectedCard3(shuffledCards.splice(-1)[0])}
            className="w-1/6 border border-blue-600 h-60 bg-white flex rounded-md shadow-2xl items-center justify-center gap-3"
            id="3"
          >
            {selectedCard3 &&
              selectedCard3.shapes?.map((shape) => {
                return shape;
              })}
          </button>
          <button
            onClick={() => setSelectedCard4(shuffledCards.splice(-1)[0])}
            className="w-1/6 border border-blue-600 h-60 bg-white flex rounded-md shadow-2xl items-center justify-center gap-3"
            id="4"
          >
            {selectedCard4 &&
              selectedCard4.shapes?.map((shape) => {
                return shape;
              })}
          </button>
        </div>
      </div>
      <div className="w-1/3 h-full bg-blue-700 text-white flex  overflow-auto justify-center relative items-center">
        {shuffledCards.map((card) => {
          return (
            <div
              onClick={() => handleClick(card)}
              className="w-1/3 border border-blue-600 h-60 bg-white flex absolute rounded-md items-center  justify-center gap-3"
            >
              {card.shapes}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
