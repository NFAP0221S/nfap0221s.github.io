'use client';

import { useEffect, useRef } from 'react';
import { useBoundStore } from '@/app/store/useBoundStore';

interface BreadcrumbManagerProps {
  title: string;
}

export default function BreadcrumbManager({ title }: BreadcrumbManagerProps) {
  const { addCrumb, resetCrumbs } = useBoundStore();
  const hasRun = useRef(false);

  useEffect(() => {
    if (title && !hasRun.current) {
      addCrumb({ label: title, href: '#' });
      hasRun.current = true;
    }

    return () => {
      // resetCrumbs();
    };
  }, [title, addCrumb, resetCrumbs]);

  return null;
}
