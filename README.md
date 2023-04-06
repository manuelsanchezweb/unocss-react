# UnoCSS with React

A way to use not only Tailwind utility classes, but also Bootstrap's, and others.
Also, when being compiled, it will only use the CSS you are using in your app.

## Setup

1. Install unocss

```bash
npm install -D unocss
```

Optional: we have included other presets here:

```bash
npm install -D @unocss/preset-attributify @unocss/preset-icons @unocss/preset-tagify
```

2. Make sure your vite.config.js has the following:

```js
import presetAttributify from "@unocss/preset-attributify";
import presetIcons from "@unocss/preset-icons";
import presetTagify from "@unocss/preset-tagify";
import presetUno from "@unocss/preset-uno";
import transformerAttributifyJsx from "@unocss/transformer-attributify-jsx";

import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS({
      shortcuts: [
        {
          logo: "i-logos-react w-6em h-6em transform transition-800 hover:rotate-180",
        },
      ],
      presets: [
        presetUno(),
        presetAttributify(),
        presetTagify(),
        presetIcons(),
      ],
      transformers: [transformerAttributifyJsx()],
    }),
    react(),
  ],
});
```

3. Import virtual:uno.css styles in your root component

```js
import React from "react";
import ReactDOM from "react-dom/client";
import "virtual:uno.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

If you have any issues, take a look at my package.json. Since unoCSS is still being developed, there are things that might change.
To make it properly work with TypeScript, I had to use a // @ts-nocheck in the main file. It was working, but throwing some linter errors.
