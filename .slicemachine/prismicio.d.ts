// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Home documents */
interface HomeDocumentData {
    /**
     * Title field in *Home*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Slice Zone field in *Home*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: home.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomeDocumentDataSlicesSlice>;
}
/**
 * Slice for *Home → Slice Zone*
 *
 */
type HomeDocumentDataSlicesSlice = HeroSliderSlice;
/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;
/** Content for page documents */
interface PageDocumentData {
    /**
     * Title field in *page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Slice Zone field in *page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = HeroSliderSlice | ImageGridSlice;
/**
 * page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
export type AllDocumentTypes = HomeDocument | PageDocument;
/**
 * Primary content in HeroSlider → Primary
 *
 */
interface HeroSliderSliceDefaultPrimary {
    /**
     * Title field in *HeroSlider → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: hero_slider.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *HeroSlider → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: hero_slider.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * image field in *HeroSlider → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_slider.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Item in HeroSlider → Items
 *
 */
export interface HeroSliderSliceDefaultItem {
    /**
     * CTA Link field in *HeroSlider → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_slider.items[].cta
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    cta: prismicT.LinkField;
    /**
     * CTA Text field in *HeroSlider → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_slider.items[].ctatext
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    ctatext: prismicT.KeyTextField;
}
/**
 * Default variation for HeroSlider Slice
 *
 * - **API ID**: `default`
 * - **Description**: `HeroSlider`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliderSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HeroSliderSliceDefaultPrimary>, Simplify<HeroSliderSliceDefaultItem>>;
/**
 * Slice variation for *HeroSlider*
 *
 */
type HeroSliderSliceVariation = HeroSliderSliceDefault;
/**
 * HeroSlider Shared Slice
 *
 * - **API ID**: `hero_slider`
 * - **Description**: `HeroSlider`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliderSlice = prismicT.SharedSlice<"hero_slider", HeroSliderSliceVariation>;
/**
 * Primary content in ImageGrid → Primary
 *
 */
interface ImageGridSliceDefaultPrimary {
    /**
     * Title field in *ImageGrid → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: image_grid.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *ImageGrid → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: image_grid.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item in ImageGrid → Items
 *
 */
export interface ImageGridSliceDefaultItem {
    /**
     * Image field in *ImageGrid → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: image_grid.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Default variation for ImageGrid Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ImageGrid`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageGridSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ImageGridSliceDefaultPrimary>, Simplify<ImageGridSliceDefaultItem>>;
/**
 * Slice variation for *ImageGrid*
 *
 */
type ImageGridSliceVariation = ImageGridSliceDefault;
/**
 * ImageGrid Shared Slice
 *
 * - **API ID**: `image_grid`
 * - **Description**: `ImageGrid`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageGridSlice = prismicT.SharedSlice<"image_grid", ImageGridSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { HomeDocumentData, HomeDocumentDataSlicesSlice, HomeDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, AllDocumentTypes, HeroSliderSliceDefaultPrimary, HeroSliderSliceDefaultItem, HeroSliderSliceDefault, HeroSliderSliceVariation, HeroSliderSlice, ImageGridSliceDefaultPrimary, ImageGridSliceDefaultItem, ImageGridSliceDefault, ImageGridSliceVariation, ImageGridSlice };
    }
}