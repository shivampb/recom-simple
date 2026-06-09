import React, { useState, useEffect } from 'react';

export function RoiCalculator() {
  const [visitors, setVisitors] = useState(50000);
  const [aov, setAov] = useState(75);
  const [conversionRate, setConversionRate] = useState(2.0);
  
  const [extraRevenue, setExtraRevenue] = useState(0);
  const [newRevenue, setNewRevenue] = useState(0);

  useEffect(() => {
    // Current calculations
    const currentRevenue = visitors * (conversionRate / 100) * aov;
    
    // RecomAI Boost: conservatively 25% relative increase in conversion
    const boostMultiplier = 1.25; 
    const newCvRate = conversionRate * boostMultiplier;
    
    const projectedRevenue = visitors * (newCvRate / 100) * aov;
    const additional = projectedRevenue - currentRevenue;
    
    setNewRevenue(projectedRevenue);
    setExtraRevenue(additional);
  }, [visitors, aov, conversionRate]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="roi-section animate-on-scroll">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge badge-glow">ROI Calculator</span>
          <h2>Calculate Your Revenue Lift</h2>
          <p className="subtitle">See how much additional revenue RecomAI can generate for your store each month.</p>
        </div>
        
        <div className="roi-calculator-wrapper">
          <div className="roi-glass-card">
            
            <div className="roi-inputs">
              <div className="roi-input-group">
                <div className="roi-input-header">
                  <label>Monthly Traffic (Visitors)</label>
                  <span className="roi-value">{visitors.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="500000" 
                  step="1000" 
                  value={visitors} 
                  onChange={(e) => setVisitors(Number(e.target.value))}
                  className="roi-slider"
                />
              </div>

              <div className="roi-input-group">
                <div className="roi-input-header">
                  <label>Average Order Value ($)</label>
                  <span className="roi-value">{formatCurrency(aov)}</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="500" 
                  step="5" 
                  value={aov} 
                  onChange={(e) => setAov(Number(e.target.value))}
                  className="roi-slider"
                />
              </div>

              <div className="roi-input-group">
                <div className="roi-input-header">
                  <label>Current Conversion Rate (%)</label>
                  <span className="roi-value">{conversionRate.toFixed(1)}%</span>
                </div>
                <input 
                  type="range" 
                  min="0.1" 
                  max="10" 
                  step="0.1" 
                  value={conversionRate} 
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="roi-slider"
                />
              </div>
            </div>

            <div className="roi-results-panel">
              <div className="roi-result-item">
                <div className="roi-result-label">Estimated Monthly Revenue</div>
                <div className="roi-result-value base">{formatCurrency(newRevenue)}</div>
              </div>
              
              <div className="roi-divider"></div>
              
              <div className="roi-result-item highlight">
                <div className="roi-result-label text-gradient">Additional Monthly Revenue</div>
                <div className="roi-result-value boost text-gradient">+{formatCurrency(extraRevenue)}</div>
                <div className="roi-micro-text">Based on a conservative 25% AI-driven conversion lift</div>
              </div>
              
              <button className="btn btn-glow roi-cta-btn">
                Start Free Trial <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
