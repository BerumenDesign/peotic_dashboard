import React, { Component } from 'react';
import PolygonStore from '../stores/PolygonStore';
import DataStore from '../stores/DataStore';
import _ from 'underscore';

class GoogleMap extends Component {
    constructor ( props ) {
        super( props );
        this.state = { markers: {}, polygons: {} };
        this.initMap = this.initMap.bind( this );
    }
    componentDidMount () {
        console.log( 'GoogleMap' );
        google.maps.event.addDomListener( window, 'load', this.initMap );
        this.initMap();
    }
    componentWillUnmount () {
        google.maps.event.removeDomListener( window, 'load', this.initMap );
    }
    componentWillReceiveProps ( props ) {
        this.clear();
        this.draw( props );
    }
    clear () {
        _.forEach( this.state.markers, function ( marker ) {
            marker.setMap( null );
        } );

        _.forEach( this.state.polygons, function ( poly ) {
            poly.setMap( null );
        } );
    }
    draw ( props ) {
        let _markers = {};
        let _polygons = {};
        DataStore.get().stores
            .filter( ( store ) => { return props.filters.stores.indexOf( store.id ) !== -1; }, this )
            .forEach( function ( store ) {
                let _map = this.map;
                let marker = store.coordinates;
                _markers[ store.id ] = new google.maps.Marker( {
                    map: _map, position: new google.maps.LatLng( marker[ 1 ], marker[ 0 ] )
                } );
            }, this );

        PolygonStore.get().forEach( function ( place ) {

            let mapColor = {
                'ff1427A5': 'rgba(165, 255, 20, 0.14902)',
                '4D1427A5': 'rgba(165,77,20,0.152)',
                'ff0051E6': 'rgba(230,255,0,0.317)',
                '4D0051E6': 'rgba(230,77,0,0.317)',
                'ff25A8F9': 'rgba(249,255,37,0.658)',
                '4D25A8F9': 'rgba(249,77,37,0.658)',
                'ff00EAFF': 'rgba(255,255,0,0.917)',
                '4D00EAFF': 'rgba(255,77,0,0.917)',
                'ff80CCFF': 'rgba(255,255,128,0.8)',
                '4D80CCFF': 'rgba(255,77,128,0.8)',
                'ff80DAFA': 'rgba(250,255,128,0.854)',
                '4D80DAFA': 'rgba(250,77,128,0.854)',
                'ff8DFFFF': 'rgba(255,255,141,1)',
                '4D8DFFFF': 'rgba(255,77,141,1)',
                'ff2DC0FB': 'rgba(251,255,45,0.752)',
                '4D2DC0FB': 'rgba(251,77,45,0.752)',
                'ff00D6FF': 'rgba(255,255,0,0.839)',
                '4D00D6FF': 'rgba(255,77,0,0.839)',
                'ff007CF5': 'rgba(245,255,0,0.486)',
                '4D007CF5': 'rgba(245,77,0,0.486)'
            };

            let _polyColor = mapColor[ place.style[ 0 ].PolyStyle.color ] || place.style[ 0 ].PolyStyle.color;
            let _strokeColor = mapColor[ place.style[ 0 ].LineStyle.color ] || place.style[ 0 ].LineStyle.color;

            _polygons[ place.name ] = new google.maps.Polygon( {
                paths: place.polygon,
                strokeColor: _strokeColor,
                strokeOpacity: 1,
                strokeWeight: 2,
                fillColor: _polyColor,
                fillOpacity: 0.5
            } );

            _polygons[ place.name ].setMap( this.map );
        }, this );

        this.setState( { markers: _markers, polygons: _polygons } );
    }
    initMap () {
        console.log( 'GoogleMap.initMap' );
        let myOptions = {
            zoom: 12,
            center: new google.maps.LatLng( 43.653226, -79.38318429999998 ),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        this.map = new google.maps.Map( document.getElementById( 'gmap_canvas' ), myOptions );

        this.draw( this.props );
    }
    render () {
        let _map_style = {
            maxWidth: 'none!important',
            background: 'none!important',
            height:'450px'
        };

        return (
            <div style={{overflow: 'hidden', height: '450px'}}>
                <div id="gmap_canvas" style={_map_style}></div>
                <div>
                    <small><a href="http://embedgooglemaps.com">embed google maps</a></small>
                </div>
                <div>
                    <small><a href="https://termsofusegenerator.net">terms of use generator</a></small>
                </div>
            </div>
        )
    }
}

export default GoogleMap;