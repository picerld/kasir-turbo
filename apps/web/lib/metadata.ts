import type { Metadata } from "next";

type HeadMetaDataProps = {
  title?: string;
  metaDescription?: string;
  ogImageUrl?: string;
  pathName?: string;
};

export function createMetadata({
  title = "Connect",
  metaDescription = "",
  ogImageUrl = "/favicon.ico",
  pathName = "",
}: HeadMetaDataProps): Metadata {
  const defaultTitle = "Connect";
  const baseUrl = "https://localhost:3000";

  const pageUrl = new URL(pathName, baseUrl).toString();

  return {
    title: `${title} | ${defaultTitle}`,
    description: metaDescription,
    openGraph: {
      title: `${title} | ${defaultTitle}`,
      description: metaDescription,
      url: pageUrl,
      images: [ogImageUrl],
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}
