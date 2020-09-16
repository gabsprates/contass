import React, { useEffect } from "react";
import ReactDOM from "react-dom";

type HelloProps = {
  name: string;
  lastName?: string;
};

// function component
const Hello = ({ name, lastName = "Consultoria" }: HelloProps) => {
  useEffect(() => {
    window.addEventListener("scroll", console.log);

    return () => {
      window.removeEventListener("scroll", console.log);
    };
  });

  return (
    <h1>
      Olá, {name}
      {lastName}!
    </h1>
  );
};

// class component
class ClassHello extends React.Component<HelloProps> {
  constructor(props: HelloProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.addEventListener("scroll", console.log);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", console.log);
  }

  render() {
    return (
      <h1>
        Olá, {this.props.name}
        {this.props.lastName}!
      </h1>
    );
  }
}

ReactDOM.render(
  <>
    <Hello name="Contass" lastName="Consultoria" />
    <Hello name="Igor" />
    <Hello name="Os menino" />

    <ClassHello name="Rodrigo" />
  </>,
  document.getElementById("root")
);
