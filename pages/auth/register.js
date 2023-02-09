/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import style from "@/styles/pages/optionStyle.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { setCookie, getCookie } from "cookies-next";

export default function Option() {
  const router = useRouter();

  React.useEffect(() => {
    let checkIsLogin = getCookie("token") && getCookie("profile");

    if (checkIsLogin) {
      router.replace("/jobs/list");
    }
  }, []);

  return (
    <>
      <Head>
        <title> Profile | Hire Job app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${style.main}`}>
        <div className="container-fluid p-0 clearfix">
          {/* PROFILE */}
          <section
            className={`container-fluid d-flex align-items-center ${style.option}`}
          >
            <div
              className={`container p-0 pb-5 shadow rounded-4 ${style.cardOption}`}
            >
              <div className={`rounded-4 ${style.img}`}>
                <div className="p-5">
                  <h1>
                    Temukan developer berbakat &<br />
                    terbaik di berbagai bidang keahlian
                  </h1>
                </div>
              </div>
              <div className={`row ${style.button}`}>
                <div className="col-12">
                  <h3>Register sebagai:</h3>
                  <div>
                    <Link href={"/auth/register/worker"}>
                      <button
                        type="button"
                        className={`btn btn-outline-primary ${style.jobSeekers}`}
                      >
                        Job Seekers
                      </button>
                    </Link>
                    <Link href={"/auth/register/recruiter"}>
                      <button
                        type="button"
                        className={`btn btn-primary ${style.recruiter}`}
                      >
                        Recruiter
                      </button>
                    </Link>
                  </div>
                  <p className="text-center mt-4">
                    Anda sudah punya akun?{" "}
                    <Link
                      href={"/auth/login/recruiter"}
                      className="text-warning"
                    >
                      Masuk disini
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            {/* END OF PROFILE */}
          </section>
        </div>
      </main>
    </>
  );
}
