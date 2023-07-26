export async function getMe(accessToken: string) {
  try {
    const response = await fetch('https://fake-api-admin-evanc.vercel.app/api/auth/profile', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` },
    });
    const { success, data } = await response.json();
    return success ? data : null;
  } catch (error) {
    return null;
  }
}
