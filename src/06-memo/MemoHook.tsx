import { useCallback, useState } from "react"
import { MyTittle } from "./ui/MyTittle"
import { MySubtitle } from "./ui/MySubtitle";

export const MemoHook = () => {

  const [title, setTitle] = useState<string>('Hola');
  const [subtitle, setSubtitle] = useState<string>('Mundo');

  const handleMyAPICall = useCallback(() => {
    console.log('Llamar a mi API', subtitle)
  }, [subtitle])

  return (
    <div className="bg-gradient flex flex-col gap-4">

      <h1 className="text-2xl font-thin">MemoHook</h1>

      <MyTittle  title={title} />

      <MySubtitle subtitle={subtitle} callMyAPI={handleMyAPICall}/>

      <button className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
      onClick={() => setTitle("Hello")}>Cambiar titulo</button>


      <button className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
      onClick={() => setSubtitle('World')}>Cambiar subtitulo</button>
    </div>
  )
}
 