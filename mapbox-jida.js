mapboxgl.accessToken =
  "pk.eyJ1Ijoiam1hY3NjbSIsImEiOiJja2ZwazhyMWowODlyMnRzNWV5NHVlNmdtIn0.ju2jq-zqLGP8ILbM2PC_dQ";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/satellite-streets-v11",
  //style: 'mapbox://styles/mapbox/light-v10',
  center: [-94.408537, 37.061272],
  zoom: 10.5,
  pitch: 45,
  bearing: -17.6,
  container: "map",
  antialias: true,
  interactive: false,
});

map.on("load", function () {
  // Insert the layer beneath any symbol layer.
  var layers = map.getStyle().layers;

  var labelLayerId;
  for (var i = 0; i < layers.length; i++) {
    if (layers[i].type === "symbol" && layers[i].layout["text-field"]) {
      labelLayerId = layers[i].id;
      break;
    }
  }

  map.addSource("property1", {
    type: "geojson",
    data: {
      type: "Feature",
      geometry: {
        type: "Polygon",
        // These coordinates outline Maine.
        coordinates: [
          [
            [-94.41299557685852, 37.065151422716326],
            [-94.41288828849792, 37.064047035114655],
            [-94.41368222236633, 37.06407271872985],
            [-94.4137680530548, 37.06164985941398],
            [-94.4121265411377, 37.061589929050946],
            [-94.41194415092468, 37.06385012710913],
            [-94.41019535064697, 37.06382444341855],
            [-94.41013097763062, 37.06512573946634],
            [-94.41299557685852, 37.065151422716326],
          ],
        ],
      },
    },
  });

  map.addSource("property2", {
    type: "geojson",
    data: {
      type: "Feature",
      geometry: {
        type: "Polygon",
        // These coordinates outline Maine.
        coordinates: [
          [
            [-94.42281246185303, 37.06173547413623],
            [-94.4176197052002, 37.06173547413623],
            [-94.41755533218384, 37.063062489975856],
            [-94.41693305969238, 37.0633278903582],
            [-94.41750168800354, 37.06434667675104],
            [-94.41908955574036, 37.06380732095334],
            [-94.41915392875671, 37.0619751948445],
            [-94.41926121711731, 37.06183821167538],
            [-94.42274808883667, 37.06182108876186],
            [-94.42281246185303, 37.06173547413623],
          ],
        ],
      },
    },
  });

  map.addSource("property3", {
    type: "geojson",
    data: {
      type: "Feature",
      geometry: {
        type: "Polygon",
        // These coordinates outline Maine.
        coordinates: [
          [
            [-94.41440105438232, 37.061607052016626],
            [-94.41428303718567, 37.06400422906997],
            [-94.41729784011841, 37.06301968337559],
            [-94.41730856895447, 37.06214642345808],
            [-94.41518425941467, 37.06210361634092],
            [-94.41518425941467, 37.06162417497849],
            [-94.41440105438232, 37.061607052016626],
          ],
        ],
      },
    },
  });

  map.addSource("property4", {
    type: "geojson",
    data: {
      type: "Feature",
      geometry: {
        type: "Polygon",
        // These coordinates outline Maine.
        coordinates: [
          [
            [-94.40066814422607, 37.06135020712526],
            [-94.39898371696472, 37.061324522588315],
            [-94.39884424209595, 37.063833004649716],
            [-94.39776062965393, 37.06380732095334],
            [-94.39764261245728, 37.065939038160025],
            [-94.39903736114502, 37.06595616014408],
            [-94.39909100532532, 37.06492027315344],
            [-94.40048575401306, 37.064971639783835],
            [-94.40066814422607, 37.06135020712526],
          ],
        ],
      },
    },
  });

  map.addLayer({
    id: "property1",
    type: "fill",
    source: "property1", // reference the data source
    layout: {},
    paint: {
      "fill-color": "#FFFF00", // blue color fill
      "fill-opacity": 0.5,
    },
  });

  map.addLayer({
    id: "outline1",
    type: "line",
    source: "property1",
    layout: {},
    paint: {
      "line-color": "#fff",
      "line-width": 2,
    },
  });

  map.addLayer({
    id: "property2",
    type: "fill",
    source: "property2", // reference the data source
    layout: {},
    paint: {
      "fill-color": "#FFFF00", // blue color fill
      "fill-opacity": 0.5,
    },
  });

  map.addLayer({
    id: "outline2",
    type: "line",
    source: "property2",
    layout: {},
    paint: {
      "line-color": "#fff",
      "line-width": 2,
    },
  });

  map.addLayer({
    id: "property3",
    type: "fill",
    source: "property3", // reference the data source
    layout: {},
    paint: {
      "fill-color": "#FFFF00", // blue color fill
      "fill-opacity": 0.5,
    },
  });

  map.addLayer({
    id: "outline3",
    type: "line",
    source: "property3",
    layout: {},
    paint: {
      "line-color": "#fff",
      "line-width": 2,
    },
  });

  map.addLayer({
    id: "property4",
    type: "fill",
    source: "property4", // reference the data source
    layout: {},
    paint: {
      "fill-color": "#FFFF00", // blue color fill
      "fill-opacity": 0.5,
    },
  });

  map.addLayer({
    id: "outline4",
    type: "line",
    source: "property4",
    layout: {},
    paint: {
      "line-color": "#fff",
      "line-width": 2,
    },
  });
});

