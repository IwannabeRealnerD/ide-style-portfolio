"use client";

import { FunctionComponent } from "react";

import { GlobalEditorWithPreview } from "@/components/GlobalEditorWithPreview";

import AboutMarkdown from "./education.md";

const AboutPersonalInfoEducationPage: FunctionComponent = () => {
  return <GlobalEditorWithPreview initialContent={AboutMarkdown} />;
};

export default AboutPersonalInfoEducationPage;
