import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0d0d0d',
      color: '#ededed',
      fontFamily: "'Outfit', sans-serif"
    }}>
      <h1 style={{ 
        fontSize: '8rem', 
        fontFamily: "'Playfair Display', serif",
        margin: 0,
        lineHeight: 1
      }}>404</h1>
      <h2 style={{ 
        fontSize: '1.5rem', 
        fontWeight: 300, 
        marginTop: '1rem',
        color: '#999'
      }}>Page Not Found</h2>
      <Link href="/" style={{
        marginTop: '2rem',
        padding: '0.8rem 2rem',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '50px',
        color: '#ededed',
        textDecoration: 'none',
        transition: 'all 0.3s ease'
      }} className="btn-home">
        Return Home
      </Link>
    </div>
  );
}
