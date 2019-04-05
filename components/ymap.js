import React, { Component } from 'react'
import { array } from 'prop-types'
import { map, uniqueId } from 'lodash'
import { YMaps, Map, ZoomControl, GeolocationControl, Placemark } from 'react-yandex-maps'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const LABEL = '<strong>GC</strong>'

class YMap extends Component {
    state = {
        instance: null
    }

    handleInstanceRef = (instance) => {
        this.setState({
            instance: instance
        })
    }

    render () {
        const { items } = this.props
        const { instance } = this.state

        return (
            <div className="map-container">
                <YMaps>
                    {!instance &&
                        <div className="spinner-container">
                            <span className="icon fa-2x fa-pulse"><FontAwesomeIcon icon={faSpinner} /></span>
                            <p className="spinner-text text-center">Карта загружается, подождите...</p>
                        </div>
                    }
                    <Map
                        width="100%"
                        height="30rem"
                        defaultState={{ center: [65, 100], zoom: 3 }}
                        defaultOptions={{ minZoom: 3 }}
                        modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                        instanceRef={this.handleInstanceRef}
                    >
                        <ZoomControl options={{ size: 'small', zoomDuration: 200 }} />
                        <GeolocationControl options={{ float: 'left' }} />
                        {map(items, (item, index) => (
                            <Placemark
                                key={uniqueId(index)}
                                defaultGeometry={[item.lat, item.long]}
                                defaultProperties={{ iconContent: item.cooperation && LABEL, hintContent: item.city }}
                                defaultOptions={{ preset: item.cooperation ? 'islands#nightStretchyIcon' : 'islands#nightCircleDotIcon' }}
                            />
                        ))}
                    </Map>
                </YMaps>

                <style jsx>{`
                    .map-container {
                        max-width: 100%;
                        height: 30rem;
                        position: relative;
                        padding: 0 10vw;
                    }
                    .map-container .spinner-container {
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
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
            </div>
        )
    }
}

YMap.propTypes = {
    brand: array,
    items: array
}

export default YMap