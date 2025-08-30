import { UserContext } from '@/09-useContext/context/UserContext'
import { Button } from '@/components/ui/button'
import { useContext } from 'react'

export const ProfilePage = () => {

  const { user, logout } = useContext(UserContext);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1>Perfil de usuario</h1>
      <hr />

      <pre className='my-4 w-[80%]'>{ JSON.stringify(user, null, 2) }</pre>

      <Button variant="destructive" onClick={logout}>Salir</Button>
 
    </div>
  )
}
