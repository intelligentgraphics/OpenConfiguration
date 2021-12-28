Overview of the OpenConfiguration Format

## Quickstart
### TypeScript/JavaScript

```sh
npm i @intelligentgraphics/openconfiguration
```

### .NET

Add Nuget package:

```
https://www.nuget.org/packages/OpenConfiguration/
```

## Goals

OpenConfiguration (OC) is an open, well-documented and human-readable file format for the efficient description of products, usually but not necessarily created by a configurator. Basically, OCs describe configuration snapshots, both the graphical side (3D) as well as the commercial side. Initially, OC was defined to describe such snapshots, either completely or incrementally---as result of server-side processes--but future versions of OC may embed catalog and/or configuration information allowing more things to be done at the client side.

OC was defined with a strict focus on efficiency. This is achieved on the one hand by very efficient asset formats, such as OpenCTM for 3D meshes, on the other hand deeply structured product descriptions that reference assets as shareable (both intra and inter product), cacheable, lazy-loadable entities.
 
## Non-Goals

OC is NOT a graphical exchange format like FBX or glTF containing plenty of obscure features to be written and read by modeling programs like Blender.

## History

**OpenConfiguration 1.2**

- Scene: Source added
- Product: TopView and Preview added
- Product: Representations (introduced in 1.1) removed again - BREAKING CHANGE

**OpenConfiguration 1.1**

- Product: Representations: Preview and Top View
- ig Geometry: new asset collider (format + asset)
- ig Geometry Parameter: Render Order
- ig Geometry Parameters: Normal Map Tiling and Strength
- Component: new attribute tag

**OpenConfiguration 1.0**

## Basic Structure (Scene.ts)

An OC contains a list of products, a dictionary of geometries and a dictionary of materials. 

A Product has a tree structure consisting of components. Components contain optional attributes such as geometry, transform, material category, etc (see Component.ts/cs).

The semantics of the tree is as follows:

- A component always inherits the transform of it's parent.

- A component inherits the material category of it's parent only if there's no category assigned to it directly.

- The tree is defined by the component's path values. "." is the root, and "o1" ... "oN" root children. "o2.o1" again is a child of "o2" and so on and so on.

## Introduction by a little example (examples/simplecube)

![Alt bluegreenish brick cube](simplecube.png?raw=true "simplecube")

OC is a JSON format, so existing tools like editors and validators can be used for development.

This paragraph explains the complete simple-cube example to get you going.

```json
{
	"format": "OpenConfiguration_1.0",
	"creator": "IG.Data.GFX.Formats IGXC To OC Converter",
	"status": {
		"code": 200
	},
	"hashes": {
		"IG.Reference.Cube2.geo/standard.ctm": "ed085dd38a0d2639d97bb0802932d8b2",
		"IG.Reference.Cube2.geo/normals_std.png": "66da0bbb3659bb39e02cd556b0539f0d",
		"IG.Reference.Bricks.tex/standard.jpg": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
	},
```
The initial part defines some global properties, especially the "format" string to be expected in a valid OC file.
Creator is a freeform text for personal usage, status is losely based on  HTTP error codes and is 200 for files properly delivered by the server.
Hashes are optional and used to invalidate caching in a viewer if needed.

```json
	"scripts": [
	],
	"geometries": {
		"IG.Reference.Cube2": {
			"ig": {
				"previewFormat": null,
				"preview": null,
				"meshFormat": "OpenCTM",
				"mesh": "IG.Reference.Cube2.geo/standard.ctm",
				"normalMapFormat": "PNG",
				"normalMap": "IG.Reference.Cube2.geo/normals_std.png"
			}
		}
	},
```
Scripts can be attached for viewer interactions and animations. The scripts are provided to implement animations and refer to a virtual scene-graph API, to be specified later on.

Geometries is a dictionary of geometric entities. Inside there is another dictionary of different optional representations. "ig" is usually used for mesh-based viewers. mesh and meshFormat describe the actual mesh.

Currently supported mesh formats are OBJ, OpenCTM, FBX and OGRE Binary. A viewer incompatible with one ore more of the formats should refuse to load the OC and show an appropriate message to the user. The primary mesh format and fallbacks, as well as the quality level are normally negotiated between client and server at run-time.

OpenCTM files describe triangle/mesh data including up to 2 UV sets for texturing. The set tagged with "Diffuse" is used for tile-able material textures (see below).
The set tagged with "Object" is not tileable (i.e. every triangle gets its own part of the actual texture) and used for a geometry-bound normal map, which typically adds geometry details.

For fast overview purposes, "preview" can link a coarse geometry.

```json
	"materials": {
		"IG.Reference.Bricks": {
			"ig": {
				"diffuse": {
					"color": {
						"red": 0.6275,
						"green": 0.3686,
						"blue": 0.4431
					},
					"map": {
						"mapFormat": "JPEG",
						"map": "IG.Reference.Bricks.tex/standard.jpg"
					}
				},
				"shininess": 0.0,
				"alpha": {
					"value": 1.0
				}
			}
		}
	},
```

Materials are described in a dictionary. Each Material can have different representations.
The ig description is based on a classical Phong model with its respective properties.
For simple or resource limited viewers, this also serves as a starting or fallback point.

Beyond this simple example, there are some advanced (PBR) properties (e.g. roughness maps) and 
taxonomies defined. Taxonomies define materials and leave the renderer great freedom
how to implement them. 

```json
	"products": [{
			"state": {
				"geometricHash": "#1596707789",
				"visualHash": "#-1085120996"
			},
			"materialCategories": {
			},
			"categories": [],
			"structure": [{
					"path": ".",
					"visible": true,
					"selectable": "Self",
					"deformation": 0.0
				}, {
					"path": "o1",
					"visible": true,
					"geometry": "IG.Reference.Cube2",
					"deformation": 0.0,
					"materialCategory": "@IG.Reference.Bricks"
				}
			],
			"status": {
				"code": 200
			}
		}
	]
}
```

The primary organization of the graphical representation are Products, which are placed relative to each other. Normally, a Product corresponds 1:1 to a commercial product but there're quite some options to convert a multi-product configuration into an OC. Sometimes this can even be controlled by the user.

A Product has a Structure definition (until it's a material-only update). The Structure is a list of nodes, describing a hierarchical scene graph for a product. Syntactically, however, it is a flat list of nodes. The position of a node in the tree is encoded in its path. The root is ".". Children of the root have a path without dots,
e.g. "o1" or "e2". Grand children of the root have exactly one dot, e.g. "o1.o1". All ancestors of a given node have to be in the list before that node.

"Geometry" links an entry in the geometries dictionary as described above.

A "MaterialCategory" is a concept to implement light-weight model updates that only change materials. You can think of a Material Category as a route for Materials to Geometries. The key in materialCategories is a material category, the value is a material. For static material use on a geometry, the @ prefix has been introduced for convenience. A material category starting with @ refers directly to a material with the same name (but without the @).

The property "Visible" indicates if the geometry of a node is actually rendered.

The property "Selectable" indicates if the node can be selected in a viewer or together 
with its parents or not at all.

Finally, "Deformation" describes the deformation of the associated mesh in the range from 0.0 to 1.0, where 0 is by definition the undeformed mesh.

## Copyright

Copyricht (C) 2020 - 2022 intelligentgraphics AG. All Rights Reserved.
