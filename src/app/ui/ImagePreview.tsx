import { RefObject, useMemo, useRef, useState } from "react";

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
  const divClass = useMemo(() => {
    return canvasRef.current
      ? "flex flex-col gap-6 bg-white p-10 rounded-lg shadow-lg"
      : "invisible";
  }, [canvasRef.current]);
  return (
    <div className={divClass}>
      <h2 className="text-2xl font-semibold text-center">QR Code Preview</h2>
      <canvas className="mx-auto" ref={canvasRef}></canvas>

      {dataUrl && (
        <a
          href={dataUrl}
          download={downloadFileName}
          className="mt-4 p-3 bg-linear-to-br from-blue-500 to-purple-600 cursor-pointer rounded-md font-medium shadow-md transition-colors"
        >
          <p className="text-white text-lg text-center">Download</p>
        </a>
      )}
    </div>
  );
}
