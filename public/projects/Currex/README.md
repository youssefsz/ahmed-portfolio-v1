# CurrEx Landing Page

A professional landing page for CurrEx, a currency exchange application with four main screens: Convert, Charts, Currencies, and Settings. The landing page is responsive, features dynamic light/dark mode transitions, and showcases actual phone screenshots of the app.

## Features

- **Responsive Design**: Fully responsive layout optimized for all screen sizes
- **Dynamic Theme Switching**: Smooth animations when toggling between light and dark modes
- **Automatic Theme Detection**: Respects user's system preferences for light/dark mode
- **Interactive Elements**: Tab-based feature showcase with animations
- **Material Design Aesthetics**: Clean, modern UI following Material Design principles
- **Optimized Performance**: Fast loading with minimal external dependencies

## Screenshots

The landing page showcases 8 actual screenshots of the app (4 screens × 2 themes):
- Convert screen (light and dark mode)
- Charts screen (light and dark mode)
- Currencies screen (light and dark mode)
- Settings screen (light and dark mode)

## Structure

```
Currex/
├── index.html           # Main HTML file
├── css/
│   └── styles.css       # All styles for the landing page
├── js/
│   └── main.js          # JavaScript functionality
├── images/              # App screenshots
│   ├── screenshot-light-convert.jpg
│   ├── screenshot-dark-convert.jpg
│   ├── screenshot-light-charts.jpg
│   ├── screenshot-dark-charts.jpg
│   ├── screenshot-light-currencies.jpg
│   ├── screenshot-dark-currencies.jpg
│   ├── screenshot-light-settings.jpg
│   └── screenshot-dark-settings.jpg
└── README.md            # Documentation
```

## Implementation Details

### Theme Switching

The theme switching functionality includes:
- Smooth radial animation from the click point
- Local storage to remember user preference
- System preference detection
- Automatic switching of app screenshots to match the selected theme

### Interactive Features

- Feature tab navigation to showcase the four main app screens
- Interactive FAQ accordions
- Smooth scrolling navigation
- Hover animations for interactive elements

## Browser Support

The landing page is designed to work on all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

To customize the landing page:

1. **Colors**: Edit the CSS variables in the `:root` selector in `styles.css`
2. **Content**: Update text in the `index.html` file
3. **Screenshots**: Replace the images in the `images/` directory with your own screenshots
4. **Logo**: Update the logo text or replace with an image logo

## License

This project is for demonstration purposes only. 