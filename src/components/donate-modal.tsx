'use client';

import { cn } from '@/lib/utils';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@heroui/react';
import { Icon } from '@iconify/react';
import React from 'react';

interface ButtonProps {
  className: string;
  icon: string;
  iconSize: string;
  text: string;
  textStyle: {
    textShadow: string;
    WebkitTextStroke: string;
  };
}

interface DonateModalProps {
  hostedButtonId?: string;
  sandboxMode?: boolean;
  buttonProps: ButtonProps;
  className?: string;
}

export const DonateModal: React.FC<DonateModalProps> = ({
  hostedButtonId = 'NTUN845ZNPZHN',
  sandboxMode = true,
  buttonProps,
  className = '',
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const baseUrl = sandboxMode
    ? 'https://www.sandbox.paypal.com/donate'
    : 'https://www.paypal.com/donate';

  const pixelUrl = sandboxMode
    ? 'https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif'
    : 'https://www.paypal.com/en_US/i/scr/pixel.gif';

  return (
    <>
      <button
        onClick={onOpen}
        type="button"
        className={cn(buttonProps.className, className)}
      >
        <Icon
          icon={buttonProps.icon}
          className={buttonProps.iconSize}
          style={buttonProps.textStyle}
        />
        <span style={buttonProps.textStyle}>{buttonProps.text}</span>
      </button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        backdrop="blur"
        placement="center"
        classNames={{
          backdrop: 'bg-black/75 backdrop-blur-xl',
          base: 'border-2 border-white/40 dark:border-white/30 shadow-2xl bg-gradient-to-br from-white/60 via-white/50 to-white/60 dark:from-black/70 dark:via-black/60 dark:to-black/70 backdrop-blur-lg',
          header:
            'border-b-2 border-white/30 dark:border-white/20 bg-white/20 dark:bg-black/30 backdrop-blur-md',
          footer:
            'border-t-2 border-white/30 dark:border-white/20 bg-white/20 dark:bg-black/30 backdrop-blur-md',
          closeButton: 'hover:bg-white/20 active:bg-white/30 text-foreground',
        }}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <Icon
                icon="lucide:heart"
                className="w-7 h-7 text-[hsl(var(--iridescent-pink))] drop-shadow-lg"
                strokeWidth={2.5}
              />
              <h2 className="text-2xl font-bold text-foreground text-shadow-lg">
                Support Spoons of Salt
              </h2>
            </div>
          </ModalHeader>
          <ModalBody className="py-6">
            <div className="space-y-6">
              <p className="text-foreground text-lg text-shadow-sm">
                Your donation helps us continue creating quality content and
                recipes. Thank you for supporting our work!
              </p>

              <form
                action={baseUrl}
                method="post"
                target="_blank"
                className="flex justify-center py-4"
              >
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value={hostedButtonId}
                />
                <button
                  type="submit"
                  name="submit"
                  title="PayPal - The safer, easier way to pay online!"
                  className="px-10 py-4 bg-[hsl(var(--iridescent-pink))] hover:bg-[hsl(var(--iridescent-pink-dark))] text-white font-black tracking-wide rounded-md shadow-xl border-2 border-white/50 transition-colors flex items-center gap-3 relative after:absolute after:inset-0 after:rounded-md after:shadow-[inset_0_0_6px_rgba(0,0,0,0.3)] after:pointer-events-none text-xl"
                >
                  <Icon
                    icon="lucide:heart"
                    className="w-7 h-7"
                    style={{
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))',
                      textShadow:
                        '0 1px 3px rgba(0,0,0,0.9), 0 0 6px rgba(0,0,0,0.6), 0 0 1px rgba(0,0,0,1)',
                      WebkitTextStroke: '0.5px rgba(0,0,0,0.5)',
                    }}
                    strokeWidth={2.5}
                  />
                  <span
                    style={{
                      textShadow:
                        '0 2px 4px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.6), 0 0 2px rgba(0,0,0,1)',
                      WebkitTextStroke: '0.5px rgba(0,0,0,0.5)',
                    }}
                  >
                    Donate Now
                  </span>
                </button>
                <img
                  alt=""
                  src={pixelUrl}
                  width="1"
                  height="1"
                  style={{ display: 'none' }}
                />
              </form>

              <div className="text-center text-foreground text-base mt-4 space-y-2 bg-white/40 dark:bg-black/50 p-5 rounded-lg border-2 border-white/40 dark:border-white/20 backdrop-blur-lg shadow-inner">
                <p className="font-medium text-shadow-sm">
                  Payments processed securely through PayPal
                </p>
                <p className="text-shadow-sm">
                  You'll be redirected to complete your donation
                </p>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              variant="flat"
              onPress={onClose}
              className="font-bold text-base px-6"
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DonateModal;
