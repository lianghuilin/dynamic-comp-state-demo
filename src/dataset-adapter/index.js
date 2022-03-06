import realtimeCity from './realtime-city.vue';
import threshold from './threshold.vue';

export default function (ds) {
  return {
    realtimeCity,
    threshold,
  }[ds];
}
