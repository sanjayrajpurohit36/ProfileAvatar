import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import EditIcon from "./edit-icon.svg";
import "./index.scss";
const AvatarImageWrapper = styled.div`
  position: relative;
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  background-color: red;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${(props) => props.imageUrl});
  cursor: pointer;
  ${(props) => props.style}
`;

const AvatarImageWrapperOverlay = styled.div`
  position: relative;
  background: linear-gradient(transparent, transparent),
    linear-gradient(#00000099, #00000099);
  height: 100%;
  width: 100%;
  border-radius: 100%;
  background-color: red;
  background-size: 100% 30%, 100% 30%;
  background-repeat: no-repeat;
  background-position: top, bottom;
  opacity: ${(props) => (props.opacity ? props.opacity : 0)};
  transition: all 0.3s;
  ${(props) => props.style}
  &:hover {
    opacity: 1;
  }
  > img {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 1rem;
    transform: translate(-50%, -50%);
  }
`;

function Avatar(props) {
  const {
    imageUrl,
    avatarKeyIndex,
    onClick,
    onProfileEditClick,
    showOverlayOnHover = false,
    showOverlay = false,
    wrapperStyles = {},
    overlayStyles = {},
    className = "",
    avatarImageWrapperClassName = "",
    children,
    editIconPath = "",
  } = props;

  return (
    <div className={`avatar-wrapper ${className}`}>
      <AvatarImageWrapper
        className={`${avatarImageWrapperClassName}`}
        style={wrapperStyles}
        imageUrl={imageUrl}
        onClick={() => onClick(avatarKeyIndex)}
      >
        {(showOverlayOnHover || showOverlay) && (
          <AvatarImageWrapperOverlay
            style={overlayStyles}
            opacity={showOverlayOnHover ? "0" : "1"}
            onClick={() => {
              onProfileEditClick();
            }}
          >
            <img src={editIconPath ? editIconPath : EditIcon} alt="edit Icon" />
          </AvatarImageWrapperOverlay>
        )}
      </AvatarImageWrapper>
      {React.cloneElement(children)}
    </div>
  );
}

Avatar.defaultProps = {
  imageUrl: "",
  avatarKeyIndex: 1,
  showOverlayOnHover: false,
  showOverlay: false,
  onClick: () => {},
  onProfileEditClick: () => {},
  wrapperStyles: {},
  overlayStyles: {},
  children: <> </>,
  editIconPath: "",
};

Avatar.propTypes = {
  /**
   * Image of userProfile
   */
  imageUrl: PropTypes.string,
  /**
   * Index of the userProfile (1,2,3..)
   */
  avatarKeyIndex: PropTypes.number,
  /**
   * Boolean to decide whether to show overlay on hover or not
   */
  showOverlayOnHover: PropTypes.bool,
  /**
   * Boolean to decide whether to show fixed overlay or not
   */
  showOverlay: PropTypes.bool,
  /**
   * Function for returning index value profile when clicked
   */
  onProfileClick: PropTypes.func,
  /**
   * Function for updaing profile Image
   */
  onProfileEditClick: PropTypes.func,
  /**
   * Additional Elements to be rendered
   */
  children: PropTypes.node,
  /**
   * Prop for path of edit image
   */
  editIconPath: PropTypes.string,
};

export default Avatar;
