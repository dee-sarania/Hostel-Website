<template>
<div class="bg-light_pink">
    <!-- main photo with the title card saying "welcome...." -->
    <div class=" flex mt-30 items-center justify-center">
     <img src="hostel4.jpg" class=" flex w-full lg:max-h-580 opacity-75 mt-48 mb-70 object-cover object-center ">
     <div class="absolute w-full max-h-96 lg:max-h-580 top-48 lg:top-48 right-0 bottom-0 left-0 overflow-hidden bg-fixed bg-black opacity-20"></div>
      <div class="flex items-center justify-center title_card">
        <h6 class="uppercase font-bold"> Welcome to the official website of Jiri Women's Hostel</h6>
      </div>
    </div>

    <!-- about Jiri element -->
    <div class="w-full h-80 mt-20 mb-20">
        
        <div class="container flex px-18 py-2 space-x-16 lg:space-x-28 ">
            <img src="/images/building2.jpeg" class="mb-4 flex max-w-sm max-h-72 lg:max-h-96  object-cover object-center justify-left opacity-90 transform transition duration-500 hover:scale-105">
            <div>
                <div class="container justify-left text-burgundy lg:text-4xl text-2xl tracking-wide font-bold"> <h1> About Jiri </h1></div>
             <p class="container w-lg lg:w-1/2 mt-16 lg:mt-20 pr-8 lg:pr-12 text-justify text-base lg:text-xl font-semibold text-para leading-relaxed tracking-wide"> 
                Jiri Women's Hostel was inaugurated on 26th May 2022 by Dr. Vinod Kumar Jain, Vice Chancellor of Tezpur University. <br>This hostel is named after tributary 'Jiri' of the Barak river of Assam and originates from Boro Ninglo area of Dima Hasao district.<br> Recently built, Jiri Women's Hostel has excellent infrastructure and accomodates 200+ boarders. 
            </p>
            </div>
             
            
            
        </div>
    </div> 

    <!-- facilities component -->
    <div class="bg-burgundy w-full mt-20 lg:mt-48 mb-78 py-4">
        <NuxtLink to="/facilities" class="nav-link"><div class=" py-4 text-red-500 lg:text-4xl text-2xl tracking-wide font-bold text-center text-light_pink ">Facitilies</div> </NuxtLink> <!-- clicking will lead to facilities page -->
        
        <div class="container flex py-6 mt-8 mb-20 justify-around item-center space-x-6">
            <div class="transform transition duration-500 hover:scale-105">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="112.000000pt" height="112.000000pt"  viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
            <path d="M2385 4473 c-371 -44 -665 -154 -947 -356 -309 -221 -558 -552 -687 -912 -295 -828 13 -1755 744 -2240 628 -416 1412 -434 2060 -47 418 249 741 685 864 1165 47 181 56 256 56 477 0 266 -29 438 -111 658 -286 769 -1010 1270 -1821 1261 -70 -1 -141 -4 -158 -6z m499 -223 c896 -177 1501 -1015 1381 -1914 -55 -411 -262 -801 -564 -1062 l-86 -74 -3 152 c-2 84 0 177 3 205 6 48 8 52 25 43 30 -16 85 -11 113 10 30 24 131 179 182 279 49 98 110 284 132 401
