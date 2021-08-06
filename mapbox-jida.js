mapboxgl.accessToken =
  "pk.eyJ1Ijoiam1hY3NjbSIsImEiOiJja2ZwazhyMWowODlyMnRzNWV5NHVlNmdtIn0.ju2jq-zqLGP8ILbM2PC_dQ";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/satellite-streets-v11",
  center: [-94.408537, 37.061272],
  zoom: 15.5,
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
        coordinates: [
          [
            [-94.3986028432846, 37.065827745169585],
            [-94.39864575862885, 37.06421825905177],
            [-94.40057694911957, 37.064252503792844],
            [-94.4007056951523, 37.061393014667544],
            [-94.39853847026825, 37.06134164561389],
            [-94.39845263957979, 37.06317378702341],
            [-94.39722955226898, 37.06313954179541],
            [-94.39709544181824, 37.0658020621486],
            [-94.3986028432846, 37.065827745169585],
          ],
        ],
      },
    },
  });

  map.addSource("property5", {
    type: "geojson",
    data: {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-94.40451979637145, 37.067180371985415],
            [-94.40242767333984, 37.0671546894224],
            [-94.40244913101196, 37.06597328212425],
            [-94.39859747886656, 37.065879111185474],
            [-94.39847946166992, 37.06838744263677],
            [-94.39943432807922, 37.068404564068075],
            [-94.39947724342348, 37.06772826459096],
            [-94.4008505344391, 37.06779675088838],
            [-94.40080761909486, 37.068455928338956],
            [-94.40217018127441, 37.06796796636137],
            [-94.40316796302795, 37.067899480218536],
            [-94.40389752388, 37.067702582213464],
            [-94.40451979637145, 37.067180371985415],
          ],
        ],
      },
    },
  });

  map.addSource("property6", {
    type: "geojson",
    data: {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-94.39270734786987, 37.0611019229037],
            [-94.38695669174193, 37.06094781504715],
            [-94.3869137763977, 37.06276284326689],
            [-94.39193487167358, 37.0628998247664],
            [-94.39204216003418, 37.061495752670474],
            [-94.39268589019775, 37.06130739955882],
            [-94.39270734786987, 37.0611019229037],
          ],
        ],
      },
    },
  });

  map.addSource("property7", {
    type: "geojson",
    data: {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-94.40457344055176, 37.06712900685072],
            [-94.40471291542052, 37.06697491123795],
            [-94.40394043922423, 37.06697491123795],
            [-94.40396189689635, 37.06602464804157],
            [-94.40252423286438, 37.06599896508727],
            [-94.40250277519226, 37.06712044599155],
            [-94.40457344055176, 37.06712900685072],
          ],
        ],
      },
    },
  });

  map.addSource("property8", {
    type: "geojson",
    data: {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-94.39590454101562, 37.0611019229037],
            [-94.39611911773682, 37.056101819433],
            [-94.3911623954773, 37.05599907412592],
            [-94.39056158065794, 37.0540811361903],
            [-94.38809394836426, 37.05404688685806],
            [-94.38798666000366, 37.05656417159325],
            [-94.38730001449585, 37.05656417159325],
            [-94.38708543777466, 37.06096493815779],
            [-94.39590454101562, 37.0611019229037],
          ],
        ],
      },
    },
  });

  map.addSource("property9", {
    type: "geojson",
    data: {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-94.39979910850525, 37.054252382619715],
            [-94.3971276283264, 37.05420100873147],
            [-94.39677357673645, 37.05434656799118],
            [-94.39668774604797, 37.05478324409507],
            [-94.39626932144165, 37.05585351803607],
            [-94.396151304245, 37.05772003966834],
            [-94.39972400665283, 37.05772003966834],
            [-94.39979910850525, 37.054252382619715],
          ],
        ],
      },
    },
  });

  map.addSource("property10", {
    type: "geojson",
    data: {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-94.39618349075317, 37.057779973088344],
            [-94.3960976600647, 37.06092213037395],
            [-94.39630150794981, 37.061136169051544],
            [-94.40090417861938, 37.06116185365227],
            [-94.4009792804718, 37.05979199614474],
            [-94.40385460853577, 37.05980055783098],
            [-94.40389752387999, 37.05890157550126],
            [-94.40521717071533, 37.05890157550126],
            [-94.40521717071533, 37.05867040689479],
            [-94.40389752387999, 37.05865328326628],
            [-94.40389752387999, 37.057771411174095],
            [-94.39618349075317, 37.057779973088344],
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

  map.addLayer({
    id: "property5",
    type: "fill",
    source: "property5", // reference the data source
    layout: {},
    paint: {
      "fill-color": "#FFFF00", // blue color fill
      "fill-opacity": 0.5,
    },
  });

  map.addLayer({
    id: "outline5",
    type: "line",
    source: "property5",
    layout: {},
    paint: {
      "line-color": "#fff",
      "line-width": 2,
    },
  });

  map.addLayer({
    id: "property6",
    type: "fill",
    source: "property6", // reference the data source
    layout: {},
    paint: {
      "fill-color": "#FFFF00", // blue color fill
      "fill-opacity": 0.5,
    },
  });

  map.addLayer({
    id: "outline6",
    type: "line",
    source: "property6",
    layout: {},
    paint: {
      "line-color": "#fff",
      "line-width": 2,
    },
  });

  map.addLayer({
    id: "property7",
    type: "fill",
    source: "property7", // reference the data source
    layout: {},
    paint: {
      "fill-color": "#FFFF00", // blue color fill
      "fill-opacity": 0.5,
    },
  });

  map.addLayer({
    id: "outline7",
    type: "line",
    source: "property7",
    layout: {},
    paint: {
      "line-color": "#fff",
      "line-width": 2,
    },
  });

  map.addLayer({
    id: "property8",
    type: "fill",
    source: "property8", // reference the data source
    layout: {},
    paint: {
      "fill-color": "#FFFF00", // blue color fill
      "fill-opacity": 0.5,
    },
  });

  map.addLayer({
    id: "outline8",
    type: "line",
    source: "property8",
    layout: {},
    paint: {
      "line-color": "#fff",
      "line-width": 2,
    },
  });

  map.addLayer({
    id: "property9",
    type: "fill",
    source: "property9", // reference the data source
    layout: {},
    paint: {
      "fill-color": "#FFFF00", // blue color fill
      "fill-opacity": 0.5,
    },
  });

  map.addLayer({
    id: "outline9",
    type: "line",
    source: "property9",
    layout: {},
    paint: {
      "line-color": "#fff",
      "line-width": 2,
    },
  });

  map.addLayer({
    id: "property10",
    type: "fill",
    source: "property10", // reference the data source
    layout: {},
    paint: {
      "fill-color": "#FFFF00", // blue color fill
      "fill-opacity": 0.5,
    },
  });

  map.addLayer({
    id: "outline10",
    type: "line",
    source: "property10",
    layout: {},
    paint: {
      "line-color": "#fff",
      "line-width": 2,
    },
  });
});

var chapters = {
  20501500000018000: {
    duration: 5000,
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
  "20601400000009000": {
    bearing: 90,
    duration: 5000,
    center: [-94.3913765107584, 37.0583299798448],
    zoom: 15.3,
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
    zoom: 15.3,
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
  // if (chapterName === activeChapterName) return;

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
