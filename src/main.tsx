import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { TrafficLightWithEffectWithHook } from './02-useEffect/TrafficLightWithEffectWithHook'
// import { HooksApp } from './HooksApp'
// import { PokemonPage } from './03-examples/PokemonPage'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { TasksApp } from './05-useReducer/TaskApp'
import { ScrambleWords } from './05-useReducer/reducer/ScrambleWords'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <TrafficLightWithEffectWithHook /> */}
    {/* <HooksApp /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp />     */}

    <ScrambleWords />
  </StrictMode>,
)