25 134 24 400 -1 535 -117 630 -591 1111 -1219 1237 -145 29 -412 31 -554 5
-180 -33 -414 -121 -446 -168 -26 -36 -22 -95 7 -124 37 -37 71 -41 130 -15
90 40 238 88 326 107 118 25 382 25 500 0 277 -59 488 -173 686 -371 158 -159
258 -316 324 -514 51 -155 65 -241 65 -422 0 -181 -14 -267 -66 -424 -30 -89
-125 -286 -138 -286 -4 0 -25 18 -46 41 -74 76 -135 87 -186 33 -24 -25 -24
-28 -32 -317 -4 -161 -11 -350 -15 -422 l-7 -130 -95 -47 c-383 -190 -869
-220 -1289 -79 -274 92 -556 280 -742 494 -268 309 -412 673 -426 1077 -15
448 130 853 431 1204 47 54 223 216 236 216 6 0 2 -286 -6 -357 -5 -48 -7 -52
-24 -43 -30 16 -85 12 -112 -9 -63 -50 -196 -287 -252 -450 -64 -183 -80 -281
-80 -491 -1 -154 3 -204 22 -297 84 -416 322 -769 672 -996 169 -109 341 -179
543 -219 150 -30 404 -32 552 -4 185 34 435 129 468 177 54 76 -25 183 -110
151 -16 -6 -64 -26 -108 -46 -171 -75 -385 -113 -581 -103 -247 13 -474 90
-684 230 -96 64 -283 251 -347 347 -226 338 -289 738 -178 1125 25 89 138 335
153 335 4 0 26 -18 47 -41 74 -76 135 -87 186 -33 24 25 24 29 32 302 4 152
11 342 15 422 l7 145 95 47 c121 59 280 112 417 137 155 29 160 29 358 26 133
-2 208 -9 289 -25z"> </path>
<path d="M2693 3708 c-28 -7 -76 -67 -340 -416 -169 -224 -356 -471 -415 -550
-95 -125 -108 -147 -108 -182 0 -27 7 -48 24 -67 l24 -28 211 -3 211 -3 0
-494 0 -495 28 -30 c28 -32 64 -40 110 -26 14 5 138 161 329 414 169 224 356
471 415 550 95 125 108 147 108 182 0 27 -7 48 -24 67 l-24 28 -211 3 -211 3
0 494 0 493 -25 30 c-28 34 -56 42 -102 30z m-40 -1215 c27 -28 29 -28 182
-33 l155 -5 -243 -321 -242 -322 -5 394 -5 394 -28 27 c-27 28 -29 28 -182 33
l-155 5 243 321 242 322 5 -394 5 -394 28 -27z"> </path></g></svg>
        <p class=" container mt-8 justify-center text-center font-semibold text-light_pink uppercase"> 24x7 power supply</p>
        </div>

    <div class="mt-2 transform transition duration-500 hover:scale-105">
        <svg class="fill-white" version="1.0" xmlns="http://www.w3.org/2000/svg" width="112.000000pt" height="112.000000pt"  viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
        <path d="M1268 3755 c-14 -14 -28 -39 -32 -56 -3 -18 -6 -206 -6 -419 l0 -388 -117 -4 c-95 -4 -129 -9 -171 -28 -64 -28 -116 -85 -131 -145 -7 -30 -11 -245 -11 -665 0 -662 1 -674 48 -699 12 -6 39 -11 60 -11 33 0 45 6 66 31 25 30 26 34 26 175 l0 144 1560 0 1560 0 0 -144 c0 -141 1 -145 26 -175 21 -25 33 -31
66 -31 52 0 77 14 94 55 19 46 21 1249 2 1323 -14 57 -84 131 -143 151 -22 7
-93 15 -157 18 l-118 5 0 388 c0 213 -3 401 -6 419 -4 17 -18 42 -32 56 l-25
25 -1267 0 -1267 0 -25 -25z m2422 -520 l0 -345 -110 0 -110 0 0 170 c0 245
20 233 -393 228 l-259 -3 -29 -33 -29 -32 0 -165 0 -165 -200 0 -200 0 0 155
c0 251 10 245 -362 245 -368 0 -358 7 -358 -242 l0 -158 -105 0 -105 0 0 345
0 345 1130 0 1130 0 0 -345z m-1532 -247 l3 -98 -161 0 -160 0 0 100 0 101
158 -3 157 -3 3 -97z m1112 2 l0 -100 -155 0 -155 0 0 100 0 100 155 0 155 0
0 -100z m836 -314 c12 -5 14 -63 14 -384 0 -281 -3 -381 -12 -390 -19 -19
-3081 -17 -3097 2 -8 9 -10 121 -9 392 l3 378 23 6 c30 7 3059 3 3078 -4z"></path></g></svg>
    <p class=" container mt-6 justify-center text-center font-semibold text-light_pink uppercase"> well furnished rooms </p>
    </div>


    <div class="transform transition duration-500 hover:scale-105"> 
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="112.000000pt" height="112.000000pt"  viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
        <path d="M3571 4277 c-21 -24 -22 -36 -66 -1043 -25 -560 -47 -1056 -51 -1101
