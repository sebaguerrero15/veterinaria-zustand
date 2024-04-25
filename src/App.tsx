import {ToastContainer} from "react-toastify"
import Form from "./components/Form";
import PacientList from "./components/PacientList";
import "react-toastify/ReactToastify.css"


export default function App() {
  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">Seguimiento de Mascotas {''}
        <span className="text-emerald-700">Veterinaria</span>
        </h1>
      </div>

      <div className="mt-12 md:flex">
          <Form />
          <PacientList />
      </div>

      <ToastContainer theme="dark"/>
    </>
  )
}
