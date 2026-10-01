// Gerador de BR Code (Pix estático) conforme o padrão EMV® QRCPS MPM do
// Banco Central. Monta o payload "copia e cola" a partir da chave Pix e calcula
// o CRC16 (CCITT-FALSE) exigido no campo 63.

type PixInput = {
  key: string;
  name: string;
  city: string;
  description?: string;
  txid?: string;
  amount?: number;
};

function field(id: string, value: string): string {
  const length = value.length.toString().padStart(2, "0");
  return `${id}${length}${value}`;
}

function crc16(payload: string): string {
  let crc = 0xffff;
  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let bit = 0; bit < 8; bit++) {
      crc = crc & 0x8000 ? ((crc << 1) ^ 0x1021) & 0xffff : (crc << 1) & 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

function sanitize(value: string, maxLength: number): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Za-z0-9 ]/g, "")
    .toUpperCase()
    .slice(0, maxLength)
    .trim();
}

export function buildPixPayload({
  key,
  name,
  city,
  description,
  txid = "***",
  amount,
}: PixInput): string {
  const merchantAccount = field(
    "26",
    field("00", "br.gov.bcb.pix") +
      field("01", key) +
      (description ? field("02", sanitize(description, 72)) : ""),
  );

  const additional = field("62", field("05", txid));

  const payload =
    field("00", "01") +
    field("01", "11") +
    merchantAccount +
    field("52", "0000") +
    field("53", "986") +
    (amount !== undefined ? field("54", amount.toFixed(2)) : "") +
    field("58", "BR") +
    field("59", sanitize(name, 25)) +
    field("60", sanitize(city, 15)) +
    additional;

  const withCrc = `${payload}6304`;
  return `${withCrc}${crc16(withCrc)}`;
}
