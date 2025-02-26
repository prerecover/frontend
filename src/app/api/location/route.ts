import { NextRequest } from 'next/server';
import axios from 'axios';

export async function GET(req: NextRequest) {
  try {
    let ip =
      req.headers.get('x-forwarded-for') ||
      req.headers.get('cf-connecting-ip') ||
      req.ip ||
      'auto';

    if (['::1', '0:0:0:0:0:0:0:1', '127.0.0.1'].includes(ip)) {
      return Response.json({
        ip,
        city: 'Локальный IP',
        country: 'Локальная сеть',
        region: '—',
      });
    }

    if (ip.includes(',')) ip = ip.split(',')[0].trim();

    // Используем API, который точно отдаёт данные на русском
    const { data } = await axios.get(`http://ip-api.com/json/${ip}?lang=ru`);

    return Response.json({
      ip,
      city: data.city,
      country: data.country,
      region: data.regionName,
    });
  } catch (error) {
    return Response.json(
      { error: 'Не удалось получить локацию' },
      { status: 500 }
    );
  }
}
