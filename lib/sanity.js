// lib/sanity.js
import {
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from 'next-sanity'

import { config } from './config'
import { sanityClient, previewClient } from './sanity.server'

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  'author': author->{name, 'avatar': avatar.asset->url},
  coverImage,
`


// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview) => (usePreview ? previewClient : sanityClient)


// offset = how many data you want to skip, limit = how many date you want to fetch
export async function getAllBlogs() {
  const results = await sanityClient
    .fetch(`*[_type == "blog"] | order(date desc) {${blogFields}}`);
  return results;
}

export async function getPaginatedBlogs({offset = 0, date = 'desc'} = {offset: 0, date: 'desc'}) {
  const results = await sanityClient
    .fetch(`*[_type == "blog"] | order(date ${date}) {${blogFields}}[${offset}...${offset + 6}]`);
  return results;
}

export const onBlogUpdate = (slug) => {
  const client = getClient(true);
  return client.listen(`*[_type == "blog" && slug.current == $slug] {
    ${blogFields}
    content[]{..., "asset": asset->}
  }`, {slug})
}


export async function getBlogBySlug(slug, preview) {
  const currentClient = getClient(preview);
  const result = await currentClient
    .fetch(`*[_type == "blog" && slug.current == $slug] {
      ${blogFields}
      content[]{..., "asset": asset->}
    }`, {slug})
    .then(res => preview ? (res?.[1] ? res[1] : res[0]) : res?.[0])

  return result;

}




/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => createImageUrlBuilder(config).image(source)

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config)

// Set up Portable Text serialization
export const PortableText = createPortableTextComponent({
  ...config,
  // Serializers passed to @sanity/block-content-to-react
  // (https://github.com/sanity-io/block-content-to-react)
  serializers: {},
})

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config)
