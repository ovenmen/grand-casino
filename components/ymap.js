import React, { Component } from 'react'
import { array } from 'prop-types'
import { map, uniqueId } from 'lodash'
import { YMaps, Map, ZoomControl, GeolocationControl, Placemark } from 'react-yandex-maps'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import './ymap.css'

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
            </div>
        )
    }
}

YMap.propTypes = {
    brand: array,
    items: array
}

export default YMap