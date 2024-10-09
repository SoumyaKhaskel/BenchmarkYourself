
const MainPage = ({ onGame }) => {
    
    return (
            <div className="MainPage">
                <div className="title">TYPING TEST</div>
                {/* <div className="author">
                    Coding & <br />
                    Design by Lun Dev
                </div> */}
                <button onClick={ () => onGame('playing') } className='btnPlay'>START</button>
            </div>
    );
}
export default MainPage;