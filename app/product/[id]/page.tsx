import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";
import { MessageCircle, Check } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import { generateProductSchema } from "@/lib/seo";
import { Metadata } from "next";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductDescriptionRenderer } from "@/components/descriptions";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find((p) => p.id.toString() === resolvedParams.id);
  
  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: `${product.title} Printing Services | FeelThePRINT`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id.toString() === resolvedParams.id);

  if (!product) {
    notFound();
  }

  const structuredData = generateProductSchema(product);
  const whatsappMessage = encodeURIComponent(`Hi, I'm interested in printing: ${product.title}. I'd like to share my design and get support to place an order.`);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      <StructuredData data={structuredData} />
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-8 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-wrap items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/products" className="hover:text-gray-900">Products</Link>
          <span className="mx-2">›</span>
          <Link href={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-gray-900">{product.category}</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900 font-medium">{product.title}</span>
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* Top Product Hero Layout (Vistaprint Inspired) */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-16">
          
          {/* Left: Product Image */}
          <div className="w-full lg:w-[55%] xl:w-[60%] shrink-0">
             <ProductGallery mainImageUrl={product.imageUrl} title={product.title} />
          </div>

          {/* Right: Details & Action */}
          <div className="w-full lg:w-[45%] xl:w-[40%] flex flex-col pt-2 lg:pt-0">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{product.title}</h1>
            
            <ul className="list-disc pl-5 space-y-2 mb-6 text-sm text-gray-700 leading-relaxed">
              <li><strong>From 200 to 1 Crore Copies</strong> — High-quality printing in every size.</li>
              <li><strong>200 Copies Minimum</strong> — Bulk offset printing that saves you money.</li>
              <li><strong>3–10 Day Delivery</strong> — Urgent orders? We’ll make it happen.</li>
              <li><strong>Printing Sizes & Models</strong> — Full options listed below.</li>
              <li><strong>Learn Our Printing Process</strong> — <Link href="/press" className="underline hover:text-gray-900">Visit the Press section</Link>.</li>
            </ul>

            {/* WhatsApp CTA */}
            <div className="mb-10">
              <a 
                href={`https://wa.me/919999999999?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#e6f4ea] hover:bg-[#d4ebd9] border border-green-200 text-slate-900 p-2 pr-6 rounded transition-colors w-fit shadow-sm"
              >
                <div className="bg-[#25D366] p-2 rounded text-white shadow-sm">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-bold text-sm text-gray-900">Share design on WhatsApp</span>
                  <span className="text-xs text-gray-600">Get design support to place your order</span>
                </div>
              </a>
            </div>

            <div className="border-t border-gray-200 pt-6 space-y-5">
              <Link 
                href={`/calculator?product=${product.id}`} 
                className="flex items-center justify-between w-full bg-[#6cd4f4] hover:bg-[#5bc8e8] text-slate-900 px-6 py-4 rounded transition-colors group shadow-sm"
              >
                <div className="flex flex-col text-left">
                  <span className="font-bold">Custom Order Estimate</span>
                  <span className="text-xs font-medium text-slate-800">Need specific requirements? Use our calculator</span>
                </div>
              </Link>
              
              <div className="text-center mt-4 text-xs text-gray-500 flex items-center justify-center gap-1.5">
                <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 text-gray-500" />
                </div>
                <span>100% satisfaction guaranteed</span>
              </div>
            </div>
          </div>
        </div>

        <ProductDescriptionRenderer product={product} whatsappMessage={whatsappMessage} />
      </main>

      <Footer />
    </div>
  );
}
