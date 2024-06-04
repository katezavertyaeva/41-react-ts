import "./styles.css";
import Button from "components/Button/Button";
import { FeedbackProps } from "./types";

function Feedback({ like, dislike, addLike, addDislike, resetResults }: FeedbackProps) {
  // const [like, setLike] = useState<number>(0);
  // const [dislike, setDislike] = useState<number>(0);

  // const addLike = (): void => {
  //   setLike((prevValue) => prevValue + 1);
  // };

  // const addDislike = (): void => {
  //   setDislike((prevValue) => prevValue + 1);
  // };

  // const resetResults = (): void => {
  //   setLike(0);
  //   setDislike(0);
  // };

  return (
    <div className="feedback-container">
      <div className="feedback-result-container">
        <div className="like-dislike-container">
          <div className="result">{like}</div>
          <Button name="Like" onClick={addLike} />
        </div>
        <div className="like-dislike-container">
          <Button name="Dislike" onClick={addDislike} />
          <div className="result">{dislike}</div>
        </div>
      </div>
      <Button name="Reset results" onClick={resetResults} />
    </div>
  );
}

export default Feedback;
