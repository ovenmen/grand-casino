import React, { FC, SetStateAction, useState } from 'react'
import { YMaps, Map, ZoomControl, GeolocationControl, Placemark } from '@pbe/react-yandex-maps'

import Loader from '../components/loader'
import { YMapProps } from '../types/ymaps'

const YMap: FC<YMapProps> = ({
    map,
    logo
}) => {
    const [instance, setInstance] = useState(null)

    const handleInstanceRef: SetStateAction<any>  = (instance: null) => {
        setInstance(instance)
    }

    return (
        <section className="map-container">
            <div className="grid-x">
                <div className="cell">
                    <h2 className="margin-bottom-2 text-center color-white">{map.header}</h2>
                </div>
            </div>
            <YMaps>
                {!instance &&
                    <div className="spinner-container">
                        <span className="loader">
                            <Loader />
                            <p className="text-center color-white">Карта загружается, подождите...</p>
                        </span>
                    </div>
                }
                <Map
                    width="100%"
                    height={400}
                    defaultState={{ center: [55, 70], zoom: 3 }}
                    defaultOptions={{ minZoom: 3 }}
                    modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                    instanceRef={handleInstanceRef}
                >
                    <ZoomControl options={{ size: 'small', zoomDuration: 200 }} />
                    <GeolocationControl options={{ float: 'left' }} />
                    {map.items.map((item, index) => (
                        <Placemark
                            key={index}
                            defaultGeometry={[item.lat, item.long]}
                            defaultProperties={{ iconContent: item.cooperation && `<strong>${logo}</strong>`, hintContent: item.city }}
                            defaultOptions={{ preset: item.cooperation ? 'islands#nightStretchyIcon' : 'islands#nightCircleDotIcon' }}
                        />
                    ))}
                </Map>
            </YMaps>

            <style jsx>{`
                .map-container {
                    max-width: 100%;
                    position: relative;
                    padding: 5vw;
                    min-height: 30rem;
                    background: #38286d;
                }
                .spinner-container {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 30rem;
                    padding: 5vw;
                }
                .map-container .loader {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </section>
    )
}

export default YMap