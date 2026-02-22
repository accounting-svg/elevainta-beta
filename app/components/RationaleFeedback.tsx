type Choice = {
  key: string
  text: string
}

type Props = {
  correctAnswer: string
  rationale: string
  boardTrap?: string
  memoryHook?: string
  choices: Choice[]
  incorrectRationales: Record<string, string>
}

export default function RationaleFeedback({
  correctAnswer,
  rationale,
  boardTrap,
  memoryHook,
  choices,
  incorrectRationales
}: Props) {
  return (
    <>
      {/* Correct Answer Block */}
      <div className="correct-block">
        <h3>Correct Answer: {correctAnswer}</h3>
        <p>
          <strong>Rationale:</strong> {rationale}
        </p>
      </div>

     

      {/* Incorrect Answers */}
      <h4>Why the other answers are incorrect</h4>

      <ul>
        {choices
          .filter(choice => choice.key !== correctAnswer)
          .map(choice => (
            <li key={choice.key} style={{ marginBottom: 10 }}>
              <strong>{choice.key}.</strong>{" "}
              {incorrectRationales[choice.key]}
            </li>
          ))}
      </ul>
    </>
  )
}
