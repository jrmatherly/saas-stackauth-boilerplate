import { addToast, cn } from '@heroui/react';
import type { ToastProps } from '@heroui/react';

const defaultStyles = {
  base: cn([
    'bg-default-50 dark:bg-background shadow-sm',
    'border-1',
    "relative before:content-[''] before:absolute before:z-10",
    'before:left-0 before:top-[-1px] before:bottom-[-1px] before:w-1',
    'rounded-l-none border-l-0',
    'min-w-[350px]',
    'rounded-md',
    'flex flex-col items-start',
    'before:bg-primary border-primary-200 dark:border-primary-100',
  ]),
  icon: 'w-6 h-6 fill-current',
};

export interface UseToastOptions extends Partial<ToastProps> {
  /** Override default styling */
  overrideStyles?: boolean;
}

export const useToast = () => {
  const toast = (options: UseToastOptions = {}) => {
    const { overrideStyles = false, ...toastProps } = options;

    return addToast({
      ...toastProps,
      classNames: overrideStyles
        ? toastProps.classNames
        : {
            ...defaultStyles,
            ...toastProps.classNames,
          },
    });
  };

  // Helper methods for common toast types
  const success = (options: Omit<UseToastOptions, 'color'>) =>
    toast({ ...options, color: 'success' });

  const error = (options: Omit<UseToastOptions, 'color'>) =>
    toast({ ...options, color: 'danger' });

  const warning = (options: Omit<UseToastOptions, 'color'>) =>
    toast({ ...options, color: 'warning' });

  const info = (options: Omit<UseToastOptions, 'color'>) =>
    toast({ ...options, color: 'primary' });

  // Promise-based loading toast
  const promise = <T>(
    promise: Promise<T>,
    {
      loading,
      success,
      error,
    }: {
      loading: Omit<UseToastOptions, 'promise'>;
      success: (data: T) => Omit<UseToastOptions, 'promise'>;
      error: (err: Error | unknown) => Omit<UseToastOptions, 'promise'>;
    }
  ) => {
    return toast({
      ...loading,
      promise: promise
        .then(data => {
          toast(success(data));
          return data;
        })
        .catch(err => {
          toast(error(err));
          throw err;
        }),
    });
  };

  return {
    toast,
    success,
    error,
    warning,
    info,
    promise,
  };
};
