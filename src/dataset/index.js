import realtimeCityDS from './realtimeCity.vue';
import thresholdDS from './threshold.vue';

export default function (ds) {
  return {
    realtimeCityDS,
    thresholdDS,
  }[ds];
}
