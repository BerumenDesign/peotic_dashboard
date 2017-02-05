import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount () {
        google.maps.event.addDomListener( window, 'load', this.initMap );
    }
    componentWillUnmount () {
        google.maps.event.removeDomListener( window, 'load', this.initMap );
    }
    initMap () {
        let myOptions = {
            zoom: 12
            , center: new google.maps.LatLng(43.653226, -79.38318429999998)
            , mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        let map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
        let marker = new google.maps.Marker({
            map: map
            , position: new google.maps.LatLng(43.653226, -79.38318429999998)
        });
        let infowindow = new google.maps.InfoWindow({
            content: '<strong>Title</strong><br>toronto<br>'
        });
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });
        infowindow.open(map, marker);
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