import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages, currentSpec } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid request. messages array is required." }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
      // Local Master Craftsman simulated intelligence when Gemini key is not set
      const lastUserMessage = messages[messages.length - 1]?.content || "";
      const lowerMsg = lastUserMessage.toLowerCase();
      let responseText = "";

      if (lowerMsg.includes("paper") || lowerMsg.includes("weight") || lowerMsg.includes("stock")) {
        responseText = "Ah, paper selection is where the soul of 'Feel the Print' really shines. For text-heavy novels, we recommend our classic cream woodfree paper at 80gsm or 100gsm for that warm, soft feel. For art catalogs or photobooks with rich ink density, we recommend our 128gsm or 157gsm premium coated art papers. It has a beautiful matte or gloss finish that handles high ink levels without buckling.";
      } else if (lowerMsg.includes("bind") || lowerMsg.includes("cover") || lowerMsg.includes("smyth")) {
        responseText = "For true high-volume offset printing durability, Smyth Sewn (thread-sewn) section-binding is the gold standard. Unlike regular perfect binding with quick-glue, Smyth Sewn books lie completely flat when opened and never drop a page, even after decades of reading. For hardbounds, we pair this with fine Italian linen, premium cloth wrapping, or custom-printed paperboard covers.";
      } else if (lowerMsg.includes("cost") || lowerMsg.includes("price") || lowerMsg.includes("quote") || lowerMsg.includes("how much")) {
        responseText = "Our offset printing presses are optimized for high-volume runs starting at 500 copies. The primary driver of unit cost is preparation (making metal plates, color calibration, press plate-mounting setup). As your quantity scale increases from 500 to 1,000 or 5,000, your unit cost drops exponentially. Let me know your desired dimensions and page count to calibrate the exact breakdown!";
      } else {
        responseText = `Greetings! As the Master Printer here at feeltheprint., I'm pleased to guide you through our traditional offset workflows. Since 1995, we've printed world-class journals, magnificent hardcover monographs, and custom brand stationery.

(Note: To unlock live full-featured Gemini conversations, please configure your 'GEMINI_API_KEY' in the Secrets panel in the AI Studio UI).

How can I help you choose paper, binding styles, plate calibrations, or spot-color finishes today?`;
      }

      return NextResponse.json({ text: responseText, systemStatus: "local-fallback" });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });

    const specContext = currentSpec 
      ? `\n[Current Book Spec Draft Under Dialogue]:
Type: ${currentSpec.type || "Book"}
Binding style: ${currentSpec.binding || "Smyth Sewn (Hardcover)"}
Dimensions: ${currentSpec.dimensions || "6 x 9 inches"}
Paper Stock: ${currentSpec.paper || "100gsm Woodfree Cream"}
Total Pages: ${currentSpec.pages || "160 pages"}
Print Quantity: ${currentSpec.quantity || "1000 copies"}
Special Finishes: ${currentSpec.spotUv ? 'Spot UV ' : ''}${currentSpec.foiling ? 'Foil Stamping ' : ''}${currentSpec.embossing ? 'Embossing' : 'None'}`
      : "";

    const systemInstruction = `You are the legendary Master Printer & Craftsman at 'feeltheprint.', a world-renowned boutique offset printing house established in 1995.
Your tone is deeply knowledgeable, humble, reassuring, and completely objective. You speak with high-status professional calm and respect, explaining complex offset topics (such as plate preparation, CMYK calibration, Pantone ink mixing, paper grain directions, binding styles like Smyth sewn vs PUR gluing, thread binding section weights, and paperboard caliper thicknesses) in simple, crisp, elegant terms.
${specContext}

Your goal:
1. Advise the customer expertly on how to optimize their book or stationery for print quality, texture, weight, and longevity.
2. Recommend specific combinations based on their design targets (e.g. recommend matte art paper for photography, high bulk cream paper for legal histories, or uncoated linen paper for high-end stationery).
3. Do not larp, do not show internal system details or contain marketing hype. Keep output concise (under 150 words per turn) and extremely focus-driven.`;

    // Map message list format
    // GoogleGenAI chat expects: chats.create
    const chat = ai.chats.create({
      model: "gemini-3.5-flash",
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    // Send the history except the last message, then send the last message
    let response = null;
    const historyParts = messages.slice(0, -1).map((m: any) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }]
    }));

    // If there is history, we can initialize chat history, else just send the message
    // GoogleGenAI chats API:
    // With chats.create, we can pass config. We can also feed messages in a loop or start it directly.
    // For simplicity, we can do a single generateContent or chat with combined history
    const combinedPrompt = messages.map((m: any) => `${m.role === "user" ? "Client" : "Master Printer"}: ${m.content}`).join("\n") + "\nMaster Printer: ";

    const result = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: combinedPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    return NextResponse.json({ text: result.text || "" });

  } catch (error: any) {
    console.error("Error in consultant API:", error);
    return NextResponse.json({ error: error.message || "An error occurred during AI processing." }, { status: 500 });
  }
}
