declare namespace Cns {
    /**
     * CNS Geometry representation, neutral CAD representation.
     */
    interface Geometry {
        part: string;
        parameters: Record<string, string>;
    }
}
declare namespace Ig {
    /**
     * ig Geometry representation, mesh based.
     */
    interface Geometry {
        /**
         * The mandatory format of the optional preview mesh.
         * Allowed formats are "OpenCTM", "OBJ", "OGRE Binary".
         */
        previewFormat?: "OpenCTM" | "OBJ" | "FBX" | "OGRE Binary";
        /**
         * An optional mesh to be displayed until the main mesh is loaded.
         */
        preview?: string;
        /**
         * The mandatory format of the optional main mesh.
         * Allowed formats are "OpenCTM", "OBJ", "FBX", "OGRE Binary".
         */
        meshFormat?: "OpenCTM" | "OBJ" | "FBX" | "OGRE Binary";
        /**
         * An optional mesh to be displayed as main mesh. Note, in some case a
         * geometry does not provide it, e.g. for super deformations.
         */
        mesh?: string;
        /**
         * The mandatory format of the optional normal map.
         * Allowed formats are "JPEG" and "PNG".
         */
        normalMapFormat?: "JPEG" | "PNG";
        /**
         * An optional normal map to be applied to the main mesh.
         */
        normalMap?: string;
        /**
         * The mandatory format of the optional deformation.
         * Allowed formats are "FFD" and "JSON".
         */
        deformationFormat?: "FFD" | "JSON";
        /**
         * Deformation description.
         */
        deformation?: string;
        /**
         * The mandatory format of the optional shape-key file, or other extra deformation data.
         * Allowed formats are "glTF" and "GLB".
         */
        deformationXDataFormat?: "glTF" | "GLB";
        /**
         * Shape-key file or other extra data, belonging to a deformation.
         */
        deformationXData?: string;
        /**
         * Optional geometry-related parameters, to be resolved at client-side.
         *
         * "SuperDeformation":
         * Marks the geometry as a super deformation. The assigned deformation
         * will be applied to the local geometry (if any) as well as recursively
         * to all child geometries.
         * Target type: Boolean
         *
         */
        parameters?: Record<"SuperDeformation", object>;
    }
    /**
     * A Transformation of the UV Set for a Material
     * Ordering R*S*T*V
     * Also see ThreeJS issue #15831
     *
     * This order minimizes shearing and improves content creation.
     *
     * Combination with a GeometryMapping looks like this:
     * GS*GT*GR*MR*MS*MT*V
     *
     * GR .. Matrix of GeometryMapping.Rotation
     * GS .. Matrix of GeometryMapping.Scale*
     * GT .. Matrix of GeometryMapping.Translation*
     *
     * MR .. Matrix of TextureMapping.Rotation
     * MS .. Matrix of TextureMapping.Scale*
     * MT .. Matrix of TextureMapping.Translation*
     *
     * V .. (UV)-Vector to be transformed
     *
     * Rotation is clockwise in degrees
     */
    interface TextureMapping {
        translationS: number;
        translationT: number;
        rotation: number;
        /**
         * default value = 1
         */
        scaleS: number;
        /**
         * default value = 1
         */
        scaleT: number;
    }
    /**
     * Basic color value.
     * Linear RGB (Not sRGB).
     * Values in the range 0.0 to 1.0
     */
    interface Color {
        red: number;
        green: number;
        blue: number;
    }
    /**
     * Representation of a texture map.
     */
    interface TextureMap {
        /**
         * The mandatory format of the map.
         * Allowed formats are "JPEG" and "PNG".
         */
        mapFormat: "JPEG" | "PNG";
        /**
         * Absolute or relative path to the texture image.
         */
        map: string;
        /**
         * An optional UV mapping.
         */
        mapping?: TextureMapping;
    }
    interface BasicMap {
        /**
         * A texture map.
         */
        map?: TextureMap;
    }
    /**
     * Texture map with additional color value. The relationship between both
     * will be defined in the application context.
     */
    interface ColorMap extends BasicMap {
        /**
         * A color value.
         */
        color?: Color;
    }
    /**
     * Texture map with additional scalar value. The relationship between both
     * will be defined in the application context.
     */
    interface ValueMap extends BasicMap {
        /**
         * A scalar value. If the map is supported or not, and it's relation-
         * ship to a map entry, is defined in the outer context.
         */
        value?: number;
    }
    interface Material {
        shininess: number;
        /**
         * Diffuse property. Both color and map are supported.
         * Color and map replace each other.
         */
        diffuse?: ColorMap;
        /**
         * Specular map. Both color and map are supported. The color (white if
         * undefined) will be used as a factor to the map, if any.
         */
        specular?: ColorMap;
        /**
         * Emission color. No map supported
         */
        emission?: ColorMap;
        /**
         * Normal map.
         */
        normal?: BasicMap;
        /**
         * Roughness map.
         */
        roughness?: BasicMap;
        /**
         * Alpha value or map. Value and map replace each other.
         * Values in the range 0.0 to 1.0. 0.0 is transparent, 1.0 is opaque.
         * Map is grayscale. Black is transparent, white is opaque.
         */
        alpha?: ValueMap;
        /**
         * Diffuse delta map. The delta map modifies the diffuse
         * color/map and typically has it's own mapping.
         *
         * Format: 24 Bit (RGB)
         *
         * The handling (for each channel/color) is:
         * - linear mapping of [0, 255] to [0, 2]
         * - multiplication with the diffuse/color value
         *
         * 0 sets the original value to 0.
         * 127/128 keeps the original value.
         * 255 doubles the original value.
         */
        diffuseDelta?: TextureMap;
        /**
         * Roughness delta map. The delta map modifies the roughness
         * value/map and typically has it's own mapping.
         *
         * Format: 8 Bit (Grayscale)
         *
         * The handling is:
         * - linear mapping of [0, 255] to [0, 2]
         * - multiplication with the roughness value
         *
         * 0 sets the original value to 0.
         * 127/128 keeps the original value.
         * 255 doubles the original value.
         */
        roughnessDelta?: TextureMap;
        /**
         * Default mapping, may be overridden by specific texture maps.
         */
        mapping?: TextureMapping;
        /**
         * Taxonomy information according to docs/ig_Taxonomy
         */
        taxonomy?: Record<string, object>;
        /**
         * Optional geometry-related parameters, to be resolved at client-side.
         
         * "DoNotRescale":
         * Marks the material as not re-scaleable. Re-scaling can be applied
         * for psychological reasons, for instance.
         * Target type: Boolean
         *
         * "Overlay":
         * For alpha-map materials, tells the renderer that the associated geometry
         * should be an overlay to other geometries at the same location.
         * Target type: Boolean
         *
         * IGXC Compatibility: Metamaterial parameters but without redundancy.
         */
        parameters?: Record<"DoNotRescale" | "Overlay", object>;
    }
}
/**
 * Description of either Positions or Scalings.
 * All attributes are mandatory.
 * For positions, 1.0 means 1.0 m.
 */
