import React from "react";
import { render } from "react-dom";

// extend で性質を受け継ぐ
class Human extends React.Component {
  constructor(props) {
    super(props);
    // 必ずオブジェクトを与えること
    this.state = { name: "Nakanishi" };
  }

  // render は必須
  // コンポーネントが呼び出された時に返す内容
  render() {
    return (
      <h2>
        // state は内部の値 // props は外部から受け取った値
        {this.state.name} {this.props.age}
      </h2>
    );
  }
}

render(<Human age="30" />, document.getElementById("root"));
