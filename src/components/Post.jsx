import { Component } from "react";

import ComponentStyles from "../../styles/Component.module.css";
import Styles from "../../styles/Post.module.css";
import { AltonaSans, Barlow, Hubbali, Nunito, OpenSans, Poppins, SourceSansPro } from "../font";

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
  }

  render() {
    const { type, style } = this.props;
    switch (type) {
      case 1:
        return <>
          <div className={[Styles.postContainer, ComponentStyles.blink].join(" ")} style={style}>
            <div className={[ComponentStyles.row, ComponentStyles.center, ComponentStyles.spaceBet, ComponentStyles.alignStart].join(" ")}>
              <div >
                <div className={Styles.container} style={{ padding: "15px 40px" }}></div>
                <div>
                  <span className={[Styles.container, Styles.tag].join(" ")} style={{ padding: "8px 20px" }}></span>
                  <span className={[Styles.container, Styles.tag].join(" ")} style={{ padding: "8px 20px" }}></span>
                  <span className={[Styles.container, Styles.tag].join(" ")} style={{ padding: "8px 20px" }}></span>
                  <span className={[Styles.container, Styles.tag].join(" ")} style={{ padding: "8px 20px" }}></span>
                  <span className={[Styles.container, Styles.tag].join(" ")} style={{ padding: "8px 20px" }}></span>
                </div>
              </div>
              <div className={Styles.container} style={{ padding: "8px 20px" }}></div>
            </div>
            <div className={Styles.container} style={{ padding: "20px 5px" }}></div>
          </div>
        </>;
      case 2:
        const { post } = this.props;

        let time, now = new Date(), posted = new Date(post.posted);
        if ((now.getTime() - (1000 * 60 * 60 * 24)) < posted.getTime()) {
          time = `${posted.getHours()}:${posted.getMinutes()}`
          console.log(time)
        } else if (now.getFullYear() === posted.getFullYear()) {
          time = `${this.months[posted.getMonth()]} ${posted.getDate()}`;
        } else {
          time = `${posted.getFullYear()} ${this.months[posted.getMonth()]}`;
        }

        return <>
          <div className={[Styles.postContainer, ComponentStyles.fadeIn].join(" ")} style={style}>
            <div className={[ComponentStyles.row, ComponentStyles.center, ComponentStyles.spaceBet, ComponentStyles.alignStart].join(" ")}>
              <div >
                <div className={[Styles.postTitle, Nunito.className].join(" ")}> {post.title}</div>
                <div>
                  {post.tags.map(elm => <span key={Math.random()} className={[Styles.container, SourceSansPro.className, Styles.tag].join(" ")} >{elm}</span>)}
                </div>
              </div>
              <div className={[Styles.postDate, Styles.date, OpenSans.className].join(" ")} >{time}</div>
            </div>
            <div className={[Styles.content, Poppins.className].join(" ")} >
              <div style={{ marginBottom: "15px", padding: "10px" }}>{post.content}</div>
              <div>
                {
                  <img src={post.link} alt={"Post"} style={{ width: "100%" }} />
                }
              </div>
            </div>
          </div>
        </>;
    }
  }
}