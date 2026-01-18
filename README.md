# Trivia Frontend

Deze Next.js frontend voor de Trivia Quiz, gebouwd met NEXT.js 16, Tailwind CSS en Atomic Design principes.

## 🛠️ Lokaal Opstarten

### Stappen
1.  Open de terminal in deze map (`trivia-frontend`).
2.  Installeer dependencies (eenmalig):
    ```powershell
    npm install
    ```
3.  Start de ontwikkelserver:
    ```powershell
    npm run dev
    ```
4.  Open `http://localhost:3000` in je browser.
    *   Zorg dat je Backend ook lokaal draait op poort 8080!

## ☁️ Deployment (Vercel)
Dit project draait op Vercel.
*   **Live URL**: `https://trivia-frontend-rho.vercel.app/`
*   **Configuratie**: De koppeling met de backend wordt geregeld via de Environment Variable `NEXT_PUBLIC_API_URL`.