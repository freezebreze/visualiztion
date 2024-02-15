<template>
  <div
    v-if="data"
    class="bg-[url('./assets/imgs/bg.png')] bg-cover bg-center h-screen text-white p-5 flex overflow-hidden"
  >
    <div class="flex flex-col flex-1 p-3 mr-5 bg-opacity-50 bg-slate-800">
      <HorizontalBar :data="data.regionData" class="pb-4 h-1/3"></HorizontalBar>
      <RadarBar :data="data.riskData" class="pb-4 h-1/3"></RadarBar>
      <Relation :data="data.relationData" class="h-1/3"></Relation>
    </div>
    <div class="flex flex-col w-1/2 mr-5">
      <TotalData
        :data="data.totalData"
        class="p-3 bg-opacity-50 bg-slate-800"
      ></TotalData>
      <MapChart
        :data="data.mapData"
        class="flex-1 p-3 mt-4 bg-opacity-50 bg-slate-800"
      ></MapChart>
    </div>
    <div class="flex flex-col flex-1 p-3 bg-opacity-50 bg-slate-800">
      <VerticalBar :data="data.serverData" class="pb-4 h-1/3"></VerticalBar>
      <RingBar :data="data.abnormalData" class="pb-4 h-1/3"></RingBar>
      <WordCloud :data="data.wordCloudData" class="h-1/3"></WordCloud>
    </div>
  </div>
</template>

<script setup>
import HorizontalBar from "./components/HorizontalBar.vue";
import MapChart from "./components/MapChart.vue";
import RadarBar from "./components/RadarBar.vue";
import Relation from "./components/Relation.vue";
import RingBar from "./components/RingBar.vue";
import TotalData from "./components/TotalData.vue";
import VerticalBar from "./components/VerticalBar.vue";
import WordCloud from "./components/WordCloud.vue";
import { getVisualization } from "./api/visualization";
const data = ref(null);
const loadData = async () => {
  data.value = await getVisualization();
  console.log(data.value);
};
loadData();

setInterval(() => {
  loadData();
}, 3000);
</script>

<style lang="scss" scoped></style>
