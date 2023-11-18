const ControlButtons = ({isActive, isPaused, handlePauseResume, handleReset, handleStart}) => {
  const StartButton = (
    <div className="btn bg-[#e42a2a]"
      onClick={handleStart}
    >
      Start
    </div>
  );
  const ActiveButtons = (
      <div className="flex gap-8">
          <div className="btn bg-[#555]"
            onClick={handleReset}
          >
            Reset
          </div>
          <div className="btn bg-[#e42a2a]"
            onClick={handlePauseResume}
          >
            {isPaused ? "Resume" : "Pause"}
          </div>
      </div>
  );

  return (
    <div className="w-full flex items-center justify-center">
            <div>{isActive ? ActiveButtons : StartButton}</div>
        </div>
  )
}

export default ControlButtons