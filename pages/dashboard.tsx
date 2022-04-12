import Head from "next/head";
import Layout from "../components/Layout";

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>NcertSolutions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <p>Dashboard</p>
      </Layout>
    </>
  );
};

export default Dashboard;
