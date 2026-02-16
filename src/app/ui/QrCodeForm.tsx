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
  const [errors, setErrors] = useState<{ siteUrl?: string; fileName?: string }>(
    {},
  );

  const URL_REGEX =
    /^https?:\/\/(([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,})(:\d+)?(\/[^\s]*)?$/;
  const VALID_EXTENSIONS = /\.(png|jpe?g|webp)$/i;

  const validate = (siteUrl: string, fileName: string): boolean => {
    const newErrors: { siteUrl?: string; fileName?: string } = {};

    if (!URL_REGEX.test(siteUrl)) {
      newErrors.siteUrl = "Please enter a valid URL (e.g. https://example.com)";
    }

    if (!VALID_EXTENSIONS.test(fileName)) {
      newErrors.fileName =
        "File name must end with .png, .jpeg, .jpg, or .webp";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const siteUrl = formData.get("siteUrl") as string;
    const fileName = formData.get("fileName") as string;

    if (!validate(siteUrl, fileName)) return;

    onSubmit({ siteUrl, fileName, pixelColour, backgroundColour });
  };

  return (
    <form
      className="flex flex-col gap-6 bg-white p-10 m-5 rounded-lg shadow-lg w-full max-w-md"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="siteUrl" className="text-sm font-medium text-gray-700">
          Website URL
        </label>
        <input
          className={`p-3 border rounded-md focus:outline-none focus:ring-2 ${
            errors.siteUrl
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          }`}
          name="siteUrl"
          id="siteUrl"
          placeholder="https://example.com"
          required
          onChange={() =>
            setErrors((prev) => ({ ...prev, siteUrl: undefined }))
          }
        />
        {errors.siteUrl && (
          <p className="text-red-500 text-xs mt-1">{errors.siteUrl}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="fileName" className="text-sm font-medium text-gray-700">
          File Name
        </label>
        <input
          className={`p-3 border rounded-md focus:outline-none focus:ring-2 ${
            errors.fileName
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          }`}
          name="fileName"
          id="fileName"
          placeholder="qrcode.png"
          required
          onChange={() =>
            setErrors((prev) => ({ ...prev, fileName: undefined }))
          }
        />
        {errors.fileName && (
          <p className="text-red-500 text-xs mt-1">{errors.fileName}</p>
        )}
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
        className="mt-4 p-3 bg-linear-to-br from-blue-500 to-purple-600 text-white cursor-pointer rounded-md font-medium shadow-md transition-colors"
      >
        Generate QR Code
      </button>
    </form>
  );
}
