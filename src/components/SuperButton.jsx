const SuperButton = ({ text, alertText }) => {
  return <button onClick={() => alert(alertText)}>{text}</button>;
};

export default SuperButton;
