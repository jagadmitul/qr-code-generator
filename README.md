# QR Code Generator

A simple and modern web application built with **Vite** and **React** to generate and download static or dynamic QR codes in **PNG format**. Users can toggle between generating a static QR code for a predefined URL or a dynamic QR code for any custom input. The app offers a sleek and responsive UI for an excellent user experience.

## Features

- **Static QR Code Generation:** Generates a QR code for the static URL `https://www.rebrandic.com/`.
- **Dynamic QR Code Generation:** Users can input any custom text or URL to generate a QR code.
- **Download as PNG:** QR codes can be downloaded in **PNG format**, with filenames matching the QR content.
- **Responsive Design:** Modern and minimalistic design built with **Tailwind CSS**, optimized for mobile and desktop devices.

## Demo

You can try out the live demo of this application [here](https://qr-code-generator.vercel.app).

## Screenshots

![QR Code Generator](/public/qr-code-generator.png)

## Technologies Used

- **Vite**: Lightning-fast build tool for modern web projects.
- **ReactJS**: Frontend library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **react-qr-code**: A React component to generate QR codes.
- **html-to-image**: Library to export QR code elements to PNG.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/jagadmitul/qr-code-generator.git
cd qr-code-generator
```

2. Install dependencies using Yarn:

```bash
yarn install
```

3. Start the development server:

```bash
yarn dev
```

The application will be available at `http://localhost:5173` (or the port specified in your Vite setup).

## Usage

1. **Static QR Code**: By default, the application generates a QR code for `https://www.rebrandic.com/`. 
2. **Dynamic QR Code**: To generate a custom QR code, check the **Dynamic QR** checkbox, input your desired content or URL, and the app will generate the corresponding QR code.
3. **Download**: Click the **Download QR Code as PNG** button to download the QR code. The filename will match the QR content.

## Contact

For any inquiries or feedback, feel free to reach out:

- **Email**: jagadmitul@gmail.com
- **GitHub**: [jagadmitul](https://github.com/jagadmitul)