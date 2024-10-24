import { lazy, Suspense } from "react";
const Home = lazy(() => import("../components/Home"));
import MainLayout from "../layout/MainLayout";
import Loading from "../components/Loading";
//
const HomePage = () => {
  //
  return (
    <MainLayout>
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    </MainLayout>
  );
};

export default HomePage;
