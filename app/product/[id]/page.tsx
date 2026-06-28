import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";
import { Star, MessageCircle, Calculator, FileText, Check, ChevronDown, UploadCloud } from "lucide-react";
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
      <div className="pt-24 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{product.title}</h1>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-amber-500">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-sm text-gray-600 underline cursor-pointer hover:text-gray-900">5 (4)</span>
            </div>

            <ul className="list-disc pl-5 space-y-2 mb-6 text-sm text-gray-700 leading-relaxed">
              <li>Customised multicolor print on premium quality paper stocks</li>
              <li>Available in multiple standard sizes and custom dimensions</li>
              <li>State-of-the-art offset printing for unmatched consistency and durability</li>
              <li>Upload your photos/Logo or consult our prepress team directly</li>
              <li>For design guidelines, please refer steps mentioned below in the Design Tips section</li>
            </ul>

            {/* WhatsApp CTA */}
            <div className="mb-6">
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

            {/* Price Tags & Details */}
            <div className="mb-6 text-sm text-gray-800 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span> 
                <em className="italic">Cash on Delivery available</em>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span> 
                <strong>Price below is MRP (inclusive of all taxes)</strong>
              </div>
            </div>

            <div className="mb-8 flex flex-col gap-3">
              <a href="#details" className="text-sm underline text-gray-700 hover:text-gray-900 font-medium inline-block w-fit">See Details</a>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <FileText className="w-4 h-4 text-gray-400"/>
                <span><span className="underline cursor-pointer hover:text-gray-900 font-medium">View Specs & Templates</span> to create your print-ready file.</span>
              </div>
            </div>

            {/* Calculator CTA */}
            <div className="border-t border-gray-200 pt-6 space-y-5">
              <Link 
                href={`/calculator?product=${product.id}`} 
                className="flex items-center justify-between w-full bg-[#6cd4f4] hover:bg-[#5bc8e8] text-slate-900 px-6 py-4 rounded transition-colors group shadow-sm"
              >
                <div className="flex flex-col text-left">
                  <span className="font-bold">Custom Order Estimate</span>
                  <span className="text-xs font-medium text-slate-800">Need specific requirements? Use our calculator</span>
                </div>
                <UploadCloud className="w-6 h-6 text-slate-800 group-hover:-translate-y-0.5 transition-transform" />
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
