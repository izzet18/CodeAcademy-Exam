import { Route, Routes } from "react-router-dom"
import Services from "./components/services"
import Footer from "./layouts/footer"
import Header from "./layouts/header"
import AddService from "./pages/add-service"
import DetailPage from "./pages/detail-page"


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/:id" element={<DetailPage />} />
        <Route path="/add-services" element={<AddService />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
