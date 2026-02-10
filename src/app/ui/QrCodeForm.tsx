"use client";

import Form from "next/form";
import { useState } from "react";

export default function QrCodeForm() {
  const [pixelColour, setPixelColour] = useState("#000000");
  const [backgroundColour, setBackgroundColour] = useState("#000000");

  return (
    <Form
      className="flex flex-col gap-6 bg-white p-10 m-5 rounded-lg shadow-md max-w-md"
      action=""
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="siteUrl" className="text-sm font-medium text-gray-700">
          Website URL
        </label>
        <input
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="siteUrl"
          id="siteUrl"
          placeholder="https://example.com"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="fileName" className="text-sm font-medium text-gray-700">
          File Name
        </label>
        <input
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="fileName"
          id="fileName"
          placeholder="qrcode.png"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="pixelColour"
          className="text-sm font-medium text-gray-700"
        >
          Pixel Color
        </label>
        <div className="flex flex-row gap-x-5">
          <input
            className="h-12.5 border border-black aspect-square rounded-md focus:outline-none"
            name="pixelColour"
            id="pixelColour"
            type="color"
            value={pixelColour}
            onChange={(e) => setPixelColour(e.target.value)}
          />
          <input
            className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={pixelColour}
            onChange={(e) => setPixelColour(e.target.value)}
            pattern="^#[0-9A-Fa-f]{6}$"
            maxLength={7}
            placeholder="#000000"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="backgroundColour"
          className="text-sm font-medium text-gray-700"
        >
          Background Color
        </label>
        <div className="flex flex-row gap-x-5">
          <input
            className="h-12.5 border border-black aspect-square rounded-md focus:outline-none"
            name="backgroundColour"
            id="backgroundColour"
            type="color"
            value={backgroundColour}
            onChange={(e) => setBackgroundColour(e.target.value)}
          />
          <input
            className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={backgroundColour}
            onChange={(e) => setBackgroundColour(e.target.value)}
            pattern="^#[0-9A-Fa-f]{6}$"
            maxLength={7}
            placeholder="#000000"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 p-3 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors"
      >
        Generate QR Code
      </button>
    </Form>
  );
}
