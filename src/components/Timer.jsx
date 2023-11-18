const Timer = ({ time }) => {
  const miliSec = Math.floor((time / 10) % 100);
  const sec = Math.floor((time / 1000) % 60);
  const min = Math.floor((time / 60000) % 60);
  return (
    <div className='text-white my-12 mx-0 w-full flex h-[15%] items-center justify-center font-bold text-[3rem]'>
      <span>
        {min.toString().padStart(2, "0")}:
      </span>
      <span>
        {sec.toString().padStart(2, "0")}:
      </span>
      <span className="text-[#ff2424]">
        {miliSec.toString().padStart(2, "0")}
      </span>
    </div>
  )
}

export default Timer