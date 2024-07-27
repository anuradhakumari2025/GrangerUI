const WelcomeMsg = ({ onGetPost }) => {
  return (
    <>
      <center className="wlcmMsg">
        <h2>There is no any post</h2>
        <button className="btn btn-primary" type="button" onClick={onGetPost}>
          Get Post from Server
        </button>
      </center>
    </>
  );
};

export default WelcomeMsg;
