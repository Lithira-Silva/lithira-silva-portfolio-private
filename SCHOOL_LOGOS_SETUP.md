# How to Add School Logos to Your Portfolio

## Step 1: Get Your School Logos

### For SLIIT (Sri Lanka Institute of Information Technology):
- Visit: https://www.sliit.lk/
- Look for their official logo (usually in the header/footer)
- Right-click and save as `sliit-logo.png`

### For D.S. Senanayake College:
- Search for "D.S. Senanayake College Colombo logo" 
- Download the official school emblem/logo
- Save as `ds-senanayake-logo.png`

### For I-GATE College:
- Visit: https://www.igate.lk/ (or search for their official logo)
- Download their logo
- Save as `igate-logo.png`

## Step 2: Prepare Your Logo Files

### Recommended Format:
- **File Type**: PNG (for transparency) or JPG
- **Size**: 200x200 pixels or larger (square preferred)
- **Quality**: High resolution for crisp display
- **Background**: Transparent (PNG) or white background

### Logo Optimization Tips:
- Keep file size under 100KB for fast loading
- Ensure logos are clear and readable at small sizes
- Use official, high-quality versions

## Step 3: Add Logos to Your Project

1. Place your logo files in: `public/images/schools/`
   - `sliit-logo.png`
   - `ds-senanayake-logo.png` 
   - `igate-logo.png`

2. The logos will automatically appear in your Education section!

## Step 4: Test Your Logos

1. Start your development server: `npm run dev`
2. Navigate to the Education section
3. Check that all logos load properly
4. If a logo doesn't load, you'll see a fallback academic cap icon

## Troubleshooting

### If logos don't appear:
- Check file names match exactly (case-sensitive)
- Ensure files are in the correct folder: `public/images/schools/`
- Verify file formats are supported (PNG, JPG, JPEG, SVG)
- Check browser developer tools for any loading errors

### Logo appears too small/large:
- The logos are automatically sized to 64x64 pixels in the cards
- Ensure your source image is square or has good proportions
- Higher resolution images will look crisper

## Features Added:

✅ **Professional Logo Display**: 64x64 pixel containers with rounded corners
✅ **Fallback System**: Academic cap icon appears if logo fails to load  
✅ **Hover Effects**: Logos scale slightly on card hover
✅ **Responsive Design**: Logos adapt to different screen sizes
✅ **Error Handling**: Graceful fallback for missing images

Your Education section now looks more professional with institutional branding!
