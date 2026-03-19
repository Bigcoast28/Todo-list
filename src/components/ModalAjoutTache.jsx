import axios from "axios";
import React, { use, useState } from "react";
import { useRef } from "react";

function ModalAjoutTache({ listeTache, setListeTache, serverUrl }) {
  const [load, setLoad] = useState(false)
  const [tache, setTache] = useState("")
  const [dateDebut, setDateDebut] = useState("")
  const [deadline, setDeadline] = useState("")

  // on cree une reference pour le formulaire d'ajout de tache pour pouvoir le reset après l'ajout d'une tache
  const formRef = useRef(null)

  const ajoutTache = async (e) => {
    try {
      e.preventDefault();
      setLoad(true);

      // Pour la securité au niveau Front-End, on vérifie que les champs ne sont pas vides
      if (tache === "" && dateDebut === "" && deadline === "") {
        alert("Veuillez remplir tous les champs");
        return;
      }

      // on envoie les donnees au backend pour les stocker dans la base de données
        const req = await axios.post(`${serverUrl}/ListeTaches`, {
          nom: tache,
          dateDebut: dateDebut,
          deadline: deadline,
          statut: "en attente",
      });


      const reponse = req?.data || {}
      // on met a jour la liste des taches dans le state pour que la nouvelle tache s'affiche dans le tableau sans recharger la page
      setListeTache([...listeTache, reponse])

      // on vide les champs du formulaire
      setTache("")
      setDateDebut("")
      setDeadline("")

      // on reset le formulaire
      formRef.current?.reset()

      // on ferme le modal 
      document.getElementById("closemodal")?.click() 

      setTimeout(() => {
        console.log("Tache ajoutée");
        setLoad(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false)
    }
  };

  return (
    <dialog id="ajout-modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Ajouter une tache</h3>
        <form ref={formRef}
          className="flex flex-col gap-4 mt-5"
          onSubmit={(e) => ajoutTache(e)}
        >
          <input
            required
            onChange={(e) => setTache(e.target.value)}
            type="text"
            placeholder="Nom de la tache"
            className="input w-full"
          />
          <input
            required
            onChange={(e) => setDateDebut(e.target.value)}
            type="date"
            placeholder="Date de debut"
            className="input w-full"
          />
          <input
            required
            onChange={(e) => setDeadline(e.target.value)}
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
              {load ? (
                <div>
                  <span className="loading loading-spinner loading-sm"></span>
                </div>
              ) : (
                "Ajouter"
              )}
            </button>
            <div className="modal-action m-0">
              <button id="closemodal"
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

export default ModalAjoutTache;
