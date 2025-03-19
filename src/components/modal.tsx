'use client';

import useMediaQuery from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';
import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import type { Dispatch, SetStateAction } from 'react';
import { Drawer } from 'vaul';

export default function Modal({
  children,
  className,
  showModal,
  setShowModalAction,
  title = 'Dialog',
}: {
  children: React.ReactNode;
  className?: string;
  showModal: boolean;
  setShowModalAction: Dispatch<SetStateAction<boolean>>;
  title?: string;
}) {
  const { isMobile } = useMediaQuery();

  if (isMobile) {
    return (
      <Drawer.Root open={showModal} onOpenChange={setShowModalAction}>
        <Drawer.Overlay className="fixed inset-0 z-40 bg-gray-100 bg-opacity-10 backdrop-blur" />
        <Drawer.Portal>
          <Drawer.Content
            className={cn(
              'fixed bottom-0 left-0 right-0 z-50 mt-24 rounded-t-[10px] border-t border-gray-200 bg-white',
              className
            )}
          >
            <div className="sticky top-0 z-20 flex w-full items-center justify-center rounded-t-[10px] bg-inherit">
              <div className="my-3 h-1 w-12 rounded-full bg-gray-300" />
            </div>
            {children}
          </Drawer.Content>
          <Drawer.Overlay />
        </Drawer.Portal>
      </Drawer.Root>
    );
  }
  return (
    <Dialog.Root open={showModal} onOpenChange={setShowModalAction}>
      <Dialog.Portal>
        <Dialog.Overlay
          // for detecting when there's an active opened modal
          id="modal-backdrop"
          className="animate-fade-in fixed inset-0 z-40 bg-gray-100 bg-opacity-50 backdrop-blur-md"
        />
        <Dialog.Content
          aria-describedby={undefined}
          onOpenAutoFocus={e => e.preventDefault()}
          onCloseAutoFocus={e => e.preventDefault()}
          className={cn(
            'animate-scale-in fixed inset-0 z-40 m-auto max-h-fit w-full max-w-md overflow-hidden border border-gray-200 bg-white p-0 shadow-xl md:rounded-2xl',
            className
          )}
        >
          <VisuallyHidden>
            <Dialog.Title>{title}</Dialog.Title>
          </VisuallyHidden>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
