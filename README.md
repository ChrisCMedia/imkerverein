# Imkerverein Hadamar-Dornburg e.V. Website

Dies ist der Quellcode für die offizielle Website des Imkervereins Hadamar-Dornburg e.V.

## 🌟 Features

- Responsive Design für alle Geräte
- Saisonale Bilder auf der Startseite
- Modernes, benutzerfreundliches Interface
- Blog-System für Aktuelles und Bienen-Themen
- Kontaktformular mit DSGVO-Konformität
- Stockwaagen-Integration
- Barrierearm gestaltet

## 🛠️ Technische Details

- HTML5 & CSS3
- Tailwind CSS für Styling
- Vanilla JavaScript
- Feather Icons für Icons
- Responsive Images
- Mobile-First Approach

## 📁 Projektstruktur

```
/
├── css/
│   └── styles.css          # Hauptstylsheet
├── js/
│   └── main.js            # JavaScript-Funktionen
├── img/
│   ├── favicon.svg        # Website-Icon
│   └── seasons/           # Saisonale Bilder
├── index.html             # Startseite
├── aktuelles.html         # Neuigkeiten
├── termine.html           # Veranstaltungskalender
├── ueber-uns.html         # Vereinsinformationen
├── infos.html            # Allgemeine Informationen
├── stockwaage.html       # Stockwaagen-Daten
├── bienen-hummeln-co.html # Blog über Bienen
├── kontakt.html          # Kontaktseite
├── impressum.html        # Rechtliche Informationen
└── datenschutz.html      # Datenschutzerklärung
```

## 🖼️ Bilder

Die Website verwendet saisonale Bilder, die sich automatisch je nach Jahreszeit ändern:

- Frühling (20. März - 20. Juni)
- Sommer (21. Juni - 21. September)
- Herbst (22. September - 20. Dezember)
- Winter (21. Dezember - 19. März)

Bildanforderungen:
- Format: JPG oder WebP
- Auflösung: mindestens 1920x1080px
- Optimiert für Web-Performance
- Dateinamen: spring.jpg, summer.jpg, autumn.jpg, winter.jpg

## 🔄 Wartung

### Bilder aktualisieren
1. Neue Bilder in `/img/seasons/` hochladen
2. Gleiche Namenskonvention beibehalten
3. Bilder sollten optimiert sein

### Inhalte aktualisieren
- Termine in `termine.html` pflegen
- Neuigkeiten in `aktuelles.html` hinzufügen
- Blog-Beiträge in `bienen-hummeln-co.html` erstellen

### Technische Updates
- Tailwind CSS via CDN wird automatisch aktualisiert
- Feather Icons via CDN wird automatisch aktualisiert
- JavaScript-Funktionen in `main.js` bei Bedarf anpassen

## 📱 Responsives Design

Die Website ist für folgende Bildschirmgrößen optimiert:
- Mobile: < 640px
- Tablet: 640px - 768px
- Desktop: > 768px

## 🎨 Farbschema

- Primärfarbe: Amber (#fbbf24)
- Sekundärfarbe: Dunkelbraun (#92400e)
- Akzentfarbe: Limette (#84cc16)
- Hintergrund: Hellgrau (#f8fafc)
- Text: Dunkelgrau (#1f2937)

## 🔒 Sicherheit & Datenschutz

- DSGVO-konformes Kontaktformular
- Sichere Formulardatenverarbeitung
- Cookie-Hinweis implementiert
- Datenschutzerklärung vorhanden
- Impressum nach deutschem Recht

## 📝 Lizenz

© 2024 Imkerverein Hadamar-Dornburg e.V. Alle Rechte vorbehalten. 