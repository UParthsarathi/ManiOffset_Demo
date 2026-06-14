// @ts-nocheck
"use client";
import React, { forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";

const Page = forwardRef<HTMLDivElement, { children: React.ReactNode; number?: number }>(
  (props, ref) => {
    return (
      <div className="page bg-white shadow-xl" ref={ref}>
        <div className="page-content w-full h-full">
          {props.children}
        </div>
      </div>
    );
  }
);
Page.displayName = "Page";

export default function ModernFlipBook(props: any) {
  return (
    <HTMLFlipBook
      width={400}
      height={560}
      size="stretch"
      minWidth={300}
      maxWidth={500}
      minHeight={420}
      maxHeight={700}
      maxShadowOpacity={0.5}
      showCover={true}
      mobileScrollSupport={true}
      className="book-container mx-auto"
      // @ts-ignore
      style={{ margin: "0 auto" }}
    >
      <Page>Cover</Page>
      <Page>Inner Cover</Page>
      <Page>Page 1</Page>
      <Page>Page 2</Page>
      <Page>Back Inner</Page>
      <Page>Back Cover</Page>
    </HTMLFlipBook>
  );
}
