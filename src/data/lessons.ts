import { getCollection } from "astro:content";

export const getLessons = async () => {
  const lessons = await getCollection("lessons");
  return lessons.map((lesson) => ({
    title: lesson.data.title,
    slug: lesson.slug,
  }));
};
