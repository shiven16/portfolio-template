import { ImageResponse } from 'next/og'
import { siteConfig } from '@/config/siteConfig'
 
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: '#111',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          borderRadius: '4px',
          fontFamily: 'monospace',
          fontWeight: 'bold',
          border: '1px solid rgba(255,255,255,0.2)',
        }}
      >
        {siteConfig.personal.initials}
      </div>
    ),
    { ...size }
  )
}
