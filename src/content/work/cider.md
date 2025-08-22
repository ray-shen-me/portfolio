---
title: Cider
publishDate: 2024-02
img: /assets/Cider.png
img_alt: Cider landing page
github: https://github.com/ray-shen-me/cider
description: |
  Cider is an AI powered document analyzer that automatically creates .ICS calendar files with titles, dates, descriptions, locations, attendees, and more. Won Best Lifestyle Hack at HackTJ 11.0!
tags:
  - Dev
  - Lifestyle
  - Backend
---

Cider utilizes the API for OpenAI's GPT 3.5 model to analyze given text or documents in order to extract calendar event parameters. The app streams the model's response, enabling each event to be displayed as it arrives, just like ChatGPT's UI where users can see the model "typing" its response. Unlike many other AI apps, the user doesn't have to wait a long time to see the results.

Cider then uses the Google Maps Places API to enrich any locations found.

For example, if the document contains: "Work on HackTJ project at Cvent HQ on Feb 24", Cider will generate an event with the place name "Cvent HQ", and query the Google Maps Places API, outputting the address "1765 Greensboro Station Pl 7th Floor, McLean, VA 22102", so the calendar information can be more precise.

To export the events, Cider compiles the event information, outputting to an .ICS file using the ics library created by Adam Gibbons. These files are supported by all devices and apps, like iOS, Android, Windows, MacOS, and Google Calendar.

To build the UI, we used Next.js as the framework, Tailwind.css for styling, and UI components built by us and from the "shadcn/ui" library. We used the "@cyber2024/pdf-parse-fixed" library to parse uploaded PDFs.