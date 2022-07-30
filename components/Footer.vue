<template>
<div class="bg-burgundy">
  <div class="container justify-center items-center ml-14 py-14 text-center text-white md:text-left ">
    <!-- DOWNLOAD LINKS -->
    <div class="ml-4 grid grid-1 md:grid-cols-4 lg:grid-cols-4 gap-x-16">
      <div>
        <h6 class="uppercase font-semibold mb-4 text-white md:justify-start">
          DOWNLOAD LINKS
        </h6>
        <p class="mb-2"> >
          <a href="#!" class="hover:text-red-200"> Boarder Certificate</a>
        </p>
        <p class="mb-2"> >
          <a :href="`${$config.baseURL}docu/Hostel_Accomodation_Form.pdf`" class="hover:text-red-200">Hostel Accomodation</a>
        </p>
        <p class="mb-2"> >
          <a :href="`${$config.baseURL}docu/hostel_withdrawal_form.pdf`" class=" hover:text-red-200">Hostel Withdrawal Form</a>
        </p>
        <p class="mb-2"> >
          <a :href="`${$config.baseURL}docu/Hostel_Rule_11_July_2015.pdf`" class="hover:text-red-200">Hostel Rules</a>
        </p>
        <p class="mb-2"> >
          <a href="" class="hover:text-red-200">Late Entry Form</a>
        </p>
      </div>

    <!-- UNIVERSITY LINKS -->
      <div class="ml-6">
        <h6 class="uppercase font-semibold mb-4 text-white flex justify-center md:justify-start">
          UNIVERSITY LINKS
        </h6>
         <p class="mb-2"> >
          <a href="http://agnee.tezu.ernet.in/src/login.php" class="hover:text-red-200">Student Webmail</a>
        </p>
        <p class="mb-2"> >
          <a :href="`${$config.baseURL}/Bus timings.pdf`" class="hover:text-red-200">Bus Timings</a>
        </p>
        <p class="mb-2"> >
          <a href="http://www.tezu.ernet.in/Library/" class="hover:text-red-200">Central Library</a>
        </p>
        <p class="mb-2"> >
          <a href="http://www.tezu.ernet.in/contact/utility.html" class="hover:text-red-200">Campus Utility Services</a>
        </p>
        <p class="mb-2"> >
          <a href="http://www.tezu.ernet.in/students_affairs/" class="hover:text-red-200">Student Affairs</a>
        </p>
        <p class="mb-2"> >
          <a :href="`${$config.baseURL}docu/HOLIDAY_LIST_2022.pdf`" class="hover:text-red-200">Holiday List</a>
        </p>
       </div>

       <!-- CONTACT -->
      <div class="ml-6 text-white">
        <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
          Contact Us
        </h6>
        
          <h6 class="font-semibold mb-2">Jiri Women's Hostel</h6>
          <h6>Tezpur University,<br>Napaam, Tezpur, Assam <br>PIN - 784028</h6>
        
        <p class="flex items-center justify-center md:justify-start mt-4 mb-4">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
            class="mr-2.5" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
            </path>
          </svg>
          <a href="mailto:poonam@tezu.ernet.in" class="hover:underline">insertemail@gmail.com</a>
        </p>
        <p class="flex items-center justify-center md:justify-start mb-4 hover:underline">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone"
            class="w-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
            </path>
          </svg>
           +91 1234506789
        </p>
      </div>

    <!-- FOLLOW US -->
        <div class="ml-16 justify-center items-center">
          <h6 class="uppercase font-semibold mb-4 text-white md:justify-start"> FOLLOW US</h6>
            <div class="flex pt-4 space-x-2">
          <a href="https://www.instagram.com/"><svg version="1.0" class="w-8 mr-4 transform transition duration-500 hover:scale-110" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none"><path d="M2315 5109 c-800 -83 -1501 -517 -1927 -1196 -494 -786 -516 -1810 -56 -2613 243 -423 598 -770 1017 -994 357 -191 751 -296 1121 -300 l135 -1 3 993 2 992 -275 0 -275 0 0 320 0 320 273 2 272 3 6 335 c5 304 7 342 27 415 77 276 260 460 537 537 72 20 104 22 315 22 129 1 279 -3 333 -8 l97 -8 0 -288 0 -288 -237 -4 c-237 -3 -238 -3 -290 -30 -110 -58 -123 -105 -123 -435 l0 -253 315 0 c173 0 315 -3 315 -7 0 -5 -18 -145 -40 -312 -22 -168 -40 -308 -40 -313 0 -4 -124 -8 -275 -8 l-275 0 0 -945 c0 -520 2 -945 4 -945 19 0 257 90 347 131 301 138 534 304 774 550 209 215 338 400 471 674 118 244 199 516 236 795 16 124 16 509 0 625 -84 591 -328 1089 -733 1494 -397 396 -891 644 -1454 727 -123 18 -478 26 -600 13z"></path></g></svg> </a>
          <a href="https://www.instagram.com/">
            <svg version="1.0" class="w-8 mr-8 transform transition duration-500 hover:scale-110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#ffffff" stroke="none">
