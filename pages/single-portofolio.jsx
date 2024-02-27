import Head from "next/head";
import Link from "next/link";
import Layout from "../layout";

// components
import ItemNavigation from "../../components/UI/ItemNavigation";
import ShareSocialMedia from "../../components/UI/ShareSocialMedia";
import StickySocialMedia from "../../components/UI/StickySocialMedia";
import Input from "../../components/UI/Input";

// icons
import { FaQuoteRight } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

const SinglePortofolioPage = () => {
  return (
    <>
      <Head>
        <link rel="website icon" href="/imgs/logo-little.png" type="image/icon" />
      </Head>
      <Layout>
        <main className="singlePortofolio--main">
          <ItemNavigation />
          <div className="singlePortofolio--content">
            <div className="singlePortofolio--about">
              <div className="spacer-40"></div>
              <div className="singlePortofolio--item--context">
                <button className="singlePortofolio--item--name">تکنولوژی</button>
                <Link className="singlePortofolio--item--title" href="#">
                  گالری های زیبا
                </Link>
                <div className="singlePortofolio--item--info">
                  <span className="singlePortofolio--item--date">12 / 03 / 1402 توسط</span>
                  <Link href="#">شرکت رایا</Link>
                  <span>در</span>
                  <Link href="#">تکنولوژی</Link>
                </div>
              </div>
              <ul className="singlePortofolio--portofolios--panel">
                <li className="singlePortofolio--portofolios--panel--item">
                  <Link href="#" className="singlePortofolio--portofolios--panel--link">
                    <img
                      src="/imgs/woman-07.jpg"
                      alt=""
                      className="singlePortofolio--portofolios--panel--img"
                    />
                  </Link>
                </li>
                <li className="singlePortofolio--portofolios--panel--item">
                  <Link href="#" className="singlePortofolio--portofolios--panel--link">
                    <img
                      src="/imgs/man-06.jpg"
                      alt=""
                      className="singlePortofolio--portofolios--panel--img"
                    />
                  </Link>
                </li>
                <li className="singlePortofolio--portofolios--panel--item">
                  <Link href="#" className="singlePortofolio--portofolios--panel--link">
                    <img
                      src="/imgs/woman-04.jpg"
                      alt=""
                      className="singlePortofolio--portofolios--panel--img"
                    />
                  </Link>
                </li>
                <li className="singlePortofolio--portofolios--panel--item">
                  <Link href="#" className="singlePortofolio--portofolios--panel--link">
                    <img
                      src="/imgs/man-07.jpg"
                      alt=""
                      className="singlePortofolio--portofolios--panel--img"
                    />
                  </Link>
                </li>
                <li className="singlePortofolio--portofolios--panel--item">
                  <Link href="#" className="singlePortofolio--portofolios--panel--link">
                    <img
                      src="/imgs/woman-06.jpg"
                      alt=""
                      className="singlePortofolio--portofolios--panel--img"
                    />
                  </Link>
                </li>
                <li className="singlePortofolio--portofolios--panel--item">
                  <Link href="#" className="singlePortofolio--portofolios--panel--link">
                    <img
                      src="/imgs/man-02.jpg"
                      alt=""
                      className="singlePortofolio--portofolios--panel--img"
                    />
                  </Link>
                </li>
              </ul>
              <div className="spacer-40"></div>
              <div className="singlePortofolio--tasks">
                <p className="singlePortofolio--tasks--one">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                  گرافیک است.
                </p>
                <p className="singlePortofolio--tasks--two">
                  کارفرما:
                  <Link className="singlePortofolio--tasks--link" href="#">
                    سعید حاتمی
                  </Link>
                </p>
              </div>
              <section className="singlePortofolio--description--box">
                <h3 className="singlePortofolio--description--title">توضیحات</h3>
                <p className="singlePortofolio--description">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                  گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                  برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                  جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                  ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می
                  توان امید داشت که تمام است.
                </p>
              </section>
              <div className="spacer-40"></div>
              <section className="singlePortofolio--quote--box">
                <h3 className="singlePortofolio--quote--title">نقل قول</h3>
                <blockquote className="singlePortofolio--quote">
                  <FaQuoteRight className="singlePortofolio--quote--icon" />
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                  گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                  برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                  جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                  ای علی
                </blockquote>
              </section>
              <div className="spacer-40"></div>
              <div className="singlePortofolio--comments">
                <span className="singlePortofolio--comments--title" badge="0">
                  نظرات
                </span>
                <div className="singlePortofolio--comments--tags">
                  <Link className="singlePortofolio--comments--tag" href="#">
                    گالری
                  </Link>
                  <Link className="singlePortofolio--comments--tag" href="#">
                    پست
                  </Link>
                  <Link className="singlePortofolio--comments--tag" href="#">
                    نمونه
                  </Link>
                  <Link className="singlePortofolio--comments--tag" href="#">
                    طراحی
                  </Link>
                </div>
              </div>
              <div className="singlePortofolio--like--share">
                <button className="singlePortofolio--like--btn">
                  <MdFavoriteBorder />
                  <span className="singlePortofolio--like--count">14</span>
                </button>
                <ShareSocialMedia />
              </div>
              <div className="spacer-100"></div>
              <div className="singlePortofolio--respond">
                <h3 className="singlePortofolio--respond--title">
                  نظرتان را با ما به اشتراک بگذارید
                </h3>
                <form className="singlePortofolio--respond--form">
                  <div className="singlePortofolio--respond--inputs--container">
                    <Input
                      label="نام و نام خانوادگی"
                      type="text"
                      className="singlePortofolio--respond--name"
                    />
                    <Input label="ایمیل" type="text" className="singlePortofolio--respond--email" />
                    <Input
                      label="وبسایت"
                      type="text"
                      className="singlePortofolio--respond--website"
                    />
                    <Input
                      textarea
                      label="پیام"
                      type="text"
                      className="singlePortofolio--respond--comment"
                    />
                  </div>
                  <button className="singlePortofolio--respond--btn" type="button">
                    ارسال
                  </button>
                </form>
              </div>
            </div>
            <StickySocialMedia />
          </div>
          <div className="spacer-100"></div>
        </main>
      </Layout>
    </>
  );
};

export default SinglePortofolioPage;
