import React, { useState } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { YMaps, Map, ZoomControl, GeolocationControl, Placemark } from 'react-yandex-maps'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const YMap = ({
    map,
    logo
}) => {
    const [instance, setInstance] = useState(null)

    const handleInstanceRef = (instance) => {
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
                        <span className="icon fa-2x fa-pulse color-white"><FontAwesomeIcon icon={faSpinner} /></span>
                        <p className="spinner-text text-center color-white">Карта загружается, подождите...</p>
                    </div>
                }
                <Map
                    width="100%"
                    height="30rem"
                    defaultState={{ center: [65, 100], zoom: 3 }}
                    defaultOptions={{ minZoom: 3 }}
                    modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                    instanceRef={handleInstanceRef}
                >
                    <ZoomControl options={{ size: 'small', zoomDuration: 200 }} />
                    <GeolocationControl options={{ float: 'left' }} />
                    {_.map(map.items, (item, index) => (
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
                }
                .map-container .icon {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    margin-top: -3rem;
                    margin-left: -1.5rem;
                }
                .map-container .spinner-text {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    right: 0;
                    margin-top: 2rem;
                }
            `}</style>
        </section>
    )
}

YMap.propTypes = {
    map: PropTypes.object,
    logo: PropTypes.string
}

export default YMap
