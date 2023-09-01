# Upload image component

## How to use?

### JSX

```ts
// pages/user/profile.tsx

import { useMemo, useState } from 'react';
import UploadImage from 'src/components/UploadImage';

const [file, setFile] = useState<File>();

const previewImage = useMemo(() => {
  return file ? URL.createObjectURL(file) : '';
}, [file]);

const handleChangeUploadImage = (file?: File) => {
  setFile(file);
};

// submit form
const onSubmit = handleSubmit(async (data) => {
  try {
    let avatarName = avatar;
    if (file) {
      const form = new FormData();
      form.append('image', file);
      const uploadRes = await uploadAvatarMutation.mutateAsync(form);
      avatarName = uploadRes.data.data;
      setValue('avatar', avatarName);
    }
    const res = await updateProfileMutation.mutateAsync({
      ...data,
      date_of_birth: data.date_of_birth?.toISOString(),
      avatar: avatarName,
    });
    setProfile(res.data.data);
    setProfileToLS(res.data.data);
    refetch();
    toast.success(res.data.message);
  } catch (error) {
    if (isAxiosUnprocessableEntityError<ErrorResponse<FormDataError>>(error)) {
      const formError = error.response?.data.data;
      if (formError) {
        Object.keys(formError).forEach((key) => {
          setError(key as keyof FormDataError, {
            message: formError[key as keyof FormDataError],
            type: 'Server',
          });
        });
      }
    }
  }
});

function Profile() {
  return (
    <>
      <UploadImage onChange={handleChangeUploadImage} />
    </>
  );
}

export default Profile;
```
