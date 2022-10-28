import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2022-10-28",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
};

export const sanityClient = createClient(config);

// Set up a helper function for generating Image URLs with only the asset reference data in your documents.
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
