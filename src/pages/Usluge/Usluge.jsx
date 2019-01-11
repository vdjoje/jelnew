import React from "react";
import { Element } from "react-scroll";

const Usluge = () => {
  return (
    <div className="usluge">
      <Element name="usluge">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
            // alignItems: "center"
            // flexBases: "1080px"
          }}
        >
          <p className="usluge--one">OD IDEJE</p>
          <p className="usluge--two">DO</p>
          <p className="usluge--three">REA LIZA CIJE</p>
        </div>
      </Element>
      <p className="usluge--naslov">Mogu Vam pomoći sa izradom</p>
      <div className="usluge--fullnav">
        <ul className="usluge--nav">
          <li>Idejnih rešenja</li>
          <li>Idejnih projekata</li>
          <li>
            Glavnih projekata <br />
            (za potrebe dobijanja građevinske dozvole)
          </li>
          <li>
            Projekata izvedenog objekta <br />
            (legalizacija obejekta)
          </li>
          <li>
            Projekata enterijera <br />
            (glavni, idejni)
          </li>
          <li>Kordinacija prilikom izrade projekata</li>
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: "10vw",

          width: "80vw",
          marginTop: "510px"
        }}
      >
        <p className="usluge--naslovtwo">
          Svi projekti se u potpunosti izrađuju po važećim propisima i zakonima
          i pokriveni su validnom licencom.
        </p>
        <div id="usluge--aktivnosti">
          <p className="usluge--podnas">
            Aktivnosti prilikom ugovaranja obuhvataju nekoliko faza:
          </p>
          <ul className="usluge--navtwo">
            <li>Definisanje projektnog zafatka</li>
            <li>Izdrada konceptualnog rešenja u varijantama</li>
            <li>Odabir varijante za dalju razradu</li>
            <li>Prezentovanje razrađene varijante - Idejno rešenje</li>
            <li>
              Korekcija i izrada detaljne tehnicke dokumentacije na nivou
              glavnog (Idejnog) projekta
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Usluge;
