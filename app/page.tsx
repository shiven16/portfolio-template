import Desktop from './components/Desktop'

// Server component — reads MDX metadata from /content/blog and hands
// it down. Desktop (client) and everything beneath it gets plain data.
export default function Home() {
  return <Desktop />
}