interface Vector {
    x: number;
    y: number;
    z: number;
}
/**
 * Description of a three-dimensional rotation.
 * All attributes are mandatory.
 */
interface Quaternion {
    x: number;
    y: number;
    z: number;
    w: number;
}
/**
 * The type of the point
 * "Origin" - the origin of a product, matches to "Child"
 * "Child" - a (virtual) child can be placed, matches to "Origin"
 * "Left" - L-R neighborship, matches to "Right"
 * "Right" - L-R neighborship, matches to "Left"
 * "Top" - vertical neighborship, matches to "Bottom"
 * "Bottom" - vertical neighborship, matches to "Top"
 * "Front" - front/back neighborship, matches to "Back"
 * "Back" - front/back neighborship, machtes to "Front"
 * "Alignment" - auxiliary point to support alignments
 * "Maximum" - marks the maximum of the bbox
 * "Minimum" - marks the minimum of the bbox
 */
type AttachPointType = "Origin" | "Child" | "Left" | "Right" | "Top" | "Bottom" | "Front" | "Back" | "Alignment" | "Maximum" | "Minimum";
/**
 * An attachment point for planning support and placement of children.
 * All attributes are mandatory.
 *
 * IGXC Compatibility: the Rotation is changed to Quaternion, in IGXC it
 * was Euler-based.
 */
