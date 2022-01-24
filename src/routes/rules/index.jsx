import React from "react";

import { Grid, Cell } from "react-foundation";

import { ReactComponent as Wardrobe } from "../../assets/images/Wardrobe.svg";
import { ReactComponent as GroguPod } from "../../assets/images/Grogu-Pod.svg";

import "./index.scss";

const Rules = () => {
  return (
    <Grid className="grid-container Rules">
      <Grid medium={10} className="display">
        <Cell>
          <h1 className="text-bigger text-mandalore">Reglas del juego</h1>
          <h4 className="Rules_title">¡Cuidado con Grogu!</h4>
          <p className="Rules_text">
            El cazarrecompensas mandaloriano Din Djarin, conocido como «el
            Mandaloriano» o simplemente «mando», está a cargo de Grogu mientras
            viaja por la galaxia realizando todo tipo de encargos. En esta
            ocasión el encargo es muy especial. Debe entregar huevos de rana{" "}
            <span className="text-italic">(no fertilizados)</span>, galletas
            azules <span className="text-italic">(¡qué ricas!)</span> y unas
            ranas. Todo ello es muy importante ya que este cargamento es de
            vital importancia para restablecer contacto con Ahsoka Tano. El
            objetivo es entregar la mercancía a un contacto en el planeta
            Nevarro. Él nos dará la información del paradero de Ahsoka,
            información que usaremos para volver a intentar que sea la maestra
            de Grogu como Jedi. El problema es que nuestro contacto ha sido muy
            claro, si no llega la mercancía no hay trato. Tu misión es tratar
            que Grogu no encuentre la mercancía. Mando ha recibido muy buenas
            recomendaciones sobre tus habilidades custodiando mercancía así que
            ha decidido contratarte para que todo salga bien. Ayuda a Mando a
            conseguir su objetivo y tendrás una buena recompensa.
          </p>
          <p className="Rules_text">
            El juego es muy sencillo. Dispondremos de 6 casillas que representan
            un camino en la zona de carga de la Razor Crest que lleva hasta el
            armario donde se encuentra segura la mercancía. De este modo
            tendremos 7 casillas, 6 del camino y una que representa al armario:
          </p>
        </Cell>
      </Grid>

      <Grid medium={8} className="Rules_box-wrapper text-center">
        <Cell
          medium={2}
          className="Rules_box-wrapper_svg grogu-svg crazy-negative-margin animate-floating"
        >
          <GroguPod />
        </Cell>
        <Cell medium={10} className="Rules_box-wrapper_boxes">
          <div className="Rules_box"></div>
          <div className="Rules_box"></div>
          <div className="Rules_box"></div>
          <div className="Rules_box"></div>
          <div className="Rules_box"></div>
          <div className="Rules_box"></div>
          <div className="Rules_box">
            <div className="animate-wiggle wardrobe-svg">
              <Wardrobe />
            </div>
          </div>
        </Cell>
      </Grid>

      <Grid medium={10} className="display">
        <Cell className="Rules_container">
          <p className="Rules_text">
            Durante el viaje has hecho muy bien tu trabajo pero ahora debes
            vaciar el armario. Para ello deberás descargar la mercancía poco a
            poco. Este es el momento más delicado ya que Grogu puede aprovechar
            y llegar hasta el armario. Si eso ocurre se comerá lo que encuentre
            y Mando perderá la oportunidad de saber dónde esta Ahsoka. Ergo, te
            has quedado sin recompensa.
          </p>
        </Cell>
        <br />
        <Cell className="Rules_container">
          <p className="Rules_text">
            Además de esas 7 piezas tendrás tres recipientes donde se guarda
            cada tipo de mercancía. De esta manera quedaría:
          </p>
          <Cell medium={7} className="Rules_container medium-offset-1">
            <ol className="Rules_text">
              <li>
                Recipiente de las galletas: dentro
                <ul>
                  <li>Tendrá 3 cajas de galletas azules</li>
                </ul>
              </li>
              <li>
                Recipiente de los huevos de rana:
                <ul>
                  <li> Tendrá dentro 3 huevos de rana (sin fertilizar)</li>
                </ul>
              </li>
              <li>
                Recipiente de las ranas: Tendrá dentro 3 ranas
                <ul>
                  <li> Tendrá dentro 3 ranas</li>
                </ul>
              </li>
            </ol>
          </Cell>
        </Cell>
      </Grid>

      <Grid medium={10} className="display">
        <Cell className="Rules_container">
          <p className="Rules_text">
            Además de estas piezas tendremos un dado de{" "}
            <span className="text-strikethrough text-italic">5</span> 4 caras
            donde cada cara representa una de las siguientes acciones:
          </p>
        </Cell>

        <Cell medium={7} className="Rules_container medium-offset-1">
          <ol className="Rules_text">
            <li>Descargas una caja de galletas azules 🍪</li>
            <li>Descargas un huevo de rana (con mucho cuidado) 🥚</li>
            <li>Descargas una rana 🐸</li>
            <li>Grogu se mueve una casilla 👣</li>
          </ol>
        </Cell>
      </Grid>

      <Grid medium={10} className="display">
        <Cell className="Rules_container">
          <p className="Rules_text">
            Además habrá una ficha que represente dónde está Grogu.
          </p>
        </Cell>
        <Cell className="Rules_container">
          <h5 className="Rules_text text-bold">
            Ganarás el juego si consigues descargar toda la mercancía. Perderás
            si Grogu llega a la última casilla (el armario).
          </h5>
        </Cell>
      </Grid>
    </Grid>
  );
};

export default Rules;
