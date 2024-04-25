import { useForm } from "react-hook-form";
import { useEffect } from "react";
import {toast} from "react-toastify"
import Error from "./Error";
import type { DraftPatient } from "../types"; 
import { usePatientStore } from "../store/store";


export default function Form() {
  const addPatient = usePatientStore(state => state.addPatient)
  const activeId = usePatientStore(state => state.activeId)
  const patients = usePatientStore(state => state.patients)
  const updatePatient = usePatientStore(state => state.updatePatient)

  const {register,handleSubmit, setValue, formState: { errors }, reset} = useForm<DraftPatient>()

  useEffect(() => {
    if(activeId){
      const activePatient = patients.filter(patient => patient.id === activeId)[0]
      console.log(activePatient)
        setValue('name', activePatient.name)
        setValue('caretaker', activePatient.caretaker)
        setValue('date', activePatient.date)
        setValue('email', activePatient.email)
        setValue('symptoms', activePatient.symptoms)
    }
  }, [activeId])

  const registerPacient = (data: DraftPatient) => {
    if(activeId){
      updatePatient(data)
      toast.success('Mascota editada correctamente')
    }else{
      addPatient(data);
      toast.success('Mascota registrada correctamente')
    }
    reset()
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Mascotas</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-emerald-700 font-bold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
        onSubmit={handleSubmit(registerPacient)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Nombre Mascota
          </label>
          <input
            id="name"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Ingresa el Nombre de la Mascota"
            {...register("name", {
              required: "El nombre del paciente es obligatorio",
            })}
          />
          {errors.name && <Error>{errors.name?.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="caretaker" className="text-sm uppercase font-bold">
            Propietario
          </label>
          <input
            id="caretaker"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Nombre del Propietario"
            {...register("caretaker", {
              required: "El nombre del dueñ@ es obligatorio",
            })}
          />
          {errors.caretaker && (
            <Error>{errors.caretaker?.message}</Error>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3  border border-gray-100"
            type="email"
            placeholder="Email de Registro"
            {...register("email", {
              required: "El Email es Obligatorio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email No Válido",
              },
            })}
          />
          {errors.email && <Error>{errors.email?.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Fecha Alta
          </label>
          <input
            id="date"
            className="w-full p-3  border border-gray-100"
            type="date"
            {...register("date", {
              required: "La Fecha de alta es obligatoria",
            })}
          />
          {errors.date && <Error>{errors.date?.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Síntomas
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3  border border-gray-100"
            placeholder="Síntomas del paciente"
            {...register("symptoms", {
              required: "Ingresar los sintomas es obligatorio",
            })}
          />
            {errors.symptoms && <Error>{errors.symptoms?.message}</Error>}
          
        </div>

        <input
          type="submit"
          className="bg-emerald-700 w-full p-3 text-white uppercase font-bold hover:bg-emerald-600 cursor-pointer transition-colors rounded-md"
          value="Guardar Paciente"
        />
      </form>
    </div>
  );
}