l-6 -83 -1185 0 c-909 0 -1195 -3 -1227 -12 -53 -16 -118 -81 -134 -134 -15
-53 -17 -641 -1 -697 13 -49 63 -105 114 -128 34 -16 68 -19 243 -19 l202 0 0
-95 c0 -88 2 -98 25 -120 32 -33 78 -33 110 0 23 22 25 32 25 120 l0 95 1090
0 1090 0 0 -94 c0 -79 3 -97 21 -120 28 -35 80 -36 114 -1 23 22 25 32 25 120
l0 95 203 0 c174 0 208 3 242 19 51 23 101 79 114 128 16 56 14 644 -1 697
-16 53 -81 118 -134 134 -23 6 -94 12 -158 12 -64 0 -116 1 -116 3 -1 1 -34
496 -74 1100 -73 1083 -74 1099 -97 1123 -22 24 -26 24 -184 24 -156 0 -162
-1 -184 -23z m329 -1496 c0 -21 3 -66 6 -100 l7 -61 -137 0 -136 0 0 84 c0 46
3 91 6 100 5 13 26 16 130 16 l124 0 0 -39z m24 -378 c3 -21 8 -87 11 -148 3
-60 8 -131 11 -157 l6 -48 -171 0 -171 0 5 103 c3 56 8 144 11 195 l6 92 143
0 143 0 6 -37z m428 -530 c17 -15 18 -38 18 -319 0 -262 -2 -305 -16 -318 -14
-14 -177 -16 -1644 -16 -1467 0 -1630 2 -1644 16 -14 13 -16 56 -16 316 0 266
2 304 17 320 15 17 80 18 1641 18 1498 0 1627 -1 1644 -17z"></path>
        <path d="M1368 1714 c-38 -20 -61 -68 -54 -109 16 -86 117 -117 180 -55 52 51 32 146 -36 169 -40 14 -57 13 -90 -5z"></path>
        <path d="M2022 1474 c-13 -9 -27 -27 -32 -40 -11 -29 5 -81 30 -94 20 -11 917 -14 945 -4 24 10 46 60 39 89 -3 14 -18 34 -31 45 -25 19 -42 20 -477 20 -398 0 -454 -2 -474 -16z"></path>
        <path d="M3223 1480 c-34 -14 -56 -54 -48 -90 12 -55 31 -60 220 -60 166 0 172 1 193 23 27 29 28 77 3 108 -19 23 -24 24 -183 26 -89 1 -173 -2 -185 -7z"></path>
        <path d="M3823 1480 c-34 -14 -56 -54 -48 -90 12 -55 31 -60 220 -60 166 0 172 1 193 23 27 29 28 77 3 108 -19 23 -24 24 -183 26 -89 1 -173 -2 -185 -7z"></path>
        <path d="M1230 3469 c-75 -13 -205 -53 -285 -89 -156 -70 -355 -228 -355 -282 0 -43 36 -78 79 -78 31 0 48 9 102 56 193 167 397 244 650 244 243 0 469 -85 647 -244 50 -44 70 -56 96 -56 49 0 80 29 80 75 0 33 -7 44 -53 87 -158 146 -351 241 -572 283 -89 16 -298 19 -389 4z"></path>
        <path d="M1322 3079 c-134 -17 -272 -79 -381 -169 -33 -27 -61 -60 -65 -75 -14 -57 50 -119 100 -96 13 5 49 31 79 56 111 90 223 128 370 127 144 -1 273 -50 380 -144 57 -50 105 -57 136 -19 32 39 25 88 -18 129 -104 98 -266 172 -416 192 -82 11 -98 11 -185 -1z"></path>
        <path d="M1305 2727 c-60 -20 -102 -44 -146 -84 -32 -29 -39 -42 -39 -73 0 -30 6 -43 26 -59 37 -29 64 -26 114 10 113 82 212 80 329 -6 43 -32 75 -32 106 0 39 38 34 80 -17 128 -66 62 -136 90 -243 94 -56 2 -105 -2 -130 -10z"></path>
        </g>
        </svg>
        <p class=" container mt-8 justify-center text-center font-semibold text-light_pink uppercase"> good wifi connection </p>
        </div>

        <div class="mt-6 transform transition duration-500 hover:scale-105"> 
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="76.000000pt" height="76.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
            <path d="M51 5106 c-51 -28 -50 -14 -50 -711 -1 -730 -1 -731 69 -873 49 -98
