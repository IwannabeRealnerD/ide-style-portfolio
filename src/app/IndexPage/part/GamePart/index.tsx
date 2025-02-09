import { useState, useEffect, useCallback } from "react";

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const INITIAL_FOOD = { x: 15, y: 15 };

export const SnakeGame = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
    return newFood;
  }, []);

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    },
    [direction]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  useEffect(() => {
    if (isGameOver) return undefined;
    const gameLoop = setInterval(() => {
      setSnake((currentSnake) => {
        const head = currentSnake[0];
        const newHead = {
          x: head.x + direction.x,
          y: head.y + direction.y,
        };

        if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE) {
          setIsGameOver(true);
          return currentSnake;
        }

        if (currentSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
          setIsGameOver(true);
          return currentSnake;
        }

        const newSnake = [newHead, ...currentSnake];

        if (newHead.x === food.x && newHead.y === food.y) {
          setFood(generateFood());
          setScore((s) => s + 1);
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 150);

    return () => {
      clearInterval(gameLoop);
    };
  }, [direction, food, isGameOver, generateFood]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(INITIAL_FOOD);
    setIsGameOver(false);
    setScore(0);
  };

  return (
    <div>
      <div>Score: {score}</div>
      <div
        className="relative border-2 border-gray-300 bg-[#ffffff]"
        style={{
          height: GRID_SIZE * CELL_SIZE,
          width: GRID_SIZE * CELL_SIZE,
        }}
      >
        {snake.map((segment) => (
          <div
            key={`${segment.x}-${segment.y}`}
            className="absolute bg-[green]"
            style={{
              height: CELL_SIZE - 2,
              left: segment.x * CELL_SIZE,
              top: segment.y * CELL_SIZE,
              width: CELL_SIZE - 2,
            }}
          />
        ))}
        <div
          className="absolute bg-[red]"
          style={{
            height: CELL_SIZE - 2,
            left: food.x * CELL_SIZE,
            top: food.y * CELL_SIZE,
            width: CELL_SIZE - 2,
          }}
        />
      </div>
      {isGameOver && (
        <div className="text-center">
          <div className="mb-2 text-xl font-bold text-red-500">Game Over!</div>
          <button
            className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
            type="button"
            onClick={resetGame}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};
