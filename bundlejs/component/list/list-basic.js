/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/da621f3f1b8792a7f0c519a0d10d9d38", [], function(__weex_require__, exports, __weex_module__){

	;

	  __weex_module__.exports = {
	    methods: {
	      onappear: function (e) {
	        var appearId = this.rows[e.target.attr.index].id;
	        nativeLog('+++++', appearId);
	        var appearIds = this.appearIds;
	        appearIds.push(appearId);
	        this.getMinAndMaxIds(appearIds);
	      },
	      ondisappear:function (e) {
	        var disAppearId = this.rows[e.target.attr.index].id;
	        nativeLog('+++++', disAppearId);
	        var appearIds = this.appearIds;
	        var index = appearIds.indexOf(disAppearId);
	        if (index > -1) {
	          appearIds.splice(index, 1);
	        }
	        this.getMinAndMaxIds(appearIds);
	      },
	      getMinAndMaxIds:function (appearIds) {
	        appearIds.sort(function(a, b) {
	          return a - b;
	        });
	        this.appearIds = appearIds;
	        this.appearMax = appearIds[appearIds.length - 1];
	        this.appearMin = appearIds[0];
	      }
	    },
	    data: function () {return {
	      appearMin:1,
	      appearMax:1,
	      appearIds:[],
	      rows:[
	        {id: 1},
	        {id: 2},
	        {id: 3},
	        {id: 4},
	        {id: 5},
	        {id: 6},
	        {id: 7},
	        {id: 8},
	        {id: 9},
	        {id: 10},
	        {id: 11},
	        {id: 12},
	        {id: 13},
	        {id: 14},
	        {id: 15},
	        {id: 16},
	        {id: 17},
	        {id: 18},
	        {id: 19},
	        {id: 20},
	        {id: 21},
	        {id: 22},
	        {id: 23},
	        {id: 24},
	        {id: 25},
	        {id: 26},
	        {id: 27},
	        {id: 28},
	        {id: 29}
	      ]
	    }}
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "list",
	      "classList": [
	        "list"
	      ],
	      "children": [
	        {
	          "type": "cell",
	          "append": "tree",
	          "events": {
	            "appear": "onappear",
	            "disappear": "ondisappear"
	          },
	          "classList": [
	            "row"
	          ],
	          "repeat": function () {return this.rows},
	          "attr": {
	            "index": function () {return this.$index}
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "item"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "item-title"
	                  ],
	                  "attr": {
	                    "value": function () {return 'row ' + (this.id)}
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "text",
	      "classList": [
	        "count"
	      ],
	      "attr": {
	        "value": function () {return 'Appear items:' + (this.appearMin) + ' - ' + (this.appearMax)}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "list": {
	    "height": 850
	  },
	  "count": {
	    "fontSize": 48,
	    "margin": 10
	  },
	  "indicator": {
	    "height": 40,
	    "width": 40,
	    "color": "#45b5f0"
	  },
	  "row": {
	    "width": 750
	  },
	  "item": {
	    "justifyContent": "center",
	    "borderBottomWidth": 2,
	    "borderBottomColor": "#c0c0c0",
	    "height": 100,
	    "padding": 20
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/da621f3f1b8792a7f0c519a0d10d9d38", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);