interface AttachPoint {
    /**
     * The type of the point
     */
    type: AttachPointType;
    /**
     * Own key of the point. Should match the counterpart's foreign key.
     */
    key: string;
    /**
     * Allowed keys of counterpart's points. May contain * and ? characters.
     */
    foreign: string;
    /**
     * The position of the point, relative to the Product.
     */
    point: Vector;
    /**
     * The orientation of the point, relative to the Product.
     */
    rotation: Quaternion;
    /**
     * Attribute controls if the point is enabled.
     * If disabled, it should be invisible too.
     */
    enabled: boolean;
    /**
     * The visual representation of the attachment point.
     * "Standard" - semi-transparent sphere/cube.
     * "Ghost" - semi-transparent representation of a product to be placed
     * "Ghost2" - simplified representation of a product to be placed.
     */
    representation: "Standard" | "Ghost" | "Ghost2";
}
interface CatalogEntry {
    /**
     * Type of the entry. Available values are:
     * "Folder"
     * "Article"
     */
    entryType: "Folder" | "Article";
    /**
     * Id of the entry. Needed if catalog processing is done server side.
     */
    entryId: string;
    /**
     * Localized entry text. Key is ISO 639-1 language code.
     */
    entryText: Record<string, string[]>;
    /**
     * For type Article, the native id of the article to be created.
     * In case of IDM, this is <series/>|<product/>.
     * In case of XcalibuR, this is <model_source_id/>@@<product_source_id/>
     */
    articleId: string;
    /**
     * For type Folder, the contained entries: folders and/or articles.
     */
    entries: CatalogEntry[];
}
/**
 * Basic color value.
 * Linear RGB (Not sRGB).
 * Values in the range 0.0 to 1.0
 */
interface Color {
    red: number;
    green: number;
    blue: number;
}
/**
 * Basic commercial data, related to a Product.
 */
interface Commercial {
    /**
     * The instance id of the product in the configurator/basket.
     */
    id: string;
    /**
     * The instance id of an associated master product, e.g. a set.
     */
    masterId?: string;
    /**
     * The (basic) article code.
     */
    article: string;
    /**
     * Additional article code that describes the specific variant.
     */
    variant: string;
    /**
     * The native id. In case of IDM, this is <series/>|<product/>.
     * In case of XcalibuR, this is <model_source_id/>@@<product_source_id/>
     */
    nativeId: string;
    /**
     * Short (one-line), localized article text. Key is ISO 639-1 language code.
     */
    shortText: Record<string, string>;
    /**
     * Long, localized article text. Key is ISO 639-1 language code.
     */
    longText: Record<string, string[]>;
    /**
     * Long, localized article text that describes the variant. Used as an addition
     * to the long text, not as replacement. Key is ISO 639-1 language code.
     */
    variantText: Record<string, string[]>;
    /**
     *  The price unit, for all prices of this article. Possible values:
     *  "EUR_Ct" - Euro Cent
     *  "USD_Ct" - USD Cent
     *  "CHF_Rp" - CHF Rappen
     */
    priceUnit?: "EUR_Ct" | "USD_Ct" | "CHF_Rp";
    /**
     *  The article's sales price, according to the price unit.
     */
    salesPrice?: number;
    /**
     *  The article's purchase price, according to the price unit.
     */
    purchasePrice?: number;
    /**
     * The properties of the article.
     */
    properties: Property[];
}
/**
 * A simple property type.
 */
interface Property {
    /**
     * The unique id of the property.
     */
    propertyId: string;
    /**
     * Localized property text. Key is ISO 639-1 language code.
     */
    propertyText: Record<string, string>;
    /**
     * The optional id of the property's current value.
     */
    valueId?: string;
    /**
     * The localized text of the value. Needed if valueId cannot be
     * resolved in Values.
     */
    valueText?: Record<string, string>;
    /**
     * The position of the property in the product's property editor.
     */
    position: number;
    /**
     * The values of the property.
     */
    values: Value[];
}
/**
 * Value of properties.
 */
