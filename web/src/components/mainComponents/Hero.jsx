// import React from 'react'

import { useState } from "react";

function Hero() {
  const [season, setSeason] = useState("");

  const handleSelectSeason = (ev) => {
    const actualSeason = ev.target.value;
    setSeason(actualSeason);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <div>
      <section className="hero">
        <div className="formDisplay">
          <form className="mainSectionForm" onSubmit={handleSubmit}>
            {/* <label htmlFor="">
              <input
                type="search"
                name="q"
                placeholder="Nombre planta"
                className="plantInput"
              />
              <input type="submit" value="Buscar" className="plantInput" />
            </label> */}

            <label className="seasonInput" htmlFor="season">
              En que estación del año nos visitas
            </label>
            <select
              id="season"
              name="select"
              className="seasonInput"
              value={season}
              onChange={handleSelectSeason}
            >
              <option value="">elige estacion</option>
              <option value="summer">verano</option>
              <option value="autumn">otoño</option>
              <option value="winter">invierno</option>
              <option value="spring">primavera</option>
            </select>
          </form>

          <div>
            <p
              className={`summer seasonTips ${
                season === "summer" ? "" : "hidden"
              }`}
            >
              En verano, puedes disfrutar de rutas a través de bosques
              sombreados, donde la exuberante vegetación proporciona un ambiente
              fresco y agradable. Además, puedes explorar las numerosas zonas de
              baño, como piscinas fluviales naturales, para refrescarte con agua
              fresca durante los meses más cálidos del año. Estas piscinas
              suelen estar ubicadas en entornos naturales, como ríos o arroyos,
              ofreciendo un lugar tranquilo y hermoso para disfrutar del agua y
              escapar del calor del verano.
            </p>
            <p
              className={`autumn seasonTips ${
                season === "autumn" ? "" : "hidden"
              }`}
            >
              En otoño, puedes disfrutar de apacibles paseos por bosques donde
              crecen numerosas setas. Sin embargo, es importante recordar que,
              para recolectar setas, es necesario contar con un carnet de
              recolector. Además, el clima fresco y agradable hace que sea una
              temporada ideal para explorar las diversas rutas en bicicleta, ya
              que las temperaturas son más suaves y no hace tanto calor como en
              verano. Así, podrás sumergirte en la belleza de los paisajes
              otoñales mientras realizas emocionantes paseos en bici por la
              naturaleza.
            </p>
            <p
              className={`winter seasonTips ${
                season === "winter" ? "" : "hidden"
              }`}
            >
              En invierno, podrás disfrutar de emocionantes rutas por las partes
              más altas de las montañas. En estas zonas, encontrarás ecosistemas
              con vegetación baja donde los rayos del sol alcanzan con mayor
              intensidad, brindándote un cálido respiro en medio del fresco
              clima invernal. Además, esta temporada es ideal para la
              observación de los voladeros de buitres, ya que su actividad suele
              ser más intensa durante el invierno. Así, podrás maravillarte con
              la majestuosidad de estas aves mientras exploras los paisajes
              montañosos y disfrutas de la naturaleza invernal.
            </p>

            <p
              className={`spring seasonTips ${
                season === "spring" ? "" : "hidden"
              }`}
            >
              En primavera, la naturaleza se despierta con renovada vitalidad.
              Los bosques se llenan de vida, y podrás experimentar el renacer de
              la vegetación. El sonido del agua corriendo por arroyos junto con
              el canto de los pájaros, añaden una melodía relajante al ambiente.
              Disfrutarás de paseos que te llevarán a través de diversos
              ecosistemas, donde los tonos de verde se despliegan en cada
              rincón. Las temperaturas agradables hacen que los mediodías sean
              perfectos para caminar bajo el cálido sol sin sentirte abrasado,
              permitiéndote conectar con la belleza de la naturaleza en su
              máximo esplendor primaveral.
            </p>
          </div>
        </div>

        <p className="intro">
          Su importancia vegetal radica principalmente en la existencia de
          forests galaico-portugueses de roble rebollo y roble carballo (en cuyo
          sotosbosque crecen acebos, serbales y arce menor) y los castaños, que
          constituyen una población de gran valor por su adaptación al clima de
          la zona pues sólo se encuentran en zonas bastante húmedas durante todo
          el año. Entre otros ecosistemas con los que cuenta se podrían destacar
          los brezales secos europeos y mediterráneos endémicos con aliaga, las
          zonas subestépicas de gramíneas y anuales del Thero-Brachypodietea,
          encinares de Quercus ilex y Quercus rotundifolia, los forests de
          Castanea sativa, los alcornocales de Quercus suber y los pinares
          mediterráneos de Pinus pinaster y Pinus sylvestris. Además aparecen
          grandes áreas cultivadas de árboles frutales, viñedos y olivares,
          entre los que destacan por su extensión los cultivos de cerezo, base
          económica de muchos pueblos de la sierra.En las cumbres más altas del
          parque natural la vegetación se adapta al clima de montaña, dominando
          el piorno y el erizón entre pastos pastoriles. Es el único lugar de la
          región biogeográfica mediterránea española en la que se ha encontrado
          el briofito Bruchia vogesiaca.
        </p>
      </section>
    </div>
  );
}

export default Hero;
