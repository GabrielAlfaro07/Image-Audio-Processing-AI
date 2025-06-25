# NeuroLens – Transcripción de Audios y Procesamiento y Detección de Objetos en Imágenes

Este proyecto es una aplicación web moderna que permite realizar **transcripción de audio en tiempo real** y **procesamiento de imágenes mediante modelos de inteligencia artificial**. Incluye una interfaz interactiva desarrollada en React, y un backend con FastAPI que sirve modelos de IA entrenados para audio y visión por computadora.

---

## Estructura del proyecto

```
IA-Multimodal/
├── Frontend/            # Interfaz web (React + Vite + Tailwind)
├── Backend/             # API en FastAPI con modelos IA
├── modelo_final/        # Modelos preentrenados (por ejemplo: Wav2Vec, CNN, etc.)
└── README.md
```

---

## Instrucciones para correr el proyecto

### Requisitos

- Node.js (v18 o superior)
- Python 3.9 o superior
- pip

---

## 🖥Frontend (React + Vite)

```bash
cd Frontend
npm install          # Instala dependencias
npm run dev          # Levanta la aplicación en localhost:5173 (por defecto)
```

---

## Backend (FastAPI + Uvicorn)

```bash
cd Backend
pip install -r requirements.txt   # Asegúrate de tener los paquetes necesarios

# Corre la API
uvicorn main:app --reload --port 8000
```

---

## Características

- Transcripción de audio por IA en tiempo real
- Detección y procesamiento de imágenes
- Interfaz moderna con animaciones, fuente personalizada y diseño responsivo
- Estructura modular para fácil mantenimiento

---

## Diseño

- Framework: React + Vite
- Estilos: TailwindCSS
- Backend: Python + FastAPI
- Animaciones: Framer Motion
- Tipografía: Quicksand y Designer (personalizada)
- Fondo: Gradiente radial moderno

---

## Créditos

Este proyecto fue desarrollado como parte de un curso de Inteligencia Artificial.

---

## Licencia

MIT – Libre de usar, modificar y compartir con atribución.