interface Value {
    /**
     * The unique id of the property value.
     */
    valueId: string;
    /**
     * Localized value text. Key is ISO 639-1 language code.
     */
    valueText: Record<string, string>;
    /**
     * The position of the value in the property's selection list.
     */
    position: number;
    /**
     * The sub values of the value.
     */
    values: Value[];
}
/**
 * A Transformation of the UV Set of a Geometry
 * Ordering S*T*R*V
 * This order minimizes shearing and improves
 * the posibility to fix tiling.
 *
 * Combination with a MaterialMapping looks like this:
 * GS*GT*GR*MR*MS*MT*V
 *
 * GS .. Matrix of GeometryMapping.Scale*
 * GT .. Matrix of GeometryMapping.Translation*
 * GR .. Matrix of GeometryMapping.Rotation
 *
 * MR .. Matrix of TextureMapping.Rotation
 * MS .. Matrix of TextureMapping.Scale*
 * MT .. Matrix of TextureMapping.Translation*
 *
 * V .. (UV)-Vector to be transformed
 *
 * Rotation is clockwise in degrees
 */
interface GeometryMapping {
    translationS: number;
    translationT: number;
    rotation: number;
    /**
     * default value = 1
     */
    scaleS: number;
    /**
     * default value = 1
     */
    scaleT: number;
}
/**
 * Spatial transformation of an object, relative to it's parent object.
 * All attributes are optional. But, if an attribute exists, all it's
 * attributes must exist, too.
 * The application ordering follows industry standard (X3D, ThreeJS) so first scales then rotates and then positions.
 * This basically allows to scale and rotate an object undisturbed and then move it to its position.
 * Think of a cube.
 * Ordering as Matrices is therefore T*R*S*V
 */
interface Transform {
    /**
     * The position of the object, relative to it's parent.
     */
    position: Vector;
    /**
     * The rotation of the object, relative to it's parent.
     */
    rotation: Quaternion;
    /**
     * The scaling of the object's geometries.
     */
    scale: Vector;
}
/**
 * Geometry-parameter prefix for CADENAS geometries.
 */
declare const cnsPrefix = "cns.";
/**
 * A 3D component that is used to model products. A product corresponds to
 * a tree of Objects. Inside the tree, transforms are always inherited from
 * parent to child and concatenated. Material Categories are inherited from
 * parent to child, as long as the child does not have one.
 *
 * IGXC Compatibility: Points and Categories are moved to the Product.
 * Evaluator and Evaluator Parameters have been removed.
 */
interface Component {
    /**
     * The Path describes the tree structure. The root path "." is
     * mandatory. First-level children may be "o1", "o2", "e1", and so on.
     * Again, "o1.o1" is a child of "o1". And so on.
     * The sequence of objects must be compatible to the correspnding tree
     * defined by Path of these objects. So any parent must occur in the
     * array before it's children, and so on.
     */
    path: string;
    /**
     * The attribute controls the visibility of the object. If it is
     * invisible, all children are invisible too (recusrively). If the
     * attribute is unspecified in a JSON file, it is considered to be true!
     *
     * default value = true
     */
    visible?: boolean;
    /**
     * The attribute controls if the object is selectable or--if not--what
     * should happen then. Allowed values are:
     * "Self", "Parent" (default) and "None" (see above for description).
     *
     * default value = "Parent"
     */
    selectable?: "Self" | "Parent" | "None";
    /**
     * The optional attribute specifies a fully scoped geometry.
     */
    geometry?: string;
    /**
     * The optional attribute specifies additional parameters to be applied
     * to the geometry.
     */
    geometryParameters?: Record<string, string>;
    /**
     * The optional attribute defines a deformation value in the range of
     * 0 to 1, to be applied to the geometry. 0 means no deformation, 1
     * means full deformation.
     * This setting has a higher priority, compared with the Deformation
     * specified as Geometry Parameter in ig.Geometry.
     */
    deformation?: number;
    /**
     * The optional attribute defines a layer tag for this object.
     */
    layer?: string;
    /**
     * The optional attribute sets a material category for the object and
     * all children (recursively) that do not set one themselves.
     */
    materialCategory?: string;
    /**
     * The optional attribute sets a mapping to be applied to the non-object
     * bound UV set - typically, the UV set used for the material.
     */
    mapping?: GeometryMapping;
    /**
     * The optional attribute specifies an offset to the parent. The parent's
     * transform will always be concatenated with the child's one.
     * The transform of root objects (Path: ".") will be ignored if existing!
     */
    transform?: Transform;
    /**
     * Optional attribute that assigns an interactor script to the object.
     * Fully scoped name of an interactor class. The class must be provided
     * by the scripts in the scene.
     */
    interactor?: string;
    /**
     * Optional attribute that provides further parameters for the created
     * interactor.
     */
    interactorParameters?: Record<string, string>;
    /**
     * The optional attribute defines property ids that are linked to this
     * object (and it's children). This information may be used for context-
     * sensitive configuration.
     */
    options?: string[];
}
/**
 * An abstract representation of a 3D Geometry.
 */
