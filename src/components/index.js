import bar from './bar.vue';
import card from './card.vue';

export default function (kind) {
  return {
    bar,
    card,
  }[kind];
}
