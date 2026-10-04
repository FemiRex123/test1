import { describe,expect,it } from "vitest";import { defaultConfiguration } from "@/data/products";import { calculatePrice,deserializeBuild,randomBuild,serializeBuild,validateBuild } from "./configurator";import { Configuration } from "@/types/configurator";
describe("configurator business logic",()=>{
 it("calculates prices from products and selected variants",()=>expect(calculatePrice(defaultConfiguration)).toBeCloseTo(74.6));
 it("validates the default configuration",()=>expect(validateBuild(defaultConfiguration)).toEqual({valid:true,errors:[]}));
 it("serializes and restores a build losslessly",()=>expect(deserializeBuild(serializeBuild(defaultConfiguration))).toEqual(defaultConfiguration));
 it("falls back safely when serialized state is invalid",()=>expect(deserializeBuild("not-a-build")).toEqual(defaultConfiguration));
 it("only generates compatible random builds",()=>{for(let i=0;i<100;i++)expect(validateBuild(randomBuild()).valid).toBe(true)});
 it("counts multi-slot bundle components without double-charging",()=>{const bundle:Configuration={shell:{productId:"fp-mirror-shell",variantId:"white"}};expect(calculatePrice(bundle)).toBe(9.9)});
});
