import { defineType } from "sanity";

export const post = defineType({
	name: "post",
	title: "Post",
	type: "document",
	fields: [
		{ name: "title", title: "Title", type: "string" },
		{ name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
	],
});
