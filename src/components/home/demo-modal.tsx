import Modal from '@/components/modal';
import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

const DemoModal = ({
  showDemoModal,
  setShowDemoModal,
}: {
  showDemoModal: boolean;
  setShowDemoModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showDemoModal} setShowModalAction={setShowDemoModal}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="https://spoonsofsalt.org">
            <div
              style={{ position: 'relative', width: '40px', height: '40px' }}
            >
              <Image
                src="/logo.png"
                alt="Spoons of Salt Logo"
                fill
                sizes="40px"
                style={{ objectFit: 'contain' }}
                className="rounded-full"
              />
            </div>
          </a>
          <h3 className="font-display text-2xl font-bold">Spoons of Salt</h3>
          <p className="text-sm text-gray-500">
            Spoons of Salt is an opinionated collection of components, hooks,
            and utilities for your Next.js project.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export function useDemoModal() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const DemoModalCallback = useCallback(() => {
    return (
      <DemoModal
        showDemoModal={showDemoModal}
        setShowDemoModal={setShowDemoModal}
      />
    );
  }, [showDemoModal]);

  return useMemo(
    () => ({ setShowDemoModal, DemoModal: DemoModalCallback }),
    [DemoModalCallback]
  );
}
