import { createClient } from '@sanity/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import  imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId : import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-08-28',
    token: import.meta.env.VITE_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source : SanityImageSource) => builder.image(source).url();