import { UserContext } from '@/09-useContext/context/UserContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { toast } from 'sonner'

export const LoginPage = () => {

  const { login } = useContext(UserContext);
  const [userId, setUserId] = useState<string>('');

  const navigation = useNavigate();

  const handleSubmit= (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = login(+userId);

    if(!result ){
      toast('Usuario no encontrado', {  position: 'top-right', style:{color: 'red'}  });
      return;
    }

    navigation('/profile');

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className='text-4xl font-bold'>Iniciar Sesión</h1>
      <hr />

      <form action="" className='flex flex-col gap-2 my-10' onSubmit={handleSubmit}>
        <Input 
          type='number'
          placeholder='ID de usuario'
          value={ userId }
          onChange={event => setUserId(event.target.value)}
        />

        <Button type='submit'>Login</Button>
      </form>

        <Link to='/about'>
          <Button variant="ghost"> Volver a la página principal </Button>
        </Link>

    </div>
  )
}