interface Geometry {
    /**
     * Optional representation in the ig format.
     */
    ig?: Ig.Geometry;
    /**
     * Optional representation in the CADENAS format.
     */
    cns?: Cns.Geometry;
}
interface GeometryIndex {
    /**
     * The optional attribute provides a partial URI to be added to all
     * relative asset uris. A valid base path should normally start with
     * https:// or file://, and end with either a slash or the path sepa-
     * rator character of the operating system.
     */
    basePath?: string;
    /**
     * The mandatory attribute provides unique content hashes for assets
     * that are directly referenced in the OC data set. The specific hash
     * algorithm is unspecified. It may be an MD5 hash of the binary
     * content for instance. But low-res assets may use the same hash as
     * the originals, they are derived from. So, the only operation that is
     * legal for hash, is to compare them with an optionally existing one.
     */
    hashes: Record<string, string>;
    /**
     * The mandatory attribute provides an embedded geometry index.
     */
    geometries: Record<string, Geometry>;
}
/**
 * An abstract representation of a Material.
 */
interface Material {
    /**
     * Optional representation in the 'ig' format.
     */
    ig?: Ig.Material;
}
/**
 * An external Material index.
 */
interface MaterialIndex {
    /**
     * The optional attribute provides a partial URI to be added to all
     * relative asset uris. A valid base path should normally start with
     * https:// or file://, and end with either a slash or the path sepa-
     * rator character of the operating system.
     */
    basePath?: string;
    /**
     * The mandatory attribute provides unique content hashes for assets
     * that are directly referenced in the OC data set. The specific hash
     * algorithm is unspecified. It may be an MD5 hash of the binary
     * content for instance. But low-res assets may use the same hash as
     * the originals, they are derived from. So, the only operation that is
     * legal for hash, is to compare them with an optionally existing one.
     */
    hashes: Record<string, string>;
    /**
     * The mandatory attribute provides an embedded Material index.
     */
    materials: Record<string, Material>;
}
/**
 * State information of a product.
 *
 * IGXC Compatibility: The PBR hash has been removed for now.
 */
interface State {
    /**
     * Optional commercial instance id. Will be sent from client to server
     * (and retour) to identify the object in the configurator/basket.
     *
     * Note. comId should match to Commercial.Id if Commercial exists.
     */
    comId?: string;
    /**
     * Optional graphical instance it. Will typically be sent from client
     * (where this id is created and managed) to the server and returned
     * from it, for clear assignment of product representation.
     */
    gfxId?: string;
    /**
     * The geometric hash may be created from a configurator service. It
     * will be sent to the client, which may return it during upcoming
     * update requests. The service may then detect a non-geometric update
     * of the product representation and send a corresponding update.
     */
    geometricHash?: string;
    /**
     * The visual hash may be created from a configurator service. It
     * will be sent to the client, which may return it during upcoming
     * update requests. The service may then detect a non-visual update
     * of the product representation and send a corresponding update.
     */
    visualHash?: string;
}
/**
 * Defines status codes on product and scene level.
 * 200 is default. All other codes than 200 are errors.
 * Codes <= 1000 are reserved except the predefined ones.
 * Codes > 1000 are user defined error codes.
 */
declare enum EStatusCode {
    /**
     * No errors detected.
     */
    Ok = 200,
    /**
     * Not sufficient defined or invalid parameters.
     */
    BadRequest = 400,
    /**
     * Data for further processing not found.
     */
    NotFound = 404,
    /**
     * One or more errors occured.
     */
    Conflict = 409,
    /**
     * An error during data processing occured.
     */
    InternalServerError = 500,
    /**
     * Service for data processing/gathering not available.
     */
    ServiceUnavailable = 503
}
/**
 * Should be handled as additional information for e.g. debugging.
 * Contains information if an object is valid.
 * If not, a status code and maybe an additional message inform about what is wrong.
 */
