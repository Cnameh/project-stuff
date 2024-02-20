import Link from "next/link";

// icons
import { BiSearchAlt } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const SearchBar = () => {
  return (
    <aside className="searchBar">
      <section className="searchBar--search--section">
        <h3 className="searchBar--search--title">جستجو</h3>
        <div className="searchBar--search--input">
          <input type="text" placeholder="دنبال چی میگردی؟" />
          <BiSearchAlt />
        </div>
      </section>
      <section className="searchBar--categories">
        <h3 className="searchBar--categories--title">دسته بندی</h3>
        <ul className="searchBar--categories--list">
          <li>
            <Link href="#">طراحی</Link>
          </li>
          <li>
            <Link href="#">همکاری</Link>
          </li>
          <li>
            <Link href="#">علم</Link>
          </li>
          <li>
            <Link href="#">تکنولوژی</Link>
          </li>
          <li>
            <Link href="#">شرکت</Link>
          </li>
        </ul>
      </section>
      <section className="searchBar--comments">
        <h3 className="searchBar--comments--title">نظرات اخیر</h3>
        <ul className="searchBar--comments--list">
          <li className="searchBar--comments--list--item">
            <p className="searchBar--comments--list--item--context">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که است.
            </p>
            <p className="searchBar--comments--list--item--context--author">امین روزبهی</p>
            <p className="searchBar--comments--list--item--context--date">29 / 2 / 1402</p>
          </li>
          <li className="searchBar--comments--list--item">
            <p className="searchBar--comments--list--item--context">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که است.
            </p>
            <p className="searchBar--comments--list--item--context--author">امین روزبهی</p>
            <p className="searchBar--comments--list--item--context--date">29 / 2 / 1402</p>
          </li>
        </ul>
      </section>
      <section className="searchBar--socialMedia">
        <h3 className="searchBar--socialMedia--title">شبکه‌های اجتماعی</h3>
        <ul className="searchBar--socialMedia--list">
          <a className="searchBar--socialMedia--list--link" href="#" target="_blank">
            <FaXTwitter />
            <span>Twitter</span>
          </a>
          <a className="searchBar--socialMedia--list--link" href="#" target="_blank">
            <FaYoutube />
            <span>YouTube</span>
          </a>
          <a className="searchBar--socialMedia--list--link" href="#" target="_blank">
            <FaFacebookF />
            <span>Facebook</span>
          </a>
        </ul>
      </section>
    </aside>
  );
};

export default SearchBar;
