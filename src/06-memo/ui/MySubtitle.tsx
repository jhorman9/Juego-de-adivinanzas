import React from "react";

interface Props {
  subtitle: string;  

  callMyAPI: () => void;

}

  export const MySubtitle = React.memo(({ subtitle, callMyAPI }: Props) => {

    console.log('My subtitle Re-Render');

  return (
    <>
    <div className="text-2xl font-bold">{ subtitle } </div>

    <button className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer"
    onClick={() => callMyAPI()}>Llamar a funcion</button>
    </>
  )
})