var chapters = {
  20501500000018000: {
    bearing: -17.6,
    center: [-94.4123795520438, 37.0636297780706],
    zoom: 15.5,
    pitch: 45,
  },
  20501500000022000: {
    duration: 5000,
    center: [-94.4183051561627, 37.0628132282047],
    bearing: 27,
    zoom: 16.5,
    pitch: 90,
  },
  20501500000022004: {
    bearing: 27,
    duration: 5000,
    center: [-94.41545962, 37.06280267],
    zoom: 16,
    pitch: 40,
  },
  20601400000001004: {
    bearing: 90,
    duration: 5000,
    center: [-94.3991728362129, 37.0637318649629],
    zoom: 16,
  },
  20601400000004000: {
    bearing: 27,
    duration: 5000,
    center: [-94.4010070096067, 37.0671035316359],
    zoom: 16,
    pitch: 40,
  },
  "20601400000004006": {
    bearing: 90,
    duration: 5000,
    center: [-94.3899551197681, 37.0621345989786],
    zoom: 17,
    pitch: 60,
  },
  "20601400000006001": {
    bearing: 120,
    duration: 5000,
    center: [-94.4033887437644, 37.0665080402237],
    zoom: 17.3,
    pitch: 60,
  },
  20601400000009000: {
    bearing: 90,
    duration: 5000,
    center: [-94.3913765107584, 37.0583299798448],
    zoom: 17.3,
    pitch: 20,
  },
  "20601400000009007": {
    bearing: 90,
    duration: 5000,
    center: [-94.3979766779043, 37.055969780506],
    zoom: 17.3,
    pitch: 20,
  },
  "20601400000009008": {
    bearing: 90,
    duration: 5000,
    center: [-94.3996359999526, 37.0592998266729],
    zoom: 17.3,
    pitch: 20,
  },
};

// On every scroll event, check which element is on screen
window.onscroll = function () {
  var chapterNames = Object.keys(chapters);
  for (var i = 0; i < chapterNames.length; i++) {
    var chapterName = chapterNames[i];
    if (isElementOnScreen(chapterName)) {
      setActiveChapter(chapterName);
      break;
    }
  }
};

var activeChapterName = "20501500000018000";
function setActiveChapter(chapterName) {
  if (chapterName === activeChapterName) return;

  map.flyTo(chapters[chapterName]);

  document.getElementById(chapterName).setAttribute("class", "active");
  document.getElementById(activeChapterName).setAttribute("class", "");

  activeChapterName = chapterName;
}

function isElementOnScreen(id) {
  var element = document.getElementById(id);
  var bounds = element.getBoundingClientRect();
  return bounds.top < window.innerHeight && bounds.bottom > 300;
}
