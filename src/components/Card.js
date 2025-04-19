import React from "react";
import styles from "./Card.module.css";
import { MdLocationPin } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { BsBuildings } from "react-icons/bs";

const Card = (props) => {
	const date = new Date(props.user.created_at);
	const Github_URL = process.env.REACT_APP_Github_URL;
  const checkInfo = (object, errorText = "Not Available", style = "") => {
    if (object) {
      return <p className={`available ${style && styles.bio}`}>{object}</p>;
    } else {
      return (
        <p className={`not-available ${style && styles.bio}`}>{errorText}</p>
      );
    }
  };

  return (
    <div className={styles.card}>
      <img src={props.user.avatar_url} className={styles.avatar} alt="" />
      <div className={styles.name}>
        <h2>
          <a className="available" href={`${Github_URL}/${props.user.login}`}>
            {props.user.name}
          </a>
        </h2>
        <p>
          Joined
          {` ${date.getDate()} ${date.toLocaleString("en-us", {
            month: "short",
          })} ${date.getFullYear()}`}
        </p>
        <h3>@{props.user.login}</h3>
      </div>
      {checkInfo(props.user.bio, "This user hasn't added a bio yet", "bio")}
      <table className={styles["profile-info"]}>
        <tbody>
          <tr className={styles["table-header"]}>
            <th>Repositories</th>
            <th>Followers</th>
            <th>Following</th>
          </tr>
          <tr>
            <th>{props.user.public_repos}</th>
            <th>{props.user.followers}</th>
            <th>{props.user.following}</th>
          </tr>
        </tbody>
      </table>
      <div className={styles.contact}>
        <ul>
          <li>
          <MdLocationPin className={styles.commonIcon} />

            {checkInfo(props.user.location)}
          </li>
          <li>
          <FaLink className={styles.commonIcon} />
            {props.user.blog && (
              <a href={props.user.blog} className="available">
                {props.user.blog}
              </a>
            )}
            {!props.user.blog && checkInfo(props.user.blog)}
          </li>
           <li>
            <BsTwitterX className={styles.commonIcon} />
            {checkInfo(props.user.social)}
          </li>
          <li>
          <BsBuildings className={styles.commonIcon} />
            {checkInfo(props.user.company)}
          </li> 
        </ul>
      </div>
    </div>
  );
};

export default Card;
