import React from "react";

interface Props {
  title: string;
}

export const MyTittle = React.memo(({ title }: Props) => {

  console.log('My title Re-Render');

  return (
    <h1 className="text-3xl">{ title }</h1>
  )
});
