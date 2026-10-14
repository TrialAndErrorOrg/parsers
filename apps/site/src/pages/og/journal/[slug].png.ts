import type { APIRoute, GetStaticPaths } from "astro";
import { articleCard, renderPng } from "~/lib/og";
import { getArticles } from "~/lib/sources/journal";
import type { Article } from "~/lib/types";

export const getStaticPaths = (async () =>
	(await getArticles()).map((article) => ({ params: { slug: article.slug }, props: { article } }))) satisfies GetStaticPaths;

export const GET: APIRoute<{ article: Article }> = ({ props }) => renderPng(articleCard(props.article));
