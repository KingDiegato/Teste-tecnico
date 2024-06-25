import NFRobot from "../../../public/NFRobot.jpg";
import * as NotFoundStyles from "./styles";

export const NotFound = () => {
  return (
    <NotFoundStyles.Container>
      <img src={NFRobot} alt="NFRobot image for not found page" />
    </NotFoundStyles.Container>
  );
};
