declare module "*.mdx" {
  import type { ComponentType } from "react";
  import type { MDXProps } from "mdx/types";

  const MDXContent: ComponentType<MDXProps>;

  export const metadata: {
    title: string;
    description: string;
    slug: string;
    publishedAt: string;
    updatedAt: string;
    author: string;
    reviewedBy: string;
    category: string;
    tags: string[];
    draft: boolean;
  };

  export default MDXContent;
}
