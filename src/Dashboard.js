import Vue from "vue";
import Component from "vue-class-component";
import styled from "vue-styled-components";
import * as R from "ramda";

import shuffle from "./utils/shuffle";

import Board from "./components/Board";
import Ball from "./components/Ball";

const NUMBERS = R.range(1, 91);

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 200px;
`;

const Play = styled.div`
  font-size: 64px;
  cursor: pointer;
`;

const Last = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(171, 171, 171, 1) 100%
  );
`;

@Component
export default class Dashboard extends Vue {
  active = [];
  inactive = shuffle(R.clone(NUMBERS));
  playing = false;

  get last() {
    return R.last(this.active);
  }

  onKeyDown(e) {
    if (e.code === "ArrowRight" && this.inactive.length) {
      this.next();
    } else if (e.code === "Space") {
      this.active = [];
      this.inactive = shuffle(R.clone(NUMBERS));
      this.playing = false;
    }
  }

  next() {
    this.active.push(this.inactive.pop());
  }

  start() {
    this.playing = true;
    this.next();
  }

  render() {
    return (
      <Container
        data-test="container"
        autofocus
        tabIndex={0}
        nativeOnKeydown={this.onKeyDown}
      >
        <Board data-test="board" list={NUMBERS} active={this.active} />
        <Last>
          {this.playing && <Ball number={this.last} />}
          {!this.playing && (
            <Play data-test="play" onClick={this.start}>
              ▶️
            </Play>
          )}
        </Last>
      </Container>
    );
  }
}
