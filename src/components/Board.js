import Vue from "vue";
import Component from "vue-class-component";
import styled from "vue-styled-components";
import * as R from "ramda";

import Ball from "./Ball";

const Container = styled.div`
  display: grid;
  pointer-events: none;
  grid-template-columns: repeat(10, 10%);
  background: rgb(0, 82, 14);
  background: radial-gradient(
    circle,
    rgba(0, 82, 14, 1) 0%,
    rgba(27, 113, 15, 1) 100%
  );

  .cell {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

@Component({
  props: {
    active: Array,
    list: Array,
  },
})
export default class Board extends Vue {
  render() {
    return (
      <Container>
        {this.list.map(index => (
          <div key={index} class="cell">
            <Ball
              number={index}
              disabled={!R.contains(index, this.active)}
              size={64}
            />
          </div>
        ))}
      </Container>
    );
  }
}
