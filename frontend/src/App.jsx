import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandPage from "./components/landPage"

function App() {
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<LandPage/>} />
</Routes>
</BrowserRouter>  )
}

export default App
