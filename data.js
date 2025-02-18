var APP_DATA = {
  "scenes": [
    {
      "id": "0-001-think-tink-entrance",
      "name": "001-Think Tink Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.17179365978908834,
          "pitch": 0.172305238248061,
          "rotation": 0,
          "target": "1-002-cafe-counter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-002-cafe-counter",
      "name": "002-Cafe Counter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.1683908674775232,
        "pitch": 0.1321086263521991,
        "fov": 1.2682428287914278
      },
      "linkHotspots": [
        {
          "yaw": -1.4170972121571364,
          "pitch": 0.42799961349241755,
          "rotation": 1.5707963267948966,
          "target": "2-003-cafe-seating"
        },
        {
          "yaw": -2.997686927070273,
          "pitch": 0.321795617740797,
          "rotation": 0,
          "target": "0-001-think-tink-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-003-cafe-seating",
      "name": "003-Cafe Seating",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.15081400776725218,
          "pitch": 0.3126573677079758,
          "rotation": 0,
          "target": "3-004-bookstore"
        },
        {
          "yaw": 1.7920222505386851,
          "pitch": 0.42251149501979945,
          "rotation": 1.5707963267948966,
          "target": "1-002-cafe-counter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-004-bookstore",
      "name": "004-Bookstore",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5647017064206281,
          "pitch": 0.3442551578710873,
          "rotation": 0.7853981633974483,
          "target": "4-005-exhibition-space_entrance"
        },
        {
          "yaw": -3.0024169162741217,
          "pitch": 0.29030575324907737,
          "rotation": 0,
          "target": "2-003-cafe-seating"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-005-exhibition-space_entrance",
      "name": "005-Exhibition Space_Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5013917630749454,
          "pitch": 0.29976169652489304,
          "rotation": 0,
          "target": "5-006-exhibtion-space_center"
        },
        {
          "yaw": -0.5180460041422101,
          "pitch": -0.6047592489226261,
          "rotation": 0,
          "target": "8-009-exhibition-space_high-level"
        },
        {
          "yaw": -0.09736385908762557,
          "pitch": 0.14292965101008193,
          "rotation": 0,
          "target": "7-008-exhibition-space_exit"
        },
        {
          "yaw": -0.2970897799581529,
          "pitch": 0.16711157192109383,
          "rotation": 0,
          "target": "10-011-exhibition-space_poster"
        },
        {
          "yaw": 2.3796660159268512,
          "pitch": 0.25826901717810813,
          "rotation": 0,
          "target": "3-004-bookstore"
        },
        {
          "yaw": -0.6325528676632928,
          "pitch": 0.14999761931323974,
          "rotation": 0,
          "target": "9-010_exhibition-space-under-platform"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-006-exhibtion-space_center",
      "name": "006-Exhibtion Space_Center",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.026814149389373654,
          "pitch": 0.42358089164774526,
          "rotation": 0,
          "target": "10-011-exhibition-space_poster"
        },
        {
          "yaw": 0.07536871733194417,
          "pitch": 0.2199327857735227,
          "rotation": 0,
          "target": "7-008-exhibition-space_exit"
        },
        {
          "yaw": 2.6212622696220986,
          "pitch": 0.29211611009578675,
          "rotation": 0,
          "target": "4-005-exhibition-space_entrance"
        },
        {
          "yaw": -0.9775738695582756,
          "pitch": 0.45545361613815416,
          "rotation": 0,
          "target": "9-010_exhibition-space-under-platform"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-007-exhibition-space_end",
      "name": "007-Exhibition Space_End",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5557604925424329,
          "pitch": 0.6344974651364126,
          "rotation": 1.5707963267948966,
          "target": "7-008-exhibition-space_exit"
        },
        {
          "yaw": 0.41811984985208994,
          "pitch": 0.2624850660830056,
          "rotation": 0,
          "target": "9-010_exhibition-space-under-platform"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-008-exhibition-space_exit",
      "name": "008-Exhibition Space_Exit",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.47011252720531616,
          "pitch": 0.29845071973923254,
          "rotation": 0,
          "target": "9-010_exhibition-space-under-platform"
        },
        {
          "yaw": 0.6949019955557958,
          "pitch": 0.7949083013724589,
          "rotation": 0,
          "target": "10-011-exhibition-space_poster"
        },
        {
          "yaw": -0.3190034421148198,
          "pitch": 0.3244536630214796,
          "rotation": 0,
          "target": "5-006-exhibtion-space_center"
        },
        {
          "yaw": -0.39014025660659435,
          "pitch": -0.5045146363593442,
          "rotation": 0,
          "target": "8-009-exhibition-space_high-level"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-009-exhibition-space_high-level",
      "name": "009-Exhibition Space_High Level",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.323393592891021,
          "pitch": 0.42827780861039955,
          "rotation": 0,
          "target": "7-008-exhibition-space_exit"
        },
        {
          "yaw": 0.02578177292068773,
          "pitch": 0.6448298361200457,
          "rotation": 0,
          "target": "10-011-exhibition-space_poster"
        },
        {
          "yaw": 2.965374154947675,
          "pitch": 0.4971850780741125,
          "rotation": 0,
          "target": "4-005-exhibition-space_entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-010_exhibition-space-under-platform",
      "name": "010_Exhibition Space Under Platform",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.23005287750068426,
          "pitch": 0.27993368705284993,
          "rotation": 0.7853981633974483,
          "target": "6-007-exhibition-space_end"
        },
        {
          "yaw": 0.8896908355969657,
          "pitch": 0.29609342505266056,
          "rotation": 0,
          "target": "10-011-exhibition-space_poster"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-011-exhibition-space_poster",
      "name": "011-Exhibition Space_Poster",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1985515348651195,
          "pitch": 0.3728581650845264,
          "rotation": 0,
          "target": "9-010_exhibition-space-under-platform"
        },
        {
          "yaw": -2.9193745393935835,
          "pitch": 0.48222850859647437,
          "rotation": 0,
          "target": "5-006-exhibtion-space_center"
        },
        {
          "yaw": 3.0236453351640007,
          "pitch": 0.27305212260679923,
          "rotation": 0,
          "target": "4-005-exhibition-space_entrance"
        },
        {
          "yaw": 0.6671866878745636,
          "pitch": 0.6686840015963895,
          "rotation": 0,
          "target": "7-008-exhibition-space_exit"
        },
        {
          "yaw": -2.8943696522398206,
          "pitch": -0.5682312328308523,
          "rotation": 0,
          "target": "8-009-exhibition-space_high-level"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "The Collaboration Ground Kuching 360°VR Tour - 2025",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
