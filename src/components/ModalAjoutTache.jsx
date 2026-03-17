import React, { use, useState } from "react";

function ModalAjoutTache({ listeTache, setListeTache }) {

    const [load, setLoad] = useState(false)
    const [tache, setTache] = useState("")
    const [dateDebut, setDateDebut] = useState("")
    const [deadline, setDeadline] = useState("")

    const ajoutTache = async (e) => {
        try {
            e.preventDefault()
            setLoad(true)

            if (tache === "" && dateDebut === "" && deadline === "") {
                alert("Veuillez remplir tous les champs")
                return;
            }



            
        setTimeout(() => {
            console.log("Tache ajoutée")
            setLoad(false)
        }, 2000);
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <dialog id="ajout-modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Ajouter une tache</h3>
        <form className="flex flex-col gap-4 mt-5" onSubmit={(e) => ajoutTache(e)}>
          <input required onChange={(e) => setTache(e.target.value)}
            type="text"
            placeholder="Nom de la tache"
            className="input w-full"
          />
          <input required onChange={(e) => setDateDebut(e.target.value)}
            type="date"
            placeholder="Date de debut"
            className="input w-full"
          />
          <input required onChange={(e) => setDeadline(e.target.value)}
            type="date"
            placeholder="Deadline"
            className="input w-full"
          />
          {/* <select className="select select-bordered w-full">
                    <option disabled selected>Statut</option>
                    <option value="en attente">En attente</option>
                    <option value="en cours">En cours</option>
                    <option value="terminee">Terminee</option>
                </select> */}
                <div className="flex flex-end items-center gap-3 mt-5">
          <button disabled={load} type="submit" className="btn btn-primary">
            {load ? (<div>
                <span className="loading loading-spinner loading-sm"></span>
            </div>) : "Ajouter"}
          </button>
          <div className="modal-action m-0">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => document.getElementById("ajout-modal")?.close()}
            >
              Fermer
            </button>
          </div>
        </div>
        </form>
        
      </div>
    </dialog>
  );
}

export default ModalAjoutTache
