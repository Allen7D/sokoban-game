import useStore, { TileMap } from "@/store";
import floorImg from "@/assets/floor.png";
import wallImg from "@/assets/wall.png";

const GameMap = () => {
  const mapData = useStore((state) => state.mapData);

  return (
    <div>
      {mapData.map((row, y) => (
        <div
          key={y}
          style={{
            display: "flex",
          }}
        >
          {row.map((cell, x) => {
            if (cell === TileMap.Wall) {
              return (
                <img
                  key={x}
                  src={wallImg}
                  style={{
                    width: 50,
                    height: 50,
                  }}
                />
              );
            } else if (cell === TileMap.FLOOR) {
              return (
                <img
                  key={x}
                  src={floorImg}
                  style={{
                    width: 50,
                    height: 50,
                  }}
                />
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default GameMap;
