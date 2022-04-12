import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  return {
    props: {},
  };
};

const Main = () => {
  return (
    <p>Note: If user login, redirect to dashboard, else, redirect to login.</p>
  );
};

export default Main;
