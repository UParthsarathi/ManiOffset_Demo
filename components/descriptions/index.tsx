"use client";

import React from "react";
import { SoftcoverBook } from "./SoftcoverBook";
import { DefaultDescription } from "./DefaultDescription";

interface ProductDescriptionRendererProps {
  product: any;
  whatsappMessage: string;
}

export function ProductDescriptionRenderer({ product, whatsappMessage }: ProductDescriptionRendererProps) {
  switch (product.id) {
    case 1:
      return <SoftcoverBook productId={product.id} whatsappMessage={whatsappMessage} />;
    default:
      return <DefaultDescription product={product} whatsappMessage={whatsappMessage} />;
  }
}
