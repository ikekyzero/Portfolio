# 🎨 Портфолио

> Персональный сайт-портфолио, разработанный с использованием современных веб-технологий

[Демо](https://ikekyzero.github.io/Portfolio/) • [Установка](#️-быстрый-старт) • [Функции](#-основные-функции) • [Технологии](#-технологии)

![Demo Preview]([https://ikekyzero.github.io/Portfolio/assets/readme-preview.JPG](https://ikekyzero.github.io/Portfolio/src/assets/readme-preview.JPG))

---

## ⚡️ Быстрый старт

```bash
# Клонируем репозиторий
git clone https://github.com/ikekyzero/Portfolio.git

# Устанавливаем зависимости
npm install

# Запускаем проект
npm start
```

## 🚀 Технологии

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 🎯 Основные функции

- 📱 **Адаптивный дизайн** - mobile-first подход
- 🌓 **Темная тема** - переключение между темной и светлой темами
- 🎥 **Фоновое видео** - с элегантным наложением
- 📋 **Быстрое копирование** - копирование контактов в буфер обмена
- 🔔 **Уведомления** - анимированные уведомления о действиях
- 🎨 **SVG иконки** - векторные иконки социальных сетей

## 📁 Структура проекта

```
src/
├── assets/          # SVG иконки и статические ресурсы
├── components/      # React компоненты
│   ├── ProfileSection.tsx    # Секция с профилем
│   ├── AboutSection.tsx      # Секция "Обо мне"
│   ├── ThemeToggleButton.tsx # Переключатель темы
│   └── ...
├── layouts/         # Компоненты-обертки
├── styles/          # Стили и Tailwind утилиты
├── utils/           # Вспомогательные функции
└── data/           # JSON данные
```

## 💡 Особенности реализации

### 🎨 Темизация

```typescript
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.theme || 'light');
    // Логика переключения темы
};
```

### 🎯 Стилизация

```typescript
// Модульный подход к стилям
export const cardStyles = {/*...*/};
export const textStyles = {/*...*/};
export const buttonStyles = {/*...*/};
```

### 🖼 SVG иконки

```typescript
import { ReactComponent as GitHubIcon } from '../assets/icons/github.svg';
```

## 📝 Редактирование контента

Весь контент сайта хранится в `src/data/personalInfo.json`:

```json
{
    "age": {
        "years": 21,
        "birthDate": "14 октября 2003"
    },
    "contacts": {
        "phone": "+79644213812",
        "email": "andrew.rudakov2003@gmail.com"
    }
}
```

## 🌐 Браузерная поддержка

[![Chrome](https://img.shields.io/badge/Chrome-Latest_2-success?style=flat-square&logo=google-chrome&logoColor=white)](https://www.google.com/chrome/)
[![Firefox](https://img.shields.io/badge/Firefox-Latest_2-success?style=flat-square&logo=firefox&logoColor=white)](https://www.mozilla.org/firefox/)
[![Safari](https://img.shields.io/badge/Safari-Latest_2-success?style=flat-square&logo=safari&logoColor=white)](https://www.apple.com/safari/)
[![Edge](https://img.shields.io/badge/Edge-Latest_2-success?style=flat-square&logo=microsoft-edge&logoColor=white)](https://www.microsoft.com/edge)

## 👤 Автор

[![GitHub](https://img.shields.io/badge/GitHub-Торговкин_Андрей-black?style=for-the-badge&logo=github)](https://github.com/ikekyzero)

---

_Built with ❤️ by Торговкин Андрей_
