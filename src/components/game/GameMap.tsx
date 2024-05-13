const mapData = [
  [1, 1, 1, 1, 1],
  [1, 2, 2, 2, 1],
  [1, 2, 2, 2, 1],
  [1, 2, 2, 2, 1],
  [1, 1, 1, 1, 1],
];

const GameMap = () => {
  return (
    <div>
      {mapData.map((row, y) => (
        <div
          key={y}
          style={{
            display: "flex",
          }}
        >
          {row.map((cell, x) => (
            <div
              key={x}
              style={{
                width: 50,
                height: 50,
                backgroundColor: cell === 1 ? "black" : "white",
                border: "1px solid black",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameMap;
