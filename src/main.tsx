import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { TrafficLightWithEffectWithHook } from './02-useEffect/TrafficLightWithEffectWithHook'
// import { HooksApp } from './HooksApp'
// import { PokemonPage } from './03-examples/PokemonPage'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { TasksApp } from './05-useReducer/TaskApp'
// import { ScrambleWordsReducer } from './05-useReducer/reducer/ScrambleWordsReducer'
// import { MemoHook } from './06-memo/MemoHook'
//import { MemoCounter } from './06-memo/MemoCounter'
// import { InstagromApp } from './07-useOptimistic/InstagromApp'
// import { ClientInformation } from './08-use-suspense/ClientInformation'
// import { getUserAction } from './08-use-suspense/api/get-user.action'
// import { ProfesionalApp } from './09-useContext/ProfesionalApp'
import './index.css'
import { TasksApp } from './05-useReducer/TaskApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <TrafficLightWithEffectWithHook /> */}
    {/* <HooksApp /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    <TasksApp />    
    {/* <ScrambleWordsReducer /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}

    {/* <Suspense fallback={
      <div className='bg-gradient flex flex-col'>
        <h1 className='text-2xl'>Cargando...</h1>
      </div>
     }>
      <ClientInformation getUser={ getUserAction(100) } />
    </Suspense> */}

  {/* <ProfesionalApp /> */}
  </StrictMode>,
)
