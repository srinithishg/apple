import React from "react";

import axios from "axios";

class Products extends React.Component {
  state = {
    product: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
      this.setState({ product: res.data });
    });
  }

  render() {
    return (
      <ul>
        {this.state.product.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    );
  }
}

export default Products;
