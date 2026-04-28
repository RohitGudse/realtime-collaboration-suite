const WordCount = ({ text }) => {
  const count = text.split(" ").length;
  return <div>Words: {count}</div>;
};
export default WordCount;