144 -199 238 -252 l62 -35 2 -1505 3 -1505 21 -46 c31 -66 78 -114 142 -146
47 -23 70 -28 132 -28 125 0 222 62 274 174 l21 46 3 1505 3 1505 62 35 c93
53 188 154 237 252 70 142 70 144 70 871 0 703 1 690 -55 715 -33 15 -57 15
-90 0 -55 -25 -55 -20 -55 -618 l0 -550 -90 0 -90 0 0 550 c0 404 -3 556 -12
575 -13 29 -55 55 -88 55 -33 0 -75 -26 -88 -55 -9 -19 -12 -171 -12 -575 l0
-550 -90 0 -90 0 0 550 c0 404 -3 556 -12 575 -21 47 -82 67 -133 43 -55 -25
-55 -20 -55 -618 l0 -550 -90 0 -90 0 0 550 c0 404 -3 556 -12 575 -22 48 -88
68 -137 41z m1076 -1400 c-17 -107 -132 -242 -243 -285 -32 -13 -71 -36 -86
-52 l-28 -29 0 -1531 c0 -1664 3 -1571 -55 -1597 -33 -15 -57 -15 -90 0 -58
26 -55 -67 -55 1597 l0 1529 -26 31 c-14 17 -31 31 -38 31 -31 0 -136 64 -183
111 -53 53 -101 138 -110 195 l-6 34 463 0 463 0 -6 -34z"></path>
            <path d="M4934 5081 c-91 -61 -220 -177 -306 -275 -211 -238 -356 -536 -420
-858 -22 -110 -22 -135 -26 -889 -3 -857 -4 -846 59 -971 23 -45 66 -98 155
-188 l124 -126 2 -775 c3 -763 3 -775 24 -820 31 -66 78 -114 142 -146 47 -23
70 -28 132 -28 125 0 222 62 274 174 l21 46 3 2405 c2 1799 -1 2412 -9 2433
-13 31 -55 57 -92 57 -14 0 -51 -18 -83 -39z m-25 -4824 c-13 -30 -55 -57 -89
-57 -29 0 -76 26 -86 47 -5 10 -11 377 -14 815 l-5 797 -141 143 c-92 94 -149
160 -165 193 l-24 50 -3 734 c-2 608 0 755 13 850 44 343 197 658 435 900 l85
86 3 -2265 c2 -1690 -1 -2272 -9 -2293z"></path>
            <path d="M2340 4459 c-184 -21 -411 -85 -575 -163 -100 -47 -125 -72 -125
-124 0 -46 46 -92 91 -92 18 0 91 24 163 54 290 121 586 161 889 121 363 -48
674 -195 946 -450 94 -87 105 -95 142 -95 58 0 99 42 99 101 0 39 -5 47 -75
115 -311 302 -704 486 -1137 533 -112 13 -308 12 -418 0z"></path>
            <path d="M2415 3974 c-219 -24 -462 -114 -654 -242 -112 -74 -299 -261 -373
