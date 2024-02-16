import Head from "next/head";
import Link from "next/link";
import Layout from "../layout";
import { useEffect } from "react";
import { portofolioItemData } from "../../UI-data/UI-data";

// framer motion
import { stagger, useAnimate, useInView } from "framer-motion";

// icons
import { PiDotsNineBold } from "react-icons/pi";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const PortofolioPage = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(".portofolio--list--item", { opacity: 1 }, { delay: stagger(0.2), duration: 0.5 });
    }
  }, [isInView]);

  return (
    <>
      <Head>
        <title>نمونه کار</title>
        <meta name="description" content="به سایت رایا خوش اومدید!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="website icon" href="/imgs/logo-little.png" type="image/icon" />
      </Head>
      <Layout>
        <main className="portofolio--main">
          <div className="filterBar">
            <div className="filterBar--options">
              <h4 className="filterBar--options--title">فیلتر بر اساس:</h4>
              <button className="filterBar--options--btn">
                <span>دسته بندی</span>
                <HiBars3 />
              </button>
              <button className="filterBar--options--btn">
                <span>برچسب‌ها</span>
                <HiBars3 />
              </button>
              <button className="filterBar--options--btn">
                <span>نویسنده‌ها</span>
                <HiBars3 />
              </button>
            </div>
            <Link className="filterBar--dots--btn" href="/portofolio" title="نمونه کارها">
              <PiDotsNineBold />
            </Link>
          </div>
          <ul className="filterList">
            <li className="filterList--item">
              <button className="filterList--item--btn filterList--item--btn--active">همه</button>
            </li>
            <li className="filterList--item">
              <button className="filterList--item--btn">سه بعدی</button>
            </li>
            <li className="filterList--item">
              <button className="filterList--item--btn">عکاسی</button>
            </li>
            <li className="filterList--item">
              <button className="filterList--item--btn">طراحی وب</button>
            </li>
            <li className="filterList--item">
              <button className="filterList--item--btn">طراحی تبلیغات</button>
            </li>
            <li className="filterList--item">
              <button className="filterList--item--btn">ادیت</button>
            </li>
          </ul>
          <ul className="portofolio--list" ref={scope}>
            {portofolioItemData.map((portofolioItem) => (
              <li className="portofolio--list--item" key={portofolioItem.id}>
                <div className="portofolio--list--item--img--container">
                  <img
                    src={portofolioItem.image}
                    alt={portofolioItem.imageTitle}
                    className="portofolio--list--item--img"
                  />
                  <div className="portofolio--list--item--img--context--container">
                    <div className="portofolio--list--item--img--context">
                      <Link
                        href="/portofolio"
                        className="portofolio--list--item--img--context--title"
                      >
                        {portofolioItem.imageTitle}
                      </Link>
                      <h5 className="portofolio--list--item--img--context--subtitle">
                        {portofolioItem.imageSubtitle}
                      </h5>
                    </div>
                  </div>
                </div>

                <button className="portofolio--list--item--btn">{portofolioItem.btnContext}</button>
                <Link className="portofolio--list--item--title" href="/portofolio">
                  {portofolioItem.title}
                </Link>
                <h5 className="portofolio--list--item--subtitle">{portofolioItem.subtitle}</h5>
                <p className="portofolio--list--item--description">{portofolioItem.description}</p>
                <div className="portofolio--list--item--share--section">
                  <Link className="portofolio--list--item--share--more" href="/portofolio">
                    بیشتر
                  </Link>
                  <div className="portofolio--list--item--share--socialMedia">
                    <button className="portofolio--list--item--share--btn">اشتراک گذاشتن</button>
                    <ul className="portofolio--list--item--share--socialList">
                      <li className="portofolio--list--item--share--socialLink">
                        <Link href="/portofolio">
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li className="portofolio--list--item--share--socialLink">
                        <Link href="/portofolio">
                          <FaLinkedinIn />
                        </Link>
                      </li>
                      <li className="portofolio--list--item--share--socialLink">
                        <Link href="/portofolio">
                          <FaPinterestP />
                        </Link>
                      </li>
                      <li className="portofolio--list--item--share--socialLink">
                        <Link href="/portofolio">
                          <FaXTwitter />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <ol className="portofolio--pagination">
            <li className="portofolio--pagination--item portofolio--pagination--number">
              <Link href="/portofolio">1</Link>
            </li>
            <li className="portofolio--pagination--item portofolio--pagination--number">
              <Link href="/portofolio">2</Link>
            </li>
            <li className="portofolio--pagination--item portofolio--pagination--text">
              <Link href="/portofolio">بعدی</Link>
              <HiOutlineArrowLongLeft />
            </li>
          </ol>
        </main>
      </Layout>
    </>
  );
};

export default PortofolioPage;
