---
title: VolunThrive
publishDate: 2025-03
img: /assets/VolunThrive.png
img_alt: Volunteer app landing page
github: https://github.com/rayyshen/volunthrive
description: |
  VolunThrive is a dynamic volunteer-matching platform that connects passionate individuals to local nonprofit opportunities tailored to their skills, interests, location, and availability.
tags:
  - Design
  - Dev
  - Community Engagement
---

### About

VolunThrive is a dynamic volunteer-matching platform that connects passionate individuals to local nonprofit opportunities tailored to their skills, interests, location, and availability. Volunteers create personalized profiles, and our matching algorithm highlights the most relevant volunteer opportunities based on their unique preferences. Through streamlined sign-ups and intuitive interfaces, VolunThrive makes it effortless for users to engage meaningfully with their communities. Created at HackTJ 12.0

### How it works

VolunThrive is a Next.js-based web application designed to connect individuals with meaningful volunteer opportunities offered by local nonprofits. Users start by creating an account—using email/password and then complete a personalized profile specifying their name, age, skills, interests, availability, and location. Once the profile is created, the platform dynamically pulls volunteer postings from a Firestore database and calculates a “match score,” bringing the most relevant opportunities to the top of the list based on the user’s profile information.

Volunteer opportunities include essential details such as title, description, date, time commitment, and an RSVP form. Users can browse these opportunities or search for specifics. Selecting an opportunity opens a detailed view with additional information, an interactive embedded Google Map showing the volunteering location, and an option to RSVP redirects the user to a signupgenius.

The project uses Firebase for authentication and Firestore for real-time, cloud-based data storage. The frontend is built using Next.js with TypeScript, styled with Tailwind CSS, ensuring a clean, modern, and responsive user interface. Components such as date formatting and text truncation help create a seamless and user-friendly browsing experience.