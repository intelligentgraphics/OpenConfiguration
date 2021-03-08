# Main differences between IGXC and OpenConfiguration

IGXC: only one product
OC: multiple products

IGXC: Euler mode: only one rotation axis per object
OC: Quaternions only

IGXC: Points as part of the structure
OC: Points outside structure, on Product level

IGXC: Categories as part of the structure
OC: Categories outside structure, on Product level

IGXC: geometry files are in multiple top-level entries
OC: all geometry files are in one data structure

IGXC: the formats of geometry files must be retrieved from the urls
OC: the formats of geometry files are provided explicitly

IGXC: embedded geometries and materials
OC: optional external indexes for geometries and materials

IGXC: one representation for geometry and material
OC: multiple representations for geometry and material

IGXC: Categories (mapping of Material Categories to Materials)
OC: MaterialCategories

IGXC: object attributes Evaluator and EvalutorParameters
OC: no evaluator attributes at all

IGXC: all Geometry parameters can be provided as Parameters attribute
OC: only those are provided as parameters attribute that are not resolved otherwise, e.g. shared normal map

IGXC: all MetaMaterial parameters can be provided as Meta attribute
OC: only those are provided as parameters attribute that are not resolved otherwise, e.g. taxonomy
