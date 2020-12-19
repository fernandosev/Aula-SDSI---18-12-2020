import produce from "immer";

const INITIAL_STATE = {
  text: "HELLO",
  clicksRedux: 0,
  a: "test",
};

export default function test(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@test/SET_TEXT": {
        draft.text = "HELLO 2";
        break;
      }

      case "@test/CLICK": {
        draft.clicksRedux += 1;
        break;
      }
    }
  });
}
