import { Patient } from "../types"
import { usePatientStore } from "../store/store"
import { toast } from "react-toastify"

type PatientsDetailsProps = {
    patient: Patient
}

export default function PatientsDetails({patient}: PatientsDetailsProps) {

    const deletePatient = usePatientStore((state) => state.deletePatient)
    const getPatientById = usePatientStore((state) => state.getPatientById)

const handleClick = () => {
    deletePatient(patient.id)
    toast.success('Mascota eliminada correctamente')
}

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-sm rounded-xl">
        <p className="font-bold uppercase mb-3 text-gray-700"> ID: {''}
            <span className="font-normal normal-case">{patient.id}</span>
        </p>

        <p className="font-bold uppercase mb-3 text-gray-700"> Nombre: {''}
            <span className="font-normal normal-case">{patient.name}</span>
        </p>

        <p className="font-bold uppercase mb-3 text-gray-700"> Nombre Dueño/a: {''}
            <span className="font-normal normal-case">{patient.caretaker}</span>
        </p>

        <p className="font-bold uppercase mb-3 text-gray-700"> Correo: {''}
            <span className="font-normal normal-case">{patient.email}</span>
        </p>

        <p className="font-bold uppercase mb-3 text-gray-700"> Fecha de Alta: {''}
            <span className="font-normal normal-case">{patient.date.toString()}</span>
        </p>

        <p className="font-bold uppercase mb-3 text-gray-700"> Sintomas: {''}
            <span className="font-normal normal-case">{patient.symptoms}</span>
        </p>

        <div className="flex flex-col md:flex-row gap-3 justify-between mt-10">
            <button className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            onClick={()=> getPatientById(patient.id)}
            >
                Editar
            </button >

            <button 
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            onClick={handleClick}
            >
                Eliminar
            </button>
        </div>
    </div>
  )
}
