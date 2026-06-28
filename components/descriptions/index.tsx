"use client";

import React from "react";
import { SoftcoverBook } from "./SoftcoverBook";
import { HardcoverBook } from "./HardcoverBook";
import { MagazineJournal } from "./MagazineJournal";
import { ComicGraphicNovel } from "./ComicGraphicNovel";
import { ReligiousSpiritualBook } from "./ReligiousSpiritualBook";
import { DefaultDescription } from "./DefaultDescription";

interface ProductDescriptionRendererProps {
  product: any;
  whatsappMessage: string;
}

export function ProductDescriptionRenderer({ product, whatsappMessage }: ProductDescriptionRendererProps) {
  switch (product.id) {
    case 1:
      return <SoftcoverBook productId={product.id} whatsappMessage={whatsappMessage} />;
    case 2:
      return <HardcoverBook productId={product.id} whatsappMessage={whatsappMessage} />;
    case 3:
      return <MagazineJournal productId={product.id} whatsappMessage={whatsappMessage} />;
    case 4:
      return <ComicGraphicNovel productId={product.id} whatsappMessage={whatsappMessage} />;
    case 5:
      return <ReligiousSpiritualBook productId={product.id} whatsappMessage={whatsappMessage} />;
    default:
      return <DefaultDescription product={product} whatsappMessage={whatsappMessage} />;
  }
}
