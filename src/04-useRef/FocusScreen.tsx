import { useRef } from "react"

export const FocusScreen = () => {

  const inputRef = useRef<HTMLInputElement>(null);


  const onClick = (): void => {
    console.log(inputRef.current?.value);
    inputRef.current?.select();
  }

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-wgite">Focus Screen</h1>

      <input 
        ref={inputRef}
        type="text"
        className="bg-white text-black px-4 py-2 rounded-md" 
        autoFocus
      />

      <button
        className="bg-blue-500 text-wgite px-4 py-2 rounded-md cursor-pointer"
        onClick={onClick}
      >
        Set focus
      </button>
    </div>
  )
}