interface Status {
    /**
     * Describes status in short.
     * Default is 200, no errors detected.
     */
    code: EStatusCode;
    /**
     * Optional message string contains additional information to better understand the status code.
     */
    message?: string;
}
/**
 * An initial or incremental product representation.
 */
interface Product {
    /**
     * The kind of the product. Possible values are:
     * "Product" - a regular product
     * "Set" - a set, typically without own graphical representation
     * "Placeholder" - a placeholder product without commercial representation
     */
    kind: "Product" | "Set" | "Placeholder";
    /**
     * Optional state information for a product. Even if the state object
     * exists, not all attributes may be set.
     * The state information always entirely updates an existing state
     * information.
     */
    state?: State;
    /**
     * Optional world transform of the product representation.
     * If the transform is not null, it entirely replaces the existing transform.
     */
    transform?: Transform;
    /**
     * The mandatory attribute maps material categories to materials.
     * Both, material categories and materials should be compatible with a
     * three-level technical namespace.
     * Implicit material categories consist of prefix '@' and a material,
     * and should be included too, even if this is kind of redundant.
     *
     * IGXC Compatiblity: In IGXC this attribute was named Categories.
     */
    materialCategories: Record<string, string>;
    /**
     * Product categories for the client-side implementation of planning
     * behavior.
     * If Categories is not null, it entirely replaces the existing categories.
     *
     * IGXC Compatibility: In IGXC, categories were considered from the
     * structure's root entry. Now they can be updated, even if the
     * structure does not change.
     */
    categories?: string[];
    /**
     * The tree structure that describes the product in 3D.
     * If the structure is not null, it entirely replaces the existing
     * structure.
     */
    structure?: Component[];
    /**
     * Attachment points for the client-side creation of neighbor and
     * parent-child relationships.
     * If Points is not null, it entirely replaces the existing points.
     *
     * IGXC Compatibility: In IGXC, points were considered from the
     * structure's root entry. Now they can be updated, even if the
     * structure does not change.
     */
    points?: AttachPoint[];
    /**
     * Commercial data related to this product
     */
    commercial: Commercial;
    /**
     * Contains product related status information.
     */
    status: Status;
}
/**
 * A simple camera definition.
 * Up vector is per default in positive y direction.
 * FOV / Dollying depends on viewer.
 */
interface Camera {
    /**
     * The position of the target point, a.k.a. look-at point.
     */
    lookAt: Vector;
    /**
     * The position of the camera, a.k.a. eye point.
     */
    lookFrom: Vector;
}
/**
 * Information of a client-side JavaScript script (ECMA 5.1).
 * All attributes, except Path, are mandatory.
 */
interface Script {
    /**
     * The name of the script, should correspond to it's scope, two or
     * three levels.
     */
    name: string;
    /**
     * The mode of the script. Currently allowed: "Interactor".
     */
    mode: "Interactor";
    /**
     * The version of the script: <Major/>.<Minor/>.<Build/>.<Release/>
     * <Major/> starts at 1 and will be incremented on major changes.
     * <Minor/> starts at 0 and will be incremented on minor changes.
     * <Build/> starts at 0 and will be incremented on small changes.
     * <Release/> starts at 1 for non-final release and 100 for final ones.
     * Release numbers bigger than 100 mark bug fixes/patches.
     */
    version: string;
    /**
     * The operation mode. For client-side scripts it must be true.
     */
    runTime: boolean;
    /**
     * Optional path to the JavaScript file, fallback: Name + ".js"
     */
    path?: string;
}
type Representation = "Standard" | "CAD_BIM" | "Photo";
/**
 * The Scene is the central part of an OC data set. Each OC data set
 * contains exactly one.
 * A Scene may contain initial product representations and/or updates.
 * A Scene may contain products that should be inserted instantly, as well
 * as add-ons to be inserted later on and shown as placeholders before.
 */
