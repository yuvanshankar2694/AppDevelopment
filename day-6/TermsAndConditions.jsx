import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Terms.css' // Link to your CSS file
function TermsAndConditions() {
  return (
    <div className="terms-and-conditions-container">
      <h1>Terms and Conditions</h1>
      <p>
        Please read these terms and conditions carefully before using our mobile
        service center app.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By using our app, you agree to comply with and be bound by these terms
        and conditions.
      </p>

      <h2>2. Services</h2>
      <p>
        We provide mobile device repair and related services. Use of our
        services is at your own risk.
      </p>

      <h2>3. Privacy</h2>
      <p>
        Your use of our app is also governed by our{' '}
        <Link to='/privacy'>Privacy Policy</Link>.
      </p>

      <h2>4. User Conduct</h2>
      <p>
        You are responsible for your use of the app and must not engage in any
        unlawful or prohibited activities.
      </p>

      <h2>5. Disclaimer of Warranty</h2>
      <p>
        We do not warrant that our services will be error-free or uninterrupted.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        We are not liable for any direct, indirect, or consequential damages.
      </p>

      <h2>7. Governing Law</h2>
      <p>
        These terms and conditions are governed by the laws of [Your
        Jurisdiction].
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions about these terms and conditions, please
        contact us at contact@example.com.
      </p>
    </div>
  )
}

export default TermsAndConditions
