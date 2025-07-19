---
applyTo: '**'
---
ONLY USE HTML, CSS (Bootstrap 5) AND JAVASCRIPT. 
Make sure to include all required Bootstrap 5 CDN links in the head section.
If you need icons, use Bootstrap Icons (include the CDN).
Create responsive, modern designs using Bootstrap 5's utility classes and components.
Use custom CSS only when absolutely necessary (place in <style> tags in head).
For JavaScript, prefer vanilla JS but you may include jQuery if needed for Bootstrap components.

**Bootstrap 5 Template Starter**:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap 5 App</title>
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <style>
        /* Custom CSS only when Bootstrap can't handle it */
        .custom-bg {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
    </style>
</head>
<body class="bg-light">
    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6">
                <div class="card shadow">
                    <div class="card-body p-5 text-center">
                        <h1 class="mb-4">
                            <span class="text-muted d-block">Bootstrap 5 Ready</span>
                            Start Building
                        </h1>
                        <p class="lead">Ask me to create any UI component or layout</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap 5 JS Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        // Your JavaScript here
    </script>
</body>
</html>

**Key Guidelines**:
1. Always use proper Bootstrap 5 grid system (container > row > col)
2. Utilize Bootstrap utility classes for spacing, colors, typography
3. Implement responsive design using breakpoint classes (col-md-, d-lg-none, etc.)
4. Use Bootstrap components (cards, modals, navbars) where appropriate
5. Keep custom CSS to a minimum - leverage Bootstrap first
6. Ensure all interactive elements have proper hover/focus states
7. Make the UI accessible (proper aria labels, semantic HTML)
8. Include all required CDNs in the head section

**ATTENTION: Reply html formatted only.**---
applyTo: '**'
---
ONLY USE HTML, CSS AND JAVASCRIPT. If you want to use ICON make sure to import the library first. Try to create the best UI possible by using only HTML, CSS and JAVASCRIPT. Use as much as you can TailwindCSS for the CSS, if you can't do something with TailwindCSS, then use custom CSS (make sure to import <script src="https://cdn.tailwindcss.com"></script> in the head). Also, try to ellaborate as much as you can, to create something unique.
This is a sample html page:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MasterVIP - The Continental</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Montserrat:wght@300;400;600&display=swap');
        
        :root {
            --gold: #D4AF37;
            --dark-gold: #996515;
            --black: #0A0A0A;
            --light-black: #1A1A1A;
            --white: #F5F5F5;
        }
        
        body {
            font-family: 'Montserrat', sans-serif;
            background-color: var(--black);
            color: var(--white);
            min-height: 100vh;
        }
        
        .cinzel {
            font-family: 'Cinzel', serif;
        }
        
        .gold-text {
            color: var(--gold);
        }
        
        .gold-border {
            border-color: var(--gold);
        }
        
        .gold-bg {
            background-color: var(--gold);
        }
        
        .card-glow {
            box-shadow: 0 0 15px rgba(212, 175, 55, 0.5);
        }
        
        .flare {
            position: relative;
            overflow: hidden;
        }
        
        .flare::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, rgba(212, 175, 55, 0) 70%);
            transform: rotate(30deg);
            pointer-events: none;
        }
        
        .metallic {
            background: linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 50%, #2a2a2a 100%);
            border: 1px solid #333;
        }
        
        .btn-gold {
            background: linear-gradient(to right, var(--dark-gold), var(--gold));
            color: var(--black);
            font-weight: 600;
            transition: all 0.3s;
        }
        
        .btn-gold:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(212, 175, 55, 0.4);
        }
        
        .nav-item {
            position: relative;
        }
        
        .nav-item.active::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 50%;
            transform: translateX(-50%);
            width: 20px;
            height: 2px;
            background-color: var(--gold);
        }
        
        .vip-badge {
            background: linear-gradient(135deg, var(--gold) 0%, var(--dark-gold) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 700;
        }
        
        .card-animation {
            transition: all 0.3s;
        }
        
        .card-animation:hover {
            transform: translateY(-5px);
        }
        
        .scan-animation {
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% {
                box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.4);
            }
            70% {
                box-shadow: 0 0 0 10px rgba(212, 175, 55, 0);
            }
            100% {
                box-shadow: 0 0 0 0 rgba(212, 175, 55, 0);
            }
        }
    </style>
