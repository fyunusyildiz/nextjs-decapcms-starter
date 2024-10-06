import Layout from "@/layout";
import fs from "fs";
import matter from "gray-matter";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Markdown from "react-markdown";

interface AboutProps {
  about: {
    about_title: string;
    about_description: string;
  };
}

export default function About({ about }: AboutProps) {
  const { t } = useTranslation("seo");
  return (
    <Layout title={t("aboutTitle")} description={t("aboutDescription")}>
      <Link href="/" className="text-blue-800 underline">
        Home Page
      </Link>
      <h1>{about.about_title}</h1>
      <Markdown>{about.about_description}</Markdown>
    </Layout>
  );
}

interface Locale {
  locale: string;
}

export async function getStaticProps({ locale }: Locale) {
  const aboutFile = fs.readFileSync(`./content/about/about.md`, "utf-8");

  const about = matter(aboutFile).data;

  return {
    props: {
      about,
      ...(await serverSideTranslations(locale, ["seo"])),
    },
  };
}
