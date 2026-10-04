export type Category = "shell"|"buttons"|"membranes"|"display"|"battery"|"usbC"|"lighting"|"audio";
export type Difficulty = "easy"|"medium"|"advanced";
export type Soldering = "none"|"optional"|"required";
export interface Variant { id:string; name:string; displayName:string; colorHex?:string; transparent?:boolean; previewAsset?:string; priceOverride?:number; active:boolean; recommended?:boolean }
export interface Product { id:string; vendor:string; vendorProductId?:string; name:string; shortName:string; category:Category; description:string; price:number; currency:"USD"; lastVerified:string; variants:Variant[]; images:string[]; previewAssets:Record<string,string>; compatibility:{compatibleShellFamilies?:string[];requiresShellFamily?:string[];requires?:string[];incompatibleWith?:string[]}; solderingRequired:Soldering; difficulty:Difficulty; includedParts:string[]; sourceReference:string; active:boolean; approximate?:boolean }
export interface Selection { productId:string; variantId:string }
export type Configuration = Partial<Record<Category,Selection>>;
export interface SavedBuild { id:string;name:string;createdAt:string;updatedAt:string;configuration:Configuration;totalPrice:number;difficulty:Difficulty }
