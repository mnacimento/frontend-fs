import { useState } from 'react';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "./Mapa.css";
import { iconoPorDefecto } from './utils/iconoMarcador';
import { lugares, CENTRO_INICIAL, ZOOM_INICIAL } from './utils/lugares';
import ClickEnMapa from './utils/ClickEnMapa';
import VolarA from './utils/VolarA';

const Mapa = () => {

    const [marcadoresUsuario, setMarcadoresUsuario] = useState([]);
    const [destino, setDestino] = useState(null);

    const agregarMarcador = (posicion) => {
        setMarcadoresUsuario((prev) => [...prev, posicion])
    }

    return (
        <div className='mapa-pagina'>
            <h2>Mapa con Leaflet</h2>

            <div className='mapa-lista'>
                {lugares.map((lugar) => (
                    <button
                        key={lugar.id}
                        className='mapa-boton'
                        onClick={() => setDestino(lugar.posicion)}
                    >
                        {lugar.nombre}
                    </button>
                ))}
                <button
                    className='mapa-boton-limpiar'
                    onClick={() => setMarcadoresUsuario([])}
                >
                    Borrar marcadores propios
                </button>
            </div>

            <MapContainer
                center={CENTRO_INICIAL}
                zoom={ZOOM_INICIAL}
                className='mapa-contenedor'
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {lugares.map((lugar) => (
                    <Marker key={lugar.id} position={lugar.posicion} icon={iconoPorDefecto}>
                        <Popup>{lugar.nombre}</Popup>
                    </Marker>
                ))}

                {marcadoresUsuario.map((posicion, i) => (
                    <Marker key={i} position={posicion} icon={iconoPorDefecto}>
                        <Popup>
                            Marcador Propio #{ i + 1}
                            <br />
                             {posicion[0].toFixed(4)}, {posicion[1].toFixed(4)}
                        </Popup>
                    </Marker>
                ))}

                <ClickEnMapa  onClickMap={agregarMarcador}/>
                
                <VolarA destino={destino}/>
            </MapContainer>
        </div>
    )
}

export default Mapa