import QRCode from "qrcode";

export function generateQRCode(data) {
  return QRCode.toDataURL(data);
}

export function decodeQRCode(file) {
  // Add QR decoding logic here (e.g., using a library or API)
  return "decodedHouseholdId"; // Replace with actual decoded ID
}
