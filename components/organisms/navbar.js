/* eslint-disable @next/next/no-img-element */
import React from 'react'
import style from "../../styles/pages/listStyle.module.scss";

export default function navbar() {
  return (
    <div>
        <nav className={`container ${style.navbar}`}>
          <nav className={`navbar bg-body-tertiary`}>
            <div className="container-fluid">
              <img
                className={style.icon}
                src="/images/icon.webp"
                alt="icon-navbar"
              />
              <form class="d-flex" role="search">
                <div className={style.imgRight}>
                  <img
                    className={style.bell}
                    src="/images/bell.webp"
                    alt="icon-bell"
                  />
                  <img
                    className={style.mail}
                    src="/images/mail.webp"
                    alt="icon-mail"
                  />
                  <img
                    className={`rounded-circle ${style.profile}`}
                    src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                    alt="profile"
                  />
                </div>
              </form>
            </div>
          </nav>
        </nav>
    </div>
  );
}