<path d="M1609 5110 c-330 -14 -556 -56 -747 -138 -179 -77 -285 -148 -417
-279 -178 -177 -289 -376 -359 -643 -62 -236 -76 -507 -76 -1490 0 -967 13
-1241 71 -1477 144 -587 574 -961 1207 -1048 181 -24 561 -35 1287 -35 675 0
1064 10 1239 31 358 42 638 166 859 378 249 240 381 527 429 936 19 160 19
2294 0 2445 -39 306 -130 558 -274 751 -71 96 -223 241 -318 306 -215 145
-474 225 -815 254 -161 13 -1813 20 -2086 9z m2163 -483 c285 -42 445 -113
599 -266 100 -100 155 -188 204 -324 82 -230 90 -352 90 -1482 0 -651 -4 -964
-13 -1069 -29 -347 -98 -534 -260 -707 -169 -180 -380 -269 -707 -299 -177
-17 -1640 -25 -1977 -11 -152 6 -311 16 -354 22 -189 26 -372 93 -486 176 -71
53 -185 177 -227 247 -84 140 -134 337 -151 587 -30 454 -20 2012 14 2270 36
267 119 447 276 599 172 167 398 248 748 270 76 4 587 7 1137 5 853 -2 1016
-4 1107 -18z"></path>
<path d="M3802 4200 c-113 -57 -167 -145 -167 -275 0 -94 22 -150 86 -214 64
-63 120 -86 214 -86 67 0 89 4 137 28 101 50 158 137 166 253 7 103 -16 163
-87 235 -66 66 -124 89 -221 89 -54 0 -78 -6 -128 -30z"></path>
<path d="M2336 3854 c-263 -48 -496 -171 -692 -368 -260 -259 -385 -562 -385
-926 0 -220 41 -401 132 -583 280 -556 896 -841 1495 -692 236 59 418 161 595
332 159 154 266 322 333 523 48 145 66 257 66 420 0 162 -18 275 -65 417 -64
192 -157 344 -302 494 -198 204 -445 336 -717 384 -111 19 -352 19 -460 -1z
m396 -458 c458 -88 762 -538 674 -999 -54 -279 -259 -527 -521 -628 -128 -50
-202 -62 -350 -56 -105 4 -146 10 -215 32 -303 96 -524 341 -586 649 -24 119
-15 304 21 416 94 298 345 525 644 585 89 18 243 18 333 1z"></path>
</g>
</svg></a>

            </div>
        </div>
  </div>
  </div>
  
  <!-- COPYRIGHT -->
  <div class="border-t border-light_pink bg-burgundy text-white py-2">
    <span class="container flex justify-center align-center py-2">© Copyright 2022: Jiri Women's Hostel, Tezpur University, Napaam, Tezpur-784028</span>
  </div> 

</div>

</template>


<style scoped>

a:hover{
    cursor: pointer;
    text-decoration: underline;
}
</style>