export const metadata = {
  title: "Privacy Policy - Santosh Bhandari",
  description: "Privacy Policy for Browser Extension Generating QR Codes",
};

export default function PrivacyPolicy() {
  return (
    <main style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      margin: 0, 
      padding: '2rem',
      backgroundColor: '#fff',
      color: '#333',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div className="container" style={{ width: '100%', maxWidth: '800px' }}>
        <h1 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Privacy Policy for Browser Extension Generating QR Codes</h1>
        
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          This privacy policy outlines how the browser extension that generates QR codes based on the input provided collects, uses, and protects user information.
        </p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>Information Collected:</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          Our browser extension does not collect any personal information from users. We do not collect any information about your browsing history, search queries, or any other personally identifiable information.
        </p>
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          However, our browser extension may collect anonymous data about how users interact with the extension, such as the number of times the extension is used or the types of input provided. This information is collected solely for the purpose of improving the functionality of the extension and is not linked to any personal information.
        </p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>Use of Information:</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          The anonymous data collected by our browser extension is used to improve the functionality and user experience of the extension. We may use this information to identify bugs or areas where the extension can be improved.
        </p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>Protection of Information:</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          We take the protection of user information seriously and implement appropriate security measures to prevent unauthorized access, modification, disclosure, or destruction of user information. However, we cannot guarantee the absolute security of user information, and users should be aware of the risks associated with using any browser extension.
        </p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>Third-Party Services:</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          Our browser extension does not use any third-party services or plugins. We do not share user information with any third-party services.
        </p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>Updates to Privacy Policy:</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          We reserve the right to update or modify this privacy policy at any time without prior notice. Users are encouraged to review this privacy policy periodically to stay informed of any changes.
        </p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>Contact Information:</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          If you have any queries or concerns regarding this privacy policy, please contact us at <a href="mailto:info@bhandari-santosh.com.np" style={{ color: '#0066cc' }}>info@bhandari-santosh.com.np</a>.
        </p>
      </div>
    </main>
  );
}