import { getCollection } from "astro:content";

export const getLessons = async () => {
  const lessons = await getCollection("lessons");
  
  return lessons
    .map((lesson) => ({
      title: lesson.data.title,
      slug: lesson.slug,
    }))
    .sort((a, b) => new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' }).compare(a.slug, b.slug));
};