-372 -108 -163 -179 -330 -220 -519 -31 -137 -30 -423 0 -562 124 -567 547
-989 1115 -1111 146 -31 408 -31 553 0 146 31 244 66 375 134 381 195 648 549
741 981 29 136 31 398 4 532 -89 450 -368 818 -771 1018 -190 94 -364 136
-585 142 -80 2 -163 1 -185 -1z m326 -209 c391 -59 731 -306 912 -665 50 -100
95 -242 112 -359 100 -663 -360 -1286 -1025 -1387 -527 -79 -1049 199 -1280
681 -273 571 -64 1249 485 1577 232 139 522 195 796 153z"></path>
            <path d="M2514 3470 c-33 -13 -54 -50 -54 -93 0 -100 140 -134 186 -46 45 88
-40 177 -132 139z"></path>
            <path d="M2146 3379 c-266 -134 -454 -398 -495 -694 -18 -130 -16 -152 23
-191 38 -38 70 -43 115 -19 35 18 46 47 59 161 12 105 46 211 94 292 50 86
179 209 273 261 44 25 88 51 97 59 26 22 33 74 14 110 -32 61 -89 68 -180 21z"></path>
            <path d="M3948 1532 c-9 -4 -70 -63 -134 -131 -259 -271 -519 -423 -867 -506
-416 -99 -876 -30 -1242 185 -56 33 -102 53 -122 53 -69 2 -119 -70 -93 -134
16 -37 71 -74 215 -146 806 -404 1785 -189 2348 515 17 22 27 47 27 68 0 62
-79 119 -132 96z"></path>
            <path d="M1231 1366 c-13 -7 -30 -24 -37 -37 -56 -101 76 -201 157 -120 81 81
-19 213 -120 157z"></path>
            </g>
            </svg>
            <p class=" container mt-16 justify-center text-center font-semibold text-light_pink uppercase"> clean mess food </p>
        </div>

</div>





        
    </div>    

    <!-- Gallery in homepage -->

    <div class="xl:mt-32 mb-24 md:mt-20 ">
        <div class="container text-center text-burgundy xl:text-4xl md:text-2xl tracking-wide font-bold"> <NuxtLink to="/gallery" class="nav-link"> Gallery</NuxtLink> </div> 
        <div class="container flex flex-wrap px-12 py-6 grid  grid-flow-row-dense grid-cols-3 grid-rows-3 gap-6">

        
        
        
        <div>
          <img class="object-cover" src="/images/building2.jpeg" >
        </div>
        <div>
         <img class="object-cover" src="/images/building2.jpeg" >
        </div>
        <div>
         <img class="object-cover" src="/images/building2.jpeg" >
        </div>
        
        <div>
         <img class="object-cover" src="/images/9to16.jpg" >
        
        </div>
        <div class="h-1/2">
         <img src="/images/16to9.jpg" >
        </div>
        
        <div>
         <img class="grid col-span-2 gap-6 object-cover " src="/images/4to3.jpg" >
        </div>
       
        <div>
         <img src="/images/building2.jpeg" >
        </div>
         
        <div>
         <img src="/images/building2.jpeg" >
        </div>
       
          <div class="">
         <img src="/images/jobhimain.jpeg" >
        </div>
        <div>
         <img src="/images/building.jpeg" >
        </div>
        <div>
         <img src="/images/building2.jpeg" >
        </div>
        <div>
         <img src="images/building2.jpeg" >
        </div>
    </div> 
    </div>
    </div>

      
</template>




<style scoped>

   
    












   
    


.title_card{
    position:absolute;
    padding:250px ;
    top:20px;
    left:0;
    right:0;
    bottom:10px;
    color:azure;
    font-size: 50px;
    text-align:center;
}    

     .parent {
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 8px;
grid-row-gap: 8px;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 2 / 1 / 3 / 3; }
.div4 { grid-area: 1 / 3 / 2 / 4; }
.div5 { grid-area: 2 / 3 / 3 / 4; }
.div6 { grid-area: 3 / 2 / 4 / 4; }
.div7 { grid-area: 3 / 1 / 4 / 2; }
.div8 { grid-area: 4 / 1 / 6 / 2; }
.div9 { grid-area: 4 / 2 / 5 / 3; }
.div10 { grid-area: 4 / 3 / 5 / 4; }
.div11 { grid-area: 5 / 2 / 6 / 4; }   


</style>