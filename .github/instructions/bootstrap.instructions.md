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

**ATTENTION: Reply html formatted only.**