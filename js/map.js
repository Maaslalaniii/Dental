                    google.maps.event.addDomListener(window, 'load', init);
                    var map;

                    function init() {
                        var mapOptions = {
                            center: new google.maps.LatLng(43.747103, -79.311799),
                            zoom: 15,
                            zoomControl: false,
                            disableDoubleClickZoom: true,
                            mapTypeControl: false,
                            scaleControl: false,
                            scrollwheel: false,
                            panControl: true,
                            streetViewControl: false,
                            draggable: true,
                            overviewMapControl: false,
                            overviewMapControlOptions: {
                                opened: false,
                            },
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            styles: [{
                                "featureType": "all",
                                "elementType": "labels",
                                "stylers": [{
                                    "visibility": "on"
                                }]
                            }, {
                                "featureType": "landscape",
                                "elementType": "all",
                                "stylers": [{
                                    "visibility": "on"
                                }, {
                                    "color": "#f3f4f4"
                                }]
                            }, {
                                "featureType": "landscape.man_made",
                                "elementType": "geometry",
                                "stylers": [{
                                    "weight": 0.9
                                }, {
                                    "visibility": "on"
                                }]
                            }, {
                                "featureType": "poi.park",
                                "elementType": "geometry.fill",
                                "stylers": [{
                                    "visibility": "on"
                                }, {
                                    "color": "#83cead"
                                }]
                            }, {
                                "featureType": "road",
                                "elementType": "all",
                                "stylers": [{
                                    "visibility": "on"
                                }, {
                                    "color": "#ffffff"
                                }]
                            }, {
                                "featureType": "road",
                                "elementType": "labels",
                                "stylers": [{
                                    "visibility": "on"
                                }]
                            }, {
                                "featureType": "road.highway",
                                "elementType": "all",
                                "stylers": [{
                                    "visibility": "on"
                                }, {
                                    "color": "#fee379"
                                }]
                            }, {
                                "featureType": "road.arterial",
                                "elementType": "all",
                                "stylers": [{
                                    "visibility": "on"
                                }, {
                                    "color": "#fee379"
                                }]
                            }, {
                                "featureType": "water",
                                "elementType": "all",
                                "stylers": [{
                                    "visibility": "on"
                                }, {
                                    "color": "#7fc8ed"
                                }]
                            }],
                        }
                        var mapElement = document.getElementById('google-map');
                        var map = new google.maps.Map(mapElement, mapOptions);
                        var locations = [
['Teresa Dental Clinic', 'undefined', 'undefined', 'undefined', 'undefined', 43.7474029, -79.31166710000002, 'https://mapbuildr.com/assets/img/markers/solid-pin-red.png']
        ];
                        for (i = 0; i < locations.length; i++) {
                            if (locations[i][1] == 'undefined') {
                                description = '';
                            } else {
                                description = locations[i][1];
                            }
                            if (locations[i][2] == 'undefined') {
                                telephone = '';
                            } else {
                                telephone = locations[i][2];
                            }
                            if (locations[i][3] == 'undefined') {
                                email = '';
                            } else {
                                email = locations[i][3];
                            }
                            if (locations[i][4] == 'undefined') {
                                web = '';
                            } else {
                                web = locations[i][4];
                            }
                            if (locations[i][7] == 'undefined') {
                                markericon = '';
                            } else {
                                markericon = locations[i][7];
                            }
                            marker = new google.maps.Marker({
                                icon: markericon,
                                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                                map: map,
                                title: locations[i][0],
                                desc: description,
                                tel: telephone,
                                email: email,
                                web: web
                            });
                            link = '';
                        }

                    }