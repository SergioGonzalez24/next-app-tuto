import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="App">
      <table>
        <Titulo texto="Puntos" />
        <tr>
          <td>
            <Titulo texto="Jugador A" />
          </td>
          <td>{juegosGanadosA >= 1 ? <PelotaON /> : <PelotaOFF />}</td>
          <td>{juegosGanadosA >= 2 ? <PelotaON /> : <PelotaOFF />}</td>
          <td>{juegosGanadosA >= 3 ? <PelotaON /> : <PelotaOFF />}</td>
          <td>{juegosGanadosA >= 4 ? <PelotaON /> : <PelotaOFF />}</td>
          <td>{juegosGanadosA >= 5 ? <PelotaON /> : <PelotaOFF />}</td>
          <td>
            <Puntos puntos={puntajeA} />
          </td>
        </tr>

        <tr>
          <td>
            <Titulo texto="Jugador B" />
          </td>
          <td>{juegosGanadosB >= 1 ? <PelotaON /> : <PelotaOFF />}</td>
          <td>{juegosGanadosB >= 2 ? <PelotaON /> : <PelotaOFF />}</td>
          <td>{juegosGanadosB >= 3 ? <PelotaON /> : <PelotaOFF />}</td>
          <td>{juegosGanadosB >= 4 ? <PelotaON /> : <PelotaOFF />}</td>
          <td>{juegosGanadosB >= 5 ? <PelotaON /> : <PelotaOFF />}</td>

          <td>
            <Puntos puntos={puntajeB} />
          </td>
        </tr>
      </table>

      <br />

      <Boton texto="Punto de A" onClick={onClickHandlerA} />
      <Boton texto="Punto de B" onClick={onClickHandlerB} />

      <Boton texto="Reiniciar" onClick={onClickHandlerReset} />
      <Boton texto="Reiniciar Juego" onClick={onClickHandlerResetJuego} />
    </div> 
    </main>
  )
}
