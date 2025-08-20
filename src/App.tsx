import { Link, Outlet } from "react-router-dom"


function App() {
  
  return (
    <>
      <nav className="flex gap-4 p-4 border-b bg-white">
        <Link className="text-blue-600 hover:text-blue-800 hover:underline" to="/">Home</Link>
        <Link className="text-blue-600 hover:text-blue-800 hover:underline" to="/about">About</Link>
        <Link className="text-blue-600 hover:text-blue-800 hover:underline" to="/welcome">Welcome</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default App
