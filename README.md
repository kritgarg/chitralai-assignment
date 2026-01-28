# Chitralai - Event Media Viewer
> 🚀 **Production Ready** | Built with React Native & Expo

A modern, high-performance React Native app for viewing event photo galleries. Fully optimized for production with smooth animations, offline caching, and a polished dark mode UI.

📥 **[Download Android APK](final.apk)**

## Features

- **Event List & Details**: Clean UI with animations.
- **Photo Gallery**: Masonry/Grid layout with infinite scroll.
- **Photo Viewer**: Fullscreen pinch-to-zoom and swipe.
- **Search**: Real-time search for photos (Unsplash).
- **Dark Mode**: Toggle between light and dark themes.
- **Offline Caching**: Optimized image loading using `expo-image`.
- **Smooth Animations**: Powered by `react-native-reanimated`.

## Tech Stack

- **Framework**: React Native (Expo)
- **Navigation**: React Navigation (Stack)
- **Networking**: Axios
- **Images**: Expo Image (Fast/Cached), React Native Image Viewing
- **State**: Zustand (Theme/Global state)
- **UI/Fonts**: Custom Grid, Outfit & Fredoka Google Fonts

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   - The app needs an Unsplash API key.
   - Create a `.env` file in the root directory.
   - Add your key:
     ```env
     UNSPLASH_ACCESS_KEY=your_access_key_here
     ```
   - Get a free key from [Unsplash Developers](https://unsplash.com/developers).

3. **Run the App**

   **iOS:**
   ```bash
   npx expo run:ios
   ```

   **Android:**
   ```bash
   npx expo run:android
   ```

   **Expo Go (Quick Preview):**
   ```bash
   npx expo start
   ```

## Build for Production (APK)

To generate a production-ready APK file:

1. **Configure Build**
   The project is pre-configured with `eas.json`.

2. **Build**
   ```bash
   eas build --platform android --profile production
   ```
   *This will generate a universal APK.*

## Folder Structure

```
src/
 ├── components/    # Reusable UI components
 ├── screens/       # Application screens
 ├── navigation/    # Navigation configuration
 ├── services/      # API services
 ├── store/         # Global state
 ├── theme/         # Design tokens
```

## Key Features

- ✅ **Offline Image Caching**: Using `expo-image`.
- ✅ **Dark Mode**: System-aware and manual toggle.
- ✅ **Animations**: Fluid shared transitions.
- ✅ **Search**: Debounced live search.
