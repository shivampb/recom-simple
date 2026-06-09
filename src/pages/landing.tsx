import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";
import { initLandingScript } from "./landing-script.js";
import { SharedNav } from "../components/shared-nav";
import { SharedFooter } from "../components/shared-footer";

export function Landing() {
  useEffect(() => {
    initLandingScript();
  }, []);
  return (
    <div className="landing-root">
      <div className="light-theme">
      {/* Background Glow Elements */}
      <div className="blob-glow blob-1"></div>
      <div className="blob-glow blob-2"></div>
      <div className="blob-glow blob-3"></div>

      {/* Navigation Header */}
      <SharedNav />

      {/* Hero Section with Background Video */}
      <section className="hero-section" id="hero">
        <div className="hero-video-container">
          <video className="hero-video-bg" autoPlay loop muted playsInline>
            <source src="/mp_.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-video-overlay"></div>
        </div>

        <div className="container hero-content-grid">
          <div className="hero-text-content">
            <div className="badge-new animate-fade-in">
              <span className="badge-tag">NEW v2.4</span>
              <span className="badge-text">Autonomous E-commerce Brain is now live!</span>
            </div>
            <h1 className="hero-title animate-slide-up" id="hero-headline">
              Turn Browsers Into Buyers With <span className="text-gradient">Conversational AI</span>
            </h1>
            <p className="hero-description animate-slide-up-delay-1" id="hero-subheadline">
              Meet recomai, the ultra-smart AI shopping assistant designed specifically for e-commerce stores. Instantly guide customers, answer support queries, and drive massive cart checkouts 24/7.
            </p>
            <div className="hero-ctas animate-slide-up-delay-2">
              <a href="https://apps.shopify.com/desti-ai-automate-chatbot" target="_blank" rel="noreferrer" className="btn btn-glow btn-shopify btn-lg"><i className="fa-brands fa-shopify"></i> Install Now</a>
              <a href="#features" className="btn btn-outline btn-lg"><i className="fa-solid fa-circle-play"></i> Core Features</a>
            </div>
            <div className="hero-trust-indicators animate-slide-up-delay-3">
              <div className="trust-avatars">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&q=80" alt="Store Owner" className="trust-avatar" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop&q=80" alt="E-commerce Manager" className="trust-avatar" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop&q=80" alt="Brand founder" className="trust-avatar" />
                <div className="avatar-count">+1.2k</div>
              </div>
              <div className="trust-text">
                <strong>Trusted by 1,200+ brands</strong> Shopify, WooCommerce &amp; more.
              </div>
            </div>
          </div>

          <div className="hero-visual-content animate-fade-in-right">
            <div className="glowing-frame">
              <div className="chat-mockup">
                <div className="chat-header">
                  <div className="chat-header-user">
                    <div className="chat-avatar-status">
                      <div className="avatar-img-placeholder">
                        <img src="/material/recombot.png" alt="recomai Bot Avatar" className="chat-avatar-img" />
                      </div>
                      <span className="status-dot"></span>
                    </div>
                    <div className="chat-header-info">
                      <h4>recomai Bot</h4>
                      <p>AI Shopping Assistant</p>
                    </div>
                  </div>
                  <div className="chat-header-actions">
                    <span className="store-badge"><i className="fa-brands fa-shopify"></i> Connected</span>
                  </div>
                </div>
                <div className="chat-messages" id="hero-chat-messages">
                  <div className="message system-msg">Connected to ModernOutfitters Store</div>
                </div>
                <div className="chat-input-bar">
                  <input type="text" placeholder="Type a message or click below..." disabled />
                  <button className="send-btn" aria-label="Send Message"><i className="fa-solid fa-paper-plane"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="metrics-bar-section">
        <div className="container">
          <div className="metrics-grid">
            <div className="metric-card animate-on-scroll">
              <div className="metric-icon-wrap"><i className="fa-solid fa-chart-line"></i></div>
              <div className="metric-value" data-target="35">0%</div>
              <div className="metric-label">Average Order Value Increase</div>
            </div>
            <div className="metric-card animate-on-scroll">
              <div className="metric-icon-wrap"><i className="fa-solid fa-comments"></i></div>
              <div className="metric-value" data-target="88">0%</div>
              <div className="metric-label">Support Automation Rate</div>
            </div>
            <div className="metric-card animate-on-scroll">
              <div className="metric-icon-wrap"><i className="fa-solid fa-user-check"></i></div>
              <div className="metric-value" data-target="98">0%</div>
              <div className="metric-label">Customer Satisfaction Rating</div>
            </div>
            <div className="metric-card animate-on-scroll">
              <div className="metric-icon-wrap"><i className="fa-solid fa-gauge-high"></i></div>
              <div className="metric-value-text">1.8s</div>
              <div className="metric-label">Avg. Checkout Acceleration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Chatbot Playground */}
      <section className="demo-playground-section" id="interactive-demo">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tagline">Test it yourself</span>
            <h2 className="section-title">See recomai In Action</h2>
            <p className="section-subtitle">Click on one of the suggested prompts below to interact with our real-time simulated shopping assistant.</p>
          </div>

          <div className="playground-layout">
            <div className="playground-controls animate-on-scroll">
              <h3>Select a Shopping Scenario</h3>
              <p className="scenario-intro">Click any card below to prompt the AI and watch it generate personalized product cards and instant answers.</p>
              
              <div className="scenario-list">
                <button className="scenario-btn active" data-scenario="recommend">
                  <span className="scenario-icon"><i className="fa-solid fa-gift"></i></span>
                  <div className="scenario-text">
                    <strong>Find me a product</strong>
                    <span>"I'm looking for high-quality running shoes with soft cushion."</span>
                  </div>
                </button>
                <button className="scenario-btn" data-scenario="track">
                  <span className="scenario-icon"><i className="fa-solid fa-box-open"></i></span>
                  <div className="scenario-text">
                    <strong>Track my order</strong>
                    <span>"Where is order #4928? It was shipped yesterday."</span>
                  </div>
                </button>
                <button className="scenario-btn" data-scenario="discount">
                  <span className="scenario-icon"><i className="fa-solid fa-tags"></i></span>
                  <div className="scenario-text">
                    <strong>Get a discount code</strong>
                    <span>"Are there any active sales or coupons?"</span>
                  </div>
                </button>
                <button className="scenario-btn" data-scenario="faq-support">
                  <span className="scenario-icon"><i className="fa-solid fa-rotate-left"></i></span>
                  <div className="scenario-text">
                    <strong>Return policy support</strong>
                    <span>"What is your exchange policy for worn items?"</span>
                  </div>
                </button>
              </div>

              <div className="store-selector-box">
                <span className="store-box-title">Choose Store Aesthetic:</span>
                <div className="store-options">
                  <button className="store-theme-btn active" data-store-theme="modern-fashion">
                    <span className="theme-dot fashion"></span> Fashion &amp; Apparel
                  </button>
                  <button className="store-theme-btn" data-store-theme="neon-tech">
                    <span className="theme-dot tech"></span> Gadgets &amp; Electronics
                  </button>
                </div>
              </div>
            </div>

            <div className="playground-chat-container animate-on-scroll">
              <div className="chat-box" id="playground-chat-box">
                <div className="chat-box-header">
                  <div className="brand-avatar">
                    <img src="/material/recombot.png" alt="recomai Bot Avatar" className="chat-avatar-img" />
                  </div>
                  <div className="brand-details">
                    <span className="brand-name" id="current-brand-name">Aura Wear</span>
                    <span className="brand-status"><span className="dot-online"></span> recomai chatbot active</span>
                  </div>
                  <div className="chat-platform-indicator">
                    <i className="fa-solid fa-globe"></i> Web Widget
                  </div>
                </div>

                <div className="chat-box-messages" id="playground-messages">
                </div>

                <div className="suggested-chips" id="suggested-chips">
                </div>

                <div className="chat-box-input">
                  <input type="text" id="playground-input" placeholder="Type a message or query..." autoComplete="off" />
                  <button id="playground-send-btn" className="playground-send-btn" aria-label="Send message">
                    <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section" id="features">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tagline">Why Choose recomai?</span>
            <h2 className="section-title">A Customer Experience Designed to Sell</h2>
            <p className="section-subtitle">We go beyond simple keyword matching. recomai leverages highly-trained LLMs contextually aware of your live e-commerce inventory.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card animate-on-scroll">
              <div className="card-glow"></div>
              <div className="feature-icon"><i className="fa-solid fa-magnifying-glass-chart"></i></div>
              <h3 className="feature-card-title">Intent-Based Search</h3>
              <p className="feature-card-desc">Instead of broken keyword search bars, users talk to recomai like a knowledgeable store employee who knows exactly what fits their needs.</p>
              <ul className="feature-list">
                <li><i className="fa-solid fa-check text-accent"></i> Understands natural queries</li>
                <li><i className="fa-solid fa-check text-accent"></i> Filters by size, color, and fit</li>
              </ul>
            </div>

            <div className="feature-card animate-on-scroll">
              <div className="card-glow"></div>
              <div className="feature-icon"><i className="fa-solid fa-cart-shopping"></i></div>
              <h3 className="feature-card-title">In-Chat Checkout</h3>
              <p className="feature-card-desc">Reduce checkout steps. Customers can add items to their shopping cart and purchase right inside the conversation stream.</p>
              <ul className="feature-list">
                <li><i className="fa-solid fa-check text-accent"></i> Single-click cart modification</li>
                <li><i className="fa-solid fa-check text-accent"></i> Integrates with Shop Pay, Stripe</li>
              </ul>
            </div>

            <div className="feature-card animate-on-scroll">
              <div className="card-glow"></div>
              <div className="feature-icon"><i className="fa-solid fa-truck-fast"></i></div>
              <h3 className="feature-card-title">Instant Post-Purchase Support</h3>
              <p className="feature-card-desc">Slash support tickets by 80%. recomai handles shipping queries, status checks, returns, and refunds automatically.</p>
              <ul className="feature-list">
                <li><i className="fa-solid fa-check text-accent"></i> Real-time tracking integrations</li>
                <li><i className="fa-solid fa-check text-accent"></i> Instant automated refund requests</li>
              </ul>
            </div>

            <div className="feature-card animate-on-scroll">
              <div className="card-glow"></div>
              <div className="feature-icon"><i className="fa-solid fa-fire-flame-curved"></i></div>
              <h3 className="feature-card-title">Proactive Cart Recovery</h3>
              <p className="feature-card-desc">Don't lose customers. recomai detects exit intent and cart abandonment, initiating friendly prompts with custom dynamic discount offers.</p>
              <ul className="feature-list">
                <li><i className="fa-solid fa-check text-accent"></i> Smart abandonment detection</li>
                <li><i className="fa-solid fa-check text-accent"></i> Up to 22% cart retrieval rate</li>
              </ul>
            </div>

            <div className="feature-card animate-on-scroll">
              <div className="card-glow"></div>
              <div className="feature-icon"><i className="fa-solid fa-comments-dollar"></i></div>
              <h3 className="feature-card-title">Social Commerce Flow</h3>
              <p className="feature-card-desc">Synchronize with social DM networks. Automate your DMs across Instagram, WhatsApp, and Facebook with recomai.</p>
              <ul className="feature-list">
                <li><i className="fa-solid fa-check text-accent"></i> Seamless multi-channel syncing</li>
                <li><i className="fa-solid fa-check text-accent"></i> Unified admin agent inbox</li>
              </ul>
            </div>

            <div className="feature-card animate-on-scroll">
              <div className="card-glow"></div>
              <div className="feature-icon"><i className="fa-solid fa-sliders"></i></div>
              <h3 className="feature-card-title">No-Code Brand Customizer</h3>
              <p className="feature-card-desc">Align the chatbot widget to match your exact brand guidelines. Change fonts, accent colors, avatars, and greetings in minutes.</p>
              <ul className="feature-list">
                <li><i className="fa-solid fa-check text-accent"></i> Highly custom CSS control</li>
                <li><i className="fa-solid fa-check text-accent"></i> Custom avatar uploading</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Merchant Dashboard Section */}
      <section className="dashboard-section" id="dashboard">
        <div className="container">
          <div className="dashboard-layout">
            <div className="dashboard-text-content animate-on-scroll">
              <span className="section-tagline">Complete Visibility</span>
              <h2 className="section-title">Powerful Merchant Dashboard</h2>
              <p className="section-subtitle">Take control of your e-commerce growth with real-time analytics. recomai gives you a birds-eye view of your entire store's performance, customer behaviors, and current market scenario stats.</p>
              
              <div className="dashboard-feature-list">
                <div className="dashboard-feature-item">
                  <div className="dash-feat-icon"><i className="fa-solid fa-chart-pie"></i></div>
                  <div className="dash-feat-text">
                    <h4>Market Scenario Stats</h4>
                    <p>Track live trending products and shift your strategy instantly.</p>
                  </div>
                </div>
                <div className="dashboard-feature-item">
                  <div className="dash-feat-icon"><i className="fa-solid fa-users-viewfinder"></i></div>
                  <div className="dash-feat-text">
                    <h4>Customer Journey Analytics</h4>
                    <p>See exactly how AI interactions convert into paying customers.</p>
                  </div>
                </div>
                <div className="dashboard-feature-item">
                  <div className="dash-feat-icon"><i className="fa-solid fa-money-bill-trend-up"></i></div>
                  <div className="dash-feat-text">
                    <h4>Revenue Attribution</h4>
                    <p>Monitor total revenue generated directly by the chatbot.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-visual-content animate-on-scroll">
              <div className="glowing-frame dash-frame">
                <div className="dashboard-mockup">
                  <div className="dash-header">
                    <span><i className="fa-solid fa-border-all"></i> Overview</span>
                    <div className="dash-user">Admin <div className="dash-avatar"></div></div>
                  </div>
                  <div className="dash-body">
                    <div className="dash-metrics-row">
                      <div className="dash-metric-card">
                        <span className="dash-m-title">AI Revenue</span>
                        <span className="dash-m-value">$24,590</span>
                        <span className="dash-m-trend positive"><i className="fa-solid fa-arrow-trend-up"></i> +12%</span>
                      </div>
                      <div className="dash-metric-card">
                        <span className="dash-m-title">Market Trend</span>
                        <span className="dash-m-value">Bullish</span>
                        <span className="dash-m-trend neutral"><i className="fa-solid fa-minus"></i> Steady</span>
                      </div>
                    </div>
                    <div className="dash-chart-area">
                      <div className="dash-chart-header">
                        <span>Current Market Scenario</span>
                        <span className="dash-chart-badge">Live</span>
                      </div>
                      <div className="dash-chart-bars">
                        <div className="dash-bar-group"><div className="dash-bar" style={{height: "40%"}}></div></div>
                        <div className="dash-bar-group"><div className="dash-bar" style={{height: "65%"}}></div></div>
                        <div className="dash-bar-group"><div className="dash-bar" style={{height: "50%"}}></div></div>
                        <div className="dash-bar-group"><div className="dash-bar" style={{height: "85%"}}></div></div>
                        <div className="dash-bar-group"><div className="dash-bar" style={{height: "70%"}}></div></div>
                        <div className="dash-bar-group"><div className="dash-bar" style={{height: "95%"}}></div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="integrations-section" id="integrations">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tagline">One-click connect</span>
            <h2 className="section-title">Integrate with Your E-commerce Stack</h2>
            <p className="section-subtitle">recomai connects seamlessly with all major e-commerce platforms, customer helpdesks, and marketing tools. Zero code required.</p>
          </div>

          <div className="marquee-wrapper">
            <div className="marquee">
              <div className="marquee-group">
                <div className="integration-item"><i className="fa-brands fa-shopify icon-shopify"></i><span>Shopify</span></div>
                <div className="integration-item"><i className="fa-brands fa-wordpress icon-wp"></i><span>WooCommerce</span></div>
                <div className="integration-item"><i className="fa-brands fa-magento icon-magento"></i><span>Magento</span></div>
                <div className="integration-item"><i className="fa-brands fa-salesforce icon-salesforce"></i><span>Salesforce</span></div>
                <div className="integration-item"><i className="fa-brands fa-whatsapp icon-whatsapp"></i><span>WhatsApp</span></div>
                <div className="integration-item"><i className="fa-brands fa-instagram icon-instagram"></i><span>Instagram</span></div>
                <div className="integration-item"><i className="fa-brands fa-stripe icon-stripe"></i><span>Stripe</span></div>
              </div>
              <div className="marquee-group" aria-hidden="true">
                <div className="integration-item"><i className="fa-brands fa-shopify icon-shopify"></i><span>Shopify</span></div>
                <div className="integration-item"><i className="fa-brands fa-wordpress icon-wp"></i><span>WooCommerce</span></div>
                <div className="integration-item"><i className="fa-brands fa-magento icon-magento"></i><span>Magento</span></div>
                <div className="integration-item"><i className="fa-brands fa-salesforce icon-salesforce"></i><span>Salesforce</span></div>
                <div className="integration-item"><i className="fa-brands fa-whatsapp icon-whatsapp"></i><span>WhatsApp</span></div>
                <div className="integration-item"><i className="fa-brands fa-instagram icon-instagram"></i><span>Instagram</span></div>
                <div className="integration-item"><i className="fa-brands fa-stripe icon-stripe"></i><span>Stripe</span></div>
              </div>
            </div>
          </div>

          <div className="integration-details-grid">
            <div className="int-detail-card animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1563013544-824ae1d704d3?w=400&fit=crop&q=80" alt="Integrations mockup" className="int-image" />
              <div className="int-text">
                <h3>Shopify &amp; Plus Native App</h3>
                <p>Sync inventory, variant stock counts, discount lists, and historical customer tracking in real-time. Installs from the Shopify App store with a single tap.</p>
                <a href="#pricing" className="learn-more">Learn more <i className="fa-solid fa-arrow-right-long"></i></a>
              </div>
            </div>
            <div className="int-detail-card animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&fit=crop&q=80" alt="Live Chat Handover" className="int-image" />
              <div className="int-text">
                <h3>Smart Helpdesk Handovers</h3>
                <p>When questions get highly complex, recomai smoothly hands off the customer ticket context to your agents in Gorgias, Zendesk, or Intercom without losing chat history.</p>
                <a href="#pricing" className="learn-more">Learn more <i className="fa-solid fa-arrow-right-long"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section" id="pricing">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tagline">Fair &amp; Scalable Plans</span>
            <h2 className="section-title">Choose Your E-commerce Growth Plan</h2>
            <p className="section-subtitle">Every plan includes standard support, natural LLM configurations, and seamless 1-click platform integrations.</p>

            <div className="billing-toggle-container">
              <span className="toggle-label active" id="monthly-label">Monthly</span>
              <button className="billing-slider-btn" id="billing-slider" aria-label="Toggle Billing Interval">
                <span className="slider-dot"></span>
              </button>
              <span className="toggle-label" id="annual-label">Annual <span className="discount-pill">Save 20%</span></span>
            </div>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card animate-on-scroll">
              <div className="card-tier-label">Starter</div>
              <div className="card-price">
                <span className="currency">$</span>
                <span className="price-number" data-monthly="49" data-annual="39">49</span>
                <span className="period">/month</span>
              </div>
              <p className="card-desc">Perfect for emerging stores looking to automate basic customer FAQs and simple order status queries.</p>
              
              <ul className="pricing-features">
                <li><i className="fa-solid fa-check text-gradient-icon"></i> Up to 1,000 monthly active users</li>
                <li><i className="fa-solid fa-check text-gradient-icon"></i> Shopify Integration</li>
                <li><i className="fa-solid fa-check text-gradient-icon"></i> Standard E-commerce AI model</li>
                <li><i className="fa-solid fa-check text-gradient-icon"></i> Basic analytics dashboard</li>
                <li className="disabled"><i className="fa-solid fa-xmark"></i> Multi-channel WhatsApp &amp; IG</li>
                <li className="disabled"><i className="fa-solid fa-xmark"></i> In-chat cart checkout</li>
              </ul>

              <a href="#interactive-demo" className="btn btn-outline btn-block pricing-btn">Start Free Trial</a>
            </div>

            <div className="pricing-card featured animate-on-scroll">
              <div className="popular-tag">MOST POPULAR</div>
              <div class="card-tier-label">Growth</div>
              <div className="card-price">
                <span className="currency">$</span>
                <span className="price-number" data-monthly="149" data-annual="119">149</span>
                <span className="period">/month</span>
              </div>
              <p className="card-desc">Best for scaling merchants who want hyper-personalized product recommendations and full marketing integrations.</p>
              
              <ul className="pricing-features">
                <li><i className="fa-solid fa-check text-gradient-icon"></i> Up to 10,000 monthly active users</li>
                <li><i className="fa-solid fa-check text-gradient-icon"></i> Multi-store integrations</li>
                <li><i className="fa-solid fa-check text-gradient-icon"></i> Contextual AI recommendation brain</li>
                <li><i className="fa-solid fa-check text-gradient-icon"></i> Cart recovery &amp; discounts module</li>
                <li><i className="fa-solid fa-check text-gradient-icon"></i> WhatsApp &amp; IG Direct Sync</li>
                <li className="disabled"><i className="fa-solid fa-xmark"></i> Custom dedicated LLM tuning</li>
              </ul>

              <a href="#interactive-demo" className="btn btn-glow btn-block pricing-btn">Start 14-Day Trial</a>
            </div>

            <div className="pricing-card animate-on-scroll">
              <div className="card-tier-label">Enterprise</div>
              <div className="card-price">
                <span className="currency">$</span>
                <span className="price-number" data-monthly="499" data-annual="399">499</span>
                <span className="period">/month</span>
              </div>
              <p className="card-desc">For large-scale retailers needing custom integrations, infinite scale, premium security, and custom model training.</p>
              
              <ul className="pricing-features">
                <li><i className="fa-solid fa-check text-gradient-icon"></i> Unlimited active users</li>
                <li><i className="fa-solid fa-check text-gradient-icon"></i> Fine-tuned proprietary model</li>
                <li><i className="fa-solid fa-check text-gradient-icon"></i> Dedicated account manager</li>
                <li><i className="fa-solid fa-check text-gradient-icon"></i> Custom database &amp; ERP integrations</li>
                <li><i className="fa-solid fa-check text-gradient-icon"></i> Premium SLA &amp; 24/7 Phone Support</li>
                <li><i className="fa-solid fa-check text-gradient-icon"></i> In-chat advanced checkout API</li>
              </ul>

              <a href="#interactive-demo" className="btn btn-outline btn-block pricing-btn">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tagline">Got questions?</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Find answers to common questions about setting up and running recomai on your webstore.</p>
          </div>

          <div className="faq-accordion-list">
            <div className="faq-item active animate-on-scroll">
              <button className="faq-trigger" aria-expanded="true">
                <span className="faq-question">How does recomai know what products to recommend?</span>
                <span className="faq-icon-wrap"><i className="fa-solid fa-chevron-down"></i></span>
              </button>
              <div className="faq-content">
                <p>recomai integrates directly with your product catalog API (Shopify, WooCommerce, etc.) to ingest inventory data in real-time. It analyzes variables such as product description, price, tags, and variants, using deep semantic embeddings to matches user questions (e.g. "comfy running shoes for winter") with the most relevant stock items instantly.</p>
              </div>
            </div>

            <div className="faq-item animate-on-scroll">
              <button className="faq-trigger" aria-expanded="false">
                <span className="faq-question">Will it slow down my website load time?</span>
                <span className="faq-icon-wrap"><i className="fa-solid fa-chevron-down"></i></span>
              </button>
              <div className="faq-content">
                <p>Absolutely not. The recomai widget script is extremely lightweight (under 25kb gzipped) and loads asynchronously after your page is fully rendered. This ensures it has zero impact on your SEO performance, LCP (Largest Contentful Paint) metrics, or general page load velocities.</p>
              </div>
            </div>

            <div className="faq-item animate-on-scroll">
              <button className="faq-trigger" aria-expanded="false">
                <span className="faq-question">Can recomai automatically process order refunds or cancelations?</span>
                <span className="faq-icon-wrap"><i className="fa-solid fa-chevron-down"></i></span>
              </button>
              <div className="faq-content">
                <p>Yes, but only under your strict rules! You can define precise thresholds. For example, recomai can automatically process refunds/exchanges for orders that haven't shipped yet or were bought under 14 days ago. For transactions that require human oversight, the bot flags the conversation and escalates it to your human support team.</p>
              </div>
            </div>

            <div className="faq-item animate-on-scroll">
              <button className="faq-trigger" aria-expanded="false">
                <span className="faq-question">How long does it take to train and deploy?</span>
                <span className="faq-icon-wrap"><i className="fa-solid fa-chevron-down"></i></span>
              </button>
              <div className="faq-content">
                <p>Deployment takes less than 5 minutes! Once you authorize our Shopify or WordPress connector, our algorithm automatically maps and index-embeds your catalog. A pre-set shopping widget is generated instantly and is ready to launch on your storefront.</p>
              </div>
            </div>

            <div className="faq-item animate-on-scroll">
              <button className="faq-trigger" aria-expanded="false">
                <span className="faq-question">Does recomai support multi-lingual customers?</span>
                <span className="faq-icon-wrap"><i className="fa-solid fa-chevron-down"></i></span>
              </button>
              <div className="faq-content">
                <p>Yes. The chatbot automatically detects the customer's browser language or their chat language on-the-fly. It can fluently converse, recommend products, and answer support queries in over 50 languages, including Spanish, French, German, Japanese, Arabic, and Hindi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Section / Newsletter */}
      <section className="cta-banner-section">
        <div className="container relative-pos">
          <div className="cta-inner-card animate-on-scroll">
            <div className="cta-card-glow"></div>
            <div className="cta-text-content">
              <h2>Ready to Supercharge Your Sales?</h2>
              <p>Start your 14-day free trial. Setup takes under 5 minutes. No credit card required.</p>
              <form className="cta-form" id="newsletter-form">
                <input type="email" placeholder="Enter your business email" required />
                <button type="submit" className="btn btn-glow">Get Started <i className="fa-solid fa-chevron-right"></i></button>
              </form>
              <p className="cta-micro-text"><i className="fa-solid fa-shield-halved"></i> Fully GDPR compliant &amp; secure integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SharedFooter />
    </div>
    </div>
  );
}
