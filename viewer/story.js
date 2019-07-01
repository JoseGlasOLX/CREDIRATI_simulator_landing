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
			"x": 549,
			"y": 473,
			"width": 140,
			"height": 140
		},
		"isParentFixed": false,
		"page": 1,
		"index": 0
	},
	{
		"rect": {
			"x": 751,
			"y": 473,
			"width": 140,
			"height": 140
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
"height": 1335,
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
					"x": 235,
					"y": 29,
					"width": 169.0526315789475,
					"height": 22
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
				"page": 3,
				"index": 1
			}
		],
		"image": "simulador-0.png",
		"image2x": "simulador-0@2x.png",
		"shadow": "0px 0px 4px 0 #25424240 ",
		"shadowX": 4
	}
],
'links' : [
	{
		"rect": {
			"x": 230,
			"y": 809,
			"width": 460,
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
"height": 1617,
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
					"x": 235,
					"y": 29,
					"width": 169.0526315789475,
					"height": 22
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
				"page": 3,
				"index": 1
			}
		],
		"image": "datos_personales-0.png",
		"image2x": "datos_personales-0@2x.png",
		"shadow": "0px 0px 4px 0 #25424240 ",
		"shadowX": 4
	},
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
		"y": 1517,
		"width": 1440,
		"height": 100,
		"type": "float",
		"index": 1,
		"isFloat": true,
		"isFixedDiv": false,
		"divID": "",
		"links": [],
		"image": "datos_personales-1.png",
		"image2x": "datos_personales-1@2x.png"
	}
],
'links' : [
	{
		"rect": {
			"x": 230,
			"y": 1091,
			"width": 460,
			"height": 52
		},
		"isParentFixed": false,
		"page": 4,
		"index": 2
	}
],
})
,$.extend(new ViewerPage(),{
"index": 3,
"image": "whatsapp.png",
"image2x": "whatsapp@2x.png",
"width": 360,
"height": 640,
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
			"width": 360,
			"height": 673
		},
		"isParentFixed": false,
		"page": 0,
		"index": 0
	}
],
})
,$.extend(new ViewerPage(),{
"index": 4,
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
					"x": 235,
					"y": 29,
					"width": 169.0526315789475,
					"height": 22
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
				"page": 3,
				"index": 1
			}
		],
		"image": "thanks-0.png",
		"image2x": "thanks-0@2x.png",
		"shadow": "0px 0px 4px 0 #25424240 ",
		"shadowX": 4
	},
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
		"y": 980,
		"width": 1440,
		"height": 100,
		"type": "float",
		"index": 1,
		"isFloat": true,
		"isFixedDiv": false,
		"divID": "",
		"links": [],
		"image": "thanks-1.png",
		"image2x": "thanks-1@2x.png"
	}
],
'links' : [],
})
,$.extend(new ViewerPage(),{
"index": 5,
"image": "simulador_mobile.png",
"image2x": "simulador_mobile@2x.png",
"width": 360,
"height": 1841,
"title": "Simulador mobile",
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
		"width": 360,
		"height": 24,
		"type": "float",
		"index": 0,
		"isFloat": true,
		"isFixedDiv": false,
		"divID": "",
		"links": [],
		"image": "simulador_mobile-0.png",
		"image2x": "simulador_mobile-0@2x.png"
	},
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
		"y": 24,
		"width": 360,
		"height": 56,
		"type": "float",
		"index": 1,
		"isFloat": true,
		"isFixedDiv": false,
		"divID": "",
		"links": [
			{
				"rect": {
					"x": 16,
					"y": 19,
					"width": 138.31578947368416,
					"height": 18
				},
				"isParentFixed": true,
				"page": 5,
				"index": 0
			},
			{
				"rect": {
					"x": 195,
					"y": 13,
					"width": 149,
					"height": 30
				},
				"isParentFixed": true,
				"page": 8,
				"index": 1
			}
		],
		"image": "simulador_mobile-1.png",
		"image2x": "simulador_mobile-1@2x.png"
	}
],
'links' : [
	{
		"rect": {
			"x": 16,
			"y": 807,
			"width": 328,
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
"image": "datos_personales_mobile.png",
"image2x": "datos_personales_mobile@2x.png",
"width": 360,
"height": 2114,
"title": "Datos personales Mobile",
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
		"width": 360,
		"height": 24,
		"type": "float",
		"index": 0,
		"isFloat": true,
		"isFixedDiv": false,
		"divID": "",
		"links": [],
		"image": "datos_personales_mobile-0.png",
		"image2x": "datos_personales_mobile-0@2x.png"
	},
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
		"y": 24,
		"width": 360,
		"height": 56,
		"type": "float",
		"index": 1,
		"isFloat": true,
		"isFixedDiv": false,
		"divID": "",
		"links": [
			{
				"rect": {
					"x": 16,
					"y": 19,
					"width": 138.31578947368416,
					"height": 18
				},
				"isParentFixed": true,
				"page": 5,
				"index": 0
			},
			{
				"rect": {
					"x": 195,
					"y": 13,
					"width": 149,
					"height": 30
				},
				"isParentFixed": true,
				"page": 8,
				"index": 1
			}
		],
		"image": "datos_personales_mobile-1.png",
		"image2x": "datos_personales_mobile-1@2x.png"
	}
],
'links' : [
	{
		"rect": {
			"x": 16,
			"y": 1108,
			"width": 328,
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
"image": "thanks_mobile.png",
"image2x": "thanks_mobile@2x.png",
"width": 360,
"height": 714,
"title": "Thanks Mobile",
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
		"width": 360,
		"height": 24,
		"type": "float",
		"index": 0,
		"isFloat": true,
		"isFixedDiv": false,
		"divID": "",
		"links": [],
		"image": "thanks_mobile-0.png",
		"image2x": "thanks_mobile-0@2x.png"
	},
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
		"y": 24,
		"width": 360,
		"height": 56,
		"type": "float",
		"index": 1,
		"isFloat": true,
		"isFixedDiv": false,
		"divID": "",
		"links": [
			{
				"rect": {
					"x": 16,
					"y": 19,
					"width": 138.31578947368416,
					"height": 18
				},
				"isParentFixed": true,
				"page": 5,
				"index": 0
			},
			{
				"rect": {
					"x": 195,
					"y": 13,
					"width": 149,
					"height": 30
				},
				"isParentFixed": true,
				"page": 8,
				"index": 1
			}
		],
		"image": "thanks_mobile-1.png",
		"image2x": "thanks_mobile-1@2x.png"
	}
],
'links' : [],
})
,$.extend(new ViewerPage(),{
"index": 8,
"image": "whatsapp.png",
"image2x": "whatsapp@2x.png",
"width": 360,
"height": 640,
"title": "whatsapp",
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
			"width": 360,
			"height": 673
		},
		"isParentFixed": false,
		"page": 0,
		"index": 0
	}
],
})
   ]
,"resolutions": [2],
"zoomEnabled": true,
"title": "Credirati_landing_simulator",
"layersExist": true,
"totalImages": 20,
"highlightLinks": false
}
