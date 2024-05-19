import PropTypes from "prop-types";
import style from "./SocialCard.module.css";

function SocialCard(props) {
  let socialData = props.socialData;

  return (
    <div>
      <a href={socialData.url}>
        <div className={style.social}>
          <img
            className={style.icon}
            src={socialData.icon}
            alt={socialData.name}
          />
          {socialData.name}
        </div>
      </a>
    </div>
  );
}

SocialCard.propTypes = {
  socialData: PropTypes.object.isRequired,
};
export default SocialCard;
