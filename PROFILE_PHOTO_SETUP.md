# How to Add Your Profile Photo

## Step 1: Prepare Your Profile Photo

### Recommended Specifications:
- **Format**: JPG, PNG, or WEBP
- **Size**: 500x500 pixels or larger (square format preferred)
- **Quality**: High resolution for crisp display
- **File Size**: Under 2MB for fast loading
- **Background**: Clean background or transparent PNG

### Photo Tips:
- Use good lighting (natural light works best)
- Professional headshot style
- Clear, sharp image
- Appropriate attire for a developer portfolio
- Genuine smile or confident expression

## Step 2: Add Your Photo to the Project

1. **Save your photo** as `profile-photo.jpg` (or `.png`)
2. **Place it in**: `public/images/profile/`
   - Full path: `c:\Users\llith\OneDrive\Desktop\Lithira Silva Portfolio\public\images\profile\profile-photo.jpg`

## Step 3: File Name Options

Your photo will work with any of these names:
- `profile-photo.jpg` ✅ (currently configured)
- `profile-photo.png` 
- `profile-photo.webp`

If you use a different format, update the file extension in the code.

## Step 4: Test Your Photo

1. Start your development server: `npm run dev`
2. Navigate to the About section
3. Your photo should appear in the circular/rounded frame
4. Check that it loads properly and looks good

## Features Added:

✅ **Smart Fallback System**: If your photo fails to load, it shows a placeholder
✅ **Professional Styling**: Rounded corners, shadows, and hover effects
✅ **Responsive Design**: Photo adapts to different screen sizes
✅ **Accessibility**: Proper alt text for screen readers
✅ **Performance**: Optimized loading with error handling

## Troubleshooting

### If your photo doesn't appear:
- Check the file name matches exactly: `profile-photo.jpg`
- Ensure the file is in the correct folder: `public/images/profile/`
- Verify the file format is supported (JPG, PNG, WEBP)
- Check browser developer tools for any loading errors
- Try refreshing the page or clearing browser cache

### If the photo looks distorted:
- Use a square aspect ratio (1:1) for best results
- Ensure the source image is high quality
- The photo will be automatically cropped to fit the circular/rounded frame

### To change the file name:
If you want to use a different file name, update this line in the code:
```jsx
src="/images/profile/your-custom-name.jpg"
```

## Current Configuration:

- **Main About Section**: `/src/sections/About.tsx` - Circular frame (320x320px)
- **Alternative About**: `/src/sections/About_new.tsx` - Rounded rectangle (288x288px)
- **Both have**: Error handling, hover effects, and professional styling

Your profile photo will make your portfolio much more personal and professional! 📸✨
