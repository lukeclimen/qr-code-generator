"use client";

import QrCodeForm from "./ui/QrCodeForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-blue-500 to-purple-600">
      <div className="flex min-h-screen flex-col items-center justify-center p-24 gap-y-5">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
          QR Code Generator
        </h1>
        <QrCodeForm
          onSubmit={(data) => {
            console.log(data);
          }}
        />
      </div>
    </main>
  );
}
