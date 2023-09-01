import { useRef, Fragment, ChangeEvent } from 'react';

interface UploadImageProps extends HTMLInputElement {
  onChange?: (file?: File) => void;
  maxSize?: number;
}

function UploadImage({ onChange, maxSize = 1048576, accept = '.jpg, .png' }: UploadImageProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileFromLocal = event.target.files?.[0];
    fileInputRef.current?.setAttribute('value', '');
    if (fileFromLocal && (fileFromLocal.size >= maxSize || !fileFromLocal.type.includes('image'))) {
      alert('Dung lượng file tối đa 1 MB. Định dạng:.JPEG, .PNG');
    } else {
      onChange && onChange(fileFromLocal);
    }
  };

  const handleUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <Fragment>
      <input
        type='file'
        className='hidden'
        accept={accept}
        ref={fileInputRef}
        onChange={onFileChange}
        onClick={(event) => ((event.target as any).value = null)}
      />
      <button
        className='text-gray-600 flex h-10 items-center justify-end rounded-sm border bg-white px-6 text-sm shadow-sm'
        type='button'
        onClick={handleUpload}
      >
        Select image
      </button>
    </Fragment>
  );
}

export default UploadImage;
