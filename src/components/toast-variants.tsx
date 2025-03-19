'use client';

import {
  Button,
  addToast,
  // biome-ignore lint/correctness/noUnusedImports: future use
  cn,
} from '@heroui/react';

export default function ToastVariants() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        onPress={() =>
          addToast({
            title: 'Toast title',
            description: 'Toast displayed successfully',
            color: 'secondary',
          })
        }
      >
        Toast
      </Button>
    </div>
  );
}
