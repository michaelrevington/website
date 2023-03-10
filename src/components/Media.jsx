import { Component } from "react";
import Styles from "../../styles/Gallery.module.css";
import ProjectStyles from "../../styles/Project.module.css";
import ComponentStyles from "../../styles/Component.module.css";
import {
  Cabin,
  Catamaran,
  Hubbali,
  MaterialIcons,
  Montserrat,
  Nunito,
  Oxygen,
  Raleway,
  Roboto,
  Rubik,
} from "../font";
import { months } from "../util";

export default class Media extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: -1,
      shouldFocus: true,
    };

    this.swipeEnd = this.swipeEnd.bind(this);
  }

  swipeEnd(e) {
    const { x } = this.state,
      { setActive, swipe, id, len } = this.props;

    if (e.touches && e.touches.length > 0) {
      e.pageX = e.touches[0].pageX;
    } else if (e.changedTouches && e.changedTouches.length > 0) {
      e.pageX = e.changedTouches[0].pageX;
    }

    if (x > 0) {
      if (x === e.pageX) {
        if (e.target.classList.contains(Styles.loading))
          setActive(id, e.target);
        else setActive(id, e.target.parentNode.parentNode);
      } else if (Math.abs(x - e.pageX) >= e.target.clientWidth / 2) {
        if (id < len - 1 && x > e.pageX) {
          if (e.target.classList.contains(Styles.loading))
            setActive(id + 1, e.target);
          else setActive(id + 1, e.target.parentNode.parentNode);
        } else if (id > 0 && x < e.pageX) {
          if (e.target.classList.contains(Styles.loading))
            setActive(id - 1, e.target);
          else setActive(id - 1, e.target.parentNode.parentNode);
        }
      }
      this.setState({ x: -1 });
      swipe(0);
    }
  }

  swipeMove(e) {
    const { id, active, swipe } = this.props,
      { x } = this.state;
    if (id === active && x >= 0) {
      swipe(
        e.touches && e.touches.length > 0 ? e.touches[0].pageX - x : e.pageX - x
      );
    }
  }

  render() {
    const { className, style, post, active, swipe, id, scroll, rearrange } =
        this.props,
      posted = new Date(post.uploaded),
      activeElement = id === active,
      { x } = this.state;

    return (
      <div
        onLoad={(e) => {
          scroll(e.target.parentNode.parentNode.parentNode.children[0]);
        }}
        onMouseDown={(e) => {
          this.setState({ x: e.pageX });
        }}
        onTouchStart={(e) => {
          this.setState({ x: e.touches[0].pageX });
        }}
        onMouseMove={(e) => {
          this.swipeMove(e);
        }}
        onTouchMove={(e) => {
          this.swipeMove(e);
        }}
        onMouseOut={this.swipeEnd}
        onMouseUp={this.swipeEnd}
        onTouchEnd={this.swipeEnd}
        onTouchCancel={this.swipeEnd}
        className={[
          Styles.media,
          ComponentStyles.center,
          ComponentStyles.relative,
          Styles.loading,
          ProjectStyles.loading,
          className,
        ].join(" ")}
        style={{
          scale: activeElement ? "1" : "0.8",
          filter: activeElement ? "none" : "blur(4px)",
          ...style,
        }}
      >
        <div
          className={[
            Styles.mediaContentContainer,
            ComponentStyles.center,
          ].join(" ")}
          onLoad={(e) => {
            e.target.parentNode.parentNode.classList.remove(
              ProjectStyles.loading,
              Styles.loading
            );

            const containers =
              e.target.parentNode.parentNode.parentNode.children;
            for (let i = 0; i < containers.length; i++) {
              const children = containers[i].children[0].children;

              children[1].style.width = `${children[0].clientWidth}px`;
              children[1].style.height = `${children[0].clientHeight}px`;

              e.target.parentNode.parentNode.style.opacity = "1";
            }
          }}
        >
          {post.type === "Image" && (
            <img
              draggable={false}
              className={[Styles.mediaContent].join(" ")}
              src={post.link}
              alt="Image of post"
            />
          )}
          {post.type && (
            <div
              className={[Styles.metaData, ComponentStyles.absolute].join(" ")}
            >
              <div
                className={[Styles.mediaData, ComponentStyles.absolute].join(
                  " "
                )}
              >
                <div className={[Styles.caption, Roboto.className].join(" ")}>
                  {post.caption}
                </div>
                <div
                  className={[ComponentStyles.center, Nunito.className].join(
                    " "
                  )}
                  style={{ width: "fit-content", fontSize: "0.8rem" }}
                >
                  <span className={MaterialIcons.className}>location_on</span>
                  {post.location}
                </div>
              </div>
              <div
                className={[ComponentStyles.absolute, Cabin.className].join(
                  " "
                )}
                style={{
                  top: "5px",
                  right: "5px",
                  color: "wheat",
                  fontSize: "0.7rem",
                }}
              >{`${posted.getFullYear()} ${
                months[posted.getMonth()]
              } ${posted.getDate()}`}</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
