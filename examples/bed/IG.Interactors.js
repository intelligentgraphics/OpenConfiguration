
/* This file is part of the IG Data Packages.
 * Copyright (C) 2020 intelligentgraphics. All Rights Reserved. */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var IG;
(function (IG) {
    var Interactors;
    (function (Interactors) {
    })(Interactors = IG.Interactors || (IG.Interactors = {}));
})(IG || (IG = {}));
IG.Interactors.AR_Cushion_L = {
	"Id": "AR_Cushion_L",
	"Animations": [
		{
			"_": "AR_Kissen",
			"Path": "o1.o1",
			"States": {
				"0.0": {
					"Position": {
						"X": 0.0,
						"Y": 0.359
					},
					"Rotation": {
						"Z": 0.0
					}
				},
				"0.5": {
					"Position": {
						"X": 0.013,
						"Y": 0.36
					},
					"Rotation": {
						"Z": 72.5
					}
				},
				"1.0": {
					"Position": {
						"X": 0.003,
						"Y": 0.36
					},
					"Rotation": {
						"Z": 145
					}
				}
			}
		}
	]
};
IG.Interactors.AR_Cushion_R = {
	"Id": "AR_Cushion_R",
	"Animations": [
		{
			"_": "AR_Kissen",
			"Path": "o1.o1",
			"States": {
				"0.0": {
					"Position": {
						"X": 0.15,
						"Y": 0.359
					},
					"Rotation": {
						"Z": 0.0
					}
				},
				"0.5": {
					"Position": {
						"X": 0.137,
						"Y": 0.36
					},
					"Rotation": {
						"Z": -72.5
					}
				},
				"1.0": {
					"Position": {
						"X": 0.147,
						"Y": 0.36
					},
					"Rotation": {
						"Z": -145
					}
				}
			}
		}
	]
};
IG.Interactors.BK_Fkt_L = {
	"Id": "BK_Fkt_L",
	"Animations": [
		{
			"_": "Rail_back_L  -  hinten",
			"Path": "o1",
			"States": {
				"0.0": {
					"Rotation": {
						"Z": 206
					},
					"Scaling": {
						"X": 1.0
					}
				},
				"0.25": {
					"Rotation": {
						"Z": 224.0
					},
					"Scaling": {
						"X": 1.07
					}
				},
				"0.5": {
					"Rotation": {
						"Z": 239
					},
					"Scaling": {
						"X": 1.15
					}
				},
				"0.75": {
					"Rotation": {
						"Z": 224.0
					},
					"Scaling": {
						"X": 1.07
					}
				},
				"1.0": {
					"Rotation": {
						"Z": 206
					},
					"Scaling": {
						"X": 1.0
					}
				}
			}
		},
		{
			"_": "Rail_front_R  -  hinten",
			"Path": "o2",
			"States": {
				"0.0": {
					"Rotation": {
						"Z": 194.0
					},
					"Scaling": {
						"X": 1.15
					}
				},
				"0.25": {
					"Rotation": {
						"Z": 214.0
					},
					"Scaling": {
						"X": 1.07
					}
				},
				"0.5": {
					"Rotation": {
						"Z": 233.0
					},
					"Scaling": {
						"X": 1.14
					}
				},
				"0.75": {
					"Rotation": {
						"Z": 214.0
					},
					"Scaling": {
						"X": 1.07
					}
				},
				"1.0": {
					"Rotation": {
						"Z": 194.0
					},
					"Scaling": {
						"X": 1.15
					}
				}
			}
		},
		{
			"_": "Spring_R  -  hinten",
			"Path": "o3",
			"States": {
				"0.0": {
					"Rotation": {
						"Z": 191.0
					},
					"Scaling": {
						"X": 1.0
					}
				},
				"0.25": {
					"Rotation": {
						"Z": 198
					},
					"Scaling": {
						"X": 1.0
					}
				},
				"0.5": {
					"Rotation": {
						"Z": 205
					},
					"Scaling": {
						"X": 0.95
					}
				},
				"0.75": {
					"Rotation": {
						"Z": 198
					},
					"Scaling": {
						"X": 1.0
					}
				},
				"1.0": {
					"Rotation": {
						"Z": 191.0
					},
					"Scaling": {
						"X": 1.0
					}
				}
			}
		},
		{
			"_": "Rail_back_L  -  vorne",
			"Path": "o4",
			"States": {
				"0.0": {
					"Rotation": {
						"Z": 206
					},
					"Scaling": {
						"X": 1.0
					}
				},
				"0.25": {
					"Rotation": {
						"Z": 224.0
					},
					"Scaling": {
						"X": 1.07
					}
				},
				"0.5": {
					"Rotation": {
						"Z": 239
					},
					"Scaling": {
						"X": 1.15
					}
				},
				"0.75": {
					"Rotation": {
						"Z": 224.0
					},
					"Scaling": {
						"X": 1.07
					}
				},
				"1.0": {
					"Rotation": {
						"Z": 206
					},
					"Scaling": {
						"X": 1.0
					}
				}
			}
		},
		{
			"_": "Rail_front_R  -  vorne",
			"Path": "o5",
			"States": {
				"0.0": {
					"Rotation": {
						"Z": 194.0
					},
					"Scaling": {
						"X": 1.15
					}
				},
				"0.25": {
					"Rotation": {
						"Z": 214.0
					},
					"Scaling": {
						"X": 1.07
					}
				},
				"0.5": {
					"Rotation": {
						"Z": 233.0
					},
					"Scaling": {
						"X": 1.14
					}
				},
				"0.75": {
					"Rotation": {
						"Z": 214.0
					},
					"Scaling": {
						"X": 1.07
					}
				},
				"1.0": {
					"Rotation": {
						"Z": 194.0
					},
					"Scaling": {
						"X": 1.15
					}
				}
			}
		},
		{
			"_": "Spring_R  -  vorne",
			"Path": "o6",
			"States": {
				"0.0": {
					"Rotation": {
						"Z": 191.0
					},
					"Scaling": {
						"X": 1.0
					}
				},
				"0.25": {
					"Rotation": {
						"Z": 198
					},
					"Scaling": {
						"X": 1.0
					}
				},
				"0.5": {
					"Rotation": {
						"Z": 205
					},
					"Scaling": {
						"X": 0.95
					}
				},
				"0.75": {
					"Rotation": {
						"Z": 198
					},
					"Scaling": {
						"X": 1.0
					}
				},
				"1.0": {
					"Rotation": {
						"Z": 191.0
					},
					"Scaling": {
						"X": 1.0
					}
				}
			}
		}
	]
};
IG.Interactors.BK_Fkt_MA_L = {
	"Id": "BK_Fkt_MA_L",
	"Animations": [
		{
			"_": "UB_G_top_100_20",
			"Path": "o3.o1",
			"States": {
				"0.0": {
					"Position": {
						"X": 0.0,
						"Y": 0.0
					},					
					"Rotation": {
						"Z": 0.0
					}
				},
				"0.5": {
					"Position": {
						"X": 0.15,
						"Y": 0.05
					},
					"Rotation": {
						"Z": 25
					}
				},
				"1.0": {
					"Position": {
						"X": 0.0,
						"Y": 0.0
					},					
					"Rotation": {
						"Z": 0.0
					}
				}
			}
		},
		{
			"_": "Matratze",
			"Path": "o3.o1.o1.o2",
			"States": {
				"0.0": {
					"Position": {
						"X": 0.01
					}
				},
				"0.5": {
					"Position": {
						"X": 0.025
					}
				},
				"1.0": {
					"Position": {
						"X": 0.01
					}
				}
			}
		},
		{
			"_": "Kissen",
			"Path": "o8.o1",
			"States": {
				"0.0": {
					"Visibility": true
				},
				"0.01": {
					"Visibility": false
				},
				"0.999": {
					"Visibility": true
				}
			}
		},
		{
			"_": "Kissen",
			"Path": "o8.o2",
			"States": {
				"0.0": {
					"Visibility": true
				},
				"0.01": {
					"Visibility": false
				},
				"0.999": {
					"Visibility": true
				}
			}
		},
		{
			"_": "Kissen",
			"Path": "o8.o3",
			"States": {
				"0.0": {
					"Visibility": true
				},
				"0.01": {
					"Visibility": false
				},
				"0.999": {
					"Visibility": true
				}
			}
		},
		{
			"_": "Kissen",
			"Path": "o8.o4",
			"States": {
				"0.0": {
					"Visibility": true
				},
				"0.01": {
					"Visibility": false
				},
				"0.999": {
					"Visibility": true
				}
			}
		},
		{
			"_": "Decke",
			"Path": "o8.o5",
			"States": {
				"0.0": {
					"Visibility": true
				},
				"0.01": {
					"Visibility": false
				},
				"0.999": {
					"Visibility": true
				}
			}
		}
	]
};
IG.Interactors.BK_Fkt_MA_R = {
	"Id": "BK_Fkt_MA_R",
	"Animations": [
		{
			"_": "UB_G_top_100_20",
			"Path": "o3",
			"States": {
				"0.0": {
					"Position": {
						"X": "Param1",
						"Y": 0.188
					},					
					"Rotation": {
						"Z": 0.0
					}
				},
				"0.5": {
					"Position": {
						"X": "Param2",
						"Y": 0.238
					},
					"Rotation": {
						"Z": 25
					}
				},
				"1.0": {
					"Position": {
						"X": "Param1",
						"Y": 0.188
					},					
					"Rotation": {
						"Z": 0.0
					}
				}
			}
		},
		{
			"_": "Matratze",
			"Path": "o3.o2",
			"States": {
				"0.0": {
					"Position": {
						"X": 0.01
					}
				},
				"0.5": {
					"Position": {
						"X": 0.025
					}
				},
				"1.0": {
					"Position": {
						"X": 0.01
					}
				}
			}
		}
	]
};
IG.Interactors.BK_Fkt_MA_S_L = {
	"Id": "BK_Fkt_MA_S_L",
	"Animations": [
		{
			"_": "UB_G_top_100_20",
			"Path": "o3.o1",
			"States": {
				"0.0": {
					"Position": {
						"X": 0.0,
						"Y": 0.0
					},					
					"Rotation": {
						"Z": 0.0
					}
				},
				"0.5": {
					"Position": {
						"X": 0.15,
						"Y": 0.05
					},
					"Rotation": {
						"Z": 25
					}
				},
				"1.0": {
					"Position": {
						"X": 0.0,
						"Y": 0.0
					},					
					"Rotation": {
						"Z": 0.0
					}
				}
			}
		},
		{
			"_": "Matratze",
			"Path": "o3.o1.o1.o2",
			"States": {
				"0.0": {
					"Position": {
						"X": -0.005
					}
				},
				"0.5": {
					"Position": {
						"X": 0.025
					}
				},
				"1.0": {
					"Position": {
						"X": -0.005
					}
				}
			}
		},
		{
			"_": "Kissen",
			"Path": "o8.o1",
			"States": {
				"0.0": {
					"Visibility": true
				},
				"0.01": {
					"Visibility": false
				},
				"0.999": {
					"Visibility": true
				}
			}
		},
		{
			"_": "Kissen",
			"Path": "o8.o2",
			"States": {
				"0.0": {
					"Visibility": true
				},
				"0.01": {
					"Visibility": false
				},
				"0.999": {
					"Visibility": true
				}
			}
		},
		{
			"_": "Kissen",
			"Path": "o8.o3",
			"States": {
				"0.0": {
					"Visibility": true
				},
				"0.01": {
					"Visibility": false
				},
				"0.999": {
					"Visibility": true
				}
			}
		},
		{
			"_": "Kissen",
			"Path": "o8.o4",
			"States": {
				"0.0": {
					"Visibility": true
				},
				"0.01": {
					"Visibility": false
				},
				"0.999": {
					"Visibility": true
				}
			}
		},
		{
			"_": "Decke",
			"Path": "o8.o5",
			"States": {
				"0.0": {
					"Visibility": true
				},
				"0.01": {
					"Visibility": false
				},
				"0.999": {
					"Visibility": true
				}
			}
		}
	]
};
IG.Interactors.BK_Fkt_MA_S_R = {
	"Id": "BK_Fkt_MA_S_R",
	"Animations": [
		{
			"_": "UB_G_top_100_20",
			"Path": "o3",
			"States": {
				"0.0": {
					"Position": {
						"X": "Param1",
						"Y": 0.188
					},					
					"Rotation": {
						"Z": 0.0
					}
				},
				"0.5": {
					"Position": {
						"X": "Param2",
						"Y": 0.238
					},
					"Rotation": {
						"Z": 25
					}
				},
				"1.0": {
					"Position": {
						"X": "Param1",
						"Y": 0.188
					},					
					"Rotation": {
						"Z": 0.0
					}
				}
			}
		},
		{
			"_": "Matratze",
			"Path": "o3.o2",
			"States": {
				"0.0": {
					"Position": {
						"X": -0.005
					}
				},
				"0.5": {
					"Position": {
						"X": 0.025
					}
				},
				"1.0": {
					"Position": {
						"X": -0.005
					}
				}
			}
		}
	]
};
IG.Interactors.BK_Fkt_R = {
	"Id": "BK_Fkt_R",
	"Animations": [
		{
			"_": "Rail_back_L  -  hinten",
			"Path": "o1",
			"States": {
				"0.0": {
					"Rotation": {
						"Z": -26.0
					},
					"Scaling": {
						"X": 1.0
					}
				},
				"0.25": {
					"Rotation": {
						"Z": -36.0
					},
					"Scaling": {
						"X": 1.15
					}
				},
				"0.5": {
					"Rotation": {
						"Z": -60
					},
					"Scaling": {
						"X": 1.15
					}
				},
				"0.75": {
					"Rotation": {
						"Z": -36.0
					},
					"Scaling": {
						"X": 1.15
					}
				},
				"1.0": {
					"Rotation": {
						"Z": -26.0
					},
					"Scaling": {
						"X": 1.0
					}
				}
			}
		},
		{
			"_": "Rail_front_R  -  hinten",
			"Path": "o2",
			"States": {
				"0.0": {
					"Rotation": {
						"Z": -14.0
					},
					"Scaling": {
						"X": 1.15
					}
				},
				"0.25": {
					"Rotation": {
						"Z": -33.0
					},
					"Scaling": {
						"X": 1.07
					}
				},
				"0.5": {
					"Rotation": {
						"Z": -52.0
					},
					"Scaling": {
						"X": 1.14
					}
				},
				"0.75": {
					"Rotation": {
						"Z": -33.0
					},
					"Scaling": {
						"X": 1.07
					}
				},
				"1.0": {
					"Rotation": {
						"Z": -14.0
					},
					"Scaling": {
						"X": 1.15
					}
				}
			}
		},
		{
			"_": "Spring_R  -  hinten",
			"Path": "o3",
			"States": {
				"0.0": {
					"Rotation": {
						"Z": -11.0
					},
					"Scaling": {
						"X": 1.0
					}
				},
				"0.25": {
					"Rotation": {
						"Z": -15
					},
					"Scaling": {
						"X": 1.0
					}
				},
				"0.5": {
					"Rotation": {
						"Z": -25
					},
					"Scaling": {
						"X": 0.95
					}
				},
				"0.75": {
					"Rotation": {
						"Z": -15
					},
					"Scaling": {
						"X": 1.04
					}
				},
				"1.0": {
					"Rotation": {
						"Z": -11.0
					},
					"Scaling": {
						"X": 1.0
					}
				}
			}
		},
		{
			"_": "Rail_back_L  -  vorne",
			"Path": "o4",
			"States": {
				"0.0": {
					"Rotation": {
						"Z": -26.0
					},
					"Scaling": {
						"X": 1.0
					}
				},
				"0.25": {
					"Rotation": {
						"Z": -36.0
					},
					"Scaling": {
						"X": 1.15
					}
				},
				"0.5": {
					"Rotation": {
						"Z": -60
					},
					"Scaling": {
						"X": 1.15
					}
				},
				"0.75": {
					"Rotation": {
						"Z": -36.0
					},
					"Scaling": {
						"X": 1.15
					}
				},
				"1.0": {
					"Rotation": {
						"Z": -26.0
					},
					"Scaling": {
						"X": 1.0
					}
				}
			}
		},
		{
			"_": "Rail_front_R  -  vorne",
			"Path": "o5",
			"States": {
				"0.0": {
					"Rotation": {
						"Z": -14.0
					},
					"Scaling": {
						"X": 1.15
					}
				},
				"0.25": {
					"Rotation": {
						"Z": -33.0
					},
					"Scaling": {
						"X": 1.07
					}
				},
				"0.5": {
					"Rotation": {
						"Z": -52.0
					},
					"Scaling": {
						"X": 1.14
					}
				},
				"0.75": {
					"Rotation": {
						"Z": -33.0
					},
					"Scaling": {
						"X": 1.07
					}
				},
				"1.0": {
					"Rotation": {
						"Z": -14.0
					},
					"Scaling": {
						"X": 1.15
					}
				}
			}
		},
		{
			"_": "Spring_R  -  vorne",
			"Path": "o6",
			"States": {
				"0.0": {
					"Rotation": {
						"Z": -11.0
					},
					"Scaling": {
						"X": 1.0
					}
				},
				"0.25": {
					"Rotation": {
						"Z": -15
					},
					"Scaling": {
						"X": 1.0
					}
				},
				"0.5": {
					"Rotation": {
						"Z": -25
					},
					"Scaling": {
						"X": 0.95
					}
				},
				"0.75": {
					"Rotation": {
						"Z": -15
					},
					"Scaling": {
						"X": 1.04
					}
				},
				"1.0": {
					"Rotation": {
						"Z": -11.0
					},
					"Scaling": {
						"X": 1.0
					}
				}
			}
		}
	]
};
IG.Interactors.Drawer = {
	"Id": "Drawer",
	"Animations": [
		{
			"_": "Drawer Low",
			"Path": "o2",
			"States": {
				"0.0": {
					"Position": {
						"Z": 0.0
					}
				},
				"0.5": {
					"Position": {
						"Z": 0.30
					}
				}
			}
		},
		{
			"_": "Drawer Top",
			"Path": "o1",
			"States": {
				"0.0": {
					"Position": {
						"Z": 0.0
					}
				},
				"0.5": {
					"Position": {
						"Z": 0.0
					}
				},
				"1.0": {
					"Position": {
						"Z": 0.20
					}
				}
			}
		},
		{
			"_": "Drawer Low support Rail",
			"Path": "o3",
			"States": {
				"0.0": {
					"Position": {
						"Z": 0.0
					}
				},
				"0.5": {
					"Position": {
						"Z": 0.15
					}
				}
			}
		},
		{
			"_": "Drawer Top support Rail",
			"Path": "o4",
			"States": {
				"0.0": {
					"Position": {
						"Z": 0.0
					}
				},
				"0.5": {
					"Position": {
						"Z": 0.0
					}
				},
				"1.0": {
					"Position": {
						"Z": 0.10
					}
				}
			}
		}
	]
};
IG.Interactors.Drawer_XL = {
	"Id": "Drawer_XL",
	"Animations": [
		{
			"_": "Drawer",
			"Path": "o1",
			"States": {
				"0.0": {
					"Position": {
						"Z": 0.0
					}
				},
				"1.0": {
					"Position": {
						"Z": 0.20
					}
				}
			}
		},
		{
			"_": "Drawer support Rail",
			"Path": "o2",
			"States": {
				"0.0": {
					"Position": {
						"Z": 0.0
					}
				},
				"1.0": {
					"Position": {
						"Z": 0.10
					}
				}
			}
		}
	]
};
IG.Interactors.Hocker = {
	"Id": "Hocker",
	"Animations": [
		{
			"_": "HockerKissen",
			"Path": "o4.o1",
			"States": {
				"0.0": {
					"Position": {
						"Y": 0.16
					},
					"Rotation": {
						"X": 0.0
					}
				},
				"1.0": {
					"Position": {
						"Y": 0.17
					},
					"Rotation": {
						"X": -40
					}
				}
			}
		},
		{
			"_": "FrameJointTop_H",
			"Path": "o3.o1.o2",
			"States": {
				"0.0": {
					"Rotation": {
						"X": 0.0
					}
				},
				"1.0": {
					"Rotation": {
						"X": 30
					}
				}
			}
		},
		{
			"_": "FrameJointTop_H",
			"Path": "o3.o1.o3",
			"States": {
				"0.0": {
					"Rotation": {
						"X": 25
					},
					"Scaling": {
						"Z": 1.0
					}

				},
				"1.0": {
					"Rotation": {
						"X": 58
					},
					"Scaling": {
						"Z": 1.15
					}
				}
			}
		}
	]
};
IG.Interactors.PB_Fuss_Lattenrost = {
	"Id": "PB_Fuss_Lattenrost",
	"Animations": [
		{
			"_": "Bottom",
			"Path": "e2",
			"States": {
				"0.0": {
					"Rotation": {
						"X": 0
					}
				},
				"0.2": {
					"Rotation": {
						"X": -9.5
					}
				},
				"0.4": {
					"Rotation": {
						"X": -20.0
					}
				},
				"0.6": {
					"Rotation": {
						"X": -30.0
					}
				},
				"0.8": {
					"Rotation": {
						"X": -40.0
					}
				},
				"1.0": {
					"Rotation": {
						"X": -50
					}
				}
			}
		},
		{
			"_": "Link left",
			"Path": "e3.e1",
			"States": {
				"0.0": {
					"Position": {
						"Y": -0.022048,
						"Z": 0.169226
					},
					"Rotation": {
						"X": -77.2994
					}
				},
				"0.2": {
					"Position": {
						"Y": -0.007851,
						"Z": 0.170684
					},
					"Rotation": {
						"X": -73.5976
					}
				},
				"0.4": {
					"Position": {
						"Y": 0.027575,
						"Z": 0.168252
					},
					"Rotation": {
						"X": -64.2999
					}
				},
				"0.6": {
					"Position": {
						"Y": 0.071648,
						"Z": 0.154764
					},
					"Rotation": {
						"X": -52.083
					}
				},
				"1.0": {
					"Position": {
						"Y": 0.115428,
						"Z": 0.125562
					},
					"Rotation": {
						"X": -38.3788
					}
				}
			}
		},
		{
			"_": "Spring left",
			"Path": "e4",
			"States": {
				"0.0": {
					"Scaling": {
						"Z": 1.0
					},
					"Rotation": {
						"X": 0.0
					}
				},
				"0.2": {
					"Scaling": {
						"Z": 0.996753
					},
					"Rotation": {
						"X": -0.315973
					}
				},
				"0.3": {
					"Scaling": {
						"Z": 0.982398
					},
					"Rotation": {
						"X": -0.729666
					}
				},
				"0.4": {
					"Scaling": {
						"Z": 0.959576
					},
					"Rotation": {
						"X": -1.22369
					}
				},
				"0.6": {
					"Scaling": {
						"Z": 0.86213
					},
					"Rotation": {
						"X": -2.84784
					}
				},
				"0.7": {
					"Scaling": {
						"Z": 0.82
					},
					"Rotation": {
						"X": -3.82687
					}
				},
				"1.0": {
					"Scaling": {
						"Z": 0.687757
					},
					"Rotation": {
						"X": -4.74641
					}
				}
			}
		},
		{
			"_": "Link right",
			"Path": "e5.e1",
			"States": {
				"0.0": {
					"Position": {
						"Y": -0.022048,
						"Z": 0.169226
					},
					"Rotation": {
						"X": -77.2994
					}
				},
				"0.2": {
					"Position": {
						"Y": -0.007851,
						"Z": 0.170684
					},
					"Rotation": {
						"X": -73.5976
					}
				},
				"0.4": {
					"Position": {
						"Y": 0.027575,
						"Z": 0.168252
					},
					"Rotation": {
						"X": -64.2999
					}
				},
				"0.6": {
					"Position": {
						"Y": 0.071648,
						"Z": 0.154764
					},
					"Rotation": {
						"X": -52.083
					}
				},
				"1.0": {
					"Position": {
						"Y": 0.115428,
						"Z": 0.125562
					},
					"Rotation": {
						"X": -38.3788
					}
				}
			}
		},
		{
			"_": "Spring right",
			"Path": "e6",
			"States": {
				"0.0": {
					"Scaling": {
						"Z": 1.0
					},
					"Rotation": {
						"X": 0.0
					}
				},
				"0.2": {
					"Scaling": {
						"Z": 0.996753
					},
					"Rotation": {
						"X": -0.315973
					}
				},
				"0.3": {
					"Scaling": {
						"Z": 0.982398
					},
					"Rotation": {
						"X": -0.729666
					}
				},
				"0.4": {
					"Scaling": {
						"Z": 0.959576
					},
					"Rotation": {
						"X": -1.22369
					}
				},
				"0.6": {
					"Scaling": {
						"Z": 0.86213
					},
					"Rotation": {
						"X": -2.84784
					}
				},
				"0.7": {
					"Scaling": {
						"Z": 0.82
					},
					"Rotation": {
						"X": -3.82687
					}
				},
				"1.0": {
					"Scaling": {
						"Z": 0.687757
					},
					"Rotation": {
						"X": -4.74641
					}
				}
			}
		},
		{
			"_": "Kissen",
			"Path": "o1",
			"States": {
				"0.0": {
					"Visibility": true
				},
				"0.01": {
					"Visibility": false
				},
				"0.999": {
					"Visibility": false
				}
			}
		},
		{
			"_": "Kissen",
			"Path": "o2",
			"States": {
				"0.0": {
					"Visibility": true
				},
				"0.01": {
					"Visibility": false
				},
				"0.999": {
					"Visibility": false
				}
			}
		},
		{
			"_": "Kissen",
			"Path": "o3",
			"States": {
				"0.0": {
					"Visibility": true
				},
				"0.01": {
					"Visibility": false
				},
				"0.999": {
					"Visibility": false
				}
			}
		}
	]
}
;
IG.Interactors.PB_Kopf_Lattenrost = {
	"Id": "PB_Kopf_Lattenrost",
	"Animations": [
		{
			"_": "Top",
			"Path": "e1",
			"States": {
				"0.0": {
					"Position": {
					},
					"Rotation": {
						"X": 0
					}
				},
				"0.5": {
					"Position": {
					},
					"Rotation": {
						"X": 26
					}
				},
				"1.0": {
					"Position": {
					},
					"Rotation": {
						"X": 50
					}
				}
			}
		},
		{
			"_": "Kissen",
			"Path": "o1",
			"States": {
				"0.0": {
					"Visibility": true
				},
				"0.01": {
					"Visibility": false
				},
				"0.999": {
					"Visibility": false
				}
			}
		},
		{
			"_": "Kissen",
			"Path": "o2",
			"States": {
				"0.0": {
					"Visibility": true
				},
				"0.01": {
					"Visibility": false
				},
				"0.999": {
					"Visibility": false
				}
			}
		},
		{
			"_": "Kissen",
			"Path": "o3",
			"States": {
				"0.0": {
					"Visibility": true
				},
				"0.01": {
					"Visibility": false
				},
				"0.999": {
					"Visibility": false
				}
			}
		}
	]
}
;
IG.Interactors.Querschlaefer = {
	"Id": "Querschlaefer",
	"Animations": [
		{
			"_": "Rail 2",
			"Path": "o6",
			"States": {
				"0.0": {
					"Rotation": {
						"X": -2.0
					}
				},
				"0.25": {
					"Rotation": {
						"X": -81.3
					}
				},
				"0.5": {
					"Rotation": {
						"X": -121
					}
				},
				"1.0": {
					"Rotation": {
						"X": -157
					}
				}
			}
		},
		{
			"_": "Rail 3",
			"Path": "o6.o1",
			"States": {
				"0.0": {
					"Rotation": {
						"X": -3.0
					}
				},
				"0.25": {
					"Rotation": {
						"X": 90
					}
				},
				"0.5": {
					"Rotation": {
						"X": 260.6
					}
				},
				"1.0": {
					"Rotation": {
						"X": 285.9
					}
				}
			}
		},
		{
			"_": "Rail 5",
			"Path": "o4",
			"States": {
				"0.0": {
					"Rotation": {
						"X": -1.55
					}
				},
				"0.25": {
					"Rotation": {
						"X": -1.55
					}
				},
				"0.5": {
					"Rotation": {
						"X": -41.7
					}
				},
				"1.0": {
					"Rotation": {
						"X": -67.5
					}
				}
			}
		},
		{
			"_": "Rail 4",
			"Path": "o4.o1",
			"States": {
				"0.0": {
					"Rotation": {
						"X": -9.5
					}
				},
				"0.25": {
					"Rotation": {
						"X": -9.5
					}
				},
				"0.5": {
					"Rotation": {
						"X": 155.5
					}
				},
				"1.0": {
					"Rotation": {
						"X": 191.5
					}
				}
			}
		},
		{
			"_": "Rail 1 L",
			"Path": "o4.o1.o1",
			"States": {
				"0.0": {
					"Rotation": {
						"X": 10.5
					}
				},
				"0.25": {
					"Rotation": {
						"X": -34.2
					}
				},
				"0.5": {
					"Rotation": {
						"X": -116.2
					}
				},
				"1.0": {
					"Rotation": {
						"X": -124.0
					}
				}
			}
		},
		{
			"_": "Rail 2",
			"Path": "o8",
			"States": {
				"0.0": {
					"Rotation": {
						"X": -2.0
					}
				},
				"0.25": {
					"Rotation": {
						"X": -81.3
					}
				},
				"0.5": {
					"Rotation": {
						"X": -121
					}
				},
				"1.0": {
					"Rotation": {
						"X": -157
					}
				}
			}
		},
		{
			"_": "Rail 3",
			"Path": "o8.o1",
			"States": {
				"0.0": {
					"Rotation": {
						"X": -3.0
					}
				},
				"0.25": {
					"Rotation": {
						"X": 90
					}
				},
				"0.5": {
					"Rotation": {
						"X": 260.6
					}
				},
				"1.0": {
					"Rotation": {
						"X": 285.9
					}
				}
			}
		},
		{
			"_": "Rail 5",
			"Path": "o7",
			"States": {
				"0.0": {
					"Rotation": {
						"X": -1.55
					}
				},
				"0.25": {
					"Rotation": {
						"X": -1.55
					}
				},
				"0.5": {
					"Rotation": {
						"X": -41.7
					}
				},
				"1.0": {
					"Rotation": {
						"X": -67.5
					}
				}
			}
		},
		{
			"_": "Rail 4",
			"Path": "o7.o1",
			"States": {
				"0.0": {
					"Rotation": {
						"X": -9.5
					}
				},
				"0.25": {
					"Rotation": {
						"X": -9.5
					}
				},
				"0.5": {
					"Rotation": {
						"X": 155.5
					}
				},
				"1.0": {
					"Rotation": {
						"X": 191.5
					}
				}
			}
		},
		{
			"_": "Rail 1 R",
			"Path": "o7.o1.o1",
			"States": {
				"0.0": {
					"Rotation": {
						"X": 10.5
					}
				},
				"0.25": {
					"Rotation": {
						"X": -34.2
					}
				},
				"0.5": {
					"Rotation": {
						"X": -116.2
					}
				},
				"1.0": {
					"Rotation": {
						"X": -124.0
					}
				}
			}
		},
		{
			"_": "Rueckenkissen li",
			"Path": "o9",
			"States": {
				"0.0": {
					"Position": {
						"Y": 0.31,
						"Z": 0.06
					},
					"Rotation": {
						"X": 0.0
					}
				},
				"0.25": {
					"Position": {
						"Y": 0.40,
						"Z": 0.08
					},
					"Rotation": {
						"X": -15
					}
				},
				"0.5": {
					"Position": {
						"Y": 0.265,
						"Z": 0.145
					},
					"Rotation": {
						"X": -10
					}
				},
				"0.75": {
					"Position": {
						"Y": 0.285,
						"Z": 0.1
					},
					"Rotation": {
						"X": -5
					}
				},
				"1.0": {
					"Position": {
						"Y": 0.31,
						"Z": 0.06
					},
					"Rotation": {
						"X": 0
					}
				}
			}
		},
		{
			"_": "Rueckenkissen re",
			"Path": "o10",
			"States": {
				"0.0": {
					"Position": {
						"Y": 0.31,
						"Z": 0.06
					},
					"Rotation": {
						"X": 0.0
					}
				},
				"0.25": {
					"Position": {
						"Y": 0.40,
						"Z": 0.08
					},
					"Rotation": {
						"X": -15
					}
				},
				"0.5": {
					"Position": {
						"Y": 0.265,
						"Z": 0.145
					},
					"Rotation": {
						"X": -10
					}
				},
				"0.75": {
					"Position": {
						"Y": 0.285,
						"Z": 0.1
					},
					"Rotation": {
						"X": -5
					}
				},
				"1.0": {
					"Position": {
						"Y": 0.31,
						"Z": 0.06
					},
					"Rotation": {
						"X": 0
					}
				}
			}
		},
		{
			"_": "Dekokissen links",
			"Path": "o9.o2",
			"States": {
				"0.0": {
					"Position": {
						"X": 0.27,
						"Y": 0.105,
						"Z": 0.30
					}
				},
				"0.15": {
					"Position": {
						"X": 0.27,
						"Y": 0.13,
						"Z": 0.30
					}
				},
				"0.2": {
					"Position": {
						"X": 0.27,
						"Y": 0.15,
						"Z": 0.29
					}
				},
				"0.25": {
					"Position": {
						"X": 0.27,
						"Y": 0.21,
						"Z": 0.28
					}
				},
				"0.3": {
					"Position": {
						"X": 0.27,
						"Y": 0.175,
						"Z": 0.29
					}
				},	
				"0.35": {
					"Position": {
						"X": 0.27,
						"Y": 0.155,
						"Z": 0.30
					}
				},	
				"0.4": {
					"Position": {
						"X": 0.27,
						"Y": 0.13,
						"Z": 0.30
					}
				},	
				"0.5": {
					"Position": {
						"X": 0.27,
						"Y": 0.075,
						"Z": 0.30
					}
				},	
				"0.75": {
					"Position": {
						"X": 0.27,
						"Y": 0.09,
						"Z": 0.30
					}
				},				
				"1.0": {
					"Position": {
						"X": 0.27,
						"Y": 0.09,
						"Z": 0.30
					}
				}
			}
		},
		{
			"_": "Dekokissen rechts",
			"Path": "o10.o2",
			"States": {
				"0.0": {
					"Position": {
						"X": 0.51,
						"Y": 0.105,
						"Z": 0.30
					}
				},
				"0.15": {
					"Position": {
						"X": 0.51,
						"Y": 0.13,
						"Z": 0.30
					}
				},
				"0.2": {
					"Position": {
						"X": 0.51,
						"Y": 0.165,
						"Z": 0.29
					}
				},
				"0.25": {
					"Position": {
						"X": 0.51,
						"Y": 0.195,
						"Z": 0.28
					}
				},
				"0.3": {
					"Position": {
						"X": 0.51,
						"Y": 0.165,
						"Z": 0.29
					}
				},	
				"0.35": {
					"Position": {
						"X": 0.51,
						"Y": 0.16,
						"Z": 0.30
					}
				},	
				"0.4": {
					"Position": {
						"X": 0.51,
						"Y": 0.13,
						"Z": 0.30
					}
				},	
				"0.5": {
					"Position": {
						"X": 0.51,
						"Y": 0.075,
						"Z": 0.30
					}
				},	
				"0.75": {
					"Position": {
						"X": 0.51,
						"Y": 0.09,
						"Z": 0.30
					}
				},				
				"1.0": {
					"Position": {
						"X": 0.51,
						"Y": 0.09,
						"Z": 0.30
					}
				}
			}
		}
	],
	"LinkedPoints": {
		"o9.o1": ["BottomLeft"],
		"o10.o1": ["BottomRght"],
		"o9.o2": ["PillowL"],
		"o10.o2": ["PillowR"]
	}
};
IG.Interactors.RelaxL = {
	"Id": "RelaxL",
	"Animations": [
		{
			"_": "SeatCussion_Q_90_Relax_back",
			"Path": "o1",
			"States": {
				"0.0": {
					"Position": {
						"Y": 0.0,
						"Z": 0.035
					}
				},
				"1.0": {
					"Position": {
						"Y": 0.0,
						"Z": 0.5
					}
				}
			}
		},
		{
			"_": "SeatBack - Std",
			"Path": "o3",
			"States": {
				"0.0": {
					"Position": {
						"Y": 0.15,
						"Z": 0.06
					},
					"Rotation": {
						"X": 0.0
					}
				},
				"1.0": {
					"Position": {
						"Y": 0.03,
						"Z": "Param2"
					},
					"Rotation": {
						"X": "Param1"
					}
				}
			}
		},
		{
			"_": "SeatCussion_Q_90_Relax_front",
			"Path": "o1.o1",
			"States": {
				"0.0": {
					"Position": {
						"Y": 0.1040,
						"Z": 0.8530
					},
					"Rotation": {
						"X": 0.0
					}
				},
				"1.0": {
					"Position": {
						"Y": 0.087,
						"Z": 0.902
					},
					"Rotation": {
						"X": -85.0
					}
				}
			}
		},
		{
			"_": "Rail_1",
			"Path": "o1.o2.o1",
			"States": {
				"0.0": {
					"Rotation": {
						"X": 122.0
					}
				},
				"0.25": {
					"Rotation": {
						"X": 82.0
					}
				},
				"0.5": {
					"Rotation": {
						"X": 51.5
					}
				},
				"0.75": {
					"Rotation": {
						"X": 26.0
					}
				},
				"1.0": {
					"Rotation": {
						"X": 1.7
					}
				}
			}
		},
		{
			"_": "Rails2",
			"Path": "o1.o2.o1.o1",
			"States": {
				"0.0": {
					"Rotation": {
						"X": -106.0
					}
				},
				"1.0": {
					"Rotation": {
						"X": -4.5
					}
				}
			}
		},
		{
			"_": "Rails5",
			"Path": "o1.o2.o1.o2",
			"States": {
				"0.0": {
					"Rotation": {
						"X": -168
					}
				},
				"0.75": {
					"Rotation": {
						"X": -168
					}
				},
				"1.0": {
					"Rotation": {
						"X": -170
					}
				}
			}
		},
		{
			"_": "Rails4",
			"Path": "o1.o2.o1.o2.o1",
			"States": {
				"0.0": {
					"Rotation": {
						"X": -143
					}
				},
				"0.25": {
					"Rotation": {
						"X": -110
					}
				},
				"0.5": {
					"Rotation": {
						"X": -77
					}
				},
				"0.75": {
					"Rotation": {
						"X": -44
					}
				},
				"1.0": {
					"Rotation": {
						"X": -10
					}
				}
			}
		},
		{
			"_": "Rail_1",
			"Path": "o1.o3.o1",
			"States": {
				"0.0": {
					"Rotation": {
						"X": 122.0
					}
				},
				"0.25": {
					"Rotation": {
						"X": 82.0
					}
				},
				"0.5": {
					"Rotation": {
						"X": 51.5
					}
				},
				"0.75": {
					"Rotation": {
						"X": 26.0
					}
				},
				"1.0": {
					"Rotation": {
						"X": 1.7
					}
				}
			}
		},
		{
			"_": "Rails2",
			"Path": "o1.o3.o1.o1",
			"States": {
				"0.0": {
					"Rotation": {
						"X": -106.0
					}
				},
				"1.0": {
					"Rotation": {
						"X": -4.5
					}
				}
			}
		},
		{
			"_": "Rails5",
			"Path": "o1.o3.o1.o2",
			"States": {
				"0.0": {
					"Rotation": {
						"X": -168
					}
				},
				"0.75": {
					"Rotation": {
						"X": -168
					}
				},
				"1.0": {
					"Rotation": {
						"X": -170
					}
				}
			}
		},
		{
			"_": "Rails4",
			"Path": "o1.o3.o1.o2.o1",
			"States": {
				"0.0": {
					"Rotation": {
						"X": -143
					}
				},
				"0.25": {
					"Rotation": {
						"X": -110
					}
				},
				"0.5": {
					"Rotation": {
						"X": -77
					}
				},
				"0.75": {
					"Rotation": {
						"X": -44
					}
				},
				"1.0": {
					"Rotation": {
						"X": -10
					}
				}
			}
		},
		{
			"_": "Aufhaengung_L_front",
			"Path": "o1.o1.o1.o1.o1",
			"States": {
				"0.0": {
					"Scaling": {
						"Z": 0.3
					}
				},
				"1.0": {
					"Scaling": {
						"Z": 0.4
					}
				}
			}
		},
		{
			"_": "Aufhaengung_L_front",
			"Path": "o1.o1.o1.o2.o1",
			"States": {
				"0.0": {
					"Scaling": {
						"Z": 0.3
					}
				},
				"1.0": {
					"Scaling": {
						"Z": 0.4
					}
				}
			}
		}
	],
	"LinkedPoints": {
		"o3.o1": ["BottomLeft"],
		"o3.o2": ["PillowL"],
		"o3.o3": ["PillowRotL"]
	}
};
IG.Interactors.RelaxR = {
	"Id": "RelaxR",
	"Animations": [
		{
			"_": "SeatCussion_Q_90_Relax_back",
			"Path": "o1",
			"States": {
				"0.0": {
					"Position": {
						"Y": 0.0,
						"Z": 0.035
					}
				},
				"1.0": {
					"Position": {
						"Y": 0.0,
						"Z": 0.5
					}
				}
			}
		},
		{
			"_": "SeatBack - Std",
			"Path": "o3",
			"States": {
				"0.0": {
					"Position": {
						"Y": 0.15,
						"Z": 0.06
					},
					"Rotation": {
						"X": 0.0
					}
				},
				"1.0": {
					"Position": {
						"Y": 0.03,
						"Z": "Param2"
					},
					"Rotation": {
						"X": "Param1"
					}
				}
			}
		},
		{
			"_": "SeatCussion_Q_90_Relax_front",
			"Path": "o1.o1",
			"States": {
				"0.0": {
					"Position": {
						"Y": 0.1040,
						"Z": 0.8530
					},
					"Rotation": {
						"X": 0.0
					}
				},
				"1.0": {
					"Position": {
						"Y": 0.087,
						"Z": 0.902
					},
					"Rotation": {
						"X": -85.0
					}
				}
			}
		},
		{
			"_": "Rail_1",
			"Path": "o1.o4.o1",
			"States": {
				"0.0": {
					"Rotation": {
						"X": 122.0
					}
				},
				"0.25": {
					"Rotation": {
						"X": 82.0
					}
				},
				"0.5": {
					"Rotation": {
						"X": 51.5
					}
				},
				"0.75": {
					"Rotation": {
						"X": 26.0
					}
				},
				"1.0": {
					"Rotation": {
						"X": 1.7
					}
				}
			}
		},
		{
			"_": "Rails2",
			"Path": "o1.o4.o1.o1",
			"States": {
				"0.0": {
					"Rotation": {
						"X": -106.0
					}
				},
				"1.0": {
					"Rotation": {
						"X": -4.5
					}
				}
			}
		},
		{
			"_": "Rails5",
			"Path": "o1.o4.o1.o2",
			"States": {
				"0.0": {
					"Rotation": {
						"X": -168
					}
				},
				"0.75": {
					"Rotation": {
						"X": -168
					}
				},
				"1.0": {
					"Rotation": {
						"X": -170
					}
				}
			}
		},
		{
			"_": "Rails4",
			"Path": "o1.o4.o1.o2.o1",
			"States": {
				"0.0": {
					"Rotation": {
						"X": -143
					}
				},
				"0.25": {
					"Rotation": {
						"X": -110
					}
				},
				"0.5": {
					"Rotation": {
						"X": -77
					}
				},
				"0.75": {
					"Rotation": {
						"X": -44
					}
				},
				"1.0": {
					"Rotation": {
						"X": -10
					}
				}
			}
		},
		{
			"_": "Rail_1",
			"Path": "o1.o5.o1",
			"States": {
				"0.0": {
					"Rotation": {
						"X": 122.0
					}
				},
				"0.25": {
					"Rotation": {
						"X": 82.0
					}
				},
				"0.5": {
					"Rotation": {
						"X": 51.5
					}
				},
				"0.75": {
					"Rotation": {
						"X": 26.0
					}
				},
				"1.0": {
					"Rotation": {
						"X": 1.7
					}
				}
			}
		},
		{
			"_": "Rails2",
			"Path": "o1.o5.o1.o1",
			"States": {
				"0.0": {
					"Rotation": {
						"X": -106.0
					}
				},
				"1.0": {
					"Rotation": {
						"X": -4.5
					}
				}
			}
		},
		{
			"_": "Rails5",
			"Path": "o1.o5.o1.o2",
			"States": {
				"0.0": {
					"Rotation": {
						"X": -168
					}
				},
				"0.75": {
					"Rotation": {
						"X": -168
					}
				},
				"1.0": {
					"Rotation": {
						"X": -170
					}
				}
			}
		},
		{
			"_": "Rails4",
			"Path": "o1.o5.o1.o2.o1",
			"States": {
				"0.0": {
					"Rotation": {
						"X": -143
					}
				},
				"0.25": {
					"Rotation": {
						"X": -110
					}
				},
				"0.5": {
					"Rotation": {
						"X": -77
					}
				},
				"0.75": {
					"Rotation": {
						"X": -44
					}
				},
				"1.0": {
					"Rotation": {
						"X": -10
					}
				}
			}
		},
		{
			"_": "Aufhaengung_L_front",
			"Path": "o1.o1.o1.o1.o1",
			"States": {
				"0.0": {
					"Scaling": {
						"Z": 0.3
					}
				},
				"1.0": {
					"Scaling": {
						"Z": 0.4
					}
				}
			}
		},
		{
			"_": "Aufhaengung_L_front",
			"Path": "o1.o1.o1.o2.o1",
			"States": {
				"0.0": {
					"Scaling": {
						"Z": 0.3
					}
				},
				"1.0": {
					"Scaling": {
						"Z": 0.4
					}
				}
			}
		}
	],
	"LinkedPoints": {
		"o3.o1": ["BottomRght"],
		"o3.o2": ["PillowR"]
	}
};
IG.Interactors.SleepCouch = {
	"Id": "SleepCouch",
	"Animations": [
		{
			"_": "Matratze",
			"Path": "o1",
			"States": {
				"0.0": {
					"Position": {
						"Z": 0.93
					}
				},
				"0.2": {
					"Position": {
						"Y": 0.08,
						"Z": 0.93
					}
				},
				"0.55": {
					"Position": {
						"Y": 0.08,
						"Z": 0.93
					}
				},
				"0.6": {
					"Position": {
						"Y": 0.15,
						"Z": 0.93
					}
				},
				"0.65": {
					"Position": {
						"Y": 0.25,
						"Z": 1.1
					}
				},
				"1.0": {
					"Position": {
						"Y": 0.4,
						"Z": 1.5
					}
				}
			}
		},
		{
			"_": "Rail_Front",
			"Path": "o1.o1",
			"States": {
				"0.0": {
					"Position": {
						"Y": 0.08,
						"Z": 0.01
					},
					"Rotation": {
						"X": -178
					}
				},
				"0.3": {
					"Position": {
						"Y": 0.08,
						"Z": 0.01
					},
					"Rotation": {
						"X": -178
					}
				},
				"0.35": {
					"Position": {
						"Y": 0.0775,
						"Z": 0.0225
					},
					"Rotation": {
						"X": -168
					}
				},
				"0.4": {
					"Position": {
						"Y": 0.075,
						"Z": 0.055
					},
					"Rotation": {
						"X": -152
					}
				},
				"0.5": {
					"Position": {
						"Y": 0.04,
						"Z": 0.08
					},
					"Rotation": {
						"X": -127
					}
				},
				"0.6": {
					"Position": {
						"Y": 0.05,
						"Z": 0.075
					},
					"Rotation": {
						"X": -102
					}
				},
				"1.0": {
					"Position": {
						"Y": -0.07,
						"Z": 0.0
					},
					"Rotation": {
						"X": -1
					}
				}
			}
		},
		{
			"_": "SeatBack",
			"Path": "o1.o1.o1",
			"States": {
				"0.0": {
					"Position": {
						"Z": 0.54
					},
					"Rotation": {
						"X": 178					
					}
				},
				"0.2": {
					"Position": {
						"Z": 0.60
					},
					"Rotation": {
						"X": 268
					}
				},
				"1.0": {
					"Position": {
						"Z": 0.60
					},
					"Rotation": {
						"X": 268						
					}
				}
			}
		},
		{
			"_": "Foot li",
			"Path": "o1.o1.o1.o1",
			"States": {
				"0.0": {
					"Position": {
						"Y": -0.05,
						"Z": -0.4
					},
					"Rotation": {
						"X": 90
					}
				},
				"0.9": {
					"Position": {
						"Y": 0.03,
						"Z": -0.36
					},
					"Rotation": {
						"X": 90
					}
				},
				"1.0": {
					"Position": {
						"Y": 0.03,
						"Z": -0.36
					},
					"Rotation": {
						"X": 103
					}
				}
			}
		},
		{
			"_": "Foot re",
			"Path": "o1.o1.o1.o2",
			"States": {
				"0.0": {
					"Position": {
						"Y": -0.05,
						"Z": -0.4
					},
					"Rotation": {
						"X": 90
					}
				},
				"0.9": {
					"Position": {
						"Y": 0.03,
						"Z": -0.36
					},
					"Rotation": {
						"X": 90
					}
				},
				"1.0": {
					"Position": {
						"Y": 0.03,
						"Z": -0.36
					},
					"Rotation": {
						"X": 103
					}
				}
			}
		}
	]
};
IG.Interactors.Sleep_move = {
	"Id": "Sleep_move",
	"Animations": [
		{
			"_": "Blende vorne",
			"Path": "o1",
			"States": {
				"0.0": {
					"Position": {
						"Z": 0.85
					}
				},
				"0.5": {
					"Position": {
						"Z": 1.535
					}
				}
			}
		},
		{
			"_": "Matratze - Rail",
			"Path": "o1.o1.o2",
			"States": {
				"0.5": {
					"Position": {
						"Y": -0.005,
						"Z": 0.16
					},
					"Rotation": {
						"X": 0.0
					}
				},
				"0.6": {
					"Position": {
						"Y": -0.005,
						"Z": 0.16
					},
					"Rotation": {
						"X": -11
					}
				},
				"0.75": {
					"Position": {
						"Y": 0.03,
						"Z": 0.24
					},
					"Rotation": {
						"X": -20
					}
				},
				"1.0": {
					"Position": {
						"Y": 0.15,
						"Z": 0.22
					},
					"Rotation": {
						"X": 0
					}
				}
			}
		},
		{
			"_": "Rail3",
			"Path": "o1.o2.o1",
			"States": {
				"0.6": {
					"Rotation": {
						"X": 123
					}
				},
				"0.75": {
					"Rotation": {
						"X": 129
					}
				},
				"1.0": {
					"Rotation": {
						"X": 250
					}
				}
			}
		},
		{
			"_": "Rail2",
			"Path": "o1.o2.o1.o1",
			"States": {
				"0.6": {
					"Rotation": {
						"X": 95
					}
				},
				"0.75": {
					"Rotation": {
						"X": 151
					}
				},
				"1.0": {
					"Rotation": {
						"X": 1
					}
				}
			}
		},
		{
			"_": "Rail6",
			"Path": "o1.o2.o2",
			"States": {
				"0.5": {
					"Rotation": {
						"X": 21
					}
				},
				"0.6": {
					"Rotation": {
						"X": 107
					}
				},
				"0.75": {
					"Rotation": {
						"X": 197.1
					}
				},
				"1.0": {
					"Rotation": {
						"X": 296.3
					}
				}
			}
		},
		{
			"_": "Rail5",
			"Path": "o1.o2.o2.o1",
			"States": {
				"0.5": {
					"Rotation": {
						"X": 170
					},
					"Scaling": {
						"Z": 0.9
					}
				},
				"0.6": {
					"Rotation": {
						"X": 119
					},
					"Scaling": {
						"Z": 0.95
					}
				},
				"0.7": {
					"Rotation": {
						"X": 90.1
					},
					"Scaling": {
						"Z": 1.05
					}
				},
				"0.75": {
					"Rotation": {
						"X": 75.7
					},
					"Scaling": {
						"Z": 1.03
					}
				},
				"1.0": {
					"Rotation": {
						"X": -40.8
					},
					"Scaling": {
						"Z": 1.02
					}
				}
			}
		},
		{
			"_": "Rail4",
			"Path": "o1.o2.o1.o2",
			"States": {
				"0.5": {
					"Rotation": {
						"X": -128
					},
					"Scaling": {
						"Z": 0.98
					}
				},
				"0.6": {
					"Rotation": {
						"X": -123
					},
					"Scaling": {
						"Z": 0.96
					}
				},
				"0.75": {
					"Rotation": {
						"X": -141
					},
					"Scaling": {
						"Z": 0.98
					}
				},
				"0.8": {
					"Rotation": {
						"X": -166.8
					},
					"Scaling": {
						"Z": 1.04
					}
				},
				"0.85": {
					"Rotation": {
						"X": -192.6
					},
					"Scaling": {
						"Z": 1.05
					}
				},
				"0.9": {
					"Rotation": {
						"X": -218.4
					},
					"Scaling": {
						"Z": 1.06
					}
				},
				"0.95": {
					"Rotation": {
						"X": -244.2
					},
					"Scaling": {
						"Z": 1.05
					}
				},
				"1.0": {
					"Rotation": {
						"X": -270
					},
					"Scaling": {
						"Z": 1.03
					}
				}
			}
		},
		{
			"_": "Handle",
			"Path": "o1.o1.o2.o1.o1",
			"States": {
				"0.7": {
					"Position": {
						"Z": 0.651
					},					
					"Rotation": {
						"X": -180
					}
				},
				"1.0": {
					"Position": {
						"Z": 0.645
					},
					"Rotation": {
						"X": 5
					}
				}
			}
		},
		{
			"_": "Rail3",
			"Path": "o1.o2.o3",
			"States": {
				"0.6": {
					"Rotation": {
						"X": 123
					}
				},
				"0.75": {
					"Rotation": {
						"X": 129
					}
				},
				"1.0": {
					"Rotation": {
						"X": 250
					}
				}
			}
		},
		{
			"_": "Rail2",
			"Path": "o1.o2.o3.o1",
			"States": {
				"0.6": {
					"Rotation": {
						"X": 95
					}
				},
				"0.75": {
					"Rotation": {
						"X": 151
					}
				},
				"1.0": {
					"Rotation": {
						"X": 1
					}
				}
			}
		},
		{
			"_": "Rail6",
			"Path": "o1.o2.o4",
			"States": {
				"0.5": {
					"Rotation": {
						"X": 21
					}
				},
				"0.6": {
					"Rotation": {
						"X": 107
					}
				},
				"0.75": {
					"Rotation": {
						"X": 197.1
					}
				},
				"1.0": {
					"Rotation": {
						"X": 296.3
					}
				}
			}
		},
		{
			"_": "Rail5",
			"Path": "o1.o2.o4.o1",
			"States": {
				"0.5": {
					"Rotation": {
						"X": 170
					},
					"Scaling": {
						"Z": 0.9
					}
				},
				"0.6": {
					"Rotation": {
						"X": 119
					},
					"Scaling": {
						"Z": 0.95
					}
				},
				"0.7": {
					"Rotation": {
						"X": 90.1
					},
					"Scaling": {
						"Z": 1.05
					}
				},
				"0.75": {
					"Rotation": {
						"X": 75.7
					},
					"Scaling": {
						"Z": 1.03
					}
				},
				"1.0": {
					"Rotation": {
						"X": -40.8
					},
					"Scaling": {
						"Z": 1.02
					}
				}
			}
		},
		{
			"_": "Rail4",
			"Path": "o1.o2.o3.o2.o1",
			"States": {
				"0.5": {
					"Rotation": {
						"X": 128
					},
					"Scaling": {
						"Z": 0.98
					}
				},
				"0.6": {
					"Rotation": {
						"X": 123
					},
					"Scaling": {
						"Z": 0.96
					}
				},
				"0.75": {
					"Rotation": {
						"X": 141
					},
					"Scaling": {
						"Z": 0.98
					}
				},
				"0.8": {
					"Rotation": {
						"X": 166.8
					},
					"Scaling": {
						"Z": 1.04
					}
				},
				"0.85": {
					"Rotation": {
						"X": 192.6
					},
					"Scaling": {
						"Z": 1.05
					}
				},
				"0.9": {
					"Rotation": {
						"X": 218.4
					},
					"Scaling": {
						"Z": 1.06
					}
				},
				"0.95": {
					"Rotation": {
						"X": 244.2
					},
					"Scaling": {
						"Z": 1.05
					}
				},
				"1.0": {
					"Rotation": {
						"X": 270
					},
					"Scaling": {
						"Z": 1.03
					}
				}
			}
		},
	]
};
IG.Interactors.Stauraum_LC = {
	"Id": "Stauraum_LC",
	"Animations": [
		{
			"_": "Sitzkissen",
			"Path": "o2",
			"States": {
				"0.0": {
					"Position": {
						"Z": 0.196
					},
					"Rotation": {
						"X": 0.0
					}
				},
				"1.0": {
					"Position": {
						"Z": 0.26
					},
					"Rotation": {
						"X": -20
					}
				}
			}
		},
		{
			"_": "Rueckenkissen",
			"Path": "o1",
			"States": {
				"0.0": {
					"Position": {
						"Y": 0.31,
						"Z": 0.063
					},
					"Rotation": {
						"X": 0.0
					}
				},
				"1.0": {
					"Position": {
						"Y": 0.32,
						"Z": 0.105
					},
					"Rotation": {
						"X": -10
					}
				}
			}
		},
		{
			"_": "Rail 1",
			"Path": "o2.o1.o1",
			"States": {
				"0.0": {
					"Rotation": {
						"X": -3
					}
				},
				"1.0": {
					"Rotation": {
						"X": 65
					}
				}
			}
		},
		{
			"_": "Rail 1",
			"Path": "o2.o2.o1",
			"States": {
				"0.0": {
					"Rotation": {
						"X": -3
					}
				},
				"1.0": {
					"Rotation": {
						"X": 65
					}
				}
			}
		},
		{
			"_": "Rail 2",
			"Path": "o4.o1.o1.o1",
			"States": {
				"0.0": {
					"Rotation": {
						"X": -1
					}
				},
				"0.3": {
					"Rotation": {
						"X": 8
					}
				},
				"0.5": {
					"Rotation": {
						"X": 15
					},
					"Scaling": {
						"Z": 1.0
					}
				},
				"0.65": {
					"Rotation": {
						"X": 28
					},
					"Scaling": {
						"Z": 1.0
					}
				},
				"0.75": {
					"Rotation": {
						"X": 38
					},
					"Scaling": {
						"Z": 0.98
					}
				},
				"1.0": {
					"Rotation": {
						"X": 60
					},
					"Scaling": {
						"Z": 1.12
					}
				}
			}
		},
		{
			"_": "Rail 2",
			"Path": "o4.o1.o2.o1",
			"States": {
				"0.0": {
					"Rotation": {
						"X": -1
					}
				},
				"0.3": {
					"Rotation": {
						"X": 8
					}
				},
				"0.5": {
					"Rotation": {
						"X": 15
					},
					"Scaling": {
						"Z": 1.0
					}
				},
				"0.65": {
					"Rotation": {
						"X": 28
					},
					"Scaling": {
						"Z": 1.0
					}
				},
				"0.75": {
					"Rotation": {
						"X": 38
					},
					"Scaling": {
						"Z": 0.98
					}
				},
				"1.0": {
					"Rotation": {
						"X": 60
					},
					"Scaling": {
						"Z": 1.12
					}
				}
			}
		},
		{
			"_": "Armpillow",
			"Path": "o6.o1",
			"States": {
				"0.0": {
					"Rotation": {
						"Z": 0
					}
				},
				"0.5": {
					"Rotation": {
						"Z": -150
					}
				},
				"1.0": {
					"Rotation": {
						"Z": -150
					}
				}
			}
		},
		{
			"_": "Dekokissen",
			"Path": "o1.o2",
			"States": {
				"0.0": {
					"Position": {
						"Y": 0.105,
						"Z": 0.297
					}
				},
				"1.0": {
					"Position": {
						"Y": 0.135,
						"Z": 0.31
					}
				}
			}
		}
	],
	"LinkedPoints": {
		"o1.o1": ["BottomLeft"],
		"o1.o2": ["PillowL"]
	}
};