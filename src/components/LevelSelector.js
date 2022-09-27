export const DIFFICULTY_LEVELS = {
  BEGINNER: { level: "BEGINNER", boardWidth: 8, boardHeight: 8, numberOfMines: 10 },
  INTERMEDIATE: { level: "INTERMEDIATE", boardWidth: 16, boardHeight: 16, numberOfMines: 40 },
  EXPERT: { level: "EXPERT", boardWidth: 30, boardHeight: 16, numberOfMines: 99 },
};

export default function LevelSelector({ selectedLevel, setSelectedLevel }) {
  return (
    <div className="board-type">
      {Object.values(DIFFICULTY_LEVELS).map(({ level }) => (
        <button
          onClick={() => setSelectedLevel(level)}
          className={selectedLevel === level ? "selected-level" : ""}
        >
          {level}
        </button>
      ))}
    </div>
  );
}