interface Scene {
    //#region General
    /**
     * The mandatory attribute format must be structured as follows:
     * "OpenConfiguration_<Major/>.<Minor/> [PRE]"
     * Legal combinations of <Major/>.<Minor/> are: 1.0
     * The optional postfix " PRE" marks a preliminary format.
     */
    format: string;
    /**
     * This optional attribute contains informal information about the
     * creator of this OC data set.
     */
    creator?: string;
    /**
     * This attribute contains general status information about the Scene contents.
     */
    status: Status;
    /**
     * The representations of the scene. Legal values are:
     * "Standard" - Real-time mesh data.
     * "CAD_BIM" - CAD/BIM volume bodies.
     * "Photo" - High-resolution mesh data.
     * This just lists possible usages and can be used for fast filtering,
     * it does not influence the actual data. A "Photo" renderer would still use
     * meshes attached as geometry.mesh
     */
    representations: Representation[];
    /**
     * This optional attribute may contain the id of a server-side session.
     */
    configurationId?: string;
    //#endregion General
    /**
     * Optional, embedded catalog.
     */
    catalog?: CatalogEntry[];
    //#region Assets
    /**
     * The optional attribute provides a partial URI to be added to all
     * relative asset uris. A valid base path should normally start with
     * https:// or file://, and end with either a slash or the path sepa-
     * rator character of the operating system.
     */
    basePath?: string;
    /**
     * The mandatory attribute provides unique content hashes for assets
     * that are directly referenced in the OC data set. The specific hash
     * algorithm is unspecified. It may be an MD5 hash of the binary
     * content for instance. But low-res assets may use the same hash as
     * the originals, they are derived from. So, the only operation that is
     * legal for hash, is to compare them with an optionally existing one.
     */
    hashes: Record<string, string>;
    /**
     * The optional attribute contains all client-side JavaScript packages.
     */
    scripts?: Script[];
    /**
     * The optional attribute provides an embedded geometry index.
     *
     * IGXC Compatibility: now it's embedded, self-contained geometries
     * rather than just geometry names. Thus, separate assignments of
     * geometry normal maps, deformations, etc. are removed. Also, the
     * embedded geometry definition is optional. There can be external
     * geometry definitions, too.
     */
    geometries?: Record<string, Geometry>;
    /**
     * The optional attribute provides links to external geometry indices.
     * The key should be a two-level technical namespace to speedup the
     * geometry lookup.
     * The value must be an absolute or relative URI.
     * The content of the value, must be de-serialized as GeometryIndex.
     *
     * IGXC Compatibility: In IGXC, this concept did not exist.
     */
    geometryIndexes?: Record<string, string>;
    /**
     * The optional attribute provides an embedded geometry index.
     *
     * IGXC Compatibility: The embedded material definition is optional.
     * There can be external material definitions, too.
     */
    materials?: Record<string, Material>;
    /**
     * The optional attribute provides links to external geometry indices.
     * The key should be a two-level technical namespace to speedup the
     * geometry lookup.
     * The value must be an absolute or relative URI.
     * The content of the value, must be de-serialized as MaterialIndex.
     *
     * IGXC Compatibility: In IGXC, this concept did not exist.
     */
    materialIndexes?: Record<string, string>;
    /**
     * An optional camera setup to restore the camera in another viewer.
     */
    camera?: Camera;
    //#endregion
    //#region Products
    /**
     * The mandatory attribute contains the products to be inserted into/
     * updated in the client world.
     *
     * IGXC Compatibility: in IGXC, there is only one product.
     */
    products: Product[];
}
/**
 * A Transformation of the UV Set for a Material
 * Ordering R*S*T*V
 * Also see ThreeJS issue #15831
 *
 * This order minimizes shearing and improves content creation.
 *
 * Combination with a GeometryMapping looks like this:
 * GS*GT*GR*MR*MS*MT*V
 *
 * GR .. Matrix of GeometryMapping.Rotation
 * GS .. Matrix of GeometryMapping.Scale*
 * GT .. Matrix of GeometryMapping.Translation*
 *
 * MR .. Matrix of TextureMapping.Rotation
 * MS .. Matrix of TextureMapping.Scale*
 * MT .. Matrix of TextureMapping.Translation*
 *
 * V .. (UV)-Vector to be transformed
 *
 * Rotation is clockwise in degrees
 */
interface TextureMapping {
    translationS: number;
    translationT: number;
    rotation: number;
    /**
     * default value = 1
     */
    scaleS: number;
    /**
     * default value = 1
     */
    scaleT: number;
}
export { Cns, Ig, AttachPointType, AttachPoint, CatalogEntry, Color, Commercial, Property, Value, cnsPrefix, Component, Geometry, GeometryIndex, GeometryMapping, Material, MaterialIndex, Product, Quaternion, Representation, Scene, Script, State, TextureMapping, Transform, Vector };
