import type { APIRoute, GetStaticPaths } from "astro";
import { blogCard, renderPng } from "~/lib/og";
import { getPosts } from "~/lib/sources/blog";
import type { Post } from "~/lib/types";

export const getStaticPaths = (async () =>
	(await getPosts()).map((post) => ({ params: { slug: post.slug }, props: { post } }))) satisfies GetStaticPaths;

export const GET: APIRoute<{ post: Post }> = ({ props }) => renderPng(blogCard(props.post));
