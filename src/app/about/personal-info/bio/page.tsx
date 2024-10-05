"use client";

import { FunctionComponent } from "react";

import { GlobalEditorWithPreview } from "@/components/GlobalEditorWithPreview";

import AboutMarkdown from "./bio.md";

const AboutPersonalInfoBioPage: FunctionComponent = () => {
  return <GlobalEditorWithPreview initialContent={AboutMarkdown} />;
};

export default AboutPersonalInfoBioPage;
