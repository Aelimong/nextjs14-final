import { Suspense } from "react";
import styles from "../../styles/Home.module.scss";
import BookCategoryList from "../../components/book-category-list";

export const metadata = {
  title: "Home",
};

export default async function Home() {
  return (
    <>
      <div className={styles.home_container}>
        <div className={styles.container_inner}>
          <h2 className={styles.list_title}>
            The Aelimong Books Best Seller Explorer
          </h2>
          <Suspense fallback={<h6>Loading...</h6>}>
            <BookCategoryList />
          </Suspense>
        </div>
      </div>
    </>
  );
}
