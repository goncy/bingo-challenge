import Vue from "vue";
import Component from "vue-class-component";
import styled from "vue-styled-components";

const Props = {
  number: Number,
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: Number,
    default: 128,
  },
};

const Container = styled("div", Props)`
  font-family: "Passion One", cursive;
  text-stroke: 1px black;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.25s;
  will-change: opacity;
  opacity: 1;
  background: rgb(255, 212, 143);
  background: radial-gradient(
    circle,
    rgba(255, 212, 143, 1) 0%,
    rgba(136, 115, 71, 1) 100%
  );

  ${({size, disabled}) => `
    width: ${size}px;
    height: ${size}px;
    font-size: ${size / 2}px;
    opacity: ${disabled ? 0.3 : 1};
  `};
`;

@Component({
  props: Props,
})
export default class Ball extends Vue {
  render() {
    return (
      <Container
        size={this.size}
        disabled={this.disabled}
        data-test={`disabled=${this.disabled}`}
      >
        {this.number}
      </Container>
    );
  }
}
