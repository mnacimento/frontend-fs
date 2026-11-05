import { useMapEvent } from "react-leaflet"

const ClickEnMapa = ({onClickMap}) => {
    useMapEvent({
        click: (e) =>{
            onClickMap([e.latlng.lat, e.latlng.lng])
        },
    })
  return null;
}

export default ClickEnMapa