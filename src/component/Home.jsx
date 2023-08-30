
const Home = () => {
    return (
      <div className="flex justify-center h-screen">
        <div className="bg-cover bg-center h-screen w-full bg-gradient-to-r contrast-50 " style={{backgroundImage: `url('bgimg.jpeg')`,}}>
            <div className="font-extrabold text-blue-700 leading-snug text-5xl w-2/4 h-2/3 mx-auto text-center translate-y-2/4">
             <h1>HI, Welcome To Our WebSite</h1>
             <h6>Here our Services, You can Deposit or cashout with benefit</h6>
            </div>
        </div>
      </div>
    );
};

export default Home;