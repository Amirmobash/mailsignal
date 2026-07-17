'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const chapters = [
  {
    kicker: '01 — Zustellung',
    title: 'Einwurf erkannt.',
    text: 'Die Bewegung der Einwurfklappe aktiviert den Mechanismus — direkt am Briefkasten und ohne Netzwerk.',
  },
  {
    kicker: '02 — Signal',
    title: 'Post wird sichtbar.',
    text: 'Die LED wechselt in