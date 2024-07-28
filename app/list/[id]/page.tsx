import { Suspense } from "react";
import styles from "../../../styles/Detail.module.scss";
import BookList from "../../../components/book-list";

export const API_URL = "https://books-api.nomadcoders.workers.dev/list?name=";

async function getBooks(id: string) {
  const response = await fetch(`${API_URL}${id}`);
  const json = await response.json();
  return json;
}

export async function generateMetadata({ params: { id } }: IParams) {
  const category = await getBooks(id);
  return {
    title: category.results.list_name,
  };
}

interface IParams {
  params: { id: string };
}

export default async function Detail({ params: { id } }: IParams) {
  const category = await getBooks(id);

  return (
    <>
      <div className={styles.detail_container}>
        <div className={styles.container_inner}>
          <h1 className={styles.list_name}>{category.results.list_name}</h1>
          <Suspense fallback={<h6>Loading...</h6>}>
            <BookList id={id} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
