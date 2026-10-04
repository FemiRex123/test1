# SP BUILDER by hardware-resett

A production-oriented, responsive configurator for custom SP handheld builds. It includes independent visual layers, live pricing, compatibility rules, URL sharing, local saves, presets, and compatible random builds.

## Lokal starten

```bash
pnpm install
pnpm dev
```

Danach ist die Anwendung unter **http://localhost:3000** erreichbar. Das
Terminal mit `pnpm dev` muss dabei geöffnet bleiben. Eine erfolgreiche Ausgabe
sieht unter anderem so aus:

```text
Local:   http://localhost:3000
Network: http://0.0.0.0:3000
```

Der Development-Server bindet explizit an `0.0.0.0`, sodass er nicht nur im
lokalen Prozess, sondern auch über Docker, Codespaces oder einen weitergeleiteten
Port erreichbar ist. In einer Remote-Entwicklungsumgebung muss **Port 3000** als
öffentlicher beziehungsweise weitergeleiteter Port freigegeben werden. Dort ist
die von der Umgebung angezeigte Preview-URL zu verwenden, nicht `localhost` auf
dem eigenen Rechner.

Falls `localhost` weiterhin „Verbindung abgelehnt“ meldet:

1. Prüfen, ob `pnpm dev` noch läuft und keine Fehlermeldung ausgibt.
2. Mit `curl http://localhost:3000` im selben Terminal/Container testen.
3. Prüfen, ob Port 3000 bereits belegt ist (`lsof -i :3000`).
4. Bei Docker `-p 3000:3000` setzen; bei Codespaces/Cloud-IDE Port 3000
   weiterleiten.

Für einen Produktionsstart zuerst bauen und anschließend den Server starten:

```bash
pnpm build
pnpm start
```

## Verify

```bash
pnpm test
pnpm build
```

Product catalog data lives in `data/products.ts`; business logic is isolated in `lib/configurator.ts`.
