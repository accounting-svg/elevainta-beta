type Props = {
  boardTrap: string
  memoryHook: string
}

export default function StrategyFeedback({
  boardTrap,
  memoryHook
}: Props) {
  return (
    <>
      <div className="board-trap-block">
        <h3>Board Trap</h3>
        <p>{boardTrap}</p>
      </div>

      <div className="memory-hook-block">
        <h3>Memory Hook</h3>
        <p>{memoryHook}</p>
      </div>
    </>
  )
}
