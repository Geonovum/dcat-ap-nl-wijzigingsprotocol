var documentConfig = {
  title: "Wijzigingsprotocol DCAT-AP-NL",
  specStatus: "vv",                   // Werkversie
  specType: "HR",                     // HandReiking
  pubDomain: "dcat",
  license: "cc-by",                 // Attribution, met bronvermelding
  shortName: "dcat-ap-nl-wijzigingsprotocol",
  
  editors:
    [
      {
      name: "Ine de Visser",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl/"
    },
    {
      name: "Niels Hoffmann",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl/"
    }
    ],
  //-- de namen van de auteur(s) ------------------------------------------------------
  //-- vul in: per auteur: name:, company:, companyURL: -------------------------------
  authors:
    [
      {
      name: "Ine de Visser",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl/"
    },
    {
      name: "Niels Hoffmann",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl/"
    }
    ],
  // TODO: Vul de github URL in.
  //neem hier de URL van de github repository op waar het respec document in staat
  github: "https://github.com/Geonovum/dcat-ap-nl-wijzigingsprotocol",
  labelColor: {
        def: "#045D9F",
        wv: "#FF0000",
        cv: "#045D9F",
        vv: "#045D9F",
        basis: "#80CC28",
    },
   // Lokale lijst voor bibliografie
  // - Kijk eerst naar de beschikbare www.specref.org .
  // - Kijk daarna in de organisatieconfig.
  // - Voeg dan pas hieronder toe.
  localBiblio: 
  {
    MIM12: {
      id: "MIM12",
      title: "MIM - Metamodel Informatie Modellering (Versie 1.2)",
      href: "https://docs.geostandaarden.nl/mim/def-st-mim-20240613/",
      status: "Definitief",
      publisher: "Geonovum",
      date: "2024-06-13"
    }
  }
};
