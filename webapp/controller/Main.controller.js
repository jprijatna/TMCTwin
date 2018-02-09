sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/vk/ContentResource",
	"sap/ui/model/json/JSONModel"
], function(Controller, ContentResource, JSONModel) {
	"use strict";

	var loadModelIntoViewer = function(viewer, remoteUrl, sourceType, localFile) {
		//what is currently loaded in the view is destroyed
		viewer.destroyContentResources();

		var source = remoteUrl || localFile;

		if (source) {
			//content of viewer is replaced with new data
			var contentResource = new ContentResource({
				source: source,
				sourceType: sourceType,
				sourceId: "abc"
			});

			//content: chosen path. content added to the view
			viewer.addContentResource(contentResource);
		}
	};

	var count;
	var carCount = 0;

	return Controller.extend("DPROP.controller.Main", {

		loadFromURL: function() {
			var view = this.getView();
			//var vdsURL = "http://localhost:58810/VisaulAsset/vdsfiles/transmission.vds";
			var vdsURL = "/webapp/assets/transmission.vds";
			var viewer = view.byId("viewer");
			if (vdsURL) {
				loadModelIntoViewer(viewer, vdsURL, "vds");
			} else {
				// handleEmptyUrl(view);
				console.log("Blank");

			}

		},

		onAfterRendering: function() {
			// this.loadMap();
			// this._loadVideoTweet();
			this._loadInceptionVideo();

			// this.changeView();

		},

		loadImpactMap: function() {
			var mapOptions = {
				center: new google.maps.LatLng(-33.851825, 151.210782),
				zoom: 15,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				disableDefaultUI: true,
				featureType: "poi.business",
				elementType: "labels",
				stylers: [{
					visibility: "off"
				}]
			};

			var map = new google.maps.Map(this.getView().byId("map_canvas3").getDomRef(),
				mapOptions);

			var image = {
				url: 'images/31771-200.png'
					// This marker is 20 pixels wide by 32 pixels high.
					//size: new google.maps.Size(80, 80)
			};

			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(-33.852460, 151.210679),
				icon: image,
				map: map
			});

			var directionsDisplay;
			var directionsService = new google.maps.DirectionsService();
			directionsDisplay = new google.maps.DirectionsRenderer({
				draggable: true,
				polylineOptions: {
					strokeColor: "red"
				},
				markerOptions: {
					visible: false
				}
			});
			directionsDisplay.setMap(map);
			var request = {
				origin: new google.maps.LatLng(-33.842575, 151.205130),
				destination: new google.maps.LatLng(-33.859088, 151.206560),
				travelMode: google.maps.TravelMode.DRIVING
			};
			directionsService.route(request, function(response, status) {
				//console.log(response);
				if (status == google.maps.DirectionsStatus.OK) {
					//console.log(newmap);
					directionsDisplay.setDirections(response);
				}
			});

		},

		loadDetailsMap: function() {
			var mapOptions = {
				center: new google.maps.LatLng(-33.851825, 151.210782),
				zoom: 15,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				disableDefaultUI: true,
				featureType: "poi.business",
				elementType: "labels",
				stylers: [{
					visibility: "off"
				}]
			};

			var map = new google.maps.Map(this.getView().byId("map_canvas2").getDomRef(),
				mapOptions);

			var image = {
				url: 'images/31771-200.png'
					// This marker is 20 pixels wide by 32 pixels high.
					//size: new google.maps.Size(80, 80)
			};

			var directionsDisplay;
			var directionsService = new google.maps.DirectionsService();
			directionsDisplay = new google.maps.DirectionsRenderer({
				draggable: true,
				polylineOptions: {
					strokeColor: "red"
				},
				markerOptions: {
					visible: false
				}
			});
			directionsDisplay.setMap(map);
			var request = {
				origin: new google.maps.LatLng(-33.842575, 151.205130),
				destination: new google.maps.LatLng(-33.859088, 151.206560),
				travelMode: google.maps.TravelMode.DRIVING
			};
			directionsService.route(request, function(response, status) {
				//console.log(response);
				if (status == google.maps.DirectionsStatus.OK) {
					//console.log(newmap);
					directionsDisplay.setDirections(response);
				}
			});

			var that = this;

			setTimeout(function() {
				var time = that.getView().byId("time");
				time.setText("6:10PM")
				var directionsDisplayA3;
				var directionsServiceA3 = new google.maps.DirectionsService();
				directionsDisplayA3 = new google.maps.DirectionsRenderer({
					draggable: true,
					polylineOptions: {
						strokeColor: "red"
					},
					markerOptions: {
						visible: false
					}
				});
				directionsDisplayA3.setMap(map);
				var requestA3 = {
					origin: new google.maps.LatLng(-33.859732, 151.206124),
					destination: new google.maps.LatLng(-33.838350, 151.206517),
					travelMode: google.maps.TravelMode.DRIVING
				};
				directionsServiceA3.route(requestA3, function(response, status) {
					//console.log(response);
					if (status == google.maps.DirectionsStatus.OK) {
						//console.log(newmap);
						directionsDisplayA3.setDirections(response);
					}
				});
			}, 3000);

			setTimeout(function() {
				var time = that.getView().byId("time");
				time.setText("6:40PM")
				var directionsDisplay2;
				var directionsService2 = new google.maps.DirectionsService();
				directionsDisplay2 = new google.maps.DirectionsRenderer({
					draggable: true,
					polylineOptions: {
						strokeColor: "red"
					},
					markerOptions: {
						visible: false
					}
				});
				directionsDisplay2.setMap(map);
				var request2 = {
					origin: new google.maps.LatLng(-33.842575, 151.205130),
					destination: new google.maps.LatLng(-33.859088, 151.206560),
					travelMode: google.maps.TravelMode.DRIVING
				};
				directionsService.route(request2, function(response, status) {
					//console.log(response);
					if (status == google.maps.DirectionsStatus.OK) {
						//console.log(newmap);
						directionsDisplay2.setDirections(response);
					}
				});
			}, 6000);

			setTimeout(function() {
				var time = that.getView().byId("time");
				time.setText("7:10PM")
				var directionsDisplayA;
				var directionsServiceA = new google.maps.DirectionsService();
				directionsDisplayA = new google.maps.DirectionsRenderer({
					draggable: true,
					polylineOptions: {
						strokeColor: "red"
					},
					markerOptions: {
						visible: false
					}
				});
				directionsDisplayA.setMap(map);
				var requestA = {
					origin: new google.maps.LatLng(-33.874597, 151.217454),
					destination: new google.maps.LatLng(-33.842373, 151.213827),
					travelMode: google.maps.TravelMode.DRIVING
				};
				directionsServiceA.route(requestA, function(response, status) {
					//console.log(response);
					if (status == google.maps.DirectionsStatus.OK) {
						//console.log(newmap);
						directionsDisplayA.setDirections(response);
					}
				});
			}, 9000);

			setTimeout(function() {
				var time = that.getView().byId("time");
				time.setText("7:40PM")
				var directionsDisplayB;
				var directionsServiceB = new google.maps.DirectionsService();
				directionsDisplayB = new google.maps.DirectionsRenderer({
					draggable: true,
					polylineOptions: {
						strokeColor: "red"
					},
					markerOptions: {
						visible: false
					}
				});
				directionsDisplayB.setMap(map);
				var requestB = {
					origin: new google.maps.LatLng(-33.837469, 151.210537),
					destination: new google.maps.LatLng(-33.875727, 151.223842),
					travelMode: google.maps.TravelMode.DRIVING
				};
				directionsServiceB.route(requestB, function(response, status) {
					//console.log(response);
					if (status == google.maps.DirectionsStatus.OK) {
						//console.log(newmap);
						directionsDisplayB.setDirections(response);
					}
				});
			}, 12000);

		},

		loadMap: function() {
			var mapOptions = {
				center: new google.maps.LatLng(-33.851825, 151.210782),
				zoom: 15,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				disableDefaultUI: true,
				featureType: "poi.business",
				elementType: "labels",
				stylers: [{
					visibility: "off"
				}]
			};

			var map = new google.maps.Map(this.getView().byId("map_canvas").getDomRef(),
				mapOptions);

			var image = {
				url: 'images/31771-200.png'
					// This marker is 20 pixels wide by 32 pixels high.
					//size: new google.maps.Size(80, 80)
			};

			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(-33.852460, 151.210679),
				icon: image,
				map: map
			});

			var marker2 = new google.maps.Marker({
				position: new google.maps.LatLng(-33.842575, 151.205130),
				icon: image,
				map: map
			});

			var marker3 = new google.maps.Marker({
				position: new google.maps.LatLng(-33.859088, 151.206560),
				icon: image,
				map: map
			});

		},

		loadOptionsMap: function() {

			var optionsOptions = {
				center: new google.maps.LatLng(-33.851825, 151.210782),
				zoom: 12,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				disableDefaultUI: true,
				featureType: "poi.business",
				elementType: "labels",
				stylers: [{
					visibility: "off"
				}]
			};

			// var map = new google.maps.Map(this.getView().byId("map_canvas").getDomRef(),
			// 	mapOptions);

			var options_map1 = new google.maps.Map(this.getView().byId("options_map0").getDomRef(),
				optionsOptions);

			var nothing_map = new google.maps.Map(this.getView().byId("options_map1").getDomRef(),
				optionsOptions);

			var options_map2 = new google.maps.Map(this.getView().byId("options_map2").getDomRef(),
				optionsOptions);

			// var options_map3 = new google.maps.Map(this.getView().byId("options_map3").getDomRef(),
			// 	optionsOptions);

			var image = {
				url: 'images/31771-200.png'
					// This marker is 20 pixels wide by 32 pixels high.
					//size: new google.maps.Size(80, 80)
			};

			var directionsDisplay;
			var directionsService = new google.maps.DirectionsService();
			directionsDisplay = new google.maps.DirectionsRenderer({
				draggable: true,
				polylineOptions: {
					strokeColor: "red"
				},
				markerOptions: {
					visible: false
				}
			});
			directionsDisplay.setMap(nothing_map);
			var request = {
				origin: new google.maps.LatLng(-33.842575, 151.205130),
				destination: new google.maps.LatLng(-33.859088, 151.206560),
				travelMode: google.maps.TravelMode.DRIVING
			};
			directionsService.route(request, function(response, status) {
				//console.log(response);
				if (status == google.maps.DirectionsStatus.OK) {
					//console.log(newmap);
					directionsDisplay.setDirections(response);
				}
			});

			var directionsDisplay2;
			var directionsService2 = new google.maps.DirectionsService();
			directionsDisplay2 = new google.maps.DirectionsRenderer({
				draggable: true,
				polylineOptions: {
					strokeColor: "red"
				},
				markerOptions: {
					visible: false
				}
			});
			directionsDisplay2.setMap(nothing_map);
			var request2 = {
				origin: new google.maps.LatLng(-33.859732, 151.206124),
				destination: new google.maps.LatLng(-33.838350, 151.206517),
				travelMode: google.maps.TravelMode.DRIVING
			};
			directionsService.route(request2, function(response, status) {
				//console.log(response);
				if (status == google.maps.DirectionsStatus.OK) {
					//console.log(newmap);
					directionsDisplay2.setDirections(response);
				}
			});

			var directionsDisplay3;
			var directionsService3 = new google.maps.DirectionsService();
			directionsDisplay3 = new google.maps.DirectionsRenderer({
				draggable: true,
				polylineOptions: {
					strokeColor: "red"
				},
				markerOptions: {
					visible: false
				}
			});
			directionsDisplay3.setMap(nothing_map);
			var request3 = {
				origin: new google.maps.LatLng(-33.839447, 151.210657),
				destination: new google.maps.LatLng(-33.861709, 151.213743),
				travelMode: google.maps.TravelMode.DRIVING
			};
			directionsService3.route(request3, function(response, status) {
				//console.log(response);
				if (status == google.maps.DirectionsStatus.OK) {
					//console.log(newmap);
					directionsDisplay3.setDirections(response);
				}
			});

			var directionsDisplay4;
			var directionsService4 = new google.maps.DirectionsService();
			directionsDisplay4 = new google.maps.DirectionsRenderer({
				draggable: true,
				polylineOptions: {
					strokeColor: "red"
				},
				markerOptions: {
					visible: false
				}
			});
			directionsDisplay4.setMap(nothing_map);
			var request4 = {
				origin: new google.maps.LatLng(-33.874597, 151.217454),
				destination: new google.maps.LatLng(-33.842373, 151.213827),
				travelMode: google.maps.TravelMode.DRIVING
			};
			directionsService4.route(request4, function(response, status) {
				//console.log(response);
				if (status == google.maps.DirectionsStatus.OK) {
					//console.log(newmap);
					directionsDisplay4.setDirections(response);
				}
			});

			var directionsDisplayA;
			var directionsServiceA = new google.maps.DirectionsService();
			directionsDisplayA = new google.maps.DirectionsRenderer({
				draggable: true,
				polylineOptions: {
					strokeColor: "red"
				},
				markerOptions: {
					visible: false
				}
			});
			directionsDisplayA.setMap(options_map1);
			var requestA = {
				origin: new google.maps.LatLng(-33.842575, 151.205130),
				destination: new google.maps.LatLng(-33.859088, 151.206560),
				travelMode: google.maps.TravelMode.DRIVING
			};
			directionsServiceA.route(requestA, function(response, status) {
				//console.log(response);
				if (status == google.maps.DirectionsStatus.OK) {
					//console.log(newmap);
					directionsDisplayA.setDirections(response);
				}
			});

			var directionsDisplayA2;
			var directionsServiceA2 = new google.maps.DirectionsService();
			directionsDisplayA2 = new google.maps.DirectionsRenderer({
				draggable: true,
				polylineOptions: {
					strokeColor: "red"
				},
				markerOptions: {
					visible: false
				}
			});
			directionsDisplayA2.setMap(options_map1);
			var requestA2 = {
				origin: new google.maps.LatLng(-33.837469, 151.210537),
				destination: new google.maps.LatLng(-33.875727, 151.223842),
				travelMode: google.maps.TravelMode.DRIVING
			};
			directionsServiceA2.route(requestA2, function(response, status) {
				//console.log(response);
				if (status == google.maps.DirectionsStatus.OK) {
					//console.log(newmap);
					directionsDisplayA2.setDirections(response);
				}
			});

			var directionsDisplayA3;
			var directionsServiceA3 = new google.maps.DirectionsService();
			directionsDisplayA3 = new google.maps.DirectionsRenderer({
				draggable: true,
				polylineOptions: {
					strokeColor: "red"
				},
				markerOptions: {
					visible: false
				}
			});
			directionsDisplayA3.setMap(options_map1);
			var requestA3 = {
				origin: new google.maps.LatLng(-33.859732, 151.206124),
				destination: new google.maps.LatLng(-33.838350, 151.206517),
				travelMode: google.maps.TravelMode.DRIVING
			};
			directionsServiceA3.route(requestA3, function(response, status) {
				//console.log(response);
				if (status == google.maps.DirectionsStatus.OK) {
					//console.log(newmap);
					directionsDisplayA3.setDirections(response);
				}
			});

			var directionsDisplayB;
			var directionsServiceB = new google.maps.DirectionsService();
			directionsDisplayB = new google.maps.DirectionsRenderer({
				draggable: true,
				polylineOptions: {
					strokeColor: "red"
				},
				markerOptions: {
					visible: false
				}
			});
			directionsDisplayB.setMap(options_map2);
			var requestB = {
				origin: new google.maps.LatLng(-33.842575, 151.205130),
				destination: new google.maps.LatLng(-33.859088, 151.206560),
				travelMode: google.maps.TravelMode.DRIVING
			};
			directionsServiceB.route(requestB, function(response, status) {
				//console.log(response);
				if (status == google.maps.DirectionsStatus.OK) {
					//console.log(newmap);
					directionsDisplayB.setDirections(response);
				}
			});

			var directionsDisplayB2;
			var directionsServiceB2 = new google.maps.DirectionsService();
			directionsDisplayB2 = new google.maps.DirectionsRenderer({
				draggable: true,
				polylineOptions: {
					strokeColor: "red"
				},
				markerOptions: {
					visible: false
				}
			});
			directionsDisplayB2.setMap(options_map2);
			var requestB2 = {
				origin: new google.maps.LatLng(-33.876760, 151.217152),
				destination: new google.maps.LatLng(-33.853543, 151.209916),
				travelMode: google.maps.TravelMode.DRIVING
			};
			directionsServiceB2.route(requestB2, function(response, status) {
				//console.log(response);
				if (status == google.maps.DirectionsStatus.OK) {
					//console.log(newmap);
					directionsDisplayB2.setDirections(response);
				}
			});

			var directionsDisplayB3;
			var directionsServiceB3 = new google.maps.DirectionsService();
			directionsDisplayB3 = new google.maps.DirectionsRenderer({
				draggable: true,
				polylineOptions: {
					strokeColor: "red"
				},
				markerOptions: {
					visible: false
				}
			});
			directionsDisplayB3.setMap(options_map2);
			var requestB3 = {
				origin: new google.maps.LatLng(-33.837469, 151.210537),
				destination: new google.maps.LatLng(-33.875727, 151.223842),
				travelMode: google.maps.TravelMode.DRIVING
			};
			directionsServiceB3.route(requestB3, function(response, status) {
				//console.log(response);
				// if (status == google.maps.DirectionsStatus.OK) {
				//console.log(newmap);
				directionsDisplayB3.setDirections(response);
				// }
			});

		},
		
		loadOptionsMapConfirm: function() {

			var optionsOptions = {
				center: new google.maps.LatLng(-33.851825, 151.210782),
				zoom: 12,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				disableDefaultUI: true,
				featureType: "poi.business",
				elementType: "labels",
				stylers: [{
					visibility: "off"
				}]
			};

			var options_map2 = new google.maps.Map(this.getView().byId("options_map2_confirm").getDomRef(),
				optionsOptions);

			// var options_map3 = new google.maps.Map(this.getView().byId("options_map3").getDomRef(),
			// 	optionsOptions);

			var image = {
				url: 'images/31771-200.png'
					// This marker is 20 pixels wide by 32 pixels high.
					//size: new google.maps.Size(80, 80)
			};

			var directionsDisplayB;
			var directionsServiceB = new google.maps.DirectionsService();
			directionsDisplayB = new google.maps.DirectionsRenderer({
				draggable: true,
				polylineOptions: {
					strokeColor: "red"
				},
				markerOptions: {
					visible: false
				}
			});
			directionsDisplayB.setMap(options_map2);
			var requestB = {
				origin: new google.maps.LatLng(-33.842575, 151.205130),
				destination: new google.maps.LatLng(-33.859088, 151.206560),
				travelMode: google.maps.TravelMode.DRIVING
			};
			directionsServiceB.route(requestB, function(response, status) {
				//console.log(response);
				if (status == google.maps.DirectionsStatus.OK) {
					//console.log(newmap);
					directionsDisplayB.setDirections(response);
				}
			});

			var directionsDisplayB2;
			var directionsServiceB2 = new google.maps.DirectionsService();
			directionsDisplayB2 = new google.maps.DirectionsRenderer({
				draggable: true,
				polylineOptions: {
					strokeColor: "red"
				},
				markerOptions: {
					visible: false
				}
			});
			directionsDisplayB2.setMap(options_map2);
			var requestB2 = {
				origin: new google.maps.LatLng(-33.876760, 151.217152),
				destination: new google.maps.LatLng(-33.853543, 151.209916),
				travelMode: google.maps.TravelMode.DRIVING
			};
			directionsServiceB2.route(requestB2, function(response, status) {
				//console.log(response);
				if (status == google.maps.DirectionsStatus.OK) {
					//console.log(newmap);
					directionsDisplayB2.setDirections(response);
				}
			});

			var directionsDisplayB3;
			var directionsServiceB3 = new google.maps.DirectionsService();
			directionsDisplayB3 = new google.maps.DirectionsRenderer({
				draggable: true,
				polylineOptions: {
					strokeColor: "red"
				},
				markerOptions: {
					visible: false
				}
			});
			directionsDisplayB3.setMap(options_map2);
			var requestB3 = {
				origin: new google.maps.LatLng(-33.837469, 151.210537),
				destination: new google.maps.LatLng(-33.875727, 151.223842),
				travelMode: google.maps.TravelMode.DRIVING
			};
			directionsServiceB3.route(requestB3, function(response, status) {
				//console.log(response);
				// if (status == google.maps.DirectionsStatus.OK) {
				//console.log(newmap);
				directionsDisplayB3.setDirections(response);
				// }
			});

		},

		onInit: function() {

			var socket = io('http://35.184.43.189:3000/');
			socket.on('connect', function() {
				//socket.emit('customer', "testing dual emit");
				console.log(socket.id);
				console.log('SUCCESS');
			});

			var that = this;

			socket.on('twin', function(msg) {
				//finalString = finalString + "\n" + "Agent: " + msg + "\n";

				console.log("MESSSGAE" + msg);
				//twinText.setText(msg);

				that.changeView(msg);
			});

		},

		changeView: function(msg) {
			var dashboard_panel = this.getView().byId("dashboard_panel");
			var video_panel = this.getView().byId("video_panel");
			var impact_panel = this.getView().byId("impact_panel");
			var options_panel = this.getView().byId("options_panel");
			var details_panel = this.getView().byId("details_panel");
			var confirm_panel = this.getView().byId("confirm_panel");

			var twinText = this.getView().byId("twinText");

			count = msg.toString();

			//count = count + 1;

			if (count === '0') {
				//Show dashboard_panel
				twinText.setText("Traffic seems to be diverting away slowly from the bridge, with the public mostly unaware yet of the incident.");
				dashboard_panel.setVisible(true);
				video_panel.setVisible(false);
				impact_panel.setVisible(false);
				options_panel.setVisible(false);
				details_panel.setVisible(false);
				confirm_panel.setVisible(false);
				var that = this;
				dashboard_panel.onAfterRendering = function() {
					that.loadMap();
					that._loadVideoTweet();
				};

			} else if (count === '1') {
				//Show video_panel

				twinText.setText("Congestion seems to have started on the bridge, with several other incidents also observed in the area.");
				dashboard_panel.setVisible(false);
				video_panel.setVisible(true);
				impact_panel.setVisible(false);
				options_panel.setVisible(false);
				details_panel.setVisible(false);
				confirm_panel.setVisible(false);

				this._loadInceptionVideo();
			} else if (count === '2') {
				//Show impact_panel

				twinText.setText("Within the hour, most lanes on the bridge will be completely closed off, resulting in major delays and impacting the upcoming southbound peak hour traffic.");

				dashboard_panel.setVisible(false);
				video_panel.setVisible(false);
				impact_panel.setVisible(true);
				options_panel.setVisible(false);
				details_panel.setVisible(false);
				confirm_panel.setVisible(false);

				var that = this;

				impact_panel.onAfterRendering = function() {
					that.loadImpactMap();
				};

			} else if (count === '3') {
				//Show options_panel

				twinText.setText("Here are our options. We can divert traffic through the Anzac Bridge or through the Lane Cove Tunnel and reduce the load on the bridge to allow for emergency services to attend the scene.");
				dashboard_panel.setVisible(false);
				video_panel.setVisible(false);
				impact_panel.setVisible(false);
				options_panel.setVisible(true);
				details_panel.setVisible(false);
				confirm_panel.setVisible(false);
				var that = this;
				options_panel.onAfterRendering = function() {
					that.loadOptionsMap();
				};
			} else if (count === '4') {
				//Show details_panel
				twinText.setText("Congestion will increase exponentially within the next two hours, creating extreme delays that could last upwards of 6 hours.");
				dashboard_panel.setVisible(false);
				video_panel.setVisible(false);
				impact_panel.setVisible(false);
				options_panel.setVisible(false);
				details_panel.setVisible(true);
				confirm_panel.setVisible(false);

				var that = this;

				details_panel.onAfterRendering = function() {
					that.loadDetailsMap();
				};

			} else if (count === '5') {
				//Show confirm_panel

				twinText.setText("I will immediately create an alert for relevant operators and notify the general public. Good day.");
				dashboard_panel.setVisible(false);
				video_panel.setVisible(false);
				impact_panel.setVisible(false);
				options_panel.setVisible(false);
				details_panel.setVisible(false);
				confirm_panel.setVisible(true);
				
				var that = this;
				
				confirm_panel.onAfterRendering = function(){
					that.loadOptionsMapConfirm();
				}

			}

		},

		_loadInceptionVideo: function() {
			var videoURL = "https://storage.googleapis.com/leoapp/MLSydTraffic2Inception.mp4";
			var html1 = new sap.ui.core.HTML({
				content: "<video controls autoplay id='videoPlyr2' width='100%' height='100%'>" +
					"<source src='" + videoURL + "' type='video/mp4'>" +
					"Your browser does not support the video tag." +
					"</video>"
			});
			var gridPanel = this.getView().byId("vidPlayer2");
			gridPanel.removeAllItems();
			// var videoName =  new sap.m.Text({text: 'Check out the video'}).addStyleClass("fontMedium sapUiTinyMarginBottom sapUiTinyMarginTop sapUiTinyMarginBegin");
			//var videoDesc =  new sap.m.Text({text: videoDescription}).addStyleClass("descText sapUiTinyMarginBottom sapUiTinyMarginBegin");
			var videoBoxContent = new sap.m.VBox({
				//items: [html1, videoName, videoDesc],
				items: [html1],
				fitContainer: true
			}).addStyleClass("");
			var videoBox = new sap.m.HBox({
				items: [videoBoxContent],
				justifyContent: "Center",
				alignItems: "Center"
			}).addStyleClass("videoHBox");
			gridPanel.addItem(videoBox);
			
			var that = this;
			
			setTimeout(function(){
				var bicycleText = that.getView().byId("bicycleText");
				bicycleText.setValue("1");
				var busText = that.getView().byId("busText");
				busText.setValue("1");
				
			}, 1000);
			
			setTimeout(function(){
				var busText = that.getView().byId("busText");
				busText.setValue("2");
				
			}, 2000);
			
			setTimeout(function(){
				var busText = that.getView().byId("busText");
				busText.setValue("3");
				
			}, 2500);
			
			setTimeout(function(){
				var bicycleText = that.getView().byId("bicycleText");
				bicycleText.setValue("2");
				
				var busText = that.getView().byId("busText");
				busText.setValue("4");
				
			}, 4000);
			
			setTimeout(function(){
				
				var busText = that.getView().byId("busText");
				busText.setValue("5");
				
			}, 6500);
			
		
			setTimeout(function(){
				var accidentText = that.getView().byId("accidentText");
				accidentText.setValue("1");
				
				var incidentText = that.getView().byId("incidentText");
				incidentText.setValue("1");
				
				var truckText = that.getView().byId("truckText");
				truckText.setValue("1");
				
			}, 18500);
			
			setInterval(function(){
				var carText = that.getView().byId("carText");
				carCount = carCount + 2;
				carText.setValue(carCount);
			}, 2000);

		},

		_loadVideoTweet: function() {
			var videoURL = "https://storage.googleapis.com/leonardo-2a5dc.appspot.com/videoplayback.mp4";
			var html1 = new sap.ui.core.HTML({
				content: "<video controls autoplay loop id='videoPlyr' width='100%' height='100%'>" +
					"<source src='" + videoURL + "' type='video/mp4'>" +
					"Your browser does not support the video tag." +
					"</video>"
			});
			var gridPanel = this.getView().byId("vidPlayer");
			gridPanel.removeAllItems();
			// var videoName =  new sap.m.Text({text: 'Check out the video'}).addStyleClass("fontMedium sapUiTinyMarginBottom sapUiTinyMarginTop sapUiTinyMarginBegin");
			//var videoDesc =  new sap.m.Text({text: videoDescription}).addStyleClass("descText sapUiTinyMarginBottom sapUiTinyMarginBegin");
			var videoBoxContent = new sap.m.VBox({
				//items: [html1, videoName, videoDesc],
				items: [html1],
				fitContainer: true
			}).addStyleClass("");
			var videoBox = new sap.m.HBox({
				items: [videoBoxContent],
				justifyContent: "Center",
				alignItems: "Center"
			}).addStyleClass("videoHBox");
			gridPanel.addItem(videoBox);

			var panel = this.getView().byId("testPanel");

			var html2 = new sap.ui.core.HTML({
				content: "<a class = 'twitter-timeline' width='440px' height='400px' href = 'https://twitter.com/TransportforNSW'> Tweets by TfNSW </a>" +
					"<script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>"
			});

			var tweetBox = new sap.m.HBox({
				items: [html2],
				justifyContent: "Center",
				alignItems: "Center"
			});

			panel.addItem(tweetBox);
		}

	});
});