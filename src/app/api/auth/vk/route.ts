export async function GET() {
  const vkAuthUrl = `https://oauth.vk.com/authorize?client_id=${process.env.NEXT_PUBLIC_VK_CLIENT_ID}
&display=page&redirect_uri=${encodeURIComponent(process.env.NEXT_PUBLIC_VK_REDIRECT_URI!)}&scope=email&response_type=code&v=5.131`;
  return Response.redirect(vkAuthUrl, 302);
}
