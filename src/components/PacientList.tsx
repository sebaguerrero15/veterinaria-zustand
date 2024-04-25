import { usePatientStore } from "../store/store"
import PatientsDetails from "./PatientsDetails"

export default function PacientList() {

  const patients = usePatientStore(state => state.patients)

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de Mascotas</h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-emerald-700 font-bold">Mascotas y Citas</span>
          </p>
          {patients.map(patient => (
            <PatientsDetails key={patient.id} patient={patient} />
          ))}
        </>
      ): (
        <>
          <h2 className="font-black text-3xl text-center">No hay Mascotas Ingresadas</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza Agregando Mascotas {''}
            <span className="text-emerald-700 font-bold">
              y apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  )
}
