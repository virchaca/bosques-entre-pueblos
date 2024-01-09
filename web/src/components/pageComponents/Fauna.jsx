import { Link } from "react-router-dom";
import { useState } from "react";

const Fauna = () => {
  const [showAves, setShowAves] = useState(true);
  const [showMamiferos, setShowMamiferos] = useState(false);
  const [showAnfibios, setShowAnfibios] = useState(true);
  
const handleClickAves = () => { 
    setShowAves(!showAves);  
}

const handleClickMamiferos = () => {
setShowMamiferos(!showMamiferos);
}

const handleClickAnfibios = () => {
  setShowAnfibios(!showAnfibios);  
}

  return (
    <>
      <Link to="/" className="backToMain">
        <i className="fa-solid fa-left-long"></i> Back
      </Link>

      <div className="faunaSection" id="faunaSection">
        <h1 className="faunaTitle" id="faunaTitle"> Algunos animales de la sierra de Francia</h1>
        <p className="faunaExplanation">Haz click en los botones para mostrar/ocultar las diferentes especies:</p>
        
        <button className="faunaTableTitle" onClick={handleClickMamiferos}>-Mamíferos-</button> 

        <button className="faunaTableTitle" onClick={handleClickAnfibios}>-Anfibios y Reptiles-</button>   

        <button className="faunaTableTitle" onClick={handleClickAves}>-Aves-</button>

        <table className={`${showMamiferos ? 'hidden' : ''} tableFauna`}  border="1">
          <span>MAMIFEROS</span>
          <tr>
            <th>Nombre Científico</th>
            <th>Nombre Común</th>
            <th>Nombre Científico</th>
            <th>Nombre Común</th>
            <th>Nombre Científico</th>
            <th>Nombre Común</th>
          </tr>
          <tr>
            <td>Murciélago de cueva</td>
            <td>Miniopterus schreibersii</td>
            <td>Ratón de campo</td>
            <td>Apodemus sylvaticus</td>
            <td>Lirón careto</td>
            <td>Eliomys gliridae</td>
          </tr>
          <tr>
            <td>Murciélago gran.herradura</td>
            <td>Rhinolophus ferrumequinum</td>
            <td>Nutria</td>
            <td>Lutra lutra</td>
            <td>Topillo de cabrera</td>
            <td>Microtus cabrerae</td>
          </tr>
          <tr>
            <td>Murciélago peq. herradura</td>
            <td>Rhinolophus hipposideros</td>
            <td>Corzo</td>
            <td>Capreolus capreolus</td>
            <td>Jabalí</td>
            <td>Sus scrofa</td>
          </tr>
          <tr>
            <td>Ciervo</td>
            <td>Cervus elaphus</td>
            <td>Liebre ibérica</td>
            <td>Lepus granatensis</td>
            <td>Conejo</td>
            <td>Oryctolagus cuniculus</td>
          </tr>
          <tr>
            <td>Zorro</td>
            <td>Vulpes vulpes</td>
            <td>Comadreja</td>
            <td>Mustela nivalis</td>
            <td>Garduña</td>
            <td>Martes foina</td>
          </tr>
          <tr>
            <td>Gineta</td>
            <td>Genetta genetta</td>
            <td>Turón</td>
            <td>Mustela putorius</td>
            <td>Cabra montés</td>
            <td>Capra pyrenaica</td>
          </tr>
          <tr>
            <td>Erizo europeo</td>
            <td>Erinaceus europaeus</td>
            <td>Topo ibérico</td>
            <td>Talpa occidentalis</td>
            <td>Musaraña gris</td>
            <td>Crocidura russula</td>
          </tr>
          <tr>
            <td>Tejón</td>
            <td>Meles meles</td>
          </tr>
        </table>  
       
        {/* <button className="faunaTableTitle" onClick={handleClickAnfibios}>Anfibios y Reptiles de la sierra de Francia</button>     */}
        <table className={`${showAnfibios ? 'hidden' : ''}  tableFauna`}  border="1">
        <span>ANFIBIOS Y REPTILES</span>
          <tr>
            <th>Nombre Científico</th>
            <th>Nombre Común</th>
            <th>Nombre Científico</th>
            <th>Nombre Común</th>
            <th>Nombre Científico</th>
            <th>Nombre Común</th>
          </tr>
          <tr>
            <td>Gallipato</td>
            <td>Pleurodeles waltl</td>
            <td>Salamandra común</td>
            <td>Salamandra salamandra</td>
            <td>Tritón ibérico</td>
            <td>Lissotriton boscai</td>
          </tr>
          <tr>
            <td>Tritón jaspeado</td>
            <td>Triturus marmoratus</td>
            <td>Sapo partero ibérico</td>
            <td>Alytes dickhilleni</td>
            <td>Sapo de espuelas</td>
            <td>Pelobates cultripes</td>
          </tr>
          <tr>
            <td>Sapo común, escuerzo</td>
            <td>Bufo bufo</td>
            <td>Sapo corredor</td>
            <td>Epidalea calamita</td>
            <td>Ranita de San Antonio</td>
            <td>Hyla arborea</td>
          </tr>
          <tr>
            <td>Rana verde o común</td>
            <td>Pelophylax perezi</td>
            <td>Galápago europeo</td>
            <td>Emys orbicularis</td>
            <td>Galápago leproso</td>
            <td>Mauremys leprosa</td>
          </tr>
          <tr>
            <td>Culebrilla ciega</td>
            <td>Blanus cinereus</td>
            <td>Salamanquesa común</td>
            <td>Tarentola mauritanica</td>
            <td>Lagarto ocelado</td>
            <td>Timon lepidus</td>
          </tr>
          <tr>
            <td>Lagartija colilarga</td>
            <td>Psammodromus algirus</td>
            <td>Lagartija cenicienta</td>
            <td>Psammodromus hispanicus</td>
            <td>Lagartija ibérica</td>
            <td>Podarcis hispanicus</td>
          </tr>
          <tr>
            <td>Culebra lisa meridional</td>
            <td>Coronella girondica</td>
            <td>Culebra de escalera</td>
            <td>Zamenis scalaris</td>
            <td>Culebra bastarda</td>
            <td>Malpolon monspessulanus</td>
          </tr>
          <tr>
            <td>Culebra viperina</td>
            <td>Natrix maura</td>
          </tr>
        </table>   

        {/* <button className="faunaTableTitle" onClick={handleClickAves}>Aves</button> */}
        <section className={showAves? 'hidden' : ''} >
        <table className='tableFauna' border="1">
        <span>AVES</span>
          <tr>
            <th>Nombre Común</th>
            <th>Nombre Científico</th>
            <th>Nombre Común</th>
            <th>Nombre Científico</th>
            <th>Nombre Común</th>
            <th>Nombre Científico</th>
          </tr>
          <tr>
            <td>Chova piquiroja</td>
            <td>Pyrrhocorax pyrrhocorax</td>
            <td>Milano real</td>
            <td>Milvus milvus</td>
            <td>Alimoche</td>
            <td>Nephron percnopterus</td>
          </tr>
          <tr>
            <td>Buitre leonado</td>
            <td>Gyps fulvus</td>
            <td>Águila culebrera europea</td>
            <td>Circaetus gallicus</td>
            <td>Cigüeña blanca</td>
            <td>Ciconia ciconia</td>
          </tr>
          <tr>
            <td>Águila real</td>
            <td>Aquila crysaetos</td>
            <td>Águila calzada</td>
            <td>Hieraaetus pennatus</td>
            <td>Halcón peregrino</td>
            <td>Falco peregrinus</td>
          </tr>
          <tr>
            <td>Búho real</td>
            <td>Bubo bubo</td>
            <td>Totovía</td>
            <td>Lullula arborea</td>
            <td>Alcohón abejero</td>
            <td>Pernis apivorus</td>
          </tr>
          <tr>
            <td>Curruca rabilarga</td>
            <td>Sylvia undata</td>
            <td>Águilucho cenizo</td>
            <td>Circus pygarus</td>
            <td>Escribano hortelano</td>
            <td>Emberiza hortulana</td>
          </tr>
          <tr>
            <td>Buitre negro</td>
            <td>Aegyplus monachus</td>
            <td>Elanio azul</td>
            <td>Elanus caeruleus</td>
            <td>Chorlito carambolo</td>
            <td>Charadruis morinellus</td>
          </tr>
          <tr>
            <td>Chotacabras gris</td>
            <td>Caprimulgus europaeus</td>
            <td>Martín pescador</td>
            <td>Alcedo atthis</td>
            <td>Carraca europea</td>
            <td>Coracias garrulus</td>
          </tr>
          <tr>
            <td>Terrera común</td>
            <td>Calandrella brachydactyla</td>
            <td>Cogujada montesina</td>
            <td>Galerida theklae</td>
            <td>Collalba negra</td>
            <td>Oenanthe leucura</td>
          </tr>
          <tr>
            <td>Cigüeña negra</td>
            <td>Ciconia nigra</td>
            <td>Bisbita campestre</td>
            <td>Anthus campestris</td>
            <td>Trepador azul</td>
            <td>Sitta europaea</td>
          </tr>
          <tr>
            <td>Herrerillo común</td>
            <td>Cyanistes caeruleus</td>
            <td>Carbonero común</td>
            <td>Parus major</td>
            <td>Carbonero garrapino</td>
            <td>Periparus ater</td>
          </tr>
          <tr>
            <td>Petirrojo europeo</td>
            <td>Erithacus rubecula</td>
            <td>Mirlo común</td>
            <td>Turdus merula</td>
            <td>Pinzón común</td>
            <td>Fringilla coelebs</td>
          </tr>
          <tr>
            <td>Arrendajo</td>
            <td>Garrulus glandarius</td>
            <td>Pico picapinos</td>
            <td>Dendrocopos major</td>
            <td>Pico mediano</td>
            <td>Dendrocopos medius</td>
          </tr>
          <tr>
            <td>Busardo ratonero</td>
            <td>Buteo buteo</td>
          </tr>
        </table>

        <table className="tableFauna" border="1">
          <tr>
            <th>
              Migradoras de presencia regular
            </th>
          </tr>
        <tr>
            <th>Nombre Común</th>
            <th>Nombre Científico</th>
            <th>Nombre Común</th>
            <th>Nombre Científico</th>
            <th>Nombre Común</th>
            <th>Nombre Científico</th>
          </tr>
          <tr>
            <td>Mirlo capiblanco</td>
            <td>Turdus torquatus</td>
            <td>Colirrojo real</td>
            <td>Phoenicus phoenicus</td>
            <td>Roquero solitario</td>
            <td>Monticola solitarius</td>
          </tr>
          <tr>
            <td>Roquero rojo</td>
            <td>Monticola saxatilis</td>
            <td>Golondrina daurica</td>
            <td>Hirundo daurica</td>
            <td>Pico menor</td>
            <td>Dryobates minor</td>
          </tr>
          <tr>
            <td>Alcotán</td>
            <td>Falco subbuteo</td>
            <td>Gavilán</td>
            <td>Accipiter nisus</td>
          </tr>
        </table>
        </section>   
      </div>
      
      <Link to="/" className="backToMain">
        <i className="fa-solid fa-left-long"></i> Back   
      </Link>
    </>
  );
};

export default Fauna;
