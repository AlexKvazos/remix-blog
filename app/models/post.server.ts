import { Post } from "@prisma/client";
import { prisma } from "~/db.server";

/**
 * Get all posts
 */
export async function getPosts() {
  return await prisma.post.findMany();
}

/**
 * Get a single post by slug
 */
export async function getPost(slug: string) {
  return await prisma.post.findUnique({ where: { slug } });
}

/**
 * Create a single post
 */
export async function createPost(
  post: Pick<Post, "slug" | "title" | "markdown">
) {
  return await prisma.post.create({ data: post });
}
