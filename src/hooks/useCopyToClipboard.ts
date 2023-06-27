import { useState } from 'react';

type CopiedStatus = boolean;
type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>;

export function useCopyToClipboard(): [CopiedStatus, CopiedValue, CopyFn] {
  const [copied, setCopied] = useState(false);
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  const copy: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setCopied(true);
      return true;
    } catch (error) {
      console.warn('Copy failed', error);
      setCopiedText(null);
      setCopied(false);
      return false;
    }
  };

  return [copied, copiedText, copy];
}
