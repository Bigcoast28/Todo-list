import React from "react";

function TableListTache({ listeTache }) {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="border-b dark:border-gray-300 text-left px-4 py-4">
              Id
            </th>
            <th className="border-b dark:border-gray-300 text-left px-4 py-4">
              Tache
            </th>
            <th className="border-b dark:border-gray-300 text-left px-4 py-4">
              Date debut
            </th>
            <th className="border-b dark:border-gray-300 text-left px-4 py-4">
              Deadline
            </th>
            <th className="border-b dark:border-gray-300 text-left px-4 py-4">
              Statut
            </th>
            <th className="border-b dark:border-gray-300 text-left px-4 py-4">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {listeTache && listeTache.length > 0 ? (
            <>
              {listeTache?.map((tache) => (
                <tr key={tache?.id}> 
                  <td className="border-b dark:border-gray-300 px-4 py-4">
                    {tache?.id}
                  </td>
                  <td className="border-b dark:border-gray-300 px-4 py-4">
                    {tache?.nom}
                  </td>
                  <td className="border-b dark:border-gray-300 px-4 py-4">
                    {new Date (tache?.dateDebut)?.toLocaleDateString("fr")} 
                  </td>
                  <td className="border-b dark:border-gray-300 px-4 py-4">
                    {new Date (tache?.deadline)?.toLocaleDateString("fr")}
                  </td>
                  <td className="border-b dark:border-gray-300 px-4 py-4">
                    {tache?.statut}
                  </td>
                  <td className="border-b dark:border-gray-300 px-4 py-4">
                    <div className="flex items-center space-x-4">
                      <button className="btn btn-info">Modifier</button>
                      <button className="btn btn-error">Supprimer</button>
                    </div>
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <tr>
              <td colSpan="6" className="text-center text-3xl font-bold py-10">
                Vous n'avez aucune tache pour le moment
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableListTache;
