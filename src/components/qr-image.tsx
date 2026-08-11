import { useEffect, useState } from "react";
import QRCode from "qrcode";

export function useQrDataUrl(value: string, size = 512) {
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    QRCode.toDataURL(value, {
      width: size,
      margin: 1,
      errorCorrectionLevel: "M",
      color: { dark: "#12261c", light: "#ffffff" },
    })
      .then((url) => {
        if (!cancelled) setDataUrl(url);
      })
      .catch(() => setDataUrl(null));
    return () => {
      cancelled = true;
    };
  }, [value, size]);

  return dataUrl;
}

export function QrImage({
  value,
  size = 256,
  className = "",
  alt = "QR code",
}: {
  value: string;
  size?: number;
  className?: string;
  alt?: string;
}) {
  const dataUrl = useQrDataUrl(value, size * 2);
  if (!dataUrl) {
    return (
      <div
        className={`animate-pulse rounded-md bg-secondary ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <img
      src={dataUrl}
      alt={alt}
      width={size}
      height={size}
      className={`rounded-md bg-white p-1 ${className}`}
    />
  );
}
