/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../../styles/pages/listStyle.module.scss";
import Link from "next/link";

export default function cardJobList(props) {
  const { image, name, job, location, skills } = props;
  return (
    <div>
      <section className={`container mb-4 rounded-1 shadow-sm ${style.list}`}>
        <div className={`row d-flex align-items-center ${style.worker}`}>
          {/* PHOTO PROFILE */}
          <div className="col-1">
            <img
              className="rounded-circle border border-1"
              src={image}
              alt="photo-profile"
            />
          </div>
          {/* BRIEF DATA */}
          <div className="col-8 ms-4">
            <div className={`${style.data}`}>
              <h5>{name}</h5>
              <p className="mb-2 d-block">Job : {job}</p>
              <p>Address : {location}</p>
              {skills?.slice(0, 3).map((_item) => (
                <button
                  type="button"
                  className={`btn btn-warning btn-sm me-2 ${style.badge}`}
                  key={_item}
                  disabled
                >
                  {_item}
                </button>
              ))}
              {skills?.slice(3, skills?.length)?.length ? (
                <button
                  type="button"
                  className={`btn btn-warning btn-sm me-2 ${style.badge}`}
                  disabled
                >
                  {`+${skills?.slice(3, skills?.length)?.length}`}
                </button>
              ) : null}
            </div>
          </div>
          {/* BUTTON TO PROFILE */}
          <div className="col-2">
            <Link href={"/jobs/detail/profile"}>
              <button type="button" class={`btn btn-primary ${style.btn}`}>
                Lihat Profile
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
