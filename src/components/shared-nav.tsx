import { Link } from "react-router-dom";

export function SharedNav() {
  return (
    <header id="main-header">
      <div className="container nav-container">
        <Link to="/" className="logo" id="nav-logo">
          <img src="/material/ReComAI Final Logo Gradient with Text.png" alt="ReComAI Logo" className="nav-logo-img" />
        </Link>
        
        <nav className="nav-menu" id="nav-menu">
          <a href="/#features" className="nav-link">Features</a>
          <a href="/#interactive-demo" className="nav-link">Live Demo</a>
          <Link to="/analyze" className="nav-link">Store Analyzer</Link>
          <a href="/#pricing" className="nav-link">Pricing</a>
          <a href="/#faq" className="nav-link">FAQ</a>
        </nav>

        <div className="nav-actions">
          <a href="/#pricing" className="btn btn-outline btn-sm hide-mobile">Login</a>
          <a href="https://apps.shopify.com/desti-ai-automate-chatbot" target="_blank" rel="noreferrer" className="btn btn-glow btn-shopify btn-sm" id="cta-nav"><i className="fa-brands fa-shopify"></i> Install Now</a>
          <button className="mobile-toggle" id="mobile-toggle" aria-label="Toggle Menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
