const buttonStyle = {
  margin: "1em",
  borderRadius: "5px",
  minHeight: "2em",
};

// eslint-disable-next-line react/prop-types
export default function Button({ onClick, children }) {
  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}