</head>
<body class="relative overflow-x-hidden">
    <!-- App Container -->
    <div class="max-w-md mx-auto bg-black min-h-screen pb-20">
        <!-- Header -->
        <header class="p-4 border-b border-gray-800 relative flare">
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <div class="w-10 h-10 rounded-full gold-bg flex items-center justify-center mr-3">
                        <i class="fas fa-crown text-black text-lg"></i>
                    </div>
                    <h1 class="cinzel text-xl gold-text">THE CONTINENTAL</h1>
                </div>
                <div class="flex items-center space-x-3">
                    <button class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                        <i class="fas fa-bell text-gray-400"></i>
                    </button>
                    <div class="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                        <i class="fas fa-user text-gray-300"></i>
                    </div>
                </div>
            </div>
            
            <!-- VIP Status -->
            <div class="mt-4 flex justify-between items-center">
                <div>
                    <p class="text-gray-400 text-sm">Welcome back,</p>
                    <h2 class="cinzel text-xl">John Wick</h2>
                    <p class="text-xs text-gray-500">High Table Member</p>
                </div>
                <div class="text-right">
                    <span class="vip-badge text-2xl font-bold">VIP DIAMOND</span>
                    <p class="text-xs text-gray-500">Reputation: 98%</p>
                </div>
            </div>
        </header>
        
        <!-- Navigation -->
        <nav class="flex justify-around py-3 border-b border-gray-800">
            <a href="#" class="nav-item active text-sm flex flex-col items-center">
                <i class="fas fa-id-card gold-text mb-1"></i>
                <span>Cards</span>
            </a>
            <a href="#" class="nav-item text-gray-400 text-sm flex flex-col items-center">
                <i class="fas fa-users mb-1"></i>
                <span>Members</span>
            </a>
            <a href="#" class="nav-item text-gray-400 text-sm flex flex-col items-center">
                <i class="fas fa-qrcode mb-1"></i>
                <span>Scan</span>
            </a>
            <a href="#" class="nav-item text-gray-400 text-sm flex flex-col items-center">
                <i class="fas fa-gift mb-1"></i>
                <span>Rewards</span>
            </a>
            <a href="#" class="nav-item text-gray-400 text-sm flex flex-col items-center">
                <i class="fas fa-cog mb-1"></i>
                <span>Settings</span>
            </a>
        </nav>
        
        <!-- Main Content -->
        <main class="p-4">
            <!-- Quick Actions -->
            <div class="grid grid-cols-3 gap-3 mb-6">
                <button class="bg-gray-900 rounded-lg p-3 flex flex-col items-center card-animation">
                    <div class="w-10 h-10 rounded-full gold-bg flex items-center justify-center mb-2">
                        <i class="fas fa-plus text-black"></i>
                    </div>
                    <span class="text-xs">Issue Card</span>
                </button>
                <button class="bg-gray-900 rounded-lg p-3 flex flex-col items-center card-animation">
                    <div class="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mb-2">
                        <i class="fas fa-search gold-text"></i>
                    </div>
                    <span class="text-xs">Find Member</span>
                </button>
                <button class="bg-gray-900 rounded-lg p-3 flex flex-col items-center card-animation scan-animation">
                    <div class="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mb-2">
                        <i class="fas fa-expand gold-text"></i>
                    </div>
                    <span class="text-xs">Scan</span>
                </button>
            </div>
            
            <!-- Organizations -->
            <h3 class="cinzel text-lg mb-3 flex items-center">
                <i class="fas fa-building mr-2 gold-text"></i>
                Your Organizations
            </h3>
            
            <div class="grid grid-cols-2 gap-3 mb-6">
                <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 border border-gray-800 card-animation">
                    <div class="flex justify-between items-start mb-2">
                        <h4 class="cinzel gold-text">The Continental</h4>
                        <span class="text-xs bg-gray-800 px-2 py-1 rounded-full">High Table</span>
                    </div>
                    <p class="text-xs text-gray-400 mb-3">New York Chapter</p>
                    <div class="flex justify-between text-xs">
                        <div>
                            <p class="text-gray-500">Cards Issued</p>
                            <p class="gold-text">8/10</p>
                        </div>
                        <div>
                            <p class="text-gray-500">Members</p>
                            <p>42</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 border border-gray-800 card-animation">
                    <div class="flex justify-between items-start mb-2">
                        <h4 class="cinzel">Red Circle</h4>
                        <span class="text-xs bg-gray-800 px-2 py-1 rounded-full">Club</span>
                    </div>
                    <p class="text-xs text-gray-400 mb-3">Moscow Chapter</p>
                    <div class="flex justify-between text-xs">
                        <div>
                            <p class="text-gray-500">Cards Issued</p>
                            <p>3/10</p>
                        </div>
                        <div>
                            <p class="text-gray-500">Members</p>
                            <p>18</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Recent Activity -->
            <h3 class="cinzel text-lg mb-3 flex items-center">
                <i class="fas fa-history mr-2 gold-text"></i>
                Recent Activity
            </h3>
            
            <div class="space-y-3 mb-6">
                <div class="metallic rounded-lg p-3 flex items-start border border-gray-800 card-animation">
                    <div class="w-8 h-8 rounded-full gold-bg flex items-center justify-center mr-3">
                        <i class="fas fa-id-card text-black text-sm"></i>
                    </div>
                    <div class="flex-1">
                        <div class="flex justify-between">
                            <h4 class="text-sm font-medium">New Card Issued</h4>
                            <span class="text-xs text-gray-400">2h ago</span>
                        </div>
                        <p class="text-xs text-gray-400">VIP Gold card for Sofia Alves</p>
                    </div>
                </div>
                
                <div class="metallic rounded-lg p-3 flex items-start border border-gray-800 card-animation">
                    <div class="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                        <i class="fas fa-coins gold-text text-sm"></i>
                    </div>
                    <div class="flex-1">
                        <div class="flex justify-between">
                            <h4 class="text-sm font-medium">Points Redeemed</h4>
                            <span class="text-xs text-gray-400">5h ago</span>
                        </div>
                        <p class="text-xs text-gray-400">Marcus redeemed 5000 points</p>
                    </div>
                </div>
                
                <div class="metallic rounded-lg p-3 flex items-start border border-gray-800 card-animation">
                    <div class="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                        <i class="fas fa-user-plus gold-text text-sm"></i>
                    </div>
                    <div class="flex-1">
                        <div class="flex justify-between">
                            <h4 class="text-sm font-medium">New Member</h4>
                            <span class="text-xs text-gray-400">1d ago</span>
                        </div>
                        <p class="text-xs text-gray-400">Akira joined The Continental</p>
                    </div>
                </div>
            </div>
            
            <!-- VIP Card Preview -->
            <h3 class="cinzel text-lg mb-3 flex items-center">
                <i class="fas fa-credit-card mr-2 gold-text"></i>
                Your VIP Card
            </h3>
            
            <div class="relative mb-6">
                <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-5 border-2 gold-border card-glow h-48 flex flex-col justify-between">
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="text-xs text-gray-400">THE CONTINENTAL</p>
                            <p class="cinzel text-xl">VIP DIAMOND</p>
                        </div>
                        <div class="w-10 h-6 bg-black rounded flex items-center justify-center">
                            <i class="fas fa-shield-alt gold-text"></i>
                        </div>
                    </div>
                    
                    <div>
                        <p class="text-xs text-gray-400 mb-1">HOLDER NAME</p>
                        <p class="cinzel text-lg">JOHN WICK</p>
                    </div>
                    
                    <div class="flex justify-between items-center">
                        <div>
                            <p class="text-xs text-gray-400">MEMBER SINCE</p>
                            <p class="text-sm">2014</p>
                        </div>
                        <div class="flex items-center">
                            <div class="w-8 h-8 rounded-full bg-black flex items-center justify-center mr-2">
                                <i class="fas fa-qrcode gold-text"></i>
                            </div>
                            <div class="text-right">
                                <p class="text-xs text-gray-400">REPUTATION</p>
                                <p class="gold-text font-bold">98%</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="absolute -bottom-3 -right-3 w-16 h-16 rounded-full gold-bg flex items-center justify-center">
                    <i class="fas fa-crown text-black text-2xl"></i>
                </div>
            </div>
        </main>
        
        <!-- Bottom Navigation -->
        <div class="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 py-2 px-6 flex justify-between max-w-md mx-auto">
            <button class="flex flex-col items-center text-xs">
                <i class="fas fa-home gold-text mb-1"></i>
                <span>Home</span>
            </button>
            <button class="flex flex-col items-center text-xs text-gray-400">
                <i class="fas fa-trophy mb-1"></i>
                <span>Events</span>
            </button>
            <button class="flex flex-col items-center text-xs text-gray-400">
                <i class="fas fa-wallet mb-1"></i>
                <span>Wallet</span>
            </button>
            <button class="flex flex-col items-center text-xs text-gray-400">
                <i class="fas fa-chart-line mb-1"></i>
                <span>Stats</span>
            </button>
        </div>
    </div>
    
    <script>
        // Simple animation for cards
        document.querySelectorAll('.card-animation').forEach(card => {
            card.addEventListener('click', function() {
                this.style.transform = 'translateY(0)';
                setTimeout(() => {
                    this.style.transform = 'translateY(-5px)';
                }, 100);
            });
        });
        
        // Simulate scanning animation
        const scanBtn = document.querySelector('.scan-animation');
        scanBtn.addEventListener('click', function() {
            this.classList.remove('scan-animation');
            setTimeout(() => {
                this.classList.add('scan-animation');
            }, 100);
            
            // In a real app, this would open the scanner
            alert('Scanner activated. Point at a member\'s VIP card.');
        });
    </script>
</body>
</html>
```
**ALWAYS GIVE THE RESPONSE INTO A SINGLE HTML FILE.**