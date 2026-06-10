export function SharedFooter() {
  return (
    <footer id="main-footer">
      <div className="container">
        <div className="footer-top-grid">
          <div className="footer-brand-column">
            <a href="/" className="footer-logo">
              <img src="/material/ReComAI Final Logo Gradient with Text.png" alt="ReComAI Logo" className="footer-logo-img" />
            </a>
            <p className="footer-brand-desc">Empowering next-generation brands with autonomous conversational commerce. Boost conversions, automate support, and grow your brand with ease.</p>
            <div className="footer-social-links">
              <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
              <a href="#" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
              <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>

          <div className="footer-links-column">
            <h4>Platform</h4>
            <a href="/#features">Features</a>
            <a href="/#interactive-demo">Live Demo</a>
            <a href="/#integrations">Integrations</a>
            <a href="/#pricing">Pricing Plans</a>
            <a href="#">Roadmap</a>
          </div>

          <div className="footer-links-column">
            <h4>Resources</h4>
            <a href="#">Knowledge Base</a>
            <a href="#">E-commerce Blog</a>
            <a href="#">API Documentation</a>
            <a href="#">Status Page</a>
            <a href="#">System Integrator Program</a>
          </div>

          <div className="footer-links-column">
            <h4>Legal &amp; Trust</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">GDPR &amp; Security</a>
            <a href="#">Partner Agreement</a>
            <a href="#">Founder Info</a>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>&copy; 2026 recomai Inc. All rights reserved. Designed for hyper-growth brands.</p>
        </div>
      </div>
    </footer>
  );
}
