import { GET_FLUX } from "../actions/types";

const initialState = {
  flux: {
    dataImport: [
      {
        id: 1,
        flux: "BCP201905161620_import.zip",
        statut: "OK",
        reception: "10/04/2019 08:32",
        traitement: "10/04/2019 08:45",
        nbrLignes: 1250,
        creation: 50,
        maj: 1200,
        erreur: 0,
        typeCompagne: "OptOut",
        nbrCfnCrees: 50
      },
      {
        id: 2,
        flux: "MMP201905161620_import.zip",
        statut: "WARNING",
        reception: "10/04/2019 08:32",
        traitement: "10/04/2019 08:45",
        nbrLignes: 1113,
        creation: 10,
        maj: 1100,
        erreur: 3,
        typeCompagne: "OptOut",
        nbrCfnCrees: 10
      },
      {
        id: 3,
        flux: "MTA201905161620_import.zip",
        statut: "KO",
        reception: "10/04/2019 08:32",
        traitement: "10/04/2019 08:45",
        nbrLignes: 930,
        creation: 0,
        maj: 0,
        erreur: 930,
        typeCompagne: "OptIn",
        nbrCfnCrees: 0
      }
    ],
    dataResiliation: [
      {
        id: 1,
        flux: "BCP201905161620_resiliation.zip",
        statut: "OK",
        reception: "10/04/2019 08:32",
        traitement: "10/04/2019 08:45",
        nbrLignes: 50,
        resilies: 50,
        statutIncompatible: 0,
        erreur: 0
      },
      {
        id: 2,
        flux: "MMP201905161620_resiliation.zip",
        statut: "WARNING",
        reception: "10/04/2019 08:32",
        traitement: "10/04/2019 08:45",
        nbrLignes: 70,
        resilies: 50,
        statutIncompatible: 17,
        erreur: 3
      },
      {
        id: 3,
        flux: "MTA201905161620_import.zip",
        statut: "KO",
        reception: "10/04/2019 08:32",
        traitement: "10/04/2019 08:45",
        nbrLignes: 930,
        resilies: 0,
        statutIncompatible: 0,
        erreur: 930
      }
    ],
    dataBpAd: [
      {
        id: 1,
        flux: "BCP201905161620_bp.zip",
        statut: "OK",
        reception: "10/04/2019 08:32",
        traitement: "10/04/2019 08:45",
        nbr_doc_a_traiter: 1250,
        nbr_doc_ko: 0,
        digipost_nbr_doc: 1200,
        digipost_nb_af: 1200,
        digipost_date_depot: "10/04/2019 08:45",
        editique_nbr_doc: 50,
        editique_nb_af: 50,
        editique_date_depot: "10/04/2019 08:45",
        archivage_nb_doc: 1250,
        archivage_date_depot: "10/04/2019 08:45"
      },
      {
        id: 2,
        flux: "MMP201905161615_bp.zip",
        statut: "WARNING",
        reception: "10/04/2019 09:00",
        traitement: "10/04/2019 08:45",
        nbr_doc_a_traiter: 1113,
        nbr_doc_ko: 13,
        digipost_nbr_doc: 1100,
        digipost_nb_af: 0,
        digipost_date_depot: "10/04/2019 10:45",
        editique_nbr_doc: 3,
        editique_nb_af: 0,
        editique_date_depot: "10/04/2019 10:45",
        archivage_nb_doc: 0,
        archivage_date_depot: ""
      },
      {
        id: 3,
        flux: "MTA201905161620_bp.zip",
        statut: "KO",
        reception: "10/04/2019 16:32",
        traitement: "10/04/2019 16:45",
        nbr_doc_a_traiter: 950,
        nbr_doc_ko: 950,
        digipost_nbr_doc: 0,
        digipost_nb_af: 0,
        digipost_date_depot: "",
        editique_nbr_doc: 0,
        editique_nb_af: 0,
        editique_date_depot: "",
        archivage_nb_doc: 0,
        archivage_date_depot: ""
      }
    ]
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FLUX:
      return {
        ...state
      };
    default:
      return state;
  }
}
