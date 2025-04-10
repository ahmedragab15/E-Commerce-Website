interface IProps {
  isAnimating: boolean;
}

const PageTransition = ({ isAnimating }: IProps) => {
 
  return (
    <div>
      <div className={`transition-overlay ${isAnimating ? "active" : ""} bg-orange-400 fixed top-0 left-0 right-0 h-screen z-50`}/>
    </div>
  );
};

export default PageTransition;
