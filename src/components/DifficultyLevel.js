export const LEVELS = {
  BEGINNER: "BEGINNER",
  INTERMEDIATE: "INTERMEDIATE",
  EXPERT: "EXPERT",
};

export default function DifficultyLevel({ selectedLevel, setSelectedLevel }) {
  return (
    <div className="board-type">
      {Object.values(LEVELS).map((level) => (
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
