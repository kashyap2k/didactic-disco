# 🏥 Medical College Admin Suite

A **secure, full-stack dashboard** for managing all **medical and dental colleges in India**. Built with **React 18, Vite, Tailwind CSS, and Lucide React**, it processes >1,600 college records, supports advanced search, analytics, 2-factor auth, and robust data-management tools.

---

## ✨ Key Features

- **Advanced Authentication**
  - Username/password + TOTP-based 2FA
  - Rate-limiting (5 attempts / min) and session timeout (30 min)
  - Password-change and session-extension modals
- **Complete College Database**
  - Ingests two CSVs (NMC medical & DCI dental)
  - Normalizes into JSON with >1,600 colleges & seat data
  - Generates state-wise statistics automatically
- **Interactive Dashboard**
  - Overview cards, pie & bar charts, recent-activity feed
  - Quick actions (search, export, settings, refresh)
- **Powerful Search**
  - Fuzzy text search + filters (state, type, management, seat range)
  - Grid ⬌ list views, sort & pagination
  - CSV / JSON export of filtered results
- **Admin Settings**
  - Account tab (password change)
  - Security tab (enable / disable 2FA)
  - Database tab (export, backup, stats)
  - System tab (auto-backup, email alerts, security logs, timeout)
- **Responsive & Accessible**
  - Mobile hamburger menu, tablet optimizations
  - ARIA labels, keyboard navigation, high-contrast palette
- **Security & Reliability**
  - Input sanitization, XSS protection, error boundaries
  - Activity logging, backup & restore, rate-limit escalation

---

## 🛠 Tech Stack

| Layer            | Choices                               |
|------------------|---------------------------------------|
| Front-end        | React 18, Vite, Tailwind CSS, Lucide React |
| State / Hooks    | React hooks (`useState`, `useEffect`, `useMemo`) |
| Data Processing  | Node.js CSV → JSON script (`processCollegeData.js`) |
| Persistence      | LocalStorage (session, settings, data) |
| Auth & Security  | Custom `AuthService`, TOTP 2FA, `RateLimitService` |
| Charts           | Tailwind components (no external chart libs) |

---

## ⚡ Quick Start

### 1. Clone & Install
```
git clone <your-repo>
cd medical-college-admin-suite
npm install
```

### 2. Add Raw CSVs  
Place these two files in the project root:  
- `all-MEDICAL-COLLEGES-OF-INDIA-NMC.csv`  
- `Dental-colleges-DCI.csv`

### 3. Process Data
```
npm run process-data
# Generates JSON databases in src/data/
```

### 4. Dev Server
```
npm run dev
```

### 5. Production Build
```
npm run build
npm run preview   # Optional local preview
```

---

## 🔑 Default Credentials

| Username | Password           |
|----------|--------------------|
| `admin`  | `medcollege@2024` |

> **Immediately change** the default password after first login (Settings → Account).

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Dashboard.jsx
│   ├── Login.jsx
│   ├── CollegeSearch.jsx
│   └── Settings.jsx
├── services/
│   ├── AuthService.js
│   ├── CollegeDatabase.js
│   ├── TwoFactorAuthService.js
│   └── RateLimitService.js
├── scripts/
│   └── processCollegeData.js
├── data/                # Auto-generated JSON
└── App.jsx
```

---

## 📜 NPM Scripts

| Script            | Purpose                                   |
|-------------------|-------------------------------------------|
| `dev`             | Start Vite dev server with HMR            |
| `build`           | Production bundle                         |
| `preview`         | Preview production build locally          |
| `process-data`    | Convert CSV → JSON, generate statistics   |
| `lint`            | Lint source with ESLint (optional)        |

---

## 🛡 Security Highlights

1. **Rate Limit** – 5 failed logins/min, escalating lockouts  
2. **TOTP 2FA** – QR-code setup, backup codes, enable/disable  
3. **Session Control** – 30-min expiry, 5-min warning modal  
4. **Input Sanitization** – All form inputs validated & escaped  
5. **Activity Log** – Auth events & data exports recorded  
6. **Backup & Restore** – One-click JSON backup to LocalStorage  

---

## 🧩 Contribution Guide

1. Fork & create a feature branch.  
2. Follow ESLint/Tailwind conventions.  
3. Submit PR with descriptive title & context.  
4. Ensure `npm run process-data` and `npm run test` (if added) pass.

---

## 📄 License

Released under the **MIT License** – free to use, modify, and distribute.

---

**Made with ❤️ to streamline Indian medical college data management.**
```
