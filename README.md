
# Next.js + DecapCMS + TailwindCSS Starter Template

This project is a starter template using **Next.js**, **DecapCMS**, **TailwindCSS**, and **i18n**. The template is designed to be a quick start for developers who want to build multi-language websites with a CMS-driven content structure. It includes default settings like the **Ubuntu** font and a basic configuration for DecapCMS.

## Features

- **Next.js** for fast static and server-side rendering.
- **DecapCMS** for content management, with an example about page ready to go.
- **TailwindCSS** for rapid UI development with utility-first CSS.
- **i18n** for supporting multiple languages out of the box.
- **Ubuntu** font as the default font.
- Example favicon configuration with the option to replace it easily.

## Getting Started

To use this template, simply clone the repository and follow these steps:

### 1. Install Dependencies

Run the following command to install all necessary dependencies:

\`\`\`
npm install
\`\`\`

### 2. Start Development Server

After the dependencies are installed, you can start the development server by running:

\`\`\`
npm run dev
\`\`\`

The app will be available at \`http://localhost:3000\`.

## Customization

### Favicon

By default, this project uses a favicon generated from the [favicon.io](https://favicon.io) website, using the Vercel logo. To replace it with your project’s logo:

1. Go to [favicon.io](https://favicon.io) and generate a new favicon for your logo.
2. Replace the files in the \`public\` folder that are related to the favicon:
   - \`android-chrome-192x192.png\`
   - \`android-chrome-512x512.png\`
   - \`apple-touch-icon.png\`
   - \`favicon-16x16.png\`
   - \`favicon-32x32.png\`
   - \`favicon.ico\`
   - \`site.webmanifest\`

   You can simply overwrite these files with your new favicon.

### CMS Configuration

This template includes a basic **DecapCMS** setup with an example content page for "About". You can find the CMS configuration and content structure in the \`content\` folder. To modify or add more pages, you can expand on the structure provided.

### Font

The default font used is **Ubuntu**. If you'd like to use a different font, you can modify the \`layout/index.tsx\` file to change the font family.

## Deployment

### Netlify

While you can deploy this project on any platform, I recommend using **Netlify** for serving this project. Netlify’s seamless integration with DecapCMS makes it an ideal choice for easy and efficient deployment.

To deploy on Netlify:

1. Push the repository to GitHub or another Git provider.
2. Connect your repository to Netlify.
3. Configure Netlify to use the following build settings:
   - **Build Command**: \`npm run build\`
   - **Publish Directory**: \`.next\`

After setting this up, your site will automatically deploy whenever you push changes to your repository.