import { useRouter } from "next/router";

const DetailNewsPage = () => {
    const router = useRouter();
    router.query.newsId;

    return <h1>The DetailNews Page</h1>;
};

export default DetailNewsPage;
