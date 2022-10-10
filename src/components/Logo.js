import { motion } from "framer-motion";

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      // delay: 0.5,
      duration: 2,
      ease: "easeInOut",
    },
  },
};

function Logo() {
  return (
    <div>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="50"
        viewBox="0 0 270 270"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,270.000000) scale(0.100000,-0.100000)"
          fill="#01448b"
          stroke="none"
        >
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M726 2643 c15 -171 43 -225 198 -376 67 -65 138 -132 160 -149 l38
-32 -6 70 c-4 38 -3 92 2 120 l9 51 -61 65 c-34 35 -92 99 -129 141 -44 50
-93 91 -136 117 -37 22 -70 40 -73 40 -4 0 -5 -21 -2 -47z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M2233 2635 c-63 -36 -78 -50 -229 -219 l-89 -99 0 -122 0 -123 35 30
c19 17 90 83 157 148 97 94 127 131 151 182 37 77 67 238 45 238 -5 0 -36 -16
-70 -35z m42 -123 c-26 -91 -54 -129 -201 -272 l-139 -135 -5 100 -5 100 89
100 c148 166 164 182 219 214 l52 30 3 -40 c2 -22 -4 -65 -13 -97z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M605 2363 c4 -21 32 -87 62 -147 l56 -108 116 -92 c177 -139 231
-178 231 -164 0 7 -7 48 -15 91 -8 43 -15 98 -15 121 0 41 -3 45 -86 117 -108
93 -192 153 -269 190 -81 39 -89 38 -80 -8z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M2323 2341 c-83 -44 -147 -91 -257 -187 l-76 -66 0 -53 c0 -30 -7
-86 -15 -126 -9 -40 -13 -74 -10 -77 5 -6 73 44 231 170 103 81 115 94 153
168 23 43 53 109 66 145 l25 65 -23 0 c-12 0 -55 -18 -94 -39z m67 -52 c-50
-118 -95 -192 -139 -227 -79 -64 -264 -202 -266 -200 -1 2 5 54 14 116 l16
112 62 54 c106 92 183 148 261 188 41 21 77 37 79 34 2 -2 -10 -37 -27 -77z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M1134 2262 c-4 -24 -4 -78 0 -121 l7 -76 127 -122 c70 -67 130 -122
134 -123 10 0 103 99 103 110 0 5 -82 92 -182 193 l-182 184 -7 -45z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M1731 2128 l-155 -159 -2 -52 c-2 -29 -6 -83 -9 -121 l-7 -70 164
159 c99 96 165 168 169 184 9 37 10 194 1 207 -4 6 -69 -53 -161 -148z m151 1
l-7 -75 -148 -144 -148 -143 7 99 6 99 142 145 c133 137 141 144 148 120 4
-14 4 -60 0 -101z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M570 2084 c0 -13 67 -139 102 -190 36 -54 61 -75 208 -173 91 -61
168 -111 172 -111 3 0 -10 37 -28 83 -19 45 -34 94 -34 109 0 15 -4 38 -9 51
-11 27 -193 169 -245 191 -36 15 -166 46 -166 40z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M1060 2042 c0 -36 21 -157 36 -204 2 -9 43 -50 91 -92 l85 -75 47 51
c25 28 47 54 49 58 1 4 -67 73 -153 154 l-155 148 0 -40z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M2405 2060 c-82 -16 -149 -51 -250 -127 -102 -77 -103 -78 -109 -128
-4 -28 -22 -87 -40 -132 l-33 -82 31 16 c75 38 308 207 339 246 42 51 128 217
113 216 -6 -1 -29 -5 -51 -9z m-6 -90 c-22 -44 -58 -98 -78 -120 -30 -34 -300
-224 -307 -217 -1 1 8 34 22 72 13 39 24 84 24 102 0 28 10 40 83 96 132 102
142 108 208 127 35 10 70 19 77 19 8 1 -3 -29 -29 -79z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M1793 1892 l-172 -167 -4 -103 -5 -102 36 29 c21 16 51 43 67 61 17
18 73 70 127 116 l96 85 16 92 c20 119 24 157 17 157 -3 0 -83 -75 -178 -168z
m151 32 c-20 -111 -1 -86 -191 -261 -62 -57 -114 -103 -117 -103 -3 0 -3 37 0
83 l5 82 157 152 c86 83 158 150 160 148 2 -1 -5 -47 -14 -101z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M1423 1814 c-65 -69 -121 -132 -126 -139 -16 -30 -49 -320 -34 -305
3 3 27 34 53 70 26 36 87 111 135 166 l88 102 11 108 c5 60 10 112 10 117 0
21 -29 -4 -137 -119z m108 -26 l-11 -80 -83 -97 c-46 -53 -100 -118 -120 -145
l-37 -49 0 46 c0 25 5 80 11 122 l12 76 116 126 c130 141 131 141 112 1z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M1000 1842 c0 -51 97 -282 119 -282 5 0 35 -21 67 -46 l59 -45 12 83
c9 62 9 86 0 96 -15 18 -216 181 -239 193 -10 5 -18 6 -18 1z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M604 1788 c18 -113 138 -262 282 -352 76 -47 154 -89 154 -82 0 2
-12 34 -26 72 -14 37 -32 102 -41 143 -8 42 -23 81 -32 88 -19 15 -327 173
-337 173 -3 0 -4 -19 0 -42z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M1917 1751 c-53 -43 -139 -117 -191 -164 l-93 -86 -6 -68 c-3 -37 -9
-84 -13 -103 l-7 -35 49 46 c57 55 204 172 244 196 44 25 128 209 130 281 0
21 -12 14 -113 -67z m82 -8 c-6 -21 -27 -68 -45 -105 -29 -57 -45 -76 -108
-122 -42 -31 -105 -81 -141 -112 -37 -31 -67 -54 -69 -52 -1 1 0 33 2 70 l4
68 91 83 c136 124 271 231 275 218 2 -6 -2 -28 -9 -48z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M2245 1722 l-170 -87 -12 -65 c-6 -36 -25 -102 -41 -147 -17 -46 -29
-83 -26 -83 13 0 145 73 185 102 102 73 184 164 215 237 29 68 44 131 31 131
-7 -1 -88 -40 -182 -88z m163 31 c-32 -117 -160 -262 -301 -342 -43 -24 -79
-42 -81 -40 -3 2 7 36 20 76 13 39 27 95 32 125 l7 53 160 82 c88 45 163 83
167 83 3 0 2 -17 -4 -37z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M1494 1589 c-54 -61 -129 -149 -166 -195 l-68 -85 0 -218 c0 -195
-10 -376 -26 -453 l-5 -27 34 32 c18 18 99 76 179 129 134 90 147 101 166 146
22 52 44 134 37 141 -5 5 -166 -124 -285 -229 -47 -41 -78 -66 -70 -55 33 45
148 163 224 231 72 64 85 81 108 143 31 78 46 151 31 151 -11 0 -164 -163
-290 -309 -84 -98 -119 -126 -72 -59 40 58 166 211 229 278 65 70 76 97 86
200 l5 65 -85 -90 c-47 -49 -123 -134 -168 -187 -45 -54 -84 -96 -86 -93 -17
16 69 125 228 290 66 68 79 87 88 130 16 77 24 175 14 175 -5 0 -54 -50 -108
-111z m86 -31 c-12 -68 -14 -72 -94 -157 -44 -47 -109 -118 -143 -156 l-63
-70 0 70 0 70 93 111 c50 61 119 140 152 176 69 73 74 69 55 -44z m1 -219
c-10 -43 -25 -66 -98 -147 -47 -54 -111 -130 -142 -169 l-56 -73 -3 66 -3 66
77 91 c43 51 112 130 153 176 84 92 93 90 72 -10z m43 -141 c-29 -90 -50 -121
-129 -188 -42 -36 -109 -102 -150 -148 l-75 -83 0 41 c0 37 8 51 66 118 133
154 299 331 302 322 2 -6 -4 -34 -14 -62z m-18 -244 c-27 -75 -44 -92 -141
-151 -33 -20 -90 -58 -127 -85 -37 -26 -71 -48 -76 -48 -5 0 -6 12 -4 28 3 18
31 51 91 104 102 91 273 229 278 224 2 -2 -8 -34 -21 -72z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M980 1626 c0 -26 37 -160 59 -214 25 -61 33 -71 92 -110 35 -24 76
-50 92 -58 l27 -15 0 104 c0 119 9 106 -130 204 -108 77 -140 97 -140 89z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M1995 1579 c-69 -44 -192 -138 -257 -198 -49 -45 -56 -56 -61 -99 -3
-27 -15 -75 -26 -108 -12 -32 -21 -62 -21 -67 0 -5 17 5 38 21 20 16 96 68
168 115 l130 85 31 83 c33 86 59 187 51 194 -2 3 -26 -9 -53 -26z m35 -13 c0
-22 -48 -166 -68 -203 -12 -23 -60 -61 -160 -127 -79 -51 -142 -89 -140 -82 2
6 12 48 23 94 18 82 20 85 79 137 69 60 247 195 259 195 4 0 7 -7 7 -14z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M600 1462 c0 -22 41 -81 113 -165 43 -50 66 -65 190 -127 78 -38 142
-68 144 -67 1 2 -8 32 -21 67 -13 36 -29 91 -36 123 l-12 57 -131 65 c-116 57
-138 65 -189 65 -50 0 -58 -3 -58 -18z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M2340 1459 c-25 -4 -100 -34 -166 -67 l-121 -61 -13 -63 c-6 -35 -22
-89 -35 -120 -13 -32 -19 -58 -14 -58 5 0 67 28 137 62 83 41 141 77 169 104
57 57 133 162 133 184 0 22 -30 28 -90 19z m80 -17 c0 -12 -54 -86 -109 -150
-37 -42 -68 -64 -162 -112 -65 -33 -122 -60 -128 -60 -6 0 -2 23 9 55 10 30
22 75 26 100 l6 46 112 56 c61 31 125 59 141 64 42 10 105 11 105 1z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M1007 1298 c10 -52 50 -167 67 -194 9 -13 53 -42 97 -64 l80 -41 -3
93 -3 92 -115 73 c-63 39 -118 72 -122 72 -4 1 -5 -14 -1 -31z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M1911 1245 c-118 -74 -232 -154 -243 -169 -4 -6 -8 -24 -8 -41 0 -16
-9 -55 -20 -85 -10 -30 -18 -55 -17 -56 7 -6 325 180 335 195 29 42 82 221 65
221 -4 0 -55 -29 -112 -65z m93 8 c-4 -16 -18 -59 -33 -98 -25 -66 -29 -72
-81 -99 -30 -15 -97 -53 -149 -82 -82 -48 -93 -51 -87 -31 4 12 12 46 19 76
11 48 17 58 67 94 69 52 251 167 262 167 5 0 5 -12 2 -27z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M650 1189 c0 -20 85 -132 139 -182 34 -32 87 -65 155 -96 158 -74
152 -75 111 10 -19 40 -38 94 -41 120 -6 47 -8 48 -73 82 -74 40 -149 62 -233
72 -42 5 -58 3 -58 -6z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M2241 1165 c-35 -8 -98 -32 -139 -53 l-76 -38 -13 -65 c-7 -35 -26
-90 -43 -121 -34 -67 -42 -67 116 7 61 29 130 70 154 91 39 35 150 175 150
188 0 10 -83 5 -149 -9z m102 -37 c-10 -17 -48 -62 -84 -100 -54 -55 -85 -77
-161 -113 -53 -25 -100 -45 -106 -45 -7 0 -3 17 8 43 10 23 22 60 26 82 10 60
20 73 77 102 75 38 155 62 210 62 l48 1 -18 -32z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M1034 1034 c10 -53 63 -168 90 -193 11 -11 42 -29 69 -40 l47 -20 0
47 c0 26 3 63 6 82 l6 35 -104 59 c-56 33 -107 62 -112 64 -5 3 -6 -12 -2 -34z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M1825 955 c-156 -92 -160 -96 -177 -142 -10 -26 -31 -69 -47 -95 -17
-26 -27 -48 -23 -48 4 0 77 31 162 69 138 62 158 74 187 113 45 60 91 199 66
198 -5 -1 -80 -43 -168 -95z m155 46 c0 -22 -65 -154 -83 -169 -10 -8 -276
-132 -284 -132 -1 0 11 28 27 63 17 34 30 67 30 72 0 10 286 185 303 185 4 0
7 -8 7 -19z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M716 910 c11 -18 46 -60 79 -94 55 -55 71 -65 181 -108 67 -27 126
-48 132 -48 6 0 0 24 -14 53 -13 28 -27 69 -30 89 -6 36 -8 37 -118 81 -71 29
-135 48 -180 52 l-69 8 19 -33z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M2209 911 c-14 -3 -71 -24 -127 -46 l-102 -40 -16 -55 c-9 -30 -25
-71 -35 -92 -11 -21 -17 -38 -13 -38 3 0 65 23 136 51 118 47 136 57 187 109
31 32 64 71 74 89 l18 31 -48 -1 c-26 -1 -60 -4 -74 -8z m91 -10 c0 -12 -71
-95 -109 -127 -26 -22 -214 -104 -239 -104 -6 0 -2 22 10 53 11 28 24 61 28
72 9 24 178 95 250 106 25 3 48 7 53 8 4 0 7 -3 7 -8z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M1469 737 c-263 -165 -244 -150 -258 -212 -7 -30 -10 -59 -6 -65 3
-5 2 -10 -3 -10 -9 0 -56 -110 -49 -116 2 -2 69 26 150 61 81 36 151 65 155
65 10 0 112 147 112 161 0 5 -3 9 -6 9 -3 0 -82 -39 -176 -86 -93 -47 -173
-83 -176 -80 -3 3 -3 8 -1 11 8 7 304 165 310 165 10 0 86 119 104 163 8 20
13 37 11 37 -2 0 -77 -46 -167 -103z m135 51 c-3 -7 -25 -41 -47 -75 -32 -48
-51 -66 -91 -85 -27 -12 -92 -47 -145 -75 -52 -29 -96 -51 -98 -50 -1 2 2 19
7 38 9 30 29 46 187 147 98 61 182 112 186 112 5 0 5 -6 1 -12z m-78 -215
c-35 -68 -79 -100 -210 -157 -72 -30 -132 -54 -134 -51 -2 2 1 19 7 37 10 30
26 41 173 115 90 45 166 82 171 82 4 1 1 -11 -7 -26z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M1080 815 c0 -8 9 -38 20 -67 22 -60 64 -113 97 -123 20 -5 22 -1 28
48 4 30 5 62 3 72 -4 23 -148 91 -148 70z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M1825 754 c-66 -31 -143 -66 -172 -79 -39 -18 -56 -32 -66 -57 -8
-19 -27 -54 -41 -77 -15 -24 -26 -45 -23 -47 2 -2 35 9 74 25 39 16 117 46
173 66 96 36 104 41 131 84 29 44 53 114 47 131 -2 5 -57 -16 -123 -46z m101
-1 c-4 -16 -19 -48 -34 -72 -26 -42 -33 -46 -167 -97 -77 -30 -147 -56 -156
-59 -13 -4 -9 9 15 54 17 34 36 63 41 65 6 2 73 34 150 70 77 36 144 66 148
66 5 0 6 -12 3 -27z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M836 678 c23 -45 102 -126 149 -153 54 -32 187 -68 196 -54 3 6 -9
36 -27 67 -19 31 -34 62 -34 69 0 10 -263 103 -292 103 -5 0 -1 -14 8 -32z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M2048 647 l-127 -42 -28 -55 c-16 -30 -37 -67 -47 -82 -22 -34 -24
-33 78 -6 122 33 224 107 271 197 14 29 14 31 -2 30 -10 0 -75 -20 -145 -42z
m122 2 c-21 -38 -83 -100 -126 -125 -34 -20 -175 -67 -180 -61 -1 1 15 31 35
67 l37 65 114 37 c137 44 134 43 120 17z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M1140 604 c0 -4 10 -24 22 -45 22 -39 38 -50 38 -26 0 6 3 22 6 33 5
17 -1 24 -27 33 -37 13 -39 13 -39 5z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M1705 527 l-160 -61 -27 -55 c-15 -31 -35 -67 -45 -81 -18 -23 -18
-24 2 -16 11 5 87 32 169 61 l149 52 49 72 c50 75 56 92 36 90 -7 0 -85 -28
-173 -62z m118 -31 c-38 -54 -39 -55 -163 -99 -69 -25 -133 -48 -143 -52 -16
-7 -14 2 12 52 l30 60 148 56 c81 30 149 51 151 46 2 -5 -14 -33 -35 -63z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M937 442 c-27 -7 -25 -9 58 -76 47 -37 93 -69 102 -70 12 -1 25 19
46 67 15 38 27 71 25 73 -8 8 -204 13 -231 6z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M1375 391 c-187 -83 -213 -98 -248 -139 -50 -57 -127 -128 -184 -169
-69 -50 -67 -63 3 -23 112 63 281 148 378 190 80 35 104 50 128 84 37 50 71
116 61 116 -5 0 -66 -26 -138 -59z m98 -2 c-38 -65 -69 -88 -183 -139 -63 -28
-153 -72 -200 -97 l-85 -45 90 90 c86 87 96 94 230 156 77 36 146 65 153 65
10 1 8 -7 -5 -30z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M1872 421 c-29 -5 -48 -15 -59 -32 -10 -13 -37 -45 -60 -70 -24 -25
-43 -49 -43 -53 0 -3 19 -7 43 -7 23 -1 32 -4 20 -6 -17 -3 7 -19 99 -64 67
-33 153 -78 191 -101 38 -22 70 -38 73 -35 2 2 -22 24 -53 50 -32 25 -85 71
-118 102 l-60 56 -55 -5 c-36 -3 -50 -2 -40 4 8 5 40 10 70 10 50 0 60 4 110
45 30 24 72 57 92 72 21 16 38 31 38 36 0 9 -189 7 -248 -2z m186 -8 l24 -6
-29 -24 c-15 -13 -51 -42 -79 -63 l-51 -40 -93 0 -93 0 40 43 c22 24 45 51 50
62 8 14 28 20 79 25 97 10 126 11 152 3z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#01458c"
            strokeWidth="30"
            fillOpacity="0"
            d="M1695 381 c-49 -15 -115 -38 -145 -51 -30 -12 -66 -26 -79 -31 -44
-17 -8 -28 103 -30 l110 -3 49 55 c51 57 73 89 60 88 -4 0 -48 -13 -98 -28z
m49 -23 c-66 -80 -63 -78 -138 -77 -39 0 -80 4 -90 8 -20 8 -20 8 0 14 10 3
62 22 114 41 52 19 104 35 114 35 19 1 19 1 0 -21z"
          />
        </g>
      </svg>
      {/* <span
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        className="text-themeBlue"
      >
        SH
      </span> */}
    </div>
  );
}

export default Logo;
