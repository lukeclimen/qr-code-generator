export interface QRCodeProps {
  value: string;
  size?: number;
  level?: 'L' | 'M' | 'Q' | 'H';
}

export interface QRCodeState {
  inputValue: string;
  error: string | null;
}