package main

import (
    "log"
    "net/http"

    "github.com/go-chi/chi/v5"
    "github.com/nichady/golte"

    "github.com/eve-sec/emb/apps/webapp/build"
)

func main() {
    r := chi.NewRouter()
    r.Use(build.Golte)

    r.Group(func(r chi.Router) {
        r.Use(golte.Layout("layout/main"))
        r.Get("/", golte.Page("page/home"))
    })

    log.Print("webapp listening on :3000")
    log.Fatal(http.ListenAndServe(":3000", r))
}
