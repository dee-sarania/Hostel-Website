<template>
<div class="py-64 px-64">
    <div class="container"> <h1 class="text-4xl text-burgundy justify-left font-bold">List of Boarders</h1><p class="mt-20 text-para text-xl font-semibold uppercase"> *This list was last updated on 24 June 2022</p></div> <!-- boarders list in pdf format -->
     <embed :href="`${$config.baseURL}docu/boarder.pdf#view=FitH`" class="w-full h-screen"/>
  
  <!--  <table>
        <thead>
            <th><td>Room No</td></th>
            <th><td>Boarder Name</td></th>
            <th><td>Enrollment No</td></th>
            <th><td>Department</td></th>
        </thead>
        <tbody>
            <tr v-for="(p,i) in content" :key="i">
                <td>{{p.room}}</td>
                <td>{{p.name}}</td>
                <td>{{p.enrollmentNo}}</td>
                <td>{{p.department}}</td>
            </tr>
        </tbody>
    </table>
</div> -->

<!-- boarders list in tabular format -->
<!--
<div class=" container flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full border text-center">
          <thead class="border-b">
            <tr class="divide-y-2 divide-txt">
              <th scope="col" class="text-m font-medium text-gray-900 px-6 py-4">
                ROOM NO
              </th>
              <th scope="col" class="text-m font-medium text-gray-900 px-6 py-4 ">
                BOARDER'S NAME
              </th>
              <th scope="col" class="text-m font-medium text-gray-900 px-6 py-4 ">
                ENROLLMENT NO.
              </th>
              <th scope="col" class="text-m font-medium text-gray-900 px-6 py-4 ">
                DEPARTMENT
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="divide-y-2 divide-txt" v-for="(p,i) in content" :key="i">
             <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">{{p.room}}</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                {{p.name}}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                {{p.enrollmentNo}}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {{p.department}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
-->

</div>

















</template>

<script>
import data from '@/data/boarderList.json';
export default {
    async fetch() {
        this.content = data
    },
}
</script>