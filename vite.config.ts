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
        presetIcons({
          extraProperties: {
            display: "inline-block",
            "vertical-align": "middle",
          },
        }),
      ],
      transformers: [
        transformerAttributifyJsx(), // <--
      ],
    }),
    react(),
  ],
});
