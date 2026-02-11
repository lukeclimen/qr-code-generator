"use client";

import { useState } from "react";

import ColourInput from "./ColourInput";
import { QrFormData } from "../../app/types";

export default function QrCodeForm({
  onSubmit,
}: {
  onSubmit: (data: QrFormData) => void;
}) {
  const [pixelColour, setPixelColour] = useState("#000000");
  const [backgroundColour, setBackgroundColour] = useState("#ffffff");

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit({
      siteUrl: formData.get("siteUrl") as string,
      fileName: formData.get("fileName") as string,
      pixelColour,
      backgroundColour,
    });
  };

  return (
    <form
      className="flex flex-col gap-6 bg-white p-10 m-5 rounded-lg shadow-md max-w-md"
      onSubmit={handleSubmit}
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
      <ColourInput
        label="Pixel Color"
        id="pixelColour"
        value={pixelColour}
        onChange={setPixelColour}
      />
      <ColourInput
        label="Background Color"
        id="backgroundColour"
        value={backgroundColour}
        onChange={setBackgroundColour}
      />
      <button
        type="submit"
        className="mt-4 p-3 bg-linear-to-br from-blue-500 to-purple-600 text-white cursor-pointer rounded-md font-medium transition-colors"
      >
        Generate QR Code
      </button>
    </form>
  );
}
