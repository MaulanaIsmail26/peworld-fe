/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import style from "../../styles/pages/listStyle.module.scss";
import Navbar from "@/components/organisms/navbar";
import CardJobList from "@/components/molecules/cardJobList";
import Footer from "@/components/organisms/footer";
import axios from "axios";

export default function list(props) {
  const {
    jobList: {
      data: { rows, count },
    },
  } = props;

  const [data, setData] = React.useState(rows);
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(Math.ceil(count / 3));
  const [sortIsOn, setSortIsOn] = React.useState(false);
  // const [keyword, setKeyword] = React.useState("");
  // const [sort, setSort] = React.useState("");

  const getDataByPage = (_page) => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/user/list?limit=3&page=${_page}&order=ASC`
      )
      .then(({ data }) => {
        setData(data?.data?.rows);
      });
  };

  const getDataBySort = (_sort) => {
    setSortIsOn(true);
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/user/list?limit=15&sortBy=${_sort}`
      )
      .then(({ data }) => {
        setData(data?.data?.rows);
      });
  };

  return (
    <>
      <Head>
        <title>JobList | Hire Job app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.main}>
        <div className="container-fluid p-0">
          {/* NAVBAR sticky-top fixed-top */}
          <nav
            className={`container-fluid sticky-sm-top shadow-sm ${style.containerNavbar}`}
          >
            <Navbar />
          </nav>
          {/* END OF NAVBAR */}

          {/* TITLE BAR */}
          <section className={`container-fluid ${style.titleBar}`}>
            <div className={`container ${style.subtitle}`}>
              <h4>Top Jobs</h4>
            </div>
          </section>
          {/* END OF TITLE BAR */}

          {/* MAIN CONTENT */}
          <section className={`container-fluid ${style.mainPage}`}>
            {/* SEARCH & SORT BAR */}
            <div className={`container rounded-1 shadow-sm ${style.search}`}>
              <div className={`row`}>
                {/* FORM SEARCH */}
                <div
                  className={`col-9 border-end border-2 ${style.formSearch}`}
                >
                  <input
                    type="search"
                    className="form-control d-inline border-0"
                    id="exampleFormControlInput1"
                    placeholder="Search for any skill"
                    // onChange={(e) => {
                    //   setKeyword(e.target.value);
                    // }}
                    // onKeyDown={(e) => {
                    //   if (e.key === "Enter") {
                    //     data;
                    //   }
                    // }}
                  />
                </div>
                {/* BTN SORT */}
                <div className={`col-3 ${style.btnSort}`}>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic radio toggle button group"
                  >
                    <select
                      className="form-select border-0"
                      aria-label="Default select example"
                      onChange={(e) => {
                        if (e.target.value === "All") {
                          getDataByPage(page);
                          setSortIsOn(false);
                        } else {
                          getDataBySort(e.target.value);
                        }
                      }}
                    >
                      <option selected disabled>
                        Kategori
                      </option>
                      {/* <option value="name_asc">Sortir berdasarkan nama</option> */}
                      <option value="All">All</option>
                      <option value="skills">Sortir berdasarkan Skill</option>
                      <option value="domicile">
                        Sortir berdasarkan Lokasi
                      </option>
                      <option value="job">Sortir berdasarkan job</option>
                      {/* <option value="release_desc">
                        Sortir berdasarkan fulltime
                      </option> */}
                    </select>
                    <button type="button" className="btn btn-primary rounded-1">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* END OF SEARCH & SORT BAR */}

            {/* LIST WORKER */}
            {data?.map((item, key) => (
              <React.Fragment key={key}>
                <CardJobList
                  image={item?.["user.photo_profile"]}
                  name={item?.[`user.fullname`]}
                  job={item?.job}
                  location={item?.domicile}
                  skills={item?.skills}
                />
              </React.Fragment>
            ))}

            {/* END OF LIST WORKER */}

            {/* PAGINATION */}
            <div
              className={`container d-flex justify-content-center ${style.pagination}`}
            >
              {!sortIsOn && (
                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    {[...new Array(total)].map((item, key) => {
                      let currentPage = ++key;
                      return (
                        <li
                          class={`page-item ${
                            page === currentPage ? "active" : ""
                          }`}
                          key={currentPage}
                          onClick={() => {
                            getDataByPage(currentPage);
                            setPage(currentPage);
                          }}
                        >
                          <a class="page-link">{currentPage}</a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              )}
            </div>
            {/* END OF PAGINATION */}
          </section>
          {/* END OF MAIN CONTENT */}

          {/* FOOTER */}
          <Footer />
          {/* END OF FOOTER */}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const jobList = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/user/list?limit=3&page=1&order=ASC&sortBy=id`
  );

  const convertData = jobList.data;

  return {
    props: {
      jobList: convertData,
    }, // will be passed to the page component as props
  };
}

// export async function getServerSideProps() {
//   const jobList = await axios.get(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/user/list`
//   );
//   const convertData = jobList.data;

//   // const token = getCookie("token", { req, res });

//   // console.log(token);

//   return {
//     props: {
//       jobList: convertData,
//     }, // will be passed to the page component as props
//   };
// }

// export async function getStaticProps() {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/user/list`
//   );
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// }
