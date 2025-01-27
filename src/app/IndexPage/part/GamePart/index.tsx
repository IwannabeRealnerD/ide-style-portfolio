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

        // Check wall collision
        if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE) {
          setIsGameOver(true);
          return currentSnake;
        }

        // Check collision with self
        if (currentSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
          setIsGameOver(true);
          return currentSnake;
        }

        const newSnake = [newHead, ...currentSnake];

        // Check if food is eaten
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
    <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: "16px", padding: "16px" }}>
      <div style={{ fontSize: "20px", fontWeight: "bold" }}>Score: {score}</div>
      <div
        style={{
          backgroundColor: "#f3f4f6",
          border: "2px solid #d1d5db",
          height: GRID_SIZE * CELL_SIZE,
          position: "relative",
          width: GRID_SIZE * CELL_SIZE,
        }}
      >
        {snake.map((segment) => (
          <div
            key={`${segment.x}-${segment.y}`}
            style={{
              backgroundColor: "#22c55e",
              height: CELL_SIZE - 2,
              left: segment.x * CELL_SIZE,
              position: "absolute",
              top: segment.y * CELL_SIZE,
              width: CELL_SIZE - 2,
            }}
          />
        ))}
        <div
          style={{
            backgroundColor: "#ef4444",
            height: CELL_SIZE - 2,
            left: food.x * CELL_SIZE,
            position: "absolute",
            top: food.y * CELL_SIZE,
            width: CELL_SIZE - 2,
          }}
        />
      </div>
      {isGameOver && (
        <div style={{ textAlign: "center" }}>
          <div style={{ color: "#ef4444", fontSize: "20px", fontWeight: "bold", marginBottom: "8px" }}>Game Over!</div>
          <button
            style={{
              backgroundColor: "#3b82f6",
              border: "none",
              borderRadius: "4px",
              color: "#ffffff",
              cursor: "pointer",
              padding: "8px 16px",
              transition: "background-color 0.2s",
            }}
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
