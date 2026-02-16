"use client";

import { useRef, useState } from "react";
import QrCodeForm from "./ui/QrCodeForm";
import { QrFormData } from "./types";
import QRCode from "qrcode";
import ImagePreview from "./ui/ImagePreview";

export default function Home() {
  const [qrCodePreview, setQrCodePreview] = useState<string | null>(null);
  const [downloadFileName, setDownloadFileName] = useState<string | null>(null);
  const qrCodePreviewCanvas = useRef<HTMLCanvasElement>(null);
  const imagePreviewRef = useRef<HTMLDivElement>(null);

  const handleQrFormSubmission = async ({
    siteUrl,
    fileName,
    pixelColour,
    backgroundColour,
  }: QrFormData) => {
    const canvas = qrCodePreviewCanvas.current;
    if (!canvas) return;

    const options = {
      color: {
        dark: pixelColour,
        light: backgroundColour,
      },
    };

    let fileExtension = fileName.split(".").at(-1);
    if (fileExtension === "jpg") fileExtension = "jpeg";

    try {
      await QRCode.toCanvas(canvas, siteUrl, options);
      setQrCodePreview(canvas.toDataURL(`image/${fileExtension}`));
      setDownloadFileName(fileName);

      setTimeout(() => {
        imagePreviewRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    } catch (error) {
      console.error("Failed to generate QR code:", error);
    }
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-blue-500 to-purple-600">
      <div className="flex min-h-screen flex-col items-center justify-center p-24 gap-y-5">
        <h1 className="text-5xl text-center font-bold text-white drop-shadow-lg">
          QR Code Generator
        </h1>
        <QrCodeForm onSubmit={handleQrFormSubmission} />
        <div className="w-full max-w-md" ref={imagePreviewRef}>
          <ImagePreview
            canvasRef={qrCodePreviewCanvas}
            dataUrl={qrCodePreview}
            downloadFileName={downloadFileName}
          />
        </div>
      </div>
    </main>
  );
}
