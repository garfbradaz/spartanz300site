# Banner Image Display Options

## Overview

This document outlines the available options for displaying the Spartanz 300 logo as a stretched banner image in the hero section, rather than its current centered display.

## Current Implementation

The logo is currently displayed in the hero section with these CSS properties:

```css
.hero-section::before {
    background-image: url('../images/spartanz300-logo.webp');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: min(400px, 50vw);
    opacity: 0.15;
}
```

This results in a centered, constrained-size logo as a subtle background watermark.

## Banner Image Options

### Option 1: Full-Width Stretch (Cover)

**Description**: Stretch the image to completely cover the hero section, maintaining aspect ratio and cropping as needed.

**CSS Implementation**:
```css
.hero-section::before {
    background-size: cover;
    background-position: center center;
}
```

**Pros**:
- Image fills the entire hero section
- Maintains aspect ratio (no distortion)
- Responsive across all screen sizes

**Cons**:
- Parts of the image may be cropped on different screen sizes
- May not work well with logos that have important edge details

**Best For**: Photographic backgrounds, images where cropping is acceptable

---

### Option 2: Full Stretch (100% Width and Height)

**Description**: Stretch the image to exactly fill the hero section dimensions, regardless of aspect ratio.

**CSS Implementation**:
```css
.hero-section::before {
    background-size: 100% 100%;
}
```

**Pros**:
- Guarantees the full image is visible
- Fills the entire section

**Cons**:
- **Will distort the image** if the section's aspect ratio doesn't match the image
- May look unprofessional with obvious stretching

**Best For**: Abstract patterns, images specifically designed for variable aspect ratios

---

### Option 3: Full-Width with Auto Height (Contain)

**Description**: Scale the image to fit within the section while maintaining aspect ratio. The entire image will be visible.

**CSS Implementation**:
```css
.hero-section::before {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
}
```

**Pros**:
- Entire image is always visible
- No distortion
- Maintains original proportions

**Cons**:
- May leave empty space on sides or top/bottom
- Background color will show in empty areas

**Best For**: Logos and graphics where showing the complete image is important

---

### Option 4: Full-Width Banner Strip

**Description**: Display the image at 100% width with automatic height, positioned at the top of the section.

**CSS Implementation**:
```css
.hero-section::before {
    background-size: 100% auto;
    background-position: top center;
    background-repeat: no-repeat;
}
```

**Pros**:
- Maintains aspect ratio
- Creates a traditional banner effect at the top

**Cons**:
- Image height depends on screen width
- May not cover the full hero section vertically

**Best For**: Traditional horizontal banner designs

---

### Option 5: Repeating Banner (Tiled)

**Description**: Repeat the image horizontally to create a continuous banner pattern.

**CSS Implementation**:
```css
.hero-section::before {
    background-size: auto 100%;
    background-repeat: repeat-x;
    background-position: center center;
}
```

**Pros**:
- Creates seamless horizontal pattern
- Fills width regardless of screen size

**Cons**:
- Requires an image designed for seamless tiling
- May look repetitive with non-tileable images

**Best For**: Pattern-based designs, decorative borders

---

### Option 6: Replace Background with Foreground Image

**Description**: Instead of using a CSS background, add an `<img>` element with appropriate sizing.

**HTML Implementation**:
```html
<header class="hero-section">
    <img src="images/spartanz300-logo.webp" alt="Spartanz 300 Banner" class="banner-image">
    <div class="container text-center">
        <!-- existing content -->
    </div>
</header>
```

**CSS Implementation**:
```css
.banner-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* or 'contain' */
    opacity: 0.15;
    z-index: 0;
}
```

**Pros**:
- More semantic HTML
- Better accessibility (alt text)
- Can use `object-fit` for precise control
- Easier to add animations/effects

**Cons**:
- Requires HTML changes in addition to CSS
- Slightly more complex implementation

**Best For**: When accessibility and semantic HTML are priorities

---

### Option 7: Create a New Banner-Specific Image

**Description**: Create or commission a new image specifically designed as a wide banner (e.g., 1920x400 pixels).

**Design Considerations**:
- Design at typical banner ratios (4:1 or 5:1 width to height)
- Include safe zones for text overlay
- Create multiple sizes for responsive loading
- Consider WebP format for better compression

**Pros**:
- Perfect fit for banner layout
- Optimized for the specific use case
- No stretching or cropping issues

**Cons**:
- Requires additional design work
- Need to maintain multiple image files

**Best For**: Professional websites where custom design is feasible

---

## Recommendations

### For the Spartanz 300 Logo

Given that the current image is a Spartan warrior logo (likely square or portrait orientation), here are our recommendations:

| Priority | Option | Reason |
|----------|--------|--------|
| 1 | **Option 1 (Cover)** | Best balance of visual impact and simplicity. The logo will fill the hero section while maintaining proportions. Some cropping will occur. |
| 2 | **Option 3 (Contain)** | If showing the complete logo is important, this ensures nothing is cropped. |
| 3 | **Option 7 (New Banner Image)** | If a polished banner look is desired, creating a purpose-built banner image with the logo incorporated will provide the best results. |

### What to Avoid

- **Option 2 (100% stretch)**: Not recommended for logos as it will distort the Spartan warrior image.
- **Option 5 (Tiling)**: Not recommended unless you have a pattern specifically designed for tiling.

## Implementation Notes

To implement any CSS-based option, modify the `.hero-section::before` rule in `src/css/styles.css` (lines 29-41).

The opacity value (`opacity: 0.15`) can also be adjusted to make the banner more or less prominent:
- `0.1` - Very subtle watermark
- `0.2-0.3` - Noticeable but not distracting
- `0.4-0.5` - Prominent background image
- `0.6+` - Dominant visual element (may need to adjust text colors for readability)

## Summary

| Option | Aspect Ratio | Full Coverage | Image Integrity | Complexity |
|--------|--------------|---------------|-----------------|------------|
| 1. Cover | Maintained | Yes | Partial (cropped) | Low |
| 2. Full Stretch | Distorted | Yes | Complete (distorted) | Low |
| 3. Contain | Maintained | No | Complete | Low |
| 4. Width Banner | Maintained | Partial | Complete | Low |
| 5. Tiled | Maintained | Yes | Complete (repeated) | Low |
| 6. Foreground Image | Configurable | Yes | Configurable | Medium |
| 7. New Banner | Native | Yes | Complete | High (design work) |

Choose the option that best balances your priorities for image display, visual impact, and implementation effort.
