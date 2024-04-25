

export default function Error({children}: {children: React.ReactNode}) {
  return (
    <p className="bg-red-700 my-4 text-center text-white font-bold uppercase p-3 text-sm">{children}</p>
  )
}
