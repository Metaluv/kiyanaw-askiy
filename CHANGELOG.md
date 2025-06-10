# Changelog

All notable changes to the Kiyanaw Askiy Construction website will be documented in this file.

## [2.0.0] - 2025-01-09 (Major Update)

### Added - New Sections & Features
- **Projects/Portfolio Section**: 
  - 6 showcase projects with filtering by category
  - Interactive hover effects with project details
  - Categories: Residential, Commercial, Infrastructure
- **Testimonials Carousel**: 
  - Auto-rotating client testimonials
  - Manual navigation with previous/next buttons
  - Indicator dots for direct navigation
- **Team/Leadership Section**: 
  - 4 team member profiles
  - Placeholder for photos with gradient backgrounds
- **FAQ Section**: 
  - 6 frequently asked questions
  - Accordion-style interaction
  - Smooth expand/collapse animations
- **Loading Screen**: 
  - Company logo with pulse animation
  - Spinner animation during page load
- **Back-to-Top Button**: 
  - Smooth scroll to top functionality
  - Appears after 300px scroll
- **Social Media Links**: 
  - Footer social icons (Facebook, Twitter, LinkedIn, Instagram)
  - Hover effects with brand colors
- **Business Hours**: 
  - Added to contact information section
  - Monday-Saturday schedule

### Improved
- **SEO Enhancements**:
  - Extended meta descriptions
  - Added keywords meta tag
  - Open Graph tags for social sharing
  - Auto-updating copyright year
- **Navigation**:
  - Added Projects and Team links
  - Smooth logo size transition on scroll
- **Performance**:
  - Project filtering with smooth transitions
  - Optimized animation timings

### Fixed
- Navigation menu now includes all new sections
- Proper section ordering for better user flow

## [1.1.0] - 2025-01-09

### Added
- Integrated actual company logo (logo.png) throughout the website
- Logo appears in navigation, hero section, and footer
- Hero section logo as main focal point (200px wide)
- White circular background for footer logo visibility
- Smooth logo size transition on scroll (80px → 60px)
- Centered hero content for better visual hierarchy
- Subtle gradient accent lines between sections

### Changed
- **Complete Theme Redesign**:
  - Primary colors: White background, black text, red accents
  - Sunset colors (red, orange, yellow) used as highlights only
  - Removed overwhelming gradient backgrounds
  - Cleaner, more professional appearance
- **Logo Sizing**:
  - Navigation: 80px height (60px when scrolled)
  - Hero section: 200px width
  - Footer: 120px height with white background
- **Hero Section**:
  - Faster fade-out on scroll (300px instead of 1000px)
  - Reduced parallax effect (0.1x instead of 0.2x)
  - Removed problematic hero pattern/page break
  - White background instead of gradient
- **UI Elements**:
  - Service icons: Sunset gradient backgrounds
  - Stat numbers: Gradient text effect
  - Primary buttons: Red (#D32F2F)
  - Navigation hover: Red underline
  - Form focus: Red border with shadow

### Fixed
- Hero content overlapping with sections below
- Text readability issues from background patterns
- Footer logo visibility against black background
- Slow hero fade causing visual confusion
- Page break element interfering with content

### Removed
- Hero background pattern (SVG crosses)
- Hero-pattern gradient bar causing "page break" issue
- Feather icon placeholder (replaced with actual logo)
- Original earth-tone color scheme

## [1.0.0] - 2025-01-09

### Initial Release
- Basic website structure with Phaser.js
- Navigation with mobile menu
- Hero section with gradient background
- About section with company information
- Services grid (6 services)
- Values section (4 core values)
- Contact form with validation
- Footer with company information
- Responsive design for all devices
- Smooth scrolling and animations
- Intersection Observer for scroll animations
- Parallax effects