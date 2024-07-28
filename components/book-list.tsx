import styles from "../styles/BookList.module.scss";
import Link from "next/link";

export const API_URL_BOOKS =
  "https://books-api.nomadcoders.workers.dev/list?name=";

async function getBooks(id: string) {
  const response = await fetch(`${API_URL_BOOKS}${id}`);
  const json = await response.json();
  return json;
}

export default async function BookList({ id }: { id: string }) {
  const list = await getBooks(id);

  return (
    <>
      <div className={styles.book_card_container}>
        {list.results.books.map((item) => {
          return (
            <>
              <div className={styles.card_box}>
                <div className={styles.card_img_wrap}>
                  <img src={item.book_image} alt={item.title} />
                </div>
                <div className={styles.book_card_info}>
                  <div className={styles.text_area}>
                    <h6>{item.title}</h6>
                    <p>{item.author}</p>
                  </div>
                  <Link href={item.amazon_product_url} target="_blank">
                    Buy Now!
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
