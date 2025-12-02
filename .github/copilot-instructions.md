<!-- Auto-generated guidance for AI coding agents. Keep concise and specific to this repo. -->
# Copilot / AI agent instructions for this repository

Quyidagi qisqacha ko‘rsatmalar bu repo bo‘yicha avtomatlashtirilgan agentlarga yordam beradi — asosiy fayllar, build/dev ishlari va loyihaning oddiy xususiyatlari.

- **Loyiha turi**: Vite + React (JSX, Type: `module`). Asosiy kirish nuqtasi: `index.html` → `src/main.jsx` → `src/App.jsx`.
- **Build / dev**: scriptlar `package.json` ichida:
  - `npm run dev` — Vite dev server (HMR). Odatiy port: `5173`.
  - `npm run build` — production build bilan `vite build`.
  - `npm run preview` — `vite preview` bilan build natijasini tekshirish.
  - `npm run lint` — `eslint .` (repo asosida ESLint ishlaydi).

- **Muayyan e'tiborli joylar**:
  - SVG va boshqa public fayllar `public/` (va `vite.svg`) loyihaning rootidan `/vite.svg` kabi yo‘l bilan murojaat qilinadi. Masalan, `App.jsx` da `viteLogo` importi: `import viteLogo from '/vite.svg'`.
  - Mahalliy aktivlar `src/assets` ichida saqlanadi va komponentlarda `import reactLogo from './assets/react.svg'` kabi import qilinadi.
  - CSS fayllari: `src/index.css` va `src/App.css` — global va component uslublari oddiy fayl importlari orqali qo‘llanadi.

- **Konfiguratsiya**:
  - `vite.config.js` — `@vitejs/plugin-react` ishlatilgan (Fast Refresh/HMR). O‘zgartirishlar uchun shu faylni yangilang.
  - `eslint.config.js` mavjud — lint qoidalarini shu yerdan tekshiring/yangilang.

- **Qoidalar va kod uslubi (ko‘rinadigan)**:
  - Loyihada TypeScript yo‘q; fayllar `.jsx`/`.js` formatida.
  - React 19 bilan yozilgan; funktsional komponentlar va Hooks (`useState`) ishlatiladi — shu uslubni davom ettiring.
  - Single-file komponentlar yo‘q — har bir komponent alohida faylda (`src/`) saqlansin.

- **O‘zgartirishlar va PR ko‘rsatmalari (agent uchun)**:
  - Kichik UI o‘zgartirishlar: `src/App.jsx` va `src/*.css` fayllarini yangilang, HMR avtomatik yangilaydi.
  - Agar yangi kutubxona qo‘shilsa, `package.json` va `devDependencies` ni mos ravishda yangilang va `npm install`/`npm i` qo‘shing.
  - Lint qoidalarini o‘zgartirishda `eslint.config.js` ni yangilang va `npm run lint` bilan tekshiring.

- **Debugging va tezkor tekshirish**:
  - Lokal dev server: `npm run dev` → browserda `http://localhost:5173` oching.
  - Production build tekshiruvi: `npm run build` so‘ng `npm run preview`.

- **Nima yo‘q / e'tibor bering**:
  - Test skriptlar (`test`) yoki CI konfiguratsiyasi topilmadi — agar testlar qo‘shilsa, `package.json` ga `test` qo‘shish kerak bo‘ladi.
  - Hech qanday backend servisi yoki API integratsiyasi ko‘rsatilmagan — agar bunday qo‘shilsa, agent bu haqda README yoki yangi fayl orqali aniq eslatma qoldirsin.

- **Maqsadga muvofiq misollar (qisqa)**:
  - Dev server ishga tushirish: ``npm run dev``
  - HMR testi: `src/App.jsx` ichidagi `count` tugmachasining matnini o‘zgartiring va brauzer yangilanishini ko‘ring.
  - Asset masalalari: `public/` ga joylangan fayllar root orqali chaqiriladi (`/vite.svg`), `src/assets` esa `import` qilinadi.

Agar bu faylda noto‘g‘ri yoki yetishmayotgan joylar bo‘lsa, aniq misol yoki qo‘shimcha fayllar nomini yuboring — men matnni yangilab bir soniyada takrorlayman.
