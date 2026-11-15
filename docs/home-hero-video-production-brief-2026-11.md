# Homepage Hero Video: Editorial Direction (November 2026)

## Purpose
Create a quiet, cinematic homepage background that makes real Supraja site imagery easy to appreciate. Buyers should encounter genuine locations, not fictional finished amenities.

## Staged preview
The preview hero currently uses the existing assets `/videos/supraja-iris-hero.webm`, `/videos/heroBg.mp4`, and `/videos/supraja-iris-hero-poster.webp`. These existed before this change. This PR is not a new render or proof that the clips depict the latest construction.

## Recommended final edit (12-15 seconds, mute, seamless loop)
* 00-03: licensed/original aerial shot from Supraja IRIS with clean composition and steady camera movement.
* 03-06: genuine entrance, landscaped layout or internal-road footage. Avoid concept imagery presented as reality.
* 06-10: clearly documented resort construction footage, identified internally by location and shooting date. Do not embed status claims in the footage.
* 10-13: return to a broad site shot; transition smoothly to the opening frame for a natural loop.

## Format
* Desktop: 1920x1080 or 1600x900, 16:9, WebM with H.264 MP4 fallback where practical.
* Mobile: a separate 9:16 crop only when it improves context and passes bandwidth testing; otherwise use a sharp static photo.
* Mute by default. No voiceover, music, embedded CTAs, watermarks or tiny captions. HTML controls the H1 and two buttons.
* Colour: natural and restrained, with gentle evening warmth if present in original footage. No fabricated landscaping, buildings, roads or amenities.
* Create a small poster image as the first visual payload; prioritise it for Largest Contentful Paint.
* Video should remain legible with the left-to-right gradient used in the preview.
* Video must pause/not display for reduced-motion preferences and avoid forced mobile downloads.

## Content and validation gate
The current site mentions construction progress around October 2026. Check the dates and images against the approved project update. Distinguish actual on-site visuals from architectural impressions, and never imply that proposed amenities are complete.

## Pre-launch review
Inspect desktop and mobile breakpoints, contrast, CTA destination, image loading, RUM/Web Vitals, video file sizes, Safari MP4 compatibility and lead tracking. Publish to production only after creative and functionality review.
