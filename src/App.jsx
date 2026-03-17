import { useEffect, useState } from "react"
import TableListTache from "./components/TableListTache"
import axios from "axios"
import ModalAjoutTache from "./components/ModalAjoutTache"


function App() {

  const [listeTache, setListeTache] = useState([])
  const serverUrl = import.meta.env.VITE_SERVER_URL || ""


  // Recuperation de la liste des taches de la db
  const recupTaches = async () => {
    try {
      const req = await axios.get(`${serverUrl}/ListeTaches`)
      const response = req?.data || []
      setListeTache(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    recupTaches()
  }, [])



  return (
    <div className="px-20 py-10">
      <h1 className="text-5xl font-bold mb-10">Atelier Todo List</h1>
      <div className="flex justify-end mb-5">
        <button className="btn btn-primary" onClick={() => document.getElementById('ajout-modal')?.showModal()}>Ajouter une tache</button>
      </div>
      <TableListTache listeTache={listeTache} />
      <ModalAjoutTache listeTache={listeTache} setListeTache={setListeTache} />
    </div>
  )
}

export default App
