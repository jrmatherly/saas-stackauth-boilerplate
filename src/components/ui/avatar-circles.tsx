'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
// biome-ignore lint/correctness/noUnusedImports: not used directly
import React from 'react';

interface Avatar {
  imageUrl: string;
  profileUrl: string;
}
interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: Avatar[];
}

const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn('z-10 flex -space-x-4 rtl:space-x-reverse', className)}>
      {avatarUrls.map((avatar, index) => (
        <a
          key={`avatar-${avatar.imageUrl}-${index}`}
          href={avatar.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
            src={avatar.imageUrl}
            width={40}
            height={40}
            alt={`Avatar ${index + 1}`}
          />
        </a>
      ))}
      {(numPeople ?? 0) > 0 && (
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
          aria-label={`${numPeople} more people`}
        >
          +{numPeople}
        </button>
      )}
    </div>
  );
};

export default AvatarCircles;
