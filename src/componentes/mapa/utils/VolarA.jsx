import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const VolarA = ({destino}) => {

    const map = useMap();

    useEffect(() => {
        if(destino){
            map.flyTo(destino, 16)
        }
    }, [destino, map])
    
  return null;
}

export default VolarA