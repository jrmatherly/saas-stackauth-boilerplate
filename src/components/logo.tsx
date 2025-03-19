import { env } from '@/env';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <>
      <Link href="/" className="inline-flex" aria-label="simple">
        <div style={{ position: 'relative', width: '50px', height: '50px' }}>
          <Image
            src="/logo.png"
            alt={env.NEXT_PUBLIC_APP_NAME}
            fill
            sizes="50px"
            style={{ objectFit: 'contain' }}
            quality={100}
            className="rounded-sm"
          />
        </div>
      </Link>
    </>
  );
}
