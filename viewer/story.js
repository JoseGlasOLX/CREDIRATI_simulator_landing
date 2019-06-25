var story = {
"docName": "credirati-landing-simulator",
"docPath": "P_P_P",
"docVersion": "V_V_V",
"hasRetina": true,
"disableHotspots": true,
"pages": [
$.extend(new ViewerPage(),{
"index": 0,
"image": "desktop_home.png",
"image2x": "desktop_home@2x.png",
"width": 1440,
"height": 1220,
"title": "Desktop - home",
'layout' : {
	"offset": 240,
	"totalWidth": 960,
	"numberOfColumns": 12,
	"columnWidth": 60,
	"gutterWidth": 20
},
'type': 'regular',
'fixedPanels': [],
'links' : [
	{
		"rect": {
			"x": 505,
			"y": 502,
			"width": 167,
			"height": 98
		},
		"isParentFixed": false,
		"page": 1,
		"index": 0
	},
	{
		"rect": {
			"x": 767,
			"y": 502,
			"width": 167,
			"height": 98
		},
		"isParentFixed": false,
		"page": 5,
		"index": 1
	}
],
})
,$.extend(new ViewerPage(),{
"index": 1,
"image": "simulador.png",
"image2x": "simulador@2x.png",
"width": 1440,
"height": 1080,
"title": "Simulador",
'layout' : {
	"offset": 0,
	"totalWidth": 960,
	"numberOfColumns": 12,
	"columnWidth": 60,
	"gutterWidth": 20
},
'type': 'regular',
'fixedPanels': [
	{
		"constrains": {
			"top": false,
			"bottom": false,
			"left": false,
			"right": false,
			"height": false,
			"width": false
		},
		"x": 0,
		"y": 0,
		"width": 1440,
		"height": 80,
		"type": "float",
		"index": 0,
		"isFloat": true,
		"isFixedDiv": false,
		"divID": "",
		"links": [
			{
				"rect": {
					"x": 234.9774724675608,
					"y": 30.68562874251497,
					"width": 146,
					"height": 19
				},
				"isParentFixed": true,
				"page": 0,
				"index": 0
			},
			{
				"rect": {
					"x": 1069,
					"y": 18,
					"width": 141,
					"height": 44
				},
				"isParentFixed": true,
				"page": 4,
				"index": 1
			}
		],
		"image": "simulador-0.png",
		"image2x": "simulador-0@2x.png",
		"shadow": "0px 2px 6px 0 #00000040 ",
		"shadowX": 6
	}
],
'links' : [
	{
		"rect": {
			"x": 230,
			"y": 823,
			"width": 420,
			"height": 52
		},
		"isParentFixed": false,
		"page": 2,
		"index": 2
	}
],
})
,$.extend(new ViewerPage(),{
"index": 2,
"image": "datos_personales.png",
"image2x": "datos_personales@2x.png",
"width": 1440,
"height": 1406,
"title": "Datos personales",
'layout' : {
	"offset": 0,
	"totalWidth": 960,
	"numberOfColumns": 12,
	"columnWidth": 60,
	"gutterWidth": 20
},
'type': 'regular',
'fixedPanels': [
	{
		"constrains": {
			"top": false,
			"bottom": false,
			"left": false,
			"right": false,
			"height": false,
			"width": false
		},
		"x": 0,
		"y": 0,
		"width": 1440,
		"height": 80,
		"type": "float",
		"index": 0,
		"isFloat": true,
		"isFixedDiv": false,
		"divID": "",
		"links": [
			{
				"rect": {
					"x": 234.9774724675608,
					"y": 30.68562874251497,
					"width": 146,
					"height": 19
				},
				"isParentFixed": true,
				"page": 0,
				"index": 0
			},
			{
				"rect": {
					"x": 1069,
					"y": 18,
					"width": 141,
					"height": 44
				},
				"isParentFixed": true,
				"page": 4,
				"index": 1
			}
		],
		"image": "datos_personales-0.png",
		"image2x": "datos_personales-0@2x.png",
		"shadow": "0px 2px 6px 0 #00000040 ",
		"shadowX": 6
	}
],
'links' : [
	{
		"rect": {
			"x": 230,
			"y": 1151,
			"width": 420,
			"height": 52
		},
		"isParentFixed": false,
		"page": 3,
		"index": 2
	}
],
})
,$.extend(new ViewerPage(),{
"index": 3,
"image": "thanks.png",
"image2x": "thanks@2x.png",
"width": 1440,
"height": 1080,
"title": "Thanks",
'layout' : {
	"offset": 0,
	"totalWidth": 960,
	"numberOfColumns": 12,
	"columnWidth": 60,
	"gutterWidth": 20
},
'type': 'regular',
'fixedPanels': [
	{
		"constrains": {
			"top": false,
			"bottom": false,
			"left": false,
			"right": false,
			"height": false,
			"width": false
		},
		"x": 0,
		"y": 0,
		"width": 1440,
		"height": 80,
		"type": "float",
		"index": 0,
		"isFloat": true,
		"isFixedDiv": false,
		"divID": "",
		"links": [
			{
				"rect": {
					"x": 234.9774724675608,
					"y": 30.68562874251497,
					"width": 146,
					"height": 19
				},
				"isParentFixed": true,
				"page": 0,
				"index": 0
			},
			{
				"rect": {
					"x": 1069,
					"y": 18,
					"width": 141,
					"height": 44
				},
				"isParentFixed": true,
				"page": 4,
				"index": 1
			}
		],
		"image": "thanks-0.png",
		"image2x": "thanks-0@2x.png",
		"shadow": "0px 2px 6px 0 #00000040 ",
		"shadowX": 6
	}
],
'links' : [],
})
,$.extend(new ViewerPage(),{
"index": 4,
"image": "whatsapp.png",
"image2x": "whatsapp@2x.png",
"width": 1440,
"height": 1080,
"title": "WhatsApp",
'layout' : {
	"offset": 0,
	"totalWidth": 960,
	"numberOfColumns": 12,
	"columnWidth": 60,
	"gutterWidth": 20
},
'type': 'regular',
'fixedPanels': [],
'links' : [
	{
		"rect": {
			"x": 0,
			"y": 0,
			"width": 1440,
			"height": 1080
		},
		"isParentFixed": false,
		"page": 0,
		"index": 0
	}
],
})
,$.extend(new ViewerPage(),{
"index": 5,
"image": "simulador(1).png",
"image2x": "simulador(1)@2x.png",
"width": 1440,
"height": 1280,
"title": "Simulador(1)",
'layout' : {
	"offset": 0,
	"totalWidth": 960,
	"numberOfColumns": 12,
	"columnWidth": 60,
	"gutterWidth": 20
},
'type': 'regular',
'fixedPanels': [
	{
		"constrains": {
			"top": false,
			"bottom": false,
			"left": false,
			"right": false,
			"height": false,
			"width": false
		},
		"x": 0,
		"y": 0,
		"width": 1440,
		"height": 80,
		"type": "float",
		"index": 0,
		"isFloat": true,
		"isFixedDiv": false,
		"divID": "",
		"links": [
			{
				"rect": {
					"x": 234.9774724675608,
					"y": 30.68562874251497,
					"width": 146,
					"height": 19
				},
				"isParentFixed": true,
				"page": 0,
				"index": 0
			},
			{
				"rect": {
					"x": 1069,
					"y": 18,
					"width": 141,
					"height": 44
				},
				"isParentFixed": true,
				"page": 4,
				"index": 1
			}
		],
		"image": "simulador(1)-0.png",
		"image2x": "simulador(1)-0@2x.png",
		"shadow": "0px 2px 6px 0 #00000040 ",
		"shadowX": 6
	}
],
'links' : [
	{
		"rect": {
			"x": 420,
			"y": 880,
			"width": 600,
			"height": 52
		},
		"isParentFixed": false,
		"page": 6,
		"index": 2
	}
],
})
,$.extend(new ViewerPage(),{
"index": 6,
"image": "datos_personales(1).png",
"image2x": "datos_personales(1)@2x.png",
"width": 1440,
"height": 1406,
"title": "Datos personales(1)",
'layout' : {
	"offset": 0,
	"totalWidth": 960,
	"numberOfColumns": 12,
	"columnWidth": 60,
	"gutterWidth": 20
},
'type': 'regular',
'fixedPanels': [
	{
		"constrains": {
			"top": false,
			"bottom": false,
			"left": false,
			"right": false,
			"height": false,
			"width": false
		},
		"x": 0,
		"y": 0,
		"width": 1440,
		"height": 80,
		"type": "float",
		"index": 0,
		"isFloat": true,
		"isFixedDiv": false,
		"divID": "",
		"links": [
			{
				"rect": {
					"x": 234.9774724675608,
					"y": 30.68562874251497,
					"width": 146,
					"height": 19
				},
				"isParentFixed": true,
				"page": 0,
				"index": 0
			},
			{
				"rect": {
					"x": 1069,
					"y": 18,
					"width": 141,
					"height": 44
				},
				"isParentFixed": true,
				"page": 4,
				"index": 1
			}
		],
		"image": "datos_personales(1)-0.png",
		"image2x": "datos_personales(1)-0@2x.png",
		"shadow": "0px 2px 6px 0 #00000040 ",
		"shadowX": 6
	}
],
'links' : [
	{
		"rect": {
			"x": 420,
			"y": 1184,
			"width": 600,
			"height": 52
		},
		"isParentFixed": false,
		"page": 7,
		"index": 2
	}
],
})
,$.extend(new ViewerPage(),{
"index": 7,
"image": "thanks(1).png",
"image2x": "thanks(1)@2x.png",
"width": 1440,
"height": 1280,
"title": "Thanks(1)",
'layout' : {
	"offset": 0,
	"totalWidth": 960,
	"numberOfColumns": 12,
	"columnWidth": 60,
	"gutterWidth": 20
},
'type': 'regular',
'fixedPanels': [
	{
		"constrains": {
			"top": false,
			"bottom": false,
			"left": false,
			"right": false,
			"height": false,
			"width": false
		},
		"x": 0,
		"y": 0,
		"width": 1440,
		"height": 80,
		"type": "float",
		"index": 0,
		"isFloat": true,
		"isFixedDiv": false,
		"divID": "",
		"links": [
			{
				"rect": {
					"x": 234.9774724675608,
					"y": 30.68562874251497,
					"width": 146,
					"height": 19
				},
				"isParentFixed": true,
				"page": 0,
				"index": 0
			},
			{
				"rect": {
					"x": 1069,
					"y": 18,
					"width": 141,
					"height": 44
				},
				"isParentFixed": true,
				"page": 4,
				"index": 1
			}
		],
		"image": "thanks(1)-0.png",
		"image2x": "thanks(1)-0@2x.png",
		"shadow": "0px 2px 6px 0 #00000040 ",
		"shadowX": 6
	}
],
'links' : [],
})
   ]
,"resolutions": [2],
"zoomEnabled": true,
"title": "Credirati_landing_simulator",
"layersExist": true,
"totalImages": 14,
"highlightLinks": false
}
