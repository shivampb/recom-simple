export function initLandingScript() {
    // Check if we are on the landing page
    if (!document.getElementById('main-header')) return;
    // ==========================================================================
    // STICKY HEADER & MOBILE NAVIGATION
    // ==========================================================================
    const header = document.getElementById('main-header');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky header transition on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Toggle Mobile Menu
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('open');
        navMenu.classList.toggle('open');
    });

    // Close menu on click of nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('open');
            navMenu.classList.remove('open');
        });
    });


    // ==========================================================================
    // INTERSECTION OBSERVER - SCROLL ANIMATIONS & COUNTERS
    // ==========================================================================
    const animScrollElements = document.querySelectorAll('.animate-on-scroll');
    const metricCards = document.querySelectorAll('.metric-card');
    let countersStarted = false;

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                
                // If the element is a metric card and counters haven't started, launch them
                if (entry.target.classList.contains('metric-card') && !countersStarted) {
                    startMetricsCounters();
                }
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    animScrollElements.forEach(el => scrollObserver.observe(el));
    metricCards.forEach(card => scrollObserver.observe(card));

    function startMetricsCounters() {
        countersStarted = true;
        const counters = document.querySelectorAll('.metric-value');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            let current = 0;
            const duration = 1500; // 1.5s
            const increment = target / (duration / 16); // ~60fps
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target + '%';
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current) + '%';
                }
            }, 16);
        });
    }


    // ==========================================================================
    // HERO AUTO-CHAT SIMULATION
    // ==========================================================================
    const heroChatMessages = document.getElementById('hero-chat-messages');
    
    const simulatedHeroConvo = [
        { sender: 'user', text: 'Hey, do you have any retro-style jackets in stock?' },
        { sender: 'bot', text: 'Typing...' },
        { sender: 'bot', text: 'Yes, we certainly do! Check out our best-selling **Heritage Denim Coach Jacket** ($89.00) or our **Corduroy Varsity Bomber** ($110.00). Both have relaxed fits.' },
        { sender: 'user', text: 'Can I see the Corduroy Varsity Bomber?' },
        { sender: 'bot', text: 'Typing...' },
        { sender: 'bot', text: 'Here it is! Super warm, features premium metal snap closures, and crafted from 100% organic cotton corduroy.', product: { title: 'Corduroy Varsity Bomber', price: '$110.00', img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&fit=crop&q=80' } },
        { sender: 'user', text: 'Perfect! Add a size Medium to my cart.' },
        { sender: 'bot', text: 'Typing...' },
        { sender: 'bot', text: 'Added to your cart! 🎉 I have also applied an automatic welcoming discount code **WELCOME10** for 10% off. Ready to checkout?' }
    ];

    let heroConvoIndex = 0;

    function runHeroChatSimulation() {
        if (heroConvoIndex >= simulatedHeroConvo.length) {
            // Loop or stop
            setTimeout(() => {
                heroChatMessages.innerHTML = '<div class="message system-msg">Connected to ModernOutfitters Store</div>';
                heroConvoIndex = 0;
                runHeroChatSimulation();
            }, 6000);
            return;
        }

        const msgData = simulatedHeroConvo[heroConvoIndex];
        
        if (msgData.text === 'Typing...') {
            // Show typing indicator
            const typingIndicator = document.createElement('div');
            typingIndicator.className = 'typing-indicator';
            typingIndicator.id = 'hero-typing';
            typingIndicator.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
            heroChatMessages.appendChild(typingIndicator);
            scrollToBottom(heroChatMessages);

            setTimeout(() => {
                const el = document.getElementById('hero-typing');
                if (el) el.remove();
                heroConvoIndex++;
                runHeroChatSimulation();
            }, 1000);
        } else {
            const msgBubble = document.createElement('div');
            msgBubble.className = `message ${msgData.sender === 'user' ? 'user-msg' : 'bot-msg'}`;
            msgBubble.innerHTML = parseMarkdownText(msgData.text);
            heroChatMessages.appendChild(msgBubble);
            
            // If message includes a product mockup card
            if (msgData.product) {
                const prodCarousel = document.createElement('div');
                prodCarousel.className = 'product-card-carousel';
                prodCarousel.style.marginTop = '10px';
                
                prodCarousel.innerHTML = `
                    <div class="chat-product-card">
                        <img src="${msgData.product.img}" alt="${msgData.product.title}" class="chat-prod-img">
                        <div class="chat-prod-info">
                            <h5 class="chat-prod-title">${msgData.product.title}</h5>
                            <span class="chat-prod-price">${msgData.product.price}</span>
                            <button class="chat-prod-btn">View Item</button>
                        </div>
                    </div>
                `;
                heroChatMessages.appendChild(prodCarousel);
            }

            scrollToBottom(heroChatMessages);
            heroConvoIndex++;
            
            let delay = msgData.sender === 'user' ? 2200 : 2600;
            if (msgData.product) {
                delay = 4000; // Give extra time to view the product card
            }
            setTimeout(runHeroChatSimulation, delay);
        }
    }

    // Quick markdown parser for custom bold items
    function parseMarkdownText(text) {
        return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }

    function scrollToBottom(container) {
        container.scrollTop = container.scrollHeight;
    }

    // Start hero chatbot loop after short delay
    setTimeout(runHeroChatSimulation, 1500);


    // ==========================================================================
    // INTERACTIVE PLAYGROUND (PLAYGROUND SCRIPTS)
    // ==========================================================================
    const scenarioBtns = document.querySelectorAll('.scenario-btn');
    const storeThemeBtns = document.querySelectorAll('.store-theme-btn');
    const playgroundMessages = document.getElementById('playground-messages');
    const playgroundInput = document.getElementById('playground-input');
    const playgroundSendBtn = document.getElementById('playground-send-btn');
    const currentBrandName = document.getElementById('current-brand-name');
    const suggestedChipsBox = document.getElementById('suggested-chips');
    const playgroundChatBox = document.getElementById('playground-chat-box');

    let activeScenario = 'recommend';
    let activeStoreTheme = 'modern-fashion';

    // Store profiles config
    const storeProfiles = {
        'modern-fashion': {
            name: 'Aura Wear',
            avatarBg: 'linear-gradient(135deg, #3833AD, #4CB8D5)',
            accentColor: '#4CB8D5',
            borderColor: 'rgba(76, 184, 213, 0.3)',
            welcomeMsg: "Hi there! I'm Aura's AI Shopping Assistant. Looking for custom styles, checking order status, or looking for a discounts? Tell me what you need! ✨",
            products: [
                { title: 'AeroFoam Performance Runner', price: '$120.00', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&fit=crop&q=80' },
                { title: 'Zenith Breathable Knit Shoe', price: '$95.00', img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&fit=crop&q=80' }
            ]
        },
        'neon-tech': {
            name: 'VoltTech',
            avatarBg: 'linear-gradient(135deg, #4CB8D5, #3833AD)',
            accentColor: '#4CB8D5',
            borderColor: 'rgba(76, 184, 213, 0.3)',
            welcomeMsg: "Hello! Welcome to VoltTech AI hub. Ask me about specs, track orders, or find the ultimate device for your desk setup. Let's build! ⚡",
            products: [
                { title: 'VoltAudio Pro Hybrid ANC', price: '$180.00', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&fit=crop&q=80' },
                { title: 'Pulse Buds wireless Pro', price: '$85.00', img: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&fit=crop&q=80' }
            ]
        }
    };

    // Chatbot responses configurations
    const scenarioFlows = {
        'recommend': {
            userQuery: "I'm looking for high-quality recommendations in your store.",
            botReply: "Excellent choice! I have filtered our newest arrivals matching optimal comfort, durability, and outstanding user reviews. Here are my personal top recommendations:",
            showProducts: true,
            chips: ["Do these have a warranty?", "Check size guidelines", "Do you ship worldwide?"]
        },
        'track': {
            userQuery: "Where is order #4928? It was shipped yesterday.",
            botReply: "I just pinged our logistics provider! 📦 **Order #4928** was processed and handed over to DHL Express. It is currently at the Cincinnati sorting facility and is on track for delivery on **Friday, May 22 by 5:00 PM**. [View Live Map Tracking]",
            showProducts: false,
            chips: ["Change delivery address", "Can I cancel this order?", "Get text updates"]
        },
        'discount': {
            userQuery: "Are there any active sales, coupons or promo codes?",
            botReply: "You're in luck! 🎟️ I just unlocked an exclusive customer appreciation code just for you. Use coupon code **RECO15** at checkout for **15% OFF** your entire purchase. Would you like me to apply it automatically to your cart?",
            showProducts: false,
            chips: ["Apply code now", "When does this expire?", "Minimum spend rules"]
        },
        'faq-support': {
            userQuery: "What is your exchange policy for worn items?",
            botReply: "No worries! We offer a **30-day risk-free exchange policy**. Even if you wore the item once to test the fit and realized you need a different size, you can initiate a return or replacement easily. Would you like me to email you a free return label?",
            showProducts: false,
            chips: ["Yes, send return label", "Talk to a human agent", "Return address details"]
        }
    };

    // Switch Store Theme
    storeThemeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            storeThemeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeStoreTheme = btn.getAttribute('data-store-theme');
            
            applyStoreThemeChange();

            // Smooth scroll to chat box on mobile
            if (window.innerWidth <= 1024) {
                const chatContainer = document.querySelector('.playground-chat-container');
                const offset = chatContainer.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        });
    });

    function applyStoreThemeChange() {
        const profile = storeProfiles[activeStoreTheme];
        currentBrandName.textContent = profile.name;
        
        // Morph colors of playground chat box
        playgroundChatBox.style.borderColor = profile.borderColor;

        // Reset Playground and run the current scenario in the context of the new store theme!
        resetPlaygroundChat();
    }

    // Switch Scenario Prompt
    scenarioBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            scenarioBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeScenario = btn.getAttribute('data-scenario');
            
            triggerPlaygroundScenario();
            
            // Smooth scroll to chat box on mobile
            if (window.innerWidth <= 1024) {
                const chatContainer = document.querySelector('.playground-chat-container');
                const offset = chatContainer.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        });
    });

    function resetPlaygroundChat() {
        const profile = storeProfiles[activeStoreTheme];
        playgroundMessages.innerHTML = `
            <div class="message bot-msg">${profile.welcomeMsg}</div>
        `;
        // Reset chips
        suggestedChipsBox.innerHTML = '';
    }

    function triggerPlaygroundScenario() {
        resetPlaygroundChat();
        
        const flow = scenarioFlows[activeScenario];
        const profile = storeProfiles[activeStoreTheme];

        // 1. Append User Message
        setTimeout(() => {
            appendPlaygroundMsg(flow.userQuery, 'user');
            
            // 2. Show Typing Indicator
            setTimeout(() => {
                showPlaygroundTyping();
                
                // 3. Append Bot Message & Products / Chips
                setTimeout(() => {
                    removePlaygroundTyping();
                    appendPlaygroundMsg(flow.botReply, 'bot');
                    
                    if (flow.showProducts) {
                        appendProductCarousel(profile.products);
                    }
                    
                    renderSuggestedChips(flow.chips);
                }, 1200);

            }, 600);

        }, 300);
    }

    function appendPlaygroundMsg(text, sender) {
        const msgBubble = document.createElement('div');
        msgBubble.className = `message ${sender === 'user' ? 'user-msg' : 'bot-msg'}`;
        
        // Apply store theme color to user bubbles
        if (sender === 'user') {
            const profile = storeProfiles[activeStoreTheme];
            msgBubble.style.background = profile.avatarBg;
        }

        msgBubble.innerHTML = parseMarkdownText(text);
        playgroundMessages.appendChild(msgBubble);
        scrollToBottom(playgroundMessages);
    }

    function showPlaygroundTyping() {
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'typing-indicator';
        typingIndicator.id = 'playground-typing';
        typingIndicator.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
        playgroundMessages.appendChild(typingIndicator);
        scrollToBottom(playgroundMessages);
    }

    function removePlaygroundTyping() {
        const el = document.getElementById('playground-typing');
        if (el) el.remove();
    }

    function appendProductCarousel(products) {
        const prodCarousel = document.createElement('div');
        prodCarousel.className = 'product-card-carousel';
        prodCarousel.style.marginTop = '10px';
        
        let carouselHTML = '';
        products.forEach(prod => {
            carouselHTML += `
                <div class="chat-product-card">
                    <img src="${prod.img}" alt="${prod.title}" class="chat-prod-img">
                    <div class="chat-prod-info">
                        <h5 class="chat-prod-title">${prod.title}</h5>
                        <span class="chat-prod-price">${prod.price}</span>
                        <button class="chat-prod-btn">View Item</button>
                    </div>
                </div>
            `;
        });
        
        prodCarousel.innerHTML = carouselHTML;
        playgroundMessages.appendChild(prodCarousel);
        scrollToBottom(playgroundMessages);
        
        // Add click events to mock view item buttons
        const buyBtns = prodCarousel.querySelectorAll('.chat-prod-btn');
        buyBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                alert(`Added item to your cart! Proceed to secure checkout.`);
            });
        });
    }

    function renderSuggestedChips(chips) {
        suggestedChipsBox.innerHTML = '';
        chips.forEach(chipText => {
            const chipBtn = document.createElement('button');
            chipBtn.className = 'chip-btn';
            chipBtn.textContent = chipText;
            chipBtn.addEventListener('click', () => handleChipClick(chipText));
            suggestedChipsBox.appendChild(chipBtn);
        });
    }

    function handleChipClick(text) {
        appendPlaygroundMsg(text, 'user');
        suggestedChipsBox.innerHTML = '';
        
        setTimeout(() => {
            showPlaygroundTyping();
            setTimeout(() => {
                removePlaygroundTyping();
                
                let botResponse = "That's a great question! For that specific request, I recommend reviewing our helpdocs or speaking with our support agents. Let me know if I can guide you with anything else!";
                
                if (text.includes("warranty")) {
                    botResponse = "Yes! All products carry a **2-year manufacturer warranty** covering technical or craftsmanship defects. We stand firmly behind our build quality!";
                } else if (text.includes("Apply code")) {
                    botResponse = "Promo code **RECO15** has been applied to your current checkout session! You saved **15% off**. Ready to complete checkout? 🎉";
                } else if (text.includes("return label")) {
                    botResponse = "I have successfully initiated your request! A prepaid returns label has been dispatched to your email on file. Print it out and drop off your package at any local collection facility.";
                } else if (text.includes("agent") || text.includes("human")) {
                    botResponse = "Understood. Reaching out to support team... 💬 A live store assistant is reviewing your query now. Hang tight!";
                }
                
                appendPlaygroundMsg(botResponse, 'bot');
            }, 1000);
        }, 500);
    }

    // Manual input typing in playground
    playgroundSendBtn.addEventListener('click', submitPlaygroundInput);
    playgroundInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            submitPlaygroundInput();
        }
    });

    function submitPlaygroundInput() {
        const text = playgroundInput.value.trim();
        if (!text) return;

        playgroundInput.value = '';
        appendPlaygroundMsg(text, 'user');
        suggestedChipsBox.innerHTML = '';

        setTimeout(() => {
            showPlaygroundTyping();
            setTimeout(() => {
                removePlaygroundTyping();
                
                // Smart keyword matching responses
                let botResponse = "I hear you! Our database is updating live. Can you tell me if you are looking to buy something, track an order, or check our current discount codes?";
                const query = text.toLowerCase();
                
                if (query.includes("hello") || query.includes("hi")) {
                    botResponse = `Hello! How can I help you shop at ${storeProfiles[activeStoreTheme].name} today?`;
                } else if (query.includes("price") || query.includes("cost") || query.includes("buy")) {
                    botResponse = "Our top-tier products are listed above! Click 'View Item' to add them to your cart and checkout instantly.";
                } else if (query.includes("ship") || query.includes("delivery") || query.includes("country")) {
                    botResponse = "We ship worldwide! standard shipping is free for all orders above $50. International shipping takes roughly 5-10 business days.";
                } else if (query.includes("refund") || query.includes("return")) {
                    botResponse = "No worries! We offer a **30-day exchange policy**. Just ask me to generate a free return label whenever you need one.";
                } else if (query.includes("founder") || query.includes("creator")) {
                    botResponse = "recomai was designed by team Antigravity under expert pair-programming patterns to deliver outstanding conversions for ecommerce stores.";
                }
                
                appendPlaygroundMsg(botResponse, 'bot');
            }, 1200);
        }, 500);
    }

    // Initialize first scenario launch
    applyStoreThemeChange();


    // ==========================================================================
    // PRICING TOGGLE BUTTON (MONTHLY / ANNUAL)
    // ==========================================================================
    const billingSlider = document.getElementById('billing-slider');
    const monthlyLabel = document.getElementById('monthly-label');
    const annualLabel = document.getElementById('annual-label');
    const priceNumbers = document.querySelectorAll('.price-number');

    billingSlider.addEventListener('click', () => {
        billingSlider.classList.toggle('active');
        const isAnnual = billingSlider.classList.contains('active');
        
        if (isAnnual) {
            annualLabel.classList.add('active');
            monthlyLabel.classList.remove('active');
        } else {
            monthlyLabel.classList.add('active');
            annualLabel.classList.remove('active');
        }

        // Cycle through pricing cards and swap cost
        priceNumbers.forEach(price => {
            const monthlyPrice = price.getAttribute('data-monthly');
            const annualPrice = price.getAttribute('data-annual');
            
            // Add subtle slide-out animation to swap value
            price.style.opacity = '0';
            price.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                price.textContent = isAnnual ? annualPrice : monthlyPrice;
                price.style.opacity = '1';
                price.style.transform = 'translateY(0)';
            }, 180);
        });
    });


    // ==========================================================================
    // FAQ ACCORDION TRIGGER
    // ==========================================================================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const trigger = item.querySelector('.faq-trigger');
        
        trigger.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
            });
            
            // Open clicked item if it was closed
            if (!isOpen) {
                item.classList.add('active');
                trigger.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // ==========================================================================
    // FORM VALIDATION (NEWSLETTER SUCCESS ANIMATION)
    // ==========================================================================
    const newsletterForm = document.getElementById('newsletter-form');
    
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input');
        const submitBtn = newsletterForm.querySelector('button');
        const originalBtnHTML = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Securing account...';

        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Account Ready!';
            submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            emailInput.value = '';
            
            alert(`Awesome! You have been granted priority access to recomai trial. Check your email for validation code.`);
            
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHTML;
                submitBtn.style.background = '';
            }, 4000);
        }, 1500);
    });
}
