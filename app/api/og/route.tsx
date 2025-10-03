import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') ?? 'Bravya Web Solutions';
  const tagline = searchParams.get('tagline') ?? 'Full-stack web solutions that scale';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: 'radial-gradient(circle at top, #6366F1 0%, #312E81 100%)',
          color: 'white',
          padding: '80px',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div style={{ fontSize: 40, opacity: 0.9, letterSpacing: 4 }}>BRAVYA WEB SOLUTIONS</div>
        <div style={{ fontSize: 82, fontWeight: 700, marginTop: 20, lineHeight: 1.1 }}>{title}</div>
        <div style={{ fontSize: 36, marginTop: 24, opacity: 0.85 }}>{tagline}</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
