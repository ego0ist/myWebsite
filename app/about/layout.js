export default function AboutLayout({ children }) {
    return (
      <div className="min-h-screen bg-base-100">
        {/* You could add about-specific layout elements here */}
        <main>{children}</main>
      </div>
    );
  }