import styles from "../styles/BookCategoryList.module.scss";
import Link from "next/link";

export const API_URL = "https://books-api.nomadcoders.workers.dev/lists";

async function getBookCategory() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function BookCategoryList() {
  const list = await getBookCategory();

  return (
    <>
      <ul className={styles.book_category_list}>
        {list.results.map((item) => {
          return (
            <>
              <li className={styles.book_category_item}>
                <Link prefetch href={`/list/${item.list_name_encoded}`}>
                  {item.display_name} &rarr;
                </Link>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
