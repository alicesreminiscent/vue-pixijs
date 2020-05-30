import { h, ref, defineComponent } from "../../../../src/index";
// 飞机
export default defineComponent({
  setup(props, ctx) {
    // 初始位置
    // 舞台高度为 500
    const x = ref(200);
    const y = ref(400);

    const speed = 20;
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowDown":
          y.value += speed;
          break;
        case "ArrowUp":
          y.value -= speed;
          break;

        case "ArrowLeft":
          x.value -= speed;
          break;

        case "ArrowRight":
          x.value += speed;
          break;

        case "Space":
          ctx.emit("attack", {
            x:x.value + 50,
            y,
          });
          break;
        default:
          break;
      }
    });

    return {
      x,
      y,
    };
  },
  render(ctx) {
    return h("Sprite", {
      x: ctx.x,
      y: ctx.y,
      texture: "../../resource/assets/plane.png",
    });
  },
});
