# name-that-tune

Локальная браузерная игра с сеткой 5x5:
- `index.html` — версия «Угадай мелодию» (аудио).
- `video.html` — версия «Магия кино» (файлы + YouTube).

## Быстрый старт

1. Клонируйте репозиторий.
2. Запустите любой статический сервер из корня проекта:
   - `npx serve .`
   - или `python -m http.server 8080`
3. Откройте:
   - `http://localhost:3000/index.html` (аудио)
   - `http://localhost:3000/video.html` (видео)

## Структура

- `index.html` — аудио-игра.
- `video.html` — видео-игра.
- `js/core/game-core.js` — общие утилиты игры (sanitize, формат времени, players parse, debounce, disabled-семантика).
- `js/media/youtube-utils.js` — утилиты YouTube API (парсинг id, загрузка API с таймаутом).
- `music/` — локальные аудио-треки.
- `videos/` — локальные видео-файлы.

## Данные и сохранение

- Состояние игры хранится в `localStorage`.
- Используются отдельные ключи для аудио/видео режимов:
  - `guessTheMelodyGameState_v8`
  - `magicCinemaGameState_v2`

## Ограничения и заметки

- Для YouTube в `video.html` требуется доступ к `youtube.com` и `s.ytimg.com`.
- Рекомендуется запускать через HTTP-сервер, а не через `file://`.
- Если меняете список участников во время партии, приложение предупреждает о сбросе счета.

## Проверки качества

- Линт:
  - `npm run lint`
- Smoke-тест:
  - `npm run test:smoke`