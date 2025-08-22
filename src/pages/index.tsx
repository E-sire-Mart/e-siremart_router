import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to user portal
    router.push('/user');
  }, [router]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1>E-Siremart</h1>
        <p>Redirecting to user portal...</p>
        <div style={{ marginTop: '20px' }}>
          <a href="/user" style={{ margin: '0 10px', color: '#007bff', textDecoration: 'none' }}>User Portal</a>
          <a href="/vendor" style={{ margin: '0 10px', color: '#28a745', textDecoration: 'none' }}>Vendor Portal</a>
          <a href="/admin" style={{ margin: '0 10px', color: '#dc3545', textDecoration: 'none' }}>Admin Portal</a>
        </div>
      </div>
    </div>
  );
}
