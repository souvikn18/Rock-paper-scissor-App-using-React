import { Outlet } from "react-router-dom"
import "./App.css"
import Footer from "./Components/Footer"

const App = () => {
  return(
    <>
      <div className="">
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}
export default App