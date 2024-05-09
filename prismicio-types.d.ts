// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BlogpostDocumentDataSlicesSlice = TextBlockSlice;

/**
 * Content for Blogpost documents
 */
interface BlogpostDocumentData {
  /**
   * Title field in *Blogpost*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Featured Image field in *Blogpost*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.featured_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  featured_image: prismic.ImageField<never>;

  /**
   * Author field in *Blogpost*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.author
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  author: prismic.KeyTextField;

  /**
   * Publication Date field in *Blogpost*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.publication_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  publication_date: prismic.DateField;

  /**
   * Small Description field in *Blogpost*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.small_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  small_description: prismic.KeyTextField;

  /**
   * Slice Zone field in *Blogpost*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogpostDocumentDataSlicesSlice> /**
   * Meta Title field in *Blogpost*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blogpost.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Blogpost*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blogpost.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Blogpost*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Blogpost document from Prismic
 *
 * - **API ID**: `blogpost`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogpostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BlogpostDocumentData>,
    "blogpost",
    Lang
  >;

type HomepageDocumentDataSlicesSlice =
  | NewsletterSlice
  | SectionHeadingSlice
  | HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | ImageContentSlice
  | BlogIndexSlice
  | TextBlockSlice
  | ContactImageContentSlice
  | SectionHeadingSlice
  | NewsletterSlice
  | ContactHeroSlice
  | HeroSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes =
  | BlogpostDocument
  | HomepageDocument
  | PageDocument;

/**
 * Primary content in *BlogIndex → Primary*
 */
export interface BlogIndexSliceDefaultPrimary {
  /**
   * Heading field in *BlogIndex → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_index.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;
}

/**
 * Default variation for BlogIndex Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogIndexSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BlogIndexSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *BlogIndex*
 */
type BlogIndexSliceVariation = BlogIndexSliceDefault;

/**
 * BlogIndex Shared Slice
 *
 * - **API ID**: `blog_index`
 * - **Description**: BlogIndex
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogIndexSlice = prismic.SharedSlice<
  "blog_index",
  BlogIndexSliceVariation
>;

/**
 * Default variation for ContactHero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactHeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *ContactHero*
 */
type ContactHeroSliceVariation = ContactHeroSliceDefault;

/**
 * ContactHero Shared Slice
 *
 * - **API ID**: `contact_hero`
 * - **Description**: ContactHero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactHeroSlice = prismic.SharedSlice<
  "contact_hero",
  ContactHeroSliceVariation
>;

/**
 * Primary content in *ContactImageContent → Primary*
 */
export interface ContactImageContentSliceDefaultPrimary {
  /**
   * Featured Image field in *ContactImageContent → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_image_content.primary.featured_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  featured_image: prismic.ImageField<never>;

  /**
   * Quote field in *ContactImageContent → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_image_content.primary.quote
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  quote: prismic.KeyTextField;
}

/**
 * Default variation for ContactImageContent Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactImageContentSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactImageContentSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ContactImageContent*
 */
type ContactImageContentSliceVariation = ContactImageContentSliceDefault;

/**
 * ContactImageContent Shared Slice
 *
 * - **API ID**: `contact_image_content`
 * - **Description**: ContactImageContent
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactImageContentSlice = prismic.SharedSlice<
  "contact_image_content",
  ContactImageContentSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Hero Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.hero_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero_image: prismic.ImageField<never>;

  /**
   * Heading field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Designation field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.designation
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  designation: prismic.KeyTextField;

  /**
   * tagline field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.tagline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tagline: prismic.KeyTextField;

  /**
   * Tag field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.tag
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tag: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *ImageContent → Primary*
 */
export interface ImageContentSliceDefaultPrimary {
  /**
   * Heading field in *ImageContent → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_content.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Tag field in *ImageContent → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_content.primary.tag
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tag: prismic.KeyTextField;

  /**
   * Tagline field in *ImageContent → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_content.primary.tagline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tagline: prismic.KeyTextField;

  /**
   * Button Label field in *ImageContent → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_content.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;

  /**
   * Button Link field in *ImageContent → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: image_content.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Featured Image field in *ImageContent → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_content.primary.featured_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  featured_image: prismic.ImageField<never>;
}

/**
 * Default variation for ImageContent Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageContentSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageContentSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ImageContent*
 */
type ImageContentSliceVariation = ImageContentSliceDefault;

/**
 * ImageContent Shared Slice
 *
 * - **API ID**: `image_content`
 * - **Description**: ImageContent
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageContentSlice = prismic.SharedSlice<
  "image_content",
  ImageContentSliceVariation
>;

/**
 * Primary content in *Newsletter → Primary*
 */
export interface NewsletterSliceDefaultPrimary {
  /**
   * Image field in *Newsletter → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: newsletter.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Heading field in *Newsletter → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: newsletter.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Tagline field in *Newsletter → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: newsletter.primary.tagline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tagline: prismic.KeyTextField;
}

/**
 * Default variation for Newsletter Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsletterSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NewsletterSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Newsletter*
 */
type NewsletterSliceVariation = NewsletterSliceDefault;

/**
 * Newsletter Shared Slice
 *
 * - **API ID**: `newsletter`
 * - **Description**: Newsletter
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsletterSlice = prismic.SharedSlice<
  "newsletter",
  NewsletterSliceVariation
>;

/**
 * Default variation for SectionHeading Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionHeadingSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *SectionHeading*
 */
type SectionHeadingSliceVariation = SectionHeadingSliceDefault;

/**
 * SectionHeading Shared Slice
 *
 * - **API ID**: `section_heading`
 * - **Description**: SectionHeading
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionHeadingSlice = prismic.SharedSlice<
  "section_heading",
  SectionHeadingSliceVariation
>;

/**
 * Primary content in *TextBlock → Primary*
 */
export interface TextBlockSliceDefaultPrimary {
  /**
   * TextBlock field in *TextBlock → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.primary.textblock
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  textblock: prismic.RichTextField;
}

/**
 * Default variation for TextBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextBlockSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TextBlock*
 */
type TextBlockSliceVariation = TextBlockSliceDefault;

/**
 * TextBlock Shared Slice
 *
 * - **API ID**: `text_block`
 * - **Description**: TextBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSlice = prismic.SharedSlice<
  "text_block",
  TextBlockSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BlogpostDocument,
      BlogpostDocumentData,
      BlogpostDocumentDataSlicesSlice,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      BlogIndexSlice,
      BlogIndexSliceDefaultPrimary,
      BlogIndexSliceVariation,
      BlogIndexSliceDefault,
      ContactHeroSlice,
      ContactHeroSliceVariation,
      ContactHeroSliceDefault,
      ContactImageContentSlice,
      ContactImageContentSliceDefaultPrimary,
      ContactImageContentSliceVariation,
      ContactImageContentSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      ImageContentSlice,
      ImageContentSliceDefaultPrimary,
      ImageContentSliceVariation,
      ImageContentSliceDefault,
      NewsletterSlice,
      NewsletterSliceDefaultPrimary,
      NewsletterSliceVariation,
      NewsletterSliceDefault,
      SectionHeadingSlice,
      SectionHeadingSliceVariation,
      SectionHeadingSliceDefault,
      TextBlockSlice,
      TextBlockSliceDefaultPrimary,
      TextBlockSliceVariation,
      TextBlockSliceDefault,
    };
  }
}
