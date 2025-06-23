# Используем официальный образ Golang как базовый
FROM golang:1.22-alpine as builder

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем go mod и go sum файлы для кэширования зависимостей
COPY go.mod go.sum ./

# Загружаем зависимости
RUN go mod tidy

# Копируем все исходники в контейнер
COPY . .

# Устанавливаем зависимости для компиляции C-кода
RUN apk add --no-cache build-base gcc libc-dev

# Собираем бинарный файл приложения
RUN CGO_ENABLED=1 GOOS=linux go build -o myapp .

# Используем более легкий образ для финального контейнера
FROM alpine:latest

# Устанавливаем необходимые библиотеки для запуска Go-программы
RUN apk --no-cache add ca-certificates

# Устанавливаем рабочую директорию в контейнере
WORKDIR /root/

# Копируем скомпилированный бинарник из предыдущего этапа
COPY --from=builder /app/myapp .

# Делаем бинарник исполняемым
RUN chmod +x myapp

# Открываем порт, если приложение использует его
EXPOSE 7562

# Указываем команду, которая будет выполнена при запуске контейнера
CMD ["./myapp", "-socket=false", "-tcp=true"]