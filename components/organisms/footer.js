import React from 'react'
import style from "../../styles/pages/listStyle.module.scss";

export default function footer() {
  return (
    <div>
      <footer className={`container-fluid ${style.footer}`}>
        <div className={`container ${style.container}`}>
          <div className={`row`}>
            <div className={`col-12  ${style.foot}`}>
              <img src="/images/icon-white.webp" alt="icon-footer" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
            </div>
          </div>
          <div className={`row ${style.copyright}`}>
            <div className={`col-4 p-0 mt-3`}>
              <p>2020 Pewworld. All right reserved</p>
            </div>
            <div className="col-2 offset-6 mt-3">
              <p className="d-inline">Telepon</p>
              <p className="d-inline ms-5">Email</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
