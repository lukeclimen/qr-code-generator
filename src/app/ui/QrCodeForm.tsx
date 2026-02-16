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

  const handleSwapColors = () => {
    const temp = pixelColour;
    setPixelColour(backgroundColour);
    setBackgroundColour(temp);
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
      <div className="flex flex-row-reverse gap-x-2">
        <button
          type="button"
          onClick={handleSwapColors}
          className="self-center p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
          title="Swap colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
            />
          </svg>
        </button>
        <div className="flex flex-col gap-6">
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
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 p-3 bg-linear-to-br from-blue-500 to-purple-600 text-white cursor-pointer rounded-md font-medium shadow-md transition-colors"
      >
        Generate QR Code
      </button>
    </form>
  );
}
