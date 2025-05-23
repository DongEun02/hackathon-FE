import Header from "../components/Header";
import Footer from "../components/Footer";
import TitleNav from "../components/TitleNav";
import Calendar from "../components/Calendar";

const Calender = () => {
  return (
    <>
      <Header />
      <TitleNav />
      <main>
        <Calendar />
      </main>
      <Footer />
    </>
  );
};

export default Calender;
