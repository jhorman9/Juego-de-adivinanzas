import { RouterProvider } from "react-router"
import { appRouter } from "./pages/router/app.router"
import { UserContextProvider } from "./context/UserContext"
import { Toaster } from "sonner"

export const ProfesionalApp = () => {
  return (
    <UserContextProvider>
      <div className="bg-gradient flex flex-col gap-4">
        <RouterProvider router={appRouter} />
        <Toaster />
      </div>
    </UserContextProvider>
  )
}
