import { useToast } from '@/hooks/use-toast';
import { Button } from '@heroui/button';

const HeroUIToast = () => {
  const { success, error, warning, info, promise } = useToast();

  const showSuccessToast = () => {
    success({
      title: 'Success!',
      description: 'Document uploaded to cloud successfully.',
      endContent: (
        <div className="ms-11 my-2 flex gap-x-2">
          <Button color="success" size="sm" variant="bordered">
            View Document
          </Button>
        </div>
      ),
    });
  };

  const showErrorToast = () => {
    error({
      title: 'Error!',
      description: 'Failed to upload document.',
      variant: 'solid',
    });
  };

  const showWarningToast = () => {
    warning({
      title: 'Warning!',
      description: 'Your storage is almost full.',
      variant: 'bordered',
      radius: 'lg',
    });
  };

  const showInfoToast = () => {
    info({
      title: 'Did you know?',
      description: 'You can customize the appearance of these toasts!',
      hideCloseButton: true,
    });
  };

  const showPromiseToast = () => {
    const fakeUpload = new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.5 ? resolve('success') : reject('error');
      }, 2000);
    });

    promise(fakeUpload, {
      loading: {
        title: 'Uploading...',
        description: 'Please wait while we upload your file.',
      },
      success: () => ({
        title: 'Upload Complete!',
        description: 'Your file has been uploaded successfully.',
      }),
      error: () => ({
        title: 'Upload Failed',
        description: 'There was an error uploading your file.',
      }),
    });
  };

  return (
    <div className="flex flex-wrap gap-4">
      <Button color="success" variant="flat" onPress={showSuccessToast}>
        Success Toast
      </Button>
      <Button color="danger" variant="flat" onPress={showErrorToast}>
        Error Toast
      </Button>
      <Button color="warning" variant="flat" onPress={showWarningToast}>
        Warning Toast
      </Button>
      <Button color="primary" variant="flat" onPress={showInfoToast}>
        Info Toast
      </Button>
      <Button color="secondary" variant="flat" onPress={showPromiseToast}>
        Promise Toast
      </Button>
    </div>
  );
};

export default HeroUIToast;
