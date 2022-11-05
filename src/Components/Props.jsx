const Props = ({ logo, button1, button2, button3, button4, Access }) => {
  return (
    <div className="Header" style={{ display: "flex" }}>
      <div className="logo">{logo}</div>
      <div className="text">{button1}</div>
      <div className="text">{button2}</div>
      <div className="text">{button3}</div>
      <div className="text">{button4}</div>
      <div className="text">{Access}</div>
    </div>
  );
};
export default Props;
