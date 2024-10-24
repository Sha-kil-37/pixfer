const TextShort = (props) => {
  //
  const [text, maxLen] = props.data;
  if (text.length > maxLen) {
    return (
      <p className="font-primary text-dark font-medium text-lg">
        {text.substring(0, maxLen) + "..."}
      </p>
    );
  } else {
    return <p className="font-primary text-dark font-medium text-lg">{text}</p>;
  }
};

export default TextShort;
