// Surveyed against the current terrain and simplified collision footprints.
// Local resident animation only: no teleport, chapter or save state.
export const residentRoutes=[
 {
  "from": "boat",
  "to": "landing",
  "points": [
   [
    -3.5,
    18
   ],
   [
    -3.5,
    17.375
   ],
   [
    -3.5,
    16.125
   ],
   [
    -3.5,
    14.25
   ],
   [
    -3.5,
    11.75
   ],
   [
    -3.5,
    9.875
   ],
   [
    -3.5,
    8.625
   ],
   [
    -3.5,
    8
   ]
  ],
  "width": 0.88
 },
 {
  "from": "landing",
  "to": "approach",
  "points": [
   [
    -3.5,
    7.75
   ],
   [
    -3.3281,
    7.5938
   ],
   [
    -2.9844,
    7.2813
   ],
   [
    -2.4688,
    6.8125
   ],
   [
    -1.7813,
    6.1875
   ],
   [
    -1.2656,
    5.7188
   ],
   [
    -0.9219,
    5.4063
   ],
   [
    -0.75,
    5.25
   ]
  ],
  "width": 0.88
 },
 {
  "from": "approach",
  "to": "seat",
  "points": [
   [
    -0.5,
    5
   ],
   [
    -0.3125,
    4.9219
   ],
   [
    0.0625,
    4.7656
   ],
   [
    0.625,
    4.5313
   ],
   [
    1.375,
    4.2188
   ],
   [
    1.9375,
    3.9844
   ],
   [
    2.3125,
    3.8281
   ],
   [
    2.5,
    3.75
   ]
  ],
  "width": 0.88
 }
] as const;
