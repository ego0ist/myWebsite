import HomeBanner
 from "../components/HomeBanner";
export default function ChooseLayout({ children }) {
    return (
      <div className="w-full">
        <HomeBanner />
        {children}
      </div>
    );
  }
  