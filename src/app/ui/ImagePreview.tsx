import { RefObject, useRef, useState } from "react";

interface ImagePreviewProps {
  canvasRef: RefObject<HTMLCanvasElement | null>;
  dataUrl: string | null;
  downloadFileName: string | null;
}

export default function ImagePreview({
  canvasRef,
  dataUrl,
  downloadFileName,
}: ImagePreviewProps) {
  return (
    <div className="flex flex-col gap-6 bg-white p-10 m-5 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-semibold text-center">QR Code Preview</h2>
      <canvas ref={canvasRef}></canvas>

      {dataUrl && (
        <a
          href={dataUrl}
          download={downloadFileName}
          className="mt-4 p-3 bg-linear-to-br from-blue-500 to-purple-600 text-white cursor-pointer rounded-md font-medium shadow-md transition-colors"
        >
          Download
        </a>
      )}
    </div>
  );
}
