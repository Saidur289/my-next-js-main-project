import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(`*[_type=='startup' && defined(slug.current) && !defined($search) || category match $search || author->name match $search ] | order(_createdAt desc){
  _id, title, image, _createdAt, 
  "author": author-> { _id, name, image, bio }, 
  slug, category, views, description
}`)