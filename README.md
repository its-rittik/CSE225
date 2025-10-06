# Course Materials Download Site

A simple web application to easily download course presentation files in the classroom.

## Features

- 📱 Responsive design that works on all devices
- 🔍 Real-time search functionality
- 📥 One-click downloads
- 🎨 Clean, modern interface
- ⚡ Fast loading and lightweight

## Deployment

### GitHub Pages
1. Push this repository to GitHub
2. Go to Settings > Pages
3. Select "Deploy from a branch" and choose "main"
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Vercel
1. Connect your GitHub repository to Vercel
2. Deploy automatically with zero configuration
3. Your site will be available at a custom Vercel URL

## Usage

- Browse all available presentation files
- Use the search bar to quickly find specific weeks or topics
- Click "Download" to get the file directly to your device
- Perfect for classroom use with mobile devices or tablets

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # Styling
├── script.js           # JavaScript functionality
├── README.md           # This file
└── [presentation files] # Your .pptx files
```

## Adding New Files

To add new presentation files:
1. Upload the .pptx file to the repository
2. Update the `files` array in `script.js` with the new file information
3. Commit and